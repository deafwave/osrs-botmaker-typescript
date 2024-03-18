/// <reference path="widgets/Widget.d.ts" />
declare namespace net.runelite.api {
	export interface ScriptEvent {
		MOUSE_X: -2147483647;
		MOUSE_Y: -2147483646;
		MENU_OP: -2147483644;
		WIDGET_ID: -2147483645;
		WIDGET_INDEX: -2147483643;
		WIDGET_TARGET_ID: -2147483642;
		WIDGET_TARGET_INDEX: -2147483641;
		KEY_CODE: -2147483640;
		KEY_CHAR: -2147483639;
		NAME: 'event_opbase';

		/**
		 * Gets the widget the {@link #WIDGET_ID} and {@link #WIDGET_INDEX} args
		 * are substituted with
		 */
		getSource(): net.runelite.api.widgets.Widget;

		/**
		 * Sets the widget the {@link #WIDGET_ID} and {@link #WIDGET_INDEX} args
		 * are substituted with. This is useful for running widget listeners
		 *
		 * @see Widget#getOnLoadListener()
		 */
		setSource(widget: net.runelite.api.widgets.Widget): ScriptEvent;

		/**
		 * Arguments passed to the script. Index 0 is the script being run and is not an argument.
		 * @return
		 */
		getArguments(): Object[];

		/**
		 * Gets the menu op of the event
		 *
		 * @return the menu op
		 */
		getOp(): number;

		/**
		 * Set the menu op of the event
		 *
		 * @param op
		 */
		setOp(op: number): ScriptEvent;

		/**
		 * Gets the target of the menu option
		 *
		 * @return the target
		 * @see net.runelite.api.events.MenuOptionClicked
		 */
		getOpbase(): string;

		/**
		 * Parent relative x coordinate for mouse related events
		 */
		getMouseX(): number;

		/**
		 * Parent relative y coordinate for mouse related events
		 */
		getMouseY(): number;

		/**
		 * Jagex typed keycode
		 *
		 * @return
		 */
		getTypedKeyCode(): number;

		/**
		 * Get the typed character, ascii.
		 *
		 * @return
		 */
		getTypedKeyChar(): number;

		/**
		 * Executes a cs2 script specified by this event
		 *
		 * This method must be ran on the client thread and is not reentrant
		 */
		run(): void;
	}
}
