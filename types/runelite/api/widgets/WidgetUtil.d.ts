declare namespace net.runelite.api.widgets {
	export class WidgetUtil {
		/**
		 * Utility method that converts a component id to the interface it
		 * belongs to.
		 *
		 * @param c component id
		 * @return the interface id
		 */

		static componentToInterface(c: number): number;

		/**
		 * Utility method that converts a component id to the id it is within
		 * its interface.
		 *
		 * @param c component id
		 */
		static componentToId(c: number): number;

		/**
		 * Utility method that packs a component id from an interface id and child id.
		 * @param interfaceId interface id
		 * @param childId id within the interface
		 * @return the component id
		 */

		static packComponentId(interfaceId: number, childId: number): number;
	}
}
