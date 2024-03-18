/// <reference path="../ScriptEvent.d.ts" />

declare namespace net.runelite.api.events {
	export class ScriptPreFired {
		/**
		 * The script id of the invoked script
		 */
		getScriptId(): number;
		setScriptId(scriptId: number): void;

		/**
		 * The input of the script invoke, this will be null unless it is the root script
		 */
		getScriptEvent(): ScriptEvent;
		setScriptEvent(scriptEvent: ScriptEvent): void;
	}
}
