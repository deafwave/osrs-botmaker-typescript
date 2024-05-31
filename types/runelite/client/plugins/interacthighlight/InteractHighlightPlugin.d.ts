/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="DecorativeObject.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="GroundObject.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="Scene.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="TileObject.d.ts" />
/// <reference path="WallObject.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/InteractingChanged.d.ts" />
/// <reference path="events/MenuOptionClicked.d.ts" />
/// <reference path="events/NpcDespawned.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="Plugin.d.ts" />
/// <reference path="ConfigManager.d.ts" />
/// <reference path="InteractHighlightConfig.d.ts" />
/*
 * Copyright (c) 2021, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.interacthighlight {
( ) 
export class InteractHighlightPlugin extends Plugin
{
OverlayManager overlayManager;
InteractHighlightOverlay interactHighlightOverlay;
Client client;
TileObject interactedObject;
NPC interactedNpc;
boolean attacked;
int clickTick;
int gameCycle;
	private provideConfig(configManager: ConfigManager): InteractHighlightConfig;
	private startUp(): void;
	private shutDown(): void;
	onGameStateChanged(gameStateChanged: net.runelite.api.events.GameStateChanged): void;
	onNpcDespawned(npcDespawned: net.runelite.api.events.NpcDespawned): void;
	onGameTick(gameTick: net.runelite.api.events.GameTick): void;
			// when the destination is reached, clear the interacting object
	onInteractingChanged(interactingChanged: net.runelite.api.events.InteractingChanged): void;
	onMenuOptionClicked(menuOptionClicked: net.runelite.api.events.MenuOptionClicked): void;
			// Any menu click which clears an interaction
	findTileObject(x: number, y: number, id: number): TileObject;
	getInteractedTarget(): Actor | null;
}
}