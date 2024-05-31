/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="ItemContainer.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NpcID.d.ts" />
/// <reference path="NullObjectID.d.ts" />
/// <reference path="ObjectID.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/GameObjectDespawned.d.ts" />
/// <reference path="events/GameObjectSpawned.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/InteractingChanged.d.ts" />
/// <reference path="events/ItemContainerChanged.d.ts" />
/// <reference path="events/NpcDespawned.d.ts" />
/// <reference path="events/NpcSpawned.d.ts" />
/// <reference path="events/VarbitChanged.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2020, dekvall <https://github.com/dekvall>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.plugins.driftnet {
( ) 
export class DriftNetPlugin extends Plugin
				// If the fish is on an adjacent tile, the interaction change happens after
				// the chat message is sent, so we arm it
}