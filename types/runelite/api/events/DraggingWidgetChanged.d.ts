/**
 * Represents an event called every game cycle when the client is dragging a widget on
 * the cursor in TypeScript.
 */
declare class DraggingWidgetChanged {
	private readonly draggingWidget: boolean;

	constructor(draggingWidget: boolean);
}
