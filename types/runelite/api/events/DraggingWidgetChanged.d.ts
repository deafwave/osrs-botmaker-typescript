declare namespace net.runelite.api.events {
	export class DraggingWidgetChanged {
		/**
		 * Whether a widget is currently being dragged.
		 */
		isDraggingWidget(): boolean;
		setDraggingWidget(draggingWidget: boolean): void;
	}
}
