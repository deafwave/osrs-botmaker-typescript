/* eslint-disable unicorn/switch-case-braces */
import { convertMethodSignature } from './utils';
export function convertJavaInterface(input: string): string {
	// Split the input into lines for easier processing
	const lines = input.split('\n');
	const customTypes = new Set<string>();

	// Process each line
	let begin = false;
	let isNextNullable = false;
	let capturingCommentBlock = false;
	let accumulatingMethodSignature = false;
	let methodSignature = '';
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
		}

		// Start
		if (line.includes(' extends ')) {
			const regex =
				/(?:interface|class)\s+\w+\s+extends\s+([A-Za-z0-9_,\s]+)/;
			const match = line.match(regex);

			if (match && match[1]) {
				const allTypes = match[1].split(/\s*,\s*/);
				allTypes.forEach((type) => customTypes.add(type));
			}
		}

		if (!begin) {
			if (line.includes('public interface')) {
				begin = true;
				return line.replace(/public\s+interface/, 'interface');
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
				line = methodSignature;
				methodSignature = '';

				// Remove Annotations
				if (line.includes('@')) {
					line = line.replaceAll(/@\w+\s*(\([^)]*\))?/g, '');
				}

				const convertedLine = convertMethodSignature(
					line,
					isNextNullable,
					customTypes,
				);
				isNextNullable = false;
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
	return referencePaths.concat(convertedLines).join('\n');
}
