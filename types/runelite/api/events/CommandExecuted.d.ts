declare namespace net.runelite.api.events {
	export class CommandExecuted {
		/**
		 * The name of the command entered.
		 */
		private command: string;
		/**
		 * The command arguments that have been entered.
		 */
		private arguments: string[];
	}
}
