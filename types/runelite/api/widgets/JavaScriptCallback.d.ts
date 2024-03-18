/// <reference path="../ScriptEvent.d.ts" />
declare namespace net.runelite.api.widgets {
	export interface JavaScriptCallback {
		run(event: ScriptEvent): void;
	}
}
