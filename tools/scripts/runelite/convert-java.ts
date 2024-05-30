/* eslint-disable unicorn/switch-case-braces */
import { convertMethodSignature, convertType } from './utils';

const customTypes = new Set<string>();
let accumulatingMethodSignature = false;
let accumulatingMethodCurliesDepth = 0;
let methodSignature = '';
let constructorParts: string[] = [];
const fileEndings: string[] = [];
const annotations = {
	nullable: false,
	magicConstant: false,
	override: false,
};
const prefixKeywords = {
	private: false,
	static: false,
	readonly: false,
};

/** Transfer comments 1:1 */
const handleComments = (line: string) => {
	const result = {
		found: false,
		line,
	};

	const trimmedLine = line.trim();
	if (
		// Single Line Comment
		trimmedLine.startsWith('//') ||
		// Multi Line Comments
		trimmedLine.startsWith('/*') ||
		trimmedLine.startsWith('/**') ||
		trimmedLine.endsWith('*/') ||
		trimmedLine.startsWith('*')
	) {
		result.found = true;
	}
	return result;
};

/** Consume annotations as they don't exist in TypeScript */
const handleAnnotations = (line: string) => {
	const result = {
		found: false,
		line,
	};
	const trimmedLine = line.trim();

	if (trimmedLine.startsWith('@Nullable')) {
		result.found = true;
		result.line = '';
		annotations.nullable = true;
	} else if (trimmedLine.startsWith('@Override')) {
		result.found = true;
		result.line = '';
		annotations.override = true;
	} else if (trimmedLine.startsWith('@MagicConstant')) {
		result.found = true;
		result.line = '';
		annotations.magicConstant = true;
	} else if (trimmedLine.startsWith('@Deprecated')) {
		// TODO: Post-processing - fold these into the above comment if it exists
		result.found = true;
		result.line = '/** @deprecated */';
	} else if (trimmedLine.startsWith('@VisibleForDevtools')) {
		// TODO: What does this do to the code?
		result.found = true;
		result.line = '';
	} else if (trimmedLine.startsWith('@Nonnull')) {
		// TODO: What does this do to the code?
		result.found = true;
		result.line = '';
	} else if (trimmedLine.startsWith('@Interface')) {
		// TODO: What does this do to the code?
		result.found = true;
		result.line = '';
	} else if (trimmedLine.startsWith('@ApiStatus.Internal')) {
		// TODO: DO NOT EXPOSE THE NEXT METHOD
		result.found = true;
		result.line = '/** @deprecated */';
	} else if (trimmedLine.startsWith('@')) {
		console.log('Unhandled annotation:', trimmedLine);
		result.found = true;
		result.line = '';
	}
	return result;
};

const handleInlineAnnotations = (line: string) => {
	if (line.includes('@')) {
		// TODO: Diagnose why eslint thinks this is 'any'
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
		line = line.replaceAll(/@\w+\s*(\([^)]*\))?/g, '');
	}
	return line;
};

/** Handles Prefix Keywords [public/private] [static] [final] */
const handlePrefixKeywords = (line: string) => {
	let cleanLine = line.trim();
	if (cleanLine.startsWith('private ')) {
		cleanLine = cleanLine.replace('private ', '').trim();
		prefixKeywords.private = true;
	}
	if (cleanLine.startsWith('protected ')) {
		cleanLine = cleanLine.replace('protected ', '').trim();
		prefixKeywords.private = true;
	}
	if (cleanLine.startsWith('public ')) {
		cleanLine = cleanLine.replace('public ', '').trim();
	}

	if (cleanLine.startsWith('static ')) {
		cleanLine = cleanLine.replace('static ', '').trim();
		prefixKeywords.static = true;
	}

	if (cleanLine.startsWith('final ')) {
		cleanLine = cleanLine.replace('final ', '').trim();
		prefixKeywords.readonly = true;
	}

	/** REMOVE THESE */
	if (cleanLine.includes('sychronized ')) {
		cleanLine = cleanLine.replace('sychronized ', '').trim();
	}
	if (cleanLine.includes('final ')) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
		cleanLine = cleanLine.replaceAll('final ', '').trim();
	}

	/** Handles an edge case
	 *
	 * https://github.com/runelite/runelite/blob/870092a19f15debc3ae130612c2c712771b612e0/runelite-api/src/main/java/net/runelite/api/Perspective.java#L67-L74
	 */
	if (cleanLine.startsWith('static')) {
		cleanLine = '';
		prefixKeywords.readonly = true;
	}

	return cleanLine;
};

const handlePackages = (line: string) => {
	const result = {
		found: false,
		line,
	};
	if (line.startsWith('package ')) {
		result.found = true;
		result.line = line
			.replace('package ', 'declare namespace ')
			.replace(';', ' {');
		fileEndings.unshift('}');
	}
	return result;
};

const handleImports = (line: string) => {
	const result = {
		found: false,
		line,
	};
	if (line.startsWith('import ')) {
		result.found = true;

		if (line.includes('net.runelite.api.')) {
			// add the type to the custom types
			const split = line.split('net.runelite.api.');
			const type = split[1].split(';')[0];
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
			const folderPathType = type.replaceAll('.', '/') as string;
			customTypes.add(folderPathType);
		}

		result.line = '';
	} else if (line.includes('extends')) {
		result.found = true;
		// add types to customTypes but do not consume the line
		const firstSplit = line.split('extends');
		const extendPackages = firstSplit[1].split(', ');
		for (const extend of extendPackages) {
			/** Handle Jagex Type */
			if (extend.trim() === 'OAuthApi') {
				result.line = line.replace(
					'OAuthApi',
					'com.jagex.oldscape.pub.OAuthApi',
				);
			}
			customTypes.add(extend.trim());
		}
	}
	return result;
};
const processLine = (line: string) => {
	// Always handle comments
	// TODO: Remove handling comments while accumulatingMethodCurlies
	const commentInfo = handleComments(line);
	if (commentInfo.found) {
		return commentInfo.line;
	}

	const annotationInfo = handleAnnotations(line);
	if (annotationInfo.found && annotationInfo.line !== '') {
		return annotationInfo.line;
	}

	const packageInfo = handlePackages(line);
	if (packageInfo.found) {
		return packageInfo.line;
	}

	const importInfo = handleImports(line);
	if (importInfo.found) {
		line = importInfo.line;
	}

	line = handlePrefixKeywords(line);

	// Curly Handling
	if (line.trim().includes('{')) {
		accumulatingMethodCurliesDepth += 1;
	}
	if (accumulatingMethodCurliesDepth > 1) {
		if (line.includes('}')) {
			accumulatingMethodCurliesDepth -= 1;
		}
		return '';
	}

	// Start new export
	if (line.startsWith('class') || line.startsWith('interface')) {
		return `export ${line}`;
	}

	// Handle constructor
	// if (line.trim().startsWith('private final')) {
	// 	const regex = /(\w+)/g;
	// 	let match;

	// 	let javaType = '';
	// 	while (
	// 		(match = regex.exec(line.replace('private final', ''))) !== null
	// 	) {
	// 		if (javaType === '') {
	// 			javaType = match[1];
	// 			continue;
	// 		}
	// 		const variableName = match[1];
	// 		const tsType = convertType(javaType, false, customTypes); // Ensure this function is defined
	// 		constructorParts.push(`${variableName}:${tsType}`);
	// 	}
	// 	return '';
	// }

	// Remove Inline Annotations
	line = handleInlineAnnotations(line);

	// Handle variable
	if (line.trim().includes(' = ')) {
		// const regex = /(.*?) /g;
		// const match = regex.exec(line);
		// const javaType = match[1];
		// // const tsType = convertType(javaType, false, customTypes); // Ensure this function is defined
		// let builtLine = line.replace(javaType, '').trim();
		// if (prefixKeywords.readonly) {
		// 	builtLine = 'readonly ' + builtLine;
		// }
		// if (prefixKeywords.static) {
		// 	builtLine = 'static ' + builtLine;
		// }
		// annotations.nullable = false;
		// prefixKeywords.static = false;
		// prefixKeywords.private = false;
		// prefixKeywords.readonly = false;
		// return builtLine;
		return '';
	}

	// Handle Methods
	if (
		!accumulatingMethodSignature &&
		(line.includes('(') || methodSignature)
	) {
		accumulatingMethodSignature = true;
		methodSignature = '';
	}

	if (accumulatingMethodSignature) {
		methodSignature += line + ' ';
		// Check if this line ends the method signature
		if (line.trim().endsWith(');') || line.trim().endsWith(')')) {
			accumulatingMethodSignature = false;
			line = methodSignature;
			methodSignature = '';

			let convertedLine = convertMethodSignature(
				line,
				annotations.nullable,
				customTypes,
				prefixKeywords.static,
				prefixKeywords.private,
			);
			annotations.nullable = false;
			prefixKeywords.static = false;
			prefixKeywords.private = false;
			prefixKeywords.readonly = false;
			if (constructorParts.length > 0) {
				convertedLine =
					convertedLine +
					`\n/** FIXME: MISPLACED, move it up and remove this comment block */\nconstructor(${constructorParts.join(', ')});`;
				constructorParts = [];
			}
			// TODO: Should skip the {} after the method
			return convertedLine;
		} else {
			// Continue accumulating if the method signature isn't complete
			return '';
		}
	}

	return line;
};
export function convertJava(input: string, filePath: string): string {
	const depth = filePath.split('\\').length - 2;
	customTypes.add(`${'../'.repeat(depth)}java/index`);
	customTypes.add(`${'../'.repeat(depth)}jagex/index`);
	const lines = input.split('\n');
	// Process each line

	const convertedLines: string[] = [];
	for (const line of lines) {
		const newLine = processLine(line);
		convertedLines.push(newLine);
	}
	const referencePaths = [...customTypes]
		.filter((type) => {
			// remove TypeScript & Java & Jagex Types
			const typescriptTypes = ['string', 'number', 'Record<string, any>'];
			const javaTypes = [
				'EnumSet',
				'Dimension',
				'Canvas',
				'List',
				'Map',
				'Shape',
				'Point2D.Float',
				'Consumer',
				'GeneralPath',
				'PathIterator',
			];
			const jagexTypes = ['OAuthApi'];

			return ![...typescriptTypes, ...javaTypes, ...jagexTypes].includes(
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				type,
			);
		})
		.map((type) => `/// <reference path="${type}.d.ts" />`);
	return [...referencePaths, ...convertedLines, fileEndings]
		.filter((x) => x !== '')
		.join('\n');
}
