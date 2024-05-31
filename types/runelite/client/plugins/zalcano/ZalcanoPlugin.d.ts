/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="GraphicID/GRAPHICS_OBJECT_ROCKFALL.d.ts" />
/// <reference path="GraphicID/ZALCANO_PROJECTILE_FIREBALL.d.ts" />
/// <reference path="GraphicsObject.d.ts" />
/// <reference path="Hitsplat.d.ts" />
/// <reference path="HitsplatID/DAMAGE_MAX_ME.d.ts" />
/// <reference path="HitsplatID/DAMAGE_MAX_ME_ORANGE.d.ts" />
/// <reference path="HitsplatID/DAMAGE_ME.d.ts" />
/// <reference path="HitsplatID/DAMAGE_ME_ORANGE.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NpcID.d.ts" />
/// <reference path="NpcID/ZALCANO.d.ts" />
/// <reference path="ObjectID.d.ts" />
/// <reference path="Projectile.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/GameObjectSpawned.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GraphicsObjectCreated.d.ts" />
/// <reference path="events/HitsplatApplied.d.ts" />
/// <reference path="events/NpcChanged.d.ts" />
/// <reference path="events/NpcDespawned.d.ts" />
/// <reference path="events/NpcSpawned.d.ts" />
/// <reference path="events/ProjectileMoved.d.ts" />
/// <reference path="events/VarbitChanged.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2019, Hexagon <hexagon@fking.work>
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
declare namespace net.runelite.client.plugins.zalcano {
( ) 
export class ZalcanoPlugin extends Plugin
{
Client client;
OverlayManager overlayManager;
ZalcanoOverlay overlay;
ZalcanoPanel panel;
ClientThread clientThread;
LocalPoint targetedGlowingRock;
int targetedGlowingRockEndCycle;
WorldPoint lastGlowingRock;
int healthDamage;
int shieldDamage;
boolean inCavern;
	private static startUp(): void;
	private shutDown(): void;
	onGraphicsObjectCreated(graphicsObjectCreated: net.runelite.api.events.GraphicsObjectCreated): void;
	onGameStateChanged(event: net.runelite.api.events.GameStateChanged): void;
	onVarbitChanged(event: net.runelite.api.events.VarbitChanged): void;
	onNpcSpawned(event: net.runelite.api.events.NpcSpawned): void;
	onNpcDespawned(event: net.runelite.api.events.NpcDespawned): void;
	private resetDamageCounter(): void;
	onGameObjectSpawned(event: net.runelite.api.events.GameObjectSpawned): void;
	onNpcChanged(event: net.runelite.api.events.NpcChanged): void;
	onProjectileMoved(event: net.runelite.api.events.ProjectileMoved): void;
	onHitsplatApplied(event: net.runelite.api.events.HitsplatApplied): void;
	private isHealthbarActive(): boolean;
}
}