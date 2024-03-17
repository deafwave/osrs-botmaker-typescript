export function convertJavaEnumToTypeScriptInterfaceWithComments(javaCode) {
	const enumNameMatch = javaCode.match(/enum\s+(\w+)/);
	if (!enumNameMatch) {
		return 'Enum name not found.';
	}

	const enumName = enumNameMatch[1];
	let output = `interface ${enumName} {\n`;

	// Adjusting the regular expression to match enum entries, block comments, and single-line comments, stopping at semicolon.
	const regex =
		/\/\*\*[\s\S]+?\*\/|\/\/[^\n]*|([@\w]+)\s*(?:\([^)]*\))?,?\s*(?:\/\/.*)?\s*(?:;|\n)?/g;
	let match;
	let pendingComment = '';

	// Starting matching from the point immediately after the enum name is found.
	let startIndex = enumNameMatch.index + enumNameMatch[0].length;

	while ((match = regex.exec(javaCode.slice(startIndex))) !== null) {
		if (
			match[0].trim().startsWith('/**') ||
			match[0].trim().startsWith('//')
		) {
			// Found a comment, append it to pending comment.
			pendingComment +=
				'  ' + match[0].replace(/\n\s*\*/g, '\n  *').trim() + '\n';
		} else if (match[1].trim().startsWith('@')) {
			// FIXME: Merge to above /** block */ if exists
			if (pendingComment.includes('*/')) {
				pendingComment = pendingComment.replace(
					'*/',
					`* ${match[0].trim()}\n\t*/`,
				);
			} else {
				pendingComment += `  // ${match[0].trim()}\n`;
			}
		} else if (match[1]) {
			// Found an enum entry, attach any pending comment.
			output += `${pendingComment}  ${match[1]}: '${match[1]}';\n`;
			pendingComment = ''; // Reset pending comment.
			if (match[0].trim().includes(';')) {
				// Semicolon encountered, indicating the end of enum entries, stop matching.
				break;
			}
		}
	}

	output += '}';
	return output;
}
