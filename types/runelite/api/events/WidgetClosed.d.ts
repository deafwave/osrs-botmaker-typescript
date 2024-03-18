declare namespace net.runelite.api.events {
	export class WidgetClosed {
		/**
		 * The ID of the interface that is closed
		 */
		getGroupId(): number;

		/**
		 * @see net.runelite.api.widgets.WidgetModalMode
		 */
		getModalMode(): number;

		/**
		 * If the interface will be unloaded or if it will be immediately reloaded
		 */
		isUnload(): boolean;
	}
}
