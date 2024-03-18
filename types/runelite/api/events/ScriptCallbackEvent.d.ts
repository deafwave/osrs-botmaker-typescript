/// <reference path="../Script.d.ts" />
declare namespace net.runelite.api.events {
	export class ScriptCallbackEvent {
		/**
		 * The script that is currently being executed
		 */
		getScript(): Script;
		setScript(script: Script): void;

		/**
		 * The name passed to runelite_callback
		 */
		getEventName(): string;
		setEventName(eventName: string): void;
	}
}
