/// <reference path="../GraphicsObject.d.ts" />
declare namespace net.runelite.api.events {
	/**
	 * An event where a new {@link GraphicsObject} has been created.
	 */
	export class GraphicsObjectCreated {
		/**
		 * The newly created graphics object.
		 */
		getGraphicsObject(): GraphicsObject;
	}
}
