declare namespace net.runelite.api.events {
	/**
	 * An event where a command has been used in the chat.
	 * <p>
	 * Commands are triggered by using the "::" prefix before a chat message. The
	 * structure of a command is "::[name] [args..]" where "[name]" is the name
	 * of the command that is set in the command field, and args are (optional)
	 * words entered that are separated by spaces.
	 * <p>
	 * Typing in "::" with no additional characters will treat the message as normal
	 * and pass it along to the public chat.
	 * <p>
	 * Note that having a space as the first character after the command trigger will
	 * set the command field to an empty string. For example, the message ":: hello world!"
	 * will set command to "" and arguments to ["hello", "world!"].
	 */
	export class CommandExecuted {
		/**
		 * The name of the command entered.
		 */
		getCommand(): string;

		/**
		 * The command arguments that have been entered.
		 */
		getArguments(): string[];
	}
}
