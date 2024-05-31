/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Perspective.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="TileObject.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="Color.d.ts" />
/// <reference path="Stroke.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/// <reference path="OverlayPosition.d.ts" />
/// <reference path="Rectangle.d.ts" />
/// <reference path="java.awt.Point.d.ts" />
/*
 * Copyright (c) 2016-2017, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.ui.overlay {
export class OverlayUtil
{
	private static renderPolygon(graphics: Graphics2D, poly: Shape, color: Color): void;
	static renderPolygon(graphics: Graphics2D, poly: Shape, color: Color, borderStroke: Stroke): void;
	static renderPolygon(graphics: Graphics2D, poly: Shape, color: Color, fillColor: Color, borderStroke: Stroke): void;
	static renderMinimapLocation(graphics: Graphics2D, mini: Point, color: Color): void;
/** @deprecated */
	static renderMinimapRect(client: Client, graphics: Graphics2D, center: Point, width: number, height: number, color: Color): void;
	static renderTextLocation(graphics: Graphics2D, txtLoc: Point, text: string, color: Color): void;
	static renderImageLocation(client: Client, graphics: Graphics2D, localPoint: net.runelite.api.coords.LocalPoint, image: BufferedImage, zOffset: number): void;
	static renderImageLocation(graphics: Graphics2D, imgLoc: Point, image: BufferedImage): void;
	static renderActorOverlay(graphics: Graphics2D, actor: Actor, text: string, color: Color): void;
	static renderActorOverlayImage(graphics: Graphics2D, actor: Actor, image: BufferedImage, color: Color, zOffset: number): void;
	static renderTileOverlay(graphics: Graphics2D, tileObject: TileObject, text: string, color: Color): void;
	static renderTileOverlay(client: Client, graphics: Graphics2D, localLocation: net.runelite.api.coords.LocalPoint, image: BufferedImage, color: Color): void;
	static renderHoverableArea(graphics: Graphics2D, area: Shape, mousePosition: Point, fillColor: Color, borderColor: Color, borderHoverColor: Color): void;
	static setGraphicProperties(graphics: Graphics2D): void;
	static shiftSnapCorner(overlayPosition: OverlayPosition, snapCorner: Rectangle, bounds: Rectangle, padding: number): void;
		// translate corner for padding and also based on where the overlay bounds are now
	static transformPosition(position: OverlayPosition, dimension: Dimension): java.awt.Point;
				// FALLTHROUGH
}
}