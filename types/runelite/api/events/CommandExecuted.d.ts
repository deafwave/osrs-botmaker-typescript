/**
 * Represents an event where a command has been used in the chat in TypeScript.
 * Commands are triggered by using the "::" prefix before a chat message. The structure
 * of a command is "::[name] [args..]" where "[name]" is the command name, and args are
 * optional words entered that are separated by spaces.
 */
declare class CommandExecuted {
	private readonly command: string;
	private readonly arguments: string[];

	constructor(command: string, arguments: string[]);
}
