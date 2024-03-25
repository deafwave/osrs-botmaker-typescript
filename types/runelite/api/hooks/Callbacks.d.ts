/// <reference path="../MainBufferProvider.d.ts" />
/// <reference path="../widgets/WidgetItem.d.ts" />
/// <reference path="../widgets/Widget.d.ts" />
/// <reference path="../Renderable.d.ts" />
/// <reference path="../../../java/index.d.ts" />
declare namespace net.runelite.api.hooks {
	/**
	 * Interface of callbacks the injected client uses to send events
	 */
	export interface Callbacks {
		/**
		 * Post an event. See the events in net.runelite.api.events.
		 *
		 * @param event the event
		 */
		post(event: Object): void;

		/**
		 * Post a deferred event, which gets delayed until the next cycle.
		 *
		 * @param event the event
		 */
		postDeferred(event: Object): void;

		/**
		 * Called at the beginning of each tick
		 */
		tick(): void;

		/**
		 * Called at the end of each tick
		 */
		tickEnd(): void;

		/**
		 * Called each frame
		 */
		frame(): void;

		/**
		 * Called after receiving update NPCs packet from server.
		 */
		updateNpcs(): void;

		/**
		 * Called after the scene is drawn.
		 */
		drawScene(): void;

		/**
		 * Called after logic that is drawing 2D objects is processed.
		 */
		drawAboveOverheads(): void;

		/**
		 * Client top-most draw method, rendering over top of most of game interfaces.
		 *
		 * @param mainBufferProvider the main buffer provider
		 * @param graphics           the graphics
		 * @param x                  the x
		 * @param y                  the y
		 */
		draw(
			mainBufferProvider: MainBufferProvider,
			graphics: Graphics,
			x: number,
			y: number,
		): void;

		/**
		 * Called after an interface has been drawn
		 * @param interfaceId the interface id
		 * @param widgetItems Widget items within the interface
		 */
		drawInterface(
			interfaceId: number,
			widgetItems: Array<net.runelite.api.widgets.WidgetItem>, // TODO: Validate that this is not a Java List
		): void;

		/**
		 * Called after a widget layer has been drawn
		 * @param layer The layer
		 * @param widgetItems Widget items within the layer
		 */
		drawLayer(
			layer: net.runelite.api.widgets.Widget,
			widgetItems: Array<net.runelite.api.widgets.WidgetItem>, // TODO: Validate that this is not a Java List
		): void;

		/**
		 * Mouse pressed event. If this event will be consumed it will not be propagated further to client.
		 *
		 * @param mouseEvent the mouse event
		 * @return the mouse event
		 */
		mousePressed(mouseEvent: JavaMouseEvent): JavaMouseEvent;

		/**
		 * Mouse released event. If this event will be consumed it will not be propagated further to client.
		 *
		 * @param mouseEvent the mouse event
		 * @return the mouse event
		 */
		mouseReleased(mouseEvent: JavaMouseEvent): JavaMouseEvent;

		/**
		 * Mouse clicked event. If this event will be consumed it will not be propagated further to client.
		 *
		 * @param mouseEvent the mouse event
		 * @return the mouse event
		 */
		mouseClicked(mouseEvent: JavaMouseEvent): JavaMouseEvent;

		/**
		 * Mouse entered event. If this event will be consumed it will not be propagated further to client.
		 *
		 * @param mouseEvent the mouse event
		 * @return the mouse event
		 */
		mouseEntered(mouseEvent: JavaMouseEvent): JavaMouseEvent;

		/**
		 * Mouse exited event. If this event will be consumed it will not be propagated further to client.
		 *
		 * @param mouseEvent the mouse event
		 * @return the mouse event
		 */
		mouseExited(mouseEvent: JavaMouseEvent): JavaMouseEvent;

		/**
		 * Mouse dragged event. If this event will be consumed it will not be propagated further to client.
		 *
		 * @param mouseEvent the mouse event
		 * @return the mouse event
		 */
		mouseDragged(mouseEvent: JavaMouseEvent): JavaMouseEvent;

		/**
		 * Mouse moved event. If this event will be consumed it will not be propagated further to client.
		 *
		 * @param mouseEvent the mouse event
		 * @return the mouse event
		 */
		mouseMoved(mouseEvent: JavaMouseEvent): JavaMouseEvent;

		/**
		 * Mouse wheel moved event. If this event will be consumed it will not be propagated further to client.
		 *
		 * @param event the event
		 * @return the mouse wheel event
		 */
		mouseWheelMoved(event: MouseWheelEvent): MouseWheelEvent;

		/**
		 * Key pressed event.
		 *
		 * @param keyEvent the key event
		 */
		keyPressed(keyEvent: KeyEvent): void;

		/**
		 * Key released event.
		 *
		 * @param keyEvent the key event
		 */
		keyReleased(keyEvent: KeyEvent): void;

		/**
		 * Key typed event.
		 *
		 * @param keyEvent the key event
		 */
		keyTyped(keyEvent: KeyEvent): void;

		/**
		 * Called to test if a renderable should be drawn this frame
		 * @param renderable the renderable
		 * @param drawingUi if this is the 2d ui, such as hp bars or hitsplats
		 * @return false to prevent drawing
		 */
		draw(renderable: Renderable, drawingUi: boolean): boolean;

		/**
		 * Called when a client error occurs
		 * @param message
		 * @param reason
		 */
		error(message: string, reason: Throwable): void;

		/**
		 * Called when the client wants to open a URL
		 * @param url
		 */
		openUrl(url: string): void;

		/**
		 * Returns if the current runelite client is outdated or not
		 *
		 * @return
		 */
		isRuneLiteClientOutdated(): boolean;
	}
}
