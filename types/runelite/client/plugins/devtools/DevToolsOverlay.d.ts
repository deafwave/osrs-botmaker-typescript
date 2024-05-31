/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Animation.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="DecorativeObject.d.ts" />
/// <reference path="DynamicObject.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="GraphicsObject.d.ts" />
/// <reference path="ItemLayer.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NPCComposition.d.ts" />
/// <reference path="Node.d.ts" />
/// <reference path="Perspective.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="Projectile.d.ts" />
/// <reference path="Scene.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="TileItem.d.ts" />
/// <reference path="TileObject.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="Color.d.ts" />
/*
 * Copyright (c) 2017, Kronos <https://github.com/KronosDesign>
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
declare namespace net.runelite.client.plugins.devtools {
export class DevToolsOverlay extends Overlay
{
Client client;
DevToolsPlugin plugin;
TooltipManager toolTipManager;
DevToolsOverlay(Client client, DevToolsPlugin plugin, TooltipManager toolTipManager) 
	render(graphics: Graphics2D): Dimension;
	private renderRoofs(graphics: Graphics2D): void;
	private renderPlayers(graphics: Graphics2D): void;
	private renderNpcs(graphics: Graphics2D): void;
	private renderTileObjects(graphics: Graphics2D): void;
	private renderTileTooltip(graphics: Graphics2D, tile: Tile): void;
	private renderMovementInfo(graphics: Graphics2D, tile: Tile): void;
	private renderGroundItems(graphics: Graphics2D, tile: Tile, player: Player): void;
	private renderGameObjects(graphics: Graphics2D, tile: Tile, player: Player): void;
	private renderTileObject(graphics: Graphics2D, tileObject: TileObject, player: Player, color: Color): void;
	private renderDecorObject(graphics: Graphics2D, tile: Tile, player: Player): void;
	private renderProjectiles(graphics: Graphics2D): void;
	private renderGraphicsObjects(graphics: Graphics2D): void;
}
}