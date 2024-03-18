/// <reference path="../MenuEntry.d.ts" />
declare namespace net.runelite.api.events {
	export class MenuEntryAdded {
		getMenuEntry(): MenuEntry;

		/**
		 * The option text added to the menu. (ie. "Walk here", "Use")
		 */
		getOption(): string;

		/**
		 * The target of the action. (ie. Item or Actor name)
		 * <p>
		 * If the option does not apply to any target, this field
		 * will be set to empty string.
		 */

		getTarget(): string;

		/**
		 * The action type that will be triggered.
		 */

		getType(): number;

		/**
		 * An identifier value for the target of the action
		 */

		getIdentifier(): number;

		/**
		 * An additional parameter for the action.
		 */

		getActionParam0(): number;

		/**
		 * A second additional parameter for the action.
		 */

		getActionParam1(): number;
	}
}
