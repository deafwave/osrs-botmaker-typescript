/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/JavaScriptCallback.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="worldmap/WorldMap.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="Rectangle.d.ts" />
/// <reference path="WorldMapPoint.d.ts" />
/*
 * Copyright (c) 2018, Morgan Lewis <https://github.com/MESLewis>
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
declare namespace net.runelite.client.ui.overlay.worldmap {
export class WorldMapOverlay extends Overlay
{
WorldMapPointManager worldMapPointManager;
Client client;
WorldMapPoint hoveredPoint;
WorldMapOverlay( Client client, WorldMapPointManager worldMapPointManager) 
	render(graphics: Graphics2D): Dimension;
					// Get a smaller rect for edge-snapped icons so they display correctly at the edge
					// Make the unsnap rect slightly smaller so a smaller snapped image doesn't cause a freak out
	/**
	 * Get the screen coordinates for a WorldPoint on the world map
	 *
	 * @param worldPoint WorldPoint to get screen coordinates of
	 * @return Point of screen coordinates of the center of the world point
	 */
	mapWorldPointToGraphicsPoint(worldPoint: net.runelite.api.coords.WorldPoint): Point;
			//Offset in tiles from anchor sides
			//Center on tile.
	/**
	 * Gets a clip area which excludes the area of widgets which overlay the world map.
	 *
	 * @param baseRectangle The base area to clip from
	 * @return              An {@link Area} representing <code>baseRectangle</code>, with the area
	 *                      of visible widgets overlaying the world map clipped from it.
	 */
	private getWorldMapClipArea(baseRectangle: Rectangle): Shape;
		// The sun g2d implementation is much more efficient at applying clips which are subclasses of rectangle2d,
		// so use that as the clip shape if possible
	private drawTooltip(graphics: Graphics2D, worldPoint: WorldMapPoint): void;
	private clipToRectangle(drawPoint: Point, mapDisplayRectangle: Rectangle): Point;
}
}