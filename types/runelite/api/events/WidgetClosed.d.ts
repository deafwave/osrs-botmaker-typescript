declare namespace net.runelite.api {
	class WidgetClosed {
		/**
		 * The ID of the interface that is closed
		 */
		private groupId: number;

		/**
		 * @see net.runelite.api.widgets.WidgetModalMode
		 */
		private modalMode: number;

		/**
		 * If the interface will be unloaded or if it will be immediately reloaded
		 */
		private unload: boolean;
	}
}
