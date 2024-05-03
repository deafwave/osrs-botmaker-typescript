/* eslint-disable unicorn/switch-case-braces */
import { convertMethodSignature, convertType } from './utils';

let begin = false;
let isNextStatic = false;
let isNextPrivate = false;
let isNextReadonly = false;
let accumulatingMethodSignature = false;
let accumulatingMethodCurlies = false;
let accumulatingMethodCurliesDepth = 0;
let methodSignature = '';
let constructorParts: string[] = [];

const annotations = {
	nullable: false,
	magicConstant: false,
	override: false,
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

	// // Start New Class
	// if (!begin) {
	// 	if (
	// 		line.includes('public class') ||
	// 		line.includes('public final class')
	// 	) {
	// 		begin = true;
	// 		return (
	// 			'declare namespace net.runelite.api {\n' +
	// 			line.replace(/public.*?class/, 'class')
	// 		);
	// 	}
	// 	return '';
	// }

	// // Handle constructor
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

	// // Prep Replacements
	// line = line.trim();
	// if (line.startsWith('private ')) {
	// 	line = line.replace('private ', '').trim();
	// 	isNextPrivate = true;
	// }
	// if (line.startsWith('public ')) {
	// 	line = line.replace('public ', '').trim();
	// }
	// if (line.startsWith('static ')) {
	// 	line = line.replace('static ', '').trim();
	// 	isNextStatic = true;
	// }
	// if (line.startsWith('final ')) {
	// 	line = line.replace('final ', '').trim();
	// 	isNextReadonly = true;
	// }

	// // Remove Annotations
	// if (line.includes('@')) {
	// 	line = line.replaceAll(/@\w+\s*(\([^)]*\))?/g, '');
	// }

	// // Handle variable
	// if (line.trim().includes(' = ')) {
	// 	const regex = /(.*?) /g;
	// 	const match = regex.exec(line);
	// 	const javaType = match[1];
	// 	// const tsType = convertType(javaType, false, customTypes); // Ensure this function is defined
	// 	let builtLine = line.replace(javaType, '').trim();
	// 	if (isNextReadonly) {
	// 		builtLine = 'readonly ' + builtLine;
	// 	}
	// 	if (isNextStatic) {
	// 		builtLine = 'static ' + builtLine;
	// 	}
	// 	annotations.nullable = false;
	// 	isNextStatic = false;
	// 	isNextPrivate = false;
	// 	isNextReadonly = false;
	// 	return builtLine;
	// }
	// // Handle Methods
	// if (
	// 	!accumulatingMethodSignature &&
	// 	(line.includes('(') || methodSignature)
	// ) {
	// 	accumulatingMethodSignature = true;
	// 	methodSignature = '';
	// }

	// if (accumulatingMethodSignature) {
	// 	methodSignature += line + ' ';
	// 	// Check if this line ends the method signature
	// 	if (line.trim().endsWith(')')) {
	// 		accumulatingMethodSignature = false;
	// 		accumulatingMethodCurlies = true;
	// 		line = methodSignature;
	// 		methodSignature = '';

	// 		let convertedLine = convertMethodSignature(
	// 			line,
	// 			annotations.nullable,
	// 			customTypes,
	// 			isNextStatic,
	// 			isNextPrivate,
	// 		);
	// 		annotations.nullable = false;
	// 		isNextStatic = false;
	// 		isNextPrivate = false;
	// 		isNextReadonly = false;
	// 		if (constructorParts.length > 0) {
	// 			convertedLine =
	// 				convertedLine +
	// 				`\n/** FIXME: MISPLACED, move it up and remove this comment block */\nconstructor(${constructorParts.join(', ')});`;
	// 			constructorParts = [];
	// 		}
	// 		// TODO: Should skip the {} after the method
	// 		return convertedLine;
	// 	} else {
	// 		// Continue accumulating if the method signature isn't complete
	// 		return '';
	// 	}
	// }

	// Remove unnecessary braces and semicolons
	// line = line.replace(/[{;}]/g, '');

	return line;
};
export function convertJava(input: string): string {
	const customTypes = new Set<string>();

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
	// FIXME: Make sure this can be converted to a spread operator
	// eslint-disable-next-line unicorn/prefer-spread
	return referencePaths.concat(convertedLines, '\n}').join('\n');
}
