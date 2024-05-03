/* eslint-disable unicorn/switch-case-braces */
import { convertMethodSignature, convertType } from './utils';

const customTypes = new Set<string>();
let accumulatingMethodSignature = false;
let accumulatingMethodCurlies = false;
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
	}
	return result;
};
const processLine = (line: string) => {
	// Always handle comments
	const commentInfo = handleComments(line);
	if (commentInfo.found) {
		return commentInfo.line;
	}

	const annotationInfo = handleAnnotations(line);
	if (annotationInfo.found) {
		return annotationInfo.line;
	}

	const packageInfo = handlePackages(line);
	if (packageInfo.found) {
		return packageInfo.line;
	}

	const importInfo = handleImports(line);
	if (importInfo.found) {
		return importInfo.line;
	}

	line = handlePrefixKeywords(line);

	// Curly Handling
	// if (line.trim().startsWith('{')) {
	// 	accumulatingMethodCurlies = true;
	// 	accumulatingMethodCurliesDepth += 1;
	// }
	// if (accumulatingMethodCurlies && accumulatingMethodCurliesDepth > 1) {
	// 	if (line.includes('}')) {
	// 		accumulatingMethodCurliesDepth -= 1;
	// 	}
	// 	// if (accumulatingMethodCurliesDepth === 1) {
	// 	// 	accumulatingMethodCurlies = false;
	// 	// }
	// 	return '';
	// }

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
	// if (line.trim().includes(' = ')) {
	// 	const regex = /(.*?) /g;
	// 	const match = regex.exec(line);
	// 	const javaType = match[1];
	// 	// const tsType = convertType(javaType, false, customTypes); // Ensure this function is defined
	// 	let builtLine = line.replace(javaType, '').trim();
	// 	if (prefixKeywords.readonly) {
	// 		builtLine = 'readonly ' + builtLine;
	// 	}
	// 	if (prefixKeywords.static) {
	// 		builtLine = 'static ' + builtLine;
	// 	}
	// 	annotations.nullable = false;
	// 	prefixKeywords.static = false;
	// 	prefixKeywords.private = false;
	// 	prefixKeywords.readonly = false;
	// 	return builtLine;
	// }
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
		if (line.trim().endsWith(');')) {
			accumulatingMethodSignature = false;
			accumulatingMethodCurlies = true;
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
export function convertJava(input: string): string {
	const lines = input.split('\n');
	// Process each line

	const convertedLines: string[] = [];
	for (const line of lines) {
		const newLine = processLine(line);
		convertedLines.push(newLine);
	}
	const referencePaths = [...customTypes].map(
		(type) => `/// <reference path="${type}.d.ts" />`,
	);
	return [...referencePaths, ...convertedLines, fileEndings]
		.filter((x) => x !== '')
		.join('\n');
}
