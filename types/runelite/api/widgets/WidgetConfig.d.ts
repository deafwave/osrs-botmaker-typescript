/**
 * Utility class used for defining options to be used on the click mask
 * of a {@link Widget}.
 *
 * @see Widget#getClickMask()
 */
declare namespace net.runelite.api {
	class WidgetConfig {
		/**
		 * Enables displaying a ninth option on a menu.
		 */
		static readonly SHOW_MENU_OPTION_NINE: number;

		/**
		 * Can this widget be used on a item on the floor
		 */
		static readonly USE_GROUND_ITEM: number;

		/**
		 * Can this widget be used on a NPC
		 */
		static readonly USE_NPC: number;

		/**
		 * Can this widget be used on a game object
		 */
		static readonly USE_OBJECT: number;

		/**
		 * Can this widget be used on a player
		 */
		static readonly USE_PLAYER: number;

		/**
		 * Can this widget be used on a item in your inventory
		 */

		static readonly USE_ITEM: number;

		/**
		 * Can this widget be used on a widget with the WIDGET_USE_TARGET flag
		 */
		static readonly USE_WIDGET: number;

		/**
		 * Controls whether this widget can be dragged around.
		 */
		static readonly DRAG: number;

		/**
		 * Controls whether this widget can have other widgets dragged onto it.
		 */
		static readonly DRAG_ON: number;

		/**
		 * Can widgets with USE_WIDGET be used on this widget
		 */
		static readonly WIDGET_USE_TARGET: number;

		/**
		 * Does the action (zero bosed) get transmitted to the server
		 * when clicked
		 */

		static transmitAction(action: number): number;
	}
}
