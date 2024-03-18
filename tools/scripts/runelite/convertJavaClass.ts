/* eslint-disable unicorn/switch-case-braces */
import { convertMethodSignature, convertType } from './utils';
export function convertJavaClass(input: string): string {
	// Split the input into lines for easier processing
	const lines = input.split('\n');
	const customTypes = new Set<string>();

	// Process each line
	let begin = false;
	let isNextNullable = false;
	let isNextStatic = false;
	let isNextPrivate = false;
	let isNextReadonly = false;
	let capturingCommentBlock = false;
	let accumulatingMethodSignature = false;
	let accumulatingMethodCurlies = false;
	let accumulatingMethodCurliesDepth = 0;
	let methodSignature = '';
	let constructorParts: string[] = [];
	const convertedLines = lines.map((line) => {
		// Comments
		if (!begin && line.trim().startsWith('/**')) {
			capturingCommentBlock = true;
			return line;
		} else if (!begin && capturingCommentBlock) {
			if (line.trim().endsWith('*/')) {
				capturingCommentBlock = false;
			}
			return line;
		} else if (line.trim().startsWith('*')) {
			return line;
		} else if (line.trim().startsWith('//')) {
			return line;
		}

		// Curly Handling
		if (line.trim().startsWith('{')) {
			accumulatingMethodCurlies = true;
			accumulatingMethodCurliesDepth += 1;
		}
		if (accumulatingMethodCurlies && accumulatingMethodCurliesDepth > 1) {
			if (line.includes('}')) {
				accumulatingMethodCurliesDepth -= 1;
			}
			// if (accumulatingMethodCurliesDepth === 1) {
			// 	accumulatingMethodCurlies = false;
			// }
			return '';
		}

		// Start
		if (!begin) {
			if (
				line.includes('public class') ||
				line.includes('public final class')
			) {
				begin = true;
				return (
					'declare namespace net.runelite.api {\n' +
					line.replace(/public.*?class/, 'class')
				);
			}
			return '';
		}

		// Handle annotations
		if (line.trim().startsWith('@Nullable')) {
			isNextNullable = true;
			return '';
		} else if (line.trim().startsWith('@')) {
			// FIXME: Client.java has a method that starts with an annotation
			// @MagicConstant(valuesFromClass = HintArrowType.class) int getHintArrowType();
			return '';
		}

		// Handle constructor
		if (line.trim().startsWith('private final')) {
			const regex = /(\w+)/g;
			let match;

			let javaType = '';
			while (
				(match = regex.exec(line.replace('private final', ''))) !== null
			) {
				if (javaType === '') {
					javaType = match[1];
					continue;
				}
				const variableName = match[1];
				const tsType = convertType(javaType, false, customTypes); // Ensure this function is defined
				constructorParts.push(`${variableName}:${tsType}`);
			}
			return '';
		}

		// Prep Replacements
		line = line.trim();
		if (line.startsWith('private ')) {
			line = line.replace('private ', '').trim();
			isNextPrivate = true;
		}
		if (line.startsWith('public ')) {
			line = line.replace('public ', '').trim();
		}
		if (line.startsWith('static ')) {
			line = line.replace('static ', '').trim();
			isNextStatic = true;
		}
		if (line.startsWith('final ')) {
			line = line.replace('final ', '').trim();
			isNextReadonly = true;
		}

		// Remove Annotations
		if (line.includes('@')) {
			line = line.replaceAll(/@\w+\s*(\([^)]*\))?/g, '');
		}

		// Handle variable
		if (line.trim().includes(' = ')) {
			const regex = /(.*?) /g;
			const match = regex.exec(line);
			const javaType = match[1];
			// const tsType = convertType(javaType, false, customTypes); // Ensure this function is defined
			let builtLine = line.replace(javaType, '').trim();
			if (isNextReadonly) {
				builtLine = 'readonly ' + builtLine;
			}
			if (isNextStatic) {
				builtLine = 'static ' + builtLine;
			}
			isNextNullable = false;
			isNextStatic = false;
			isNextPrivate = false;
			isNextReadonly = false;
			return builtLine;
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
			if (line.trim().endsWith(')')) {
				accumulatingMethodSignature = false;
				accumulatingMethodCurlies = true;
				line = methodSignature;
				methodSignature = '';

				let convertedLine = convertMethodSignature(
					line,
					isNextNullable,
					customTypes,
					isNextStatic,
					isNextPrivate,
				);
				isNextNullable = false;
				isNextStatic = false;
				isNextPrivate = false;
				isNextReadonly = false;
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

		// Remove unnecessary braces and semicolons
		// line = line.replace(/[{;}]/g, '');

		return line;
	});

	const referencePaths = Array.from(customTypes).map(
		(type) => `/// <reference path="${type}.d.ts" />`,
	);
	return referencePaths.concat(convertedLines, '\n}').join('\n');
}
