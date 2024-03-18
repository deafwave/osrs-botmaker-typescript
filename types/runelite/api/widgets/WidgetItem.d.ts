/// <reference path="../../../java/index.d.ts" />
/// <reference path="Widget.d.ts" />
/// <reference path="../Point.d.ts" />
declare namespace net.runelite.api {
	class WidgetItem {
		/**
		 * The ID of the item represented.
		 *
		 * @see net.runelite.api.ItemID
		 */

		/**
		 * The quantity of the represented item.
		 */

		/**
		 * The area where the widget is drawn on the canvas.
		 */

		/**
		 * The widget which contains this item.
		 */

		/**
		 * The canvas bounds for the widget, if it is being dragged.
		 */

		/**
		 * Get the area where the widget item is drawn on the canvas, accounting for drag
		 * @return
		 */
		getCanvasBounds(): Rectangle | null;
		/** FIXME: MISPLACED, move it up and remove this comment block */
		constructor(
			id: number,
			quantity: number,
			canvasBounds: Rectangle,
			widget: Widget,
			draggingCanvasBounds: Rectangle,
		);

		/**
		 * Get the area where the widget item is drawn on the canvas
		 * @param dragging whether the returned area should account for widget drag
		 * @return
		 */
		getCanvasBounds(dragging: boolean): Rectangle;

		/**
		 * Gets the upper-left coordinate of where the widget is being drawn
		 * on the canvas, accounting for drag.
		 *
		 * @return the upper-left coordinate of where this widget is drawn
		 */
		getCanvasLocation(): Point;
	}
}
