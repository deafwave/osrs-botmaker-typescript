/// <reference path="../ScriptEvent.d.ts" />
/**
 * An object that can be set as the first argument to a {@link Widget} listener
 * to handle ScriptEvents with Java code, rather than cs2.
 */
interface JavaScriptCallback {
	run(event: ScriptEvent): void;
}
