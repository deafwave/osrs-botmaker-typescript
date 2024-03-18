/// <reference path="../ScriptEvent.d.ts" />

declare namespace net.runelite.api.events {
	export class ScriptPreFired {
		/**
		 * The script id of the invoked script
		 */

		/**
		 * The input of the script invoke, this will be null unless it is the root script
		 */
		private scriptEvent: ScriptEvent;
	}
}
