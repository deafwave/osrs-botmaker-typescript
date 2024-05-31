/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="DecorativeObject.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="GraphicsObject.d.ts" />
/// <reference path="GroundObject.d.ts" />
/// <reference path="ItemLayer.d.ts" />
/// <reference path="MainBufferProvider.d.ts" />
/// <reference path="Model.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NPCComposition.d.ts" />
/// <reference path="Perspective.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Renderable.d.ts" />
/// <reference path="RuneLiteObject.d.ts" />
/// <reference path="TileObject.d.ts" />
/// <reference path="WallObject.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="PixelDistanceGroupIndex.d.ts" />
/// <reference path="PixelDistanceDelta.d.ts" />
/// <reference path="Color.d.ts" />
/*
 * Copyright (c) 2018-2021, Woox <https://github.com/wooxsolo>
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
declare namespace net.runelite.client.ui.overlay.outline {
export class ModelOutlineRenderer
{
export class PixelDistanceDelta
export class PixelDistanceGroupIndex
Client client;
	// Vertex positions projected on the screen.
	// Window boundaries for the ingame world
int clipX1;
int clipY1;
int clipX2;
int clipY2;
	// Boundaries for the outline
int croppedX1;
int croppedY1;
int croppedX2;
int croppedY2;
int croppedWidth;
int croppedHeight;
	// Bitset with pixel positions that would be rendered to within the cropped area by the model.
	// Memory used for queueing the pixels for the outline of the model.
	// Pixels are grouped by x and y distance to the closest pixel drawn on the model.
	// A block buffer is used so memory can be reused after a group has been processed
	// without using the JVM garbage collector.
int[] outlinePixelsLastBlockLength;
int outlineArrayWidth;
	// An array of pixel group indices ordered by distance for each outline width and feather.
	// These are calculated once upon first usage and then stored here to skip reevaluation.
	// An array of pixel distance deltas for each outline width and direction (right/up/left/down).
	// These are calculated once upon first usage and then stored here to skip reevaluation.
ModelOutlineRenderer(Client client) 
	/**
	 * Calculate the next power of two of a value.
	 *
	 * @param value The value to find the next power of two of.
	 * @return Returns the next power of two.
	 */
	private static nextPowerOfTwo(value: number): number;
	/**
	 * Determine if a triangle goes counter clockwise
	 *
	 * @return Returns true if the triangle goes counter clockwise and should be culled, otherwise false
	 */
	private static cullFace(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): boolean;
	/**
	 * Get an array of pixel outline group indices ordered by distance for a specific outline width.
	 *
	 * @param outlineWidth The outline width.
	 * @param feather The feather of the outline.
	 * @return Returns the list of pixel distances.
	 */
	private getPriorityList(outlineWidth: number, feather: number): PixelDistanceGroupIndex[];
	private ensureDistanceDeltasCreated(outlineWidth: number): void;
			// Turn 90 deg ccw
	/**
	 * Enqueues a pixel for outlining.
	 *
	 * @param distanceGroupIndex The group index to enqueue the pixel into.
	 * @param x The x position of the pixel.
	 * @param y The y position of the pixel.
	 */
	private enqueueOutlinePixel(distanceGroupIndex: number, x: number, y: number): void;
	/**
	 * Checks that the visited bitset is big enough to hold a certain amount of pixels and sets them to 0.
	 *
	 * @param pixelAmount The amount of pixels needed.
	 */
	private resetVisited(pixelAmount: number): void;
	/**
	 * Ensures that the outline buffer arrays are large enough to fit the current outline.
	 */
	private initializeOutlineBuffers(): void;
	/**
	 * Frees all blocks currently in use by the outline block buffer.
	 */
	private freeAllBlockMemory(): void;
	/**
	 * Simulates a horizontal line rasterization and marks pixels visited.
	 *
	 * @param pixelY The y position of the line
	 * @param x1 The starting x position
	 * @param x2 The ending x position
	 */
	private simulateHorizontalLineRasterizationForOutline(pixelY: number, x1: number, x2: number): void;
	/**
	 * Simulates rasterization of a triangle and marks pixels visited.
	 *
	 * @param x1 The x position of the first vertex in the triangle
	 * @param y1 The y position of the first vertex in the triangle
	 * @param x2 The x position of the second vertex in the triangle
	 * @param y2 The y position of the second vertex in the triangle
	 * @param x3 The x position of the third vertex in the triangle
	 * @param y3 The y position of the third vertex in the triangle
	 */
	private simulateTriangleRasterizationForOutline(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
		// Swap vertices so y1 <= y2 <= y3 using bubble sort
			// All points are outside clip boundaries
	/**
	 * Translates the vertices 3D points to the screen canvas 2D points.
	 *
	 * @param localX The local x position of the vertices.
	 * @param localY The local y position of the vertices.
	 * @param localZ The local z position of the vertices.
	 * @param vertexOrientation The orientation of the vertices.
	 * @return Returns true if any of them are inside the clip area, otherwise false.
	 */
	private projectVertices(model: Model, localX: number, localY: number, localZ: number, vertexOrientation: number): boolean;
				// Vertex is too close or behind camera and isn't rendered
	/**
	 * Simulates rendering of the model and marks every pixel visited.
	 */
	private simulateModelRasterizationForOutline(model: Model): void;
				// 254 and 255 counts as fully transparent
	/**
	 * Draws the outline of a pixel according to the distance deltas of an outline.
	 *
	 * @param imageData The image data to draw to.
	 * @param imageWidth The width of the image to draw to.
	 * @param x The x position of the pixel.
	 * @param y The y position of the pixel.
	 * @param distanceDeltas The distance deltas of the outline width.
	 * @param color The color to draw the outline in.
	 */
	private rasterDistanceDeltas(imageData: number[], imageWidth: number, x: number, y: number, distanceDeltas: PixelDistanceDelta[], color: number): void;
	/**
	 * Enqueues pixels that are adjacent above or below the model
	 * or draws them directly to the clients image buffer.
	 *
	 * @param directWrite If true the pixels are drawn to the image buffer, otherwise they are enqueued for drawing.
	 * @param color The color to draw if directWrite == true
	 * @param outlineWidth The outline width to draw if directWrite == true
	 */
	private processInitialOutlinePixels(directWrite: boolean, color: Color, outlineWidth: number): void;
		// Up and down
						// Special case handling outlineWidth == 1 gives a
						// small but noticeable performance improvement.
		// Left and right
				// Test adjacent pixels in the same 32-bit segment
						// Special case handling outlineWidth == 1 gives a
						// small but noticeable performance improvement.
				// Test adjacent pixels in different 32-bit segments
	/**
	 * Process the outline queue and draw an outline of the pixels
	 * in the queue to the client image buffer.
	 *
	 * @param outlineWidth The width of the outline.
	 * @param color The color of the outline.
	 */
	private processOutlinePixelQueue(outlineWidth: number, color: Color, feather: number): void;
	/**
	 * Draws an outline around a model to an image
	 *
	 * @param localX The local x position of the model
	 * @param localY The local y position of the model
	 * @param localZ The local z position of the model
	 * @param orientation The orientation of the model
	 * @param outlineWidth The width of the outline
	 * @param color The color of the outline
	 */
	private drawModelOutline(model: Model, localX: number, localY: number, localZ: number, orientation: number, outlineWidth: number, color: Color, feather: number): void;
			// No vertex of the model is visible on the screen, so we can
			// assume there are no parts of the model to outline.
		// We can improve performance and reduce memory needed when drawing
		// only a small outline around the model by skipping the pixel queueing
		// and instead raster pixels directly. This only looks right for opaque
		// outlines since some pixels of the outline can get drawn more than once.
		// Performance becomes worse than queueing when using larger outline widths,
		// usually around 10 px outline width according to some basic testing.
	drawOutline(npc: NPC, outlineWidth: number, color: Color, feather: number): void;
			// NPCs z position are calculated based on the tile height of the northeastern tile
	drawOutline(player: Player, outlineWidth: number, color: Color, feather: number): void;
	private drawOutline(gameObject: GameObject, outlineWidth: number, color: Color, feather: number): void;
	private drawOutline(groundObject: GroundObject, outlineWidth: number, color: Color, feather: number): void;
	private drawOutline(itemLayer: ItemLayer, outlineWidth: number, color: Color, feather: number): void;
	private drawOutline(decorativeObject: DecorativeObject, outlineWidth: number, color: Color, feather: number): void;
				// Offset is not used for the second model
	private drawOutline(wallObject: WallObject, outlineWidth: number, color: Color, feather: number): void;
	drawOutline(tileObject: TileObject, outlineWidth: number, color: Color, feather: number): void;
	drawOutline(graphicsObject: GraphicsObject, outlineWidth: number, color: Color, feather: number): void;
	drawOutline(runeLiteObject: RuneLiteObject, outlineWidth: number, color: Color, feather: number): void;
}
}