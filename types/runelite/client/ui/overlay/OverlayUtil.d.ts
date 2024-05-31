/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../api/Actor.d.ts" />
/// <reference path="../../../api/Point.d.ts" />
/// <reference path="../../../api/Client.d.ts" />
/// <reference path="../../../api/TileObject.d.ts" />
/// <reference path="../../../api/coords/LocalPoint.d.ts" />

declare namespace net.runelite.client.ui.overlay {
	export class OverlayUtil {
		/**
		 * Renders an overlay text on an actor.
		 * @param graphics The graphics context.
		 * @param actor The actor to render the overlay on.
		 * @param text The text to render.
		 * @param color The color of the text.
		 */
		static renderActorOverlay(
			graphics: Graphics2D,
			actor: net.runelite.api.Actor,
			text: string,
			color: Color,
		): void;

		/**
		 * Renders an overlay image on an actor.
		 * @param graphics The graphics context.
		 * @param actor The actor to render the overlay on.
		 * @param image The image to render.
		 * @param color The color of the overlay.
		 * @param zOffset The Z offset for the image.
		 */
		static renderActorOverlayImage(
			graphics: Graphics2D,
			actor: net.runelite.api.Actor,
			image: BufferedImage,
			color: Color,
			zOffset: number,
		): void;

		/**
		 * Renders a hoverable area.
		 * @param graphics The graphics context.
		 * @param area The shape of the hoverable area.
		 * @param mousePosition The current mouse position.
		 * @param fillColor The fill color of the area.
		 * @param borderColor The border color of the area.
		 * @param borderHoverColor The border color when hovered.
		 */
		static renderHoverableArea(
			graphics: Graphics2D,
			area: Shape,
			mousePosition: net.runelite.api.Point,
			fillColor: Color,
			borderColor: Color,
			borderHoverColor: Color,
		): void;

		/**
		 * Renders an image at a specific location.
		 * @param graphics The graphics context.
		 * @param imgLoc The location to render the image.
		 * @param image The image to render.
		 */
		static renderImageLocation(
			graphics: Graphics2D,
			imgLoc: net.runelite.api.Point,
			image: BufferedImage,
		): void;

		/**
		 * Renders an image at a local point location.
		 * @param client The game client.
		 * @param graphics The graphics context.
		 * @param localPoint The local point location.
		 * @param image The image to render.
		 * @param zOffset The Z offset for the image.
		 */
		static renderImageLocation(
			client: net.runelite.api.Client,
			graphics: Graphics2D,
			localPoint: net.runelite.api.coords.LocalPoint,
			image: BufferedImage,
			zOffset: number,
		): void;

		/**
		 * Renders a location on the minimap.
		 * @param graphics The graphics context.
		 * @param mini The minimap location.
		 * @param color The color of the minimap location.
		 */
		static renderMinimapLocation(
			graphics: Graphics2D,
			mini: net.runelite.api.Point,
			color: Color,
		): void;

		/**
		 * Renders a rectangle on the minimap.
		 * @param client The game client.
		 * @param graphics The graphics context.
		 * @param center The center point of the rectangle.
		 * @param width The width of the rectangle.
		 * @param height The height of the rectangle.
		 * @param color The color of the rectangle.
		 * @deprecated
		 */
		static renderMinimapRect(
			client: net.runelite.api.Client,
			graphics: Graphics2D,
			center: net.runelite.api.Point,
			width: number,
			height: number,
			color: Color,
		): void;

		/**
		 * Renders a polygon.
		 * @param graphics The graphics context.
		 * @param poly The shape of the polygon.
		 * @param color The color of the polygon.
		 */
		static renderPolygon(
			graphics: Graphics2D,
			poly: Shape,
			color: Color,
		): void;

		/**
		 * Renders a polygon with fill color and border stroke.
		 * @param graphics The graphics context.
		 * @param poly The shape of the polygon.
		 * @param color The border color of the polygon.
		 * @param fillColor The fill color of the polygon.
		 * @param borderStroke The border stroke of the polygon.
		 */
		static renderPolygon(
			graphics: Graphics2D,
			poly: Shape,
			color: Color,
			fillColor: Color,
			borderStroke: Stroke,
		): void;

		/**
		 * Renders a polygon with border stroke.
		 * @param graphics The graphics context.
		 * @param poly The shape of the polygon.
		 * @param color The border color of the polygon.
		 * @param borderStroke The border stroke of the polygon.
		 */
		static renderPolygon(
			graphics: Graphics2D,
			poly: Shape,
			color: Color,
			borderStroke: Stroke,
		): void;

		/**
		 * Renders text at a specific location.
		 * @param graphics The graphics context.
		 * @param txtLoc The text location.
		 * @param text The text to render.
		 * @param color The color of the text.
		 */
		static renderTextLocation(
			graphics: Graphics2D,
			txtLoc: net.runelite.api.Point,
			text: string,
			color: Color,
		): void;

		/**
		 * Renders an overlay text on a tile object.
		 * @param graphics The graphics context.
		 * @param tileObject The tile object to render the overlay on.
		 * @param text The text to render.
		 * @param color The color of the text.
		 */
		static renderTileOverlay(
			graphics: Graphics2D,
			tileObject: net.runelite.api.TileObject,
			text: string,
			color: Color,
		): void;

		/**
		 * Renders an overlay image on a tile object.
		 * @param client The game client.
		 * @param graphics The graphics context.
		 * @param localLocation The local location of the tile object.
		 * @param image The image to render.
		 * @param color The color of the overlay.
		 */
		static renderTileOverlay(
			client: net.runelite.api.Client,
			graphics: Graphics2D,
			localLocation: net.runelite.api.coords.LocalPoint,
			image: BufferedImage,
			color: Color,
		): void;

		/**
		 * Sets the graphic properties for rendering.
		 * @param graphics The graphics context.
		 */
		static setGraphicProperties(graphics: Graphics2D): void;

		/**
		 * Transforms a position based on the overlay position and dimension.
		 * @param position The overlay position.
		 * @param dimension The dimension to transform.
		 * @returns The transformed position.
		 */
		static transformPosition(position: any, dimension: Dimension): net.runelite.api.Point;
	}
}
