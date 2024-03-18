/// <reference path="../MenuEntry.d.ts" />
/// <reference path="../MenuAction.d.ts" />
/// <reference path="../widgets/Widget.d.ts" />
declare namespace net.runelite.api.events {
	export class MenuOptionClicked {
		/**
		 * The clicked menu entry
		 */
		getMenuEntry(): MenuEntry;

		/**
		 * Whether or not the event has been consumed by a subscriber.
		 */
		isConsumed(): boolean;

		/**
		 * Action parameter 0. Its value depends on the menuAction.
		 */

		getParam0(): number;

		/**
		 * Action parameter 1. Its value depends on the menuAction.
		 */

		getParam1(): number;

		/**
		 * The option text added to the menu.
		 */

		getMenuOption(): string;

		/**
		 * The target of the action.
		 */

		getMenuTarget(): string;

		/**
		 * The action performed.
		 */

		getMenuAction(): MenuAction;

		/**
		 * The ID of the object, actor, or item that the interaction targets.
		 */

		getId(): number;

		/**
		 * Test if this menu entry is an item op. "Use" and "Examine" are not considered item ops.
		 * @return
		 */
		isItemOp(): boolean;

		/**
		 * If this menu entry is an item op, get the item op id
		 * @return 1-5
		 */
		getItemOp(): number;

		/**
		 * If this menu entry is an item op, get the item id
		 * @return
		 * @see net.runelite.api.ItemID
		 * @see net.runelite.api.NullItemID
		 */
		getItemId(): number;

		/**
		 * Get the widget this menu entry is on, if this is a menu entry
		 * with an associated widget. Such as eg, CC_OP.
		 * @return
		 */

		getWidget(): net.runelite.api.widgets.Widget | null;

		/**
		 * Marks the event as having been consumed.
		 * <p>
		 * Setting this state indicates that a plugin has processed the menu
		 * option being clicked and that the event will not be passed on
		 * for handling by vanilla client code.
		 */
		consume(): void;

		getActionParam(): number;

		getWidgetId(): number;
	}
}
