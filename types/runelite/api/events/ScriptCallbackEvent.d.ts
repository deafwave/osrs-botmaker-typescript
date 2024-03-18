/// <reference path="../Script.d.ts" />
declare namespace net.runelite.api.events {
	export class ScriptCallbackEvent {
		/**
		 * The script that is currently being executed
		 */
		private script: Script;

		/**
		 * The name passed to runelite_callback
		 */
		private eventName: string;
	}
}
