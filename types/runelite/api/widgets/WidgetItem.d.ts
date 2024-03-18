/// <reference path="../../../java/index.d.ts" />
/// <reference path="Widget.d.ts" />
/// <reference path="../Point.d.ts" />
declare namespace net.runelite.api.widgets {
	export class WidgetItem {
		constructor(
			id: number,
			quantity: number,
			canvasBounds: Rectangle,
			widget: net.runelite.api.widgets.Widget,
			draggingCanvasBounds: Rectangle,
		);
		/**
		 * The ID of the item represented.
		 *
		 * @see net.runelite.api.ItemID
		 */
		getId(): number;
		/**
		 * The quantity of the represented item.
		 */
		getQuantity(): number;
		/**
		 * The widget which contains this item.
		 */
		getWidget(): Widget;
		/**
		 * The canvas bounds for the widget, if it is being dragged.
		 */
		getDraggingCanvasBounds(): Rectangle | null;
		/**
		 * Get the area where the widget item is drawn on the canvas, accounting for drag
		 * @return
		 */
		getCanvasBounds(): Rectangle;

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
