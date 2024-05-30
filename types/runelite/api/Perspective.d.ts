/// <reference path="LocalPoint.d.ts" />
/// <reference path="SpritePixels.d.ts" />
/// <reference path="Model.d.ts" />
/// <reference path="Shape.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/// <reference path="Polygon.d.ts" />
/// <reference path="WorldPoint.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="Client.d.ts" />

declare namespace net.runelite.api {
	export class Perspective {
		static staticgetCanvasImageLocation(
			client: Client,
			localLocation: LocalPoint,
			image: BufferedImage,
			zOffset: number,
		): Point;

		static getCanvasSpriteLocation(
			client: Client,
			localLocation: LocalPoint,
			sprite: SpritePixels,
			zOffset: number,
		): Point;

		static getCanvasTextLocation(
			client: Client,
			localLocation: LocalPoint,
			text: string,
			zOffset: number,
		): Point;

		static getCanvasTextMiniMapLocation(
			client: Client,
			graphics: Graphics2D,
			localLocation: LocalPoint,
			text: string,
			zOffset: number,
		): Point;

		static getCanvasTileAreaPoly(
			client: Client,
			localLocation: LocalPoint,
			size: number,
		): Polygon;

		static getCanvasTileAreaPoly(
			client: Client,
			localLocation: LocalPoint,
			sizeX: number,
			sizeY: number,
			plane: number,
			zOffset: number,
		): Polygon;

		static getCanvasTilePoly(
			client: Client,
			localLocation: LocalPoint,
		): Polygon;

		static getCanvasTilePoly(
			client: Client,
			localLocation: LocalPoint,
			zOffset: number,
		): Polygon;

		static getClickbox(
			client: Client,
			model: Model,
			orientation: number,
			x: number,
			y: number,
			z: number,
		): Shape;

		static getMiniMapImageLocation(
			client: Client,
			worldLocation: WorldPoint,
			image: BufferedImage,
		): Point;

		static getTileHeight(
			client: Client,
			localLocation: LocalPoint,
			plane: number,
		): number;

		static localToCanvas(
			client: Client,
			x: number,
			y: number,
			z: number,
		): Point;

		static localToCanvas(
			client: Client,
			localLocation: LocalPoint,
			plane: number,
		): Point;

		static localToCanvas(
			client: Client,
			localLocation: LocalPoint,
			plane: number,
			zOffset: number,
		): Point;

		static localToMiniMap(client: Client, localLocation: LocalPoint): Point;

		static localToMiniMap(
			client: Client,
			localLocation: LocalPoint,
			distance: number,
		): Point;

		static modelToCanvas(
			client: Client,
			end: number,
			x3dCenter: number,
			y3dCenter: number,
			z3dCenter: number,
			rotate: number,
			x3d: number[],
			y3d: number[],
			z3d: number[],
			x2d: number[],
			y2d: number[],
		);
	}
}
