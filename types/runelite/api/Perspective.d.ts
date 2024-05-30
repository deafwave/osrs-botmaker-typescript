/// <reference path="../../java/index.d.ts" />
/// <reference path="../../jagex/index.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="geometry/RectangleUnion.d.ts" />
/// <reference path="geometry/Shapes.d.ts" />
/// <reference path="geometry/SimplePolygon.d.ts" />
/// <reference path="model/Jarvis.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetInfo.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="Scene.d.ts" />
/// <reference path="SpritePixels.d.ts" />
/// <reference path="Model.d.ts" />
/*
 * Copyright (c) 2017, Adam <Adam@sigterm.info>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.api {
	/**
	 * A utility class containing methods to help with conversion between
	 * in-game features to canvas areas.
	 */
	export class Perspective {
		/**
		 * Translates two-dimensional ground coordinates within the 3D world to
		 * their corresponding coordinates on the game screen.
		 *
		 * @param client the game client
		 * @param point ground coordinate
		 * @param plane ground plane on the z axis
		 * @param zOffset distance from ground on the z axis
		 * @return a {@link Point} on screen corresponding to the position in
		 * 3D-space
		 */
		static localToCanvas(
			client: Client,
			point: net.runelite.api.coords.LocalPoint,
			plane: number,
			zOffset: number,
		): Point | null;
		/**
		 * Translates three-dimensional local coordinates within the 3D world to
		 * their corresponding coordinates on the game screen.
		 *
		 * @param client the game client
		 * @param x ground coordinate on the x axis
		 * @param y ground coordinate on the y axis
		 * @param z
		 * @return a {@link Point} on screen corresponding to the position in
		 * 3D-space
		 */
		static localToCanvas(
			client: Client,
			x: number,
			y: number,
			z: number,
		): Point;
		private static localToCanvasCpu(
			client: Client,
			x: number,
			y: number,
			z: number,
		): Point;
		private static localToCanvasGpu(
			client: Client,
			x: number,
			y: number,
			z: number,
		): Point;
		/**
		 * Translates a model's vertices into 2d space.
		 */
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
		): void;
		// There is a separate implementation for GPU since GPU uses a slightly more precise projection that can
		// cause features like model outlines being noticeably off otherwise.
		private static modelToCanvasGpu(
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
		): void;
		private static modelToCanvasCpu(
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
		): void;
		/**
		 * Translates two-dimensional ground coordinates within the 3D world to
		 * their corresponding coordinates on the Minimap.
		 *
		 * @param client the game client
		 * @param point ground coordinate
		 * @return a {@link Point} on screen corresponding to the position in
		 * 3D-space
		 */
		static localToMinimap(
			client: Client,
			point: net.runelite.api.coords.LocalPoint,
		): Point | null;
		// client uses square(distance/32) < 6400 for distance.
		// convert to local coords via sqrt(6400) * 32 = 20 tiles
		// then scale based on pixels per tile
		/**
		 * Translates two-dimensional ground coordinates within the 3D world to
		 * their corresponding coordinates on the Minimap.
		 *
		 * @param client the game client
		 * @param point ground coordinate
		 * @param distance max distance from local player to minimap point
		 * @return a {@link Point} on screen corresponding to the position in
		 * 3D-space
		 */
		static localToMinimap(
			client: Client,
			point: net.runelite.api.coords.LocalPoint,
			distance: number,
		): Point | null;
		/**
		 * Calculates the above ground height of a tile point.
		 *
		 * @param client the game client
		 * @param point the local ground coordinate
		 * @param plane the client plane/ground level
		 * @return the offset from the ground of the tile
		 */
		static getTileHeight(
			client: Client,
			point: net.runelite.api.coords.LocalPoint,
			plane: number,
		): number;
		/**
		 * Get the height of a location, in local coordinates. Interpolates the height from the adjacent tiles.
		 * Does not account for bridges.
		 * @return
		 */
		private static getHeight(
			scene: Scene,
			localX: number,
			localY: number,
			plane: number,
		): number;
		/**
		 * Calculates a tile polygon from offset worldToScreen() points.
		 *
		 * @param client the game client
		 * @param localLocation local location of the tile
		 * @return a {@link Polygon} on screen corresponding to the given
		 * localLocation.
		 */
		static getCanvasTilePoly(
			client: Client,
			localLocation: net.runelite.api.coords.LocalPoint,
		): Polygon;
		/**
		 * Calculates a tile polygon from offset worldToScreen() points.
		 *
		 * @param client the game client
		 * @param localLocation local location of the tile
		 * @param zOffset offset from ground plane
		 * @return a {@link Polygon} on screen corresponding to the given
		 * localLocation.
		 */
		static getCanvasTilePoly(
			client: Client,
			localLocation: net.runelite.api.coords.LocalPoint,
			zOffset: number,
		): Polygon;
		/**
		 * Returns a polygon representing an area.
		 *
		 * @param client the game client
		 * @param localLocation the center location of the AoE
		 * @param size the size of the area (ie. 3x3 AoE evaluates to size 3)
		 * @return a polygon representing the tiles in the area
		 */
		static getCanvasTileAreaPoly(
			client: Client,
			localLocation: net.runelite.api.coords.LocalPoint,
			size: number,
		): Polygon;
		/**
		 * Returns a polygon representing an area.
		 *
		 * @param client the game client
		 * @param localLocation the center location of the AoE
		 * @param sizeX the size of the area in tiles on the x axis
		 * @param sizeY the size of the area in tiles on the y axis
		 * @param plane the plane of the area
		 * @param zOffset offset from ground plane
		 * @return a polygon representing the tiles in the area
		 */
		static getCanvasTileAreaPoly(
			client: Client,
			localLocation: net.runelite.api.coords.LocalPoint,
			sizeX: number,
			sizeY: number,
			plane: number,
			zOffset: number,
		): Polygon;
		// out of scene
		/**
		 * Calculates text position and centers depending on string length.
		 *
		 * @param client the game client
		 * @param graphics the game graphics
		 * @param localLocation local location of the tile
		 * @param text string for width measurement
		 * @param zOffset offset from ground plane
		 * @return a {@link Point} on screen corresponding to the given
		 * localLocation.
		 */
		static getCanvasTextLocation(
			client: Client,
			graphics: Graphics2D,
			localLocation: net.runelite.api.coords.LocalPoint,
			text: string,
			zOffset: number,
		): Point | null;
		/**
		 * Calculates image position and centers depending on image size.
		 *
		 * @param client the game client
		 * @param localLocation local location of the tile
		 * @param image image for size measurement
		 * @param zOffset offset from ground plane
		 * @return a {@link Point} on screen corresponding to the given
		 * localLocation.
		 */
		static getCanvasImageLocation(
			client: Client,
			localLocation: net.runelite.api.coords.LocalPoint,
			image: BufferedImage,
			zOffset: number,
		): Point;
		/**
		 * Calculates image position and centers depending on image size.
		 *
		 * @param client the game client
		 * @param localLocation local location of the tile
		 * @param image image for size measurement
		 * @return a {@link Point} on screen corresponding to the given
		 * localLocation.
		 */
		static getMiniMapImageLocation(
			client: Client,
			localLocation: net.runelite.api.coords.LocalPoint,
			image: BufferedImage,
		): Point;
		/**
		 * Calculates sprite position and centers depending on sprite size.
		 *
		 * @param client the game client
		 * @param localLocation local location of the tile
		 * @param sprite SpritePixel for size measurement
		 * @param zOffset offset from ground plane
		 * @return a {@link Point} on screen corresponding to the given localLocation.
		 */
		static getCanvasSpriteLocation(
			client: Client,
			localLocation: net.runelite.api.coords.LocalPoint,
			sprite: SpritePixels,
			zOffset: number,
		): Point;
		/**
		 * You don't want this. Use {@link TileObject#getClickbox()} instead.
		 * <p>
		 * Get the on-screen clickable area of {@code model} as though it's for the
		 * object on the tile at ({@code localX}, {@code localY}) and rotated to
		 * angle {@code orientation}.
		 * @param client      the game client
		 * @param model       the model to calculate a clickbox for
		 * @param orientation the orientation of the model (0-2048, where 0 is north)
		 * @param x           x coord in local space
		 * @param z           y coord in local space
		 * @return the clickable area of the model
		 */
		/** @deprecated */
		static getClickbox(
			client: Client,
			model: Model,
			orientation: number,
			x: number,
			y: number,
			z: number,
		): Shape | null;
		private static calculateAABB(
			client: Client,
			m: Model,
			jauOrient: number,
			x: number,
			y: number,
			z: number,
		): net.runelite.api.geometry.SimplePolygon;
		private static calculate2DBounds(
			client: Client,
			m: Model,
			jauOrient: number,
			x: number,
			y: number,
			z: number,
		): net.runelite.api.geometry.Shapes;
		/**
		 * Calculates text position and centers on minimap depending on string length.
		 *
		 * @param client the game client
		 * @param graphics the game graphics
		 * @param localLocation local location of the tile
		 * @param text string for width measurement
		 * @return a {@link Point} on screen corresponding to the given
		 * localLocation.
		 */
		static getCanvasTextMiniMapLocation(
			client: Client,
			graphics: Graphics2D,
			localLocation: net.runelite.api.coords.LocalPoint,
			text: string,
		): Point;
	}
}
