declare namespace net.runelite.api {
	/**
	 * Annotation indicating the number of integer and string arguments a script takes.
	 */
	export interface ScriptArguments {
		/**
		 * The number of int arguments the script takes.
		 */
		integer: number;

		/**
		 * The number of string arguments the script takes.
		 */
		string: number;
	}
}
