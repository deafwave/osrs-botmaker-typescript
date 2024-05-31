/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="AnimationID.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_3A.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_ADAMANT.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_BLACK.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_BRONZE.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_CRYSTAL.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_CRYSTAL_INACTIVE.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_DRAGON.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_IRON.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_MITHRIL.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_RUNE.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_STEEL.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_3A_AXE.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_ADAMANT.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_BLACK.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_BRONZE.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_CRYSTAL.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_DRAGON.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_DRAGON_OR.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_GILDED.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_INFERNAL.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_IRON.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_MITHRIL.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_RUNE.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_STEEL.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_TRAILBLAZER.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NpcID.d.ts" />
/// <reference path="NullObjectID.d.ts" />
/// <reference path="ObjectID.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/AnimationChanged.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/GameObjectDespawned.d.ts" />
/// <reference path="events/GameObjectSpawned.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/InteractingChanged.d.ts" />
/// <reference path="events/ItemSpawned.d.ts" />
/// <reference path="events/NpcDespawned.d.ts" />
/// <reference path="events/NpcSpawned.d.ts" />
/// <reference path="events/ScriptPreFired.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2017, Seth <Sethtroll3@gmail.com>
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
declare namespace net.runelite.client.plugins.woodcutting {
( ) 
export class WoodcuttingPlugin extends Plugin
	// Forestry
			// Clear the clue tier that has previously spawned
			// This will be set only if one of the clue nests has spawned. It will then be reset the next game tick.
			/* redwood trees */
			/* redwood trees */
				// depleted redwood
				// farming guild redwood
			// the id passed to the script is the stump, not the tree, but it is prior to the tree
			// despawning, so we can't match by id. Probably this is good enough.
				// fallthrough
}