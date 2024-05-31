/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="Perspective.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="WallObject.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/*
 * Copyright (c) 2018, Seth <Sethtroll3@gmail.com>
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
 * Copyright (c) 2018, Lars <lars.oernlo@gmail.com>
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
declare namespace net.runelite.client.plugins.motherlode {
export class MotherlodeSceneOverlay extends Overlay
{
Client client;
MotherlodePlugin plugin;
MotherlodeConfig config;
BufferedImage miningIcon;
BufferedImage hammerIcon;
MotherlodeSceneOverlay(Client client, MotherlodePlugin plugin, MotherlodeConfig config, SkillIconManager iconManager, ItemManager itemManager) 
	render(graphics: Graphics2D): Dimension;
	private renderTiles(graphics: Graphics2D, local: Player): void;
					// Only draw veins on the same level
	private renderVein(graphics: Graphics2D, vein: WallObject): void;
	private renderRock(graphics: Graphics2D, rock: GameObject): void;
	private renderBrokenStrut(graphics: Graphics2D, brokenStrut: GameObject): void;
}
}