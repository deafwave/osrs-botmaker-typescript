/// <reference path="widgets/Widget.d.ts" />
/**
 * Represents a script event.
 */
interface ScriptEvent {
	readonly MOUSE_X: number;
	readonly MOUSE_Y: number;
	readonly MENU_OP: number;
	readonly WIDGET_ID: number;
	readonly WIDGET_INDEX: number;
	readonly WIDGET_TARGET_ID: number;
	readonly WIDGET_TARGET_INDEX: number;
	readonly KEY_CODE: number;
	readonly KEY_CHAR: number;
	readonly NAME: string;

	/**
	 * Gets the widget the WIDGET_ID and WIDGET_INDEX args are substituted with.
	 */
	getSource(): Widget;

	/**
	 * Sets the widget the WIDGET_ID and WIDGET_INDEX args are substituted with.
	 * @param widget The widget to set as the source.
	 */
	setSource(widget: Widget): void;

	/**
	 * Gets the arguments passed to the script. Index 0 is the script being run and is not an argument.
	 */
	getArguments(): any[];

	/**
	 * Gets the menu op of the event.
	 * @return The menu op.
	 */
	getOp(): number;

	/**
	 * Sets the menu op of the event.
	 * @param op The menu op to set.
	 */
	setOp(op: number): void;

	/**
	 * Gets the target of the menu option.
	 * @return The target.
	 */
	getOpbase(): string;

	/**
	 * Gets the parent-relative x coordinate for mouse-related events.
	 */
	getMouseX(): number;

	/**
	 * Gets the parent-relative y coordinate for mouse-related events.
	 */
	getMouseY(): number;

	/**
	 * Gets the Jagex typed keycode.
	 */
	getTypedKeyCode(): number;

	/**
	 * Gets the typed character ASCII value.
	 */
	getTypedKeyChar(): number;

	/**
	 * Executes a CS2 script specified by this event.
	 * This method must be run on the client thread and is not reentrant.
	 */
	run(): void;
}
