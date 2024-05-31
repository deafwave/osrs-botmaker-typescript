/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="EquipmentInventorySlot.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="Hitsplat.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="ItemContainer.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NpcID.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="coords/WorldArea.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/CommandExecuted.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/HitsplatApplied.d.ts" />
/// <reference path="events/NpcChanged.d.ts" />
/// <reference path="events/NpcDespawned.d.ts" />
/// <reference path="events/ScriptPostFired.d.ts" />
/// <reference path="events/VarbitChanged.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2018, Raqes <j.raqes@gmail.com>
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
declare namespace net.runelite.client.plugins.specialcounter {
( ) 
export class SpecialCounterPlugin extends Plugin
	// expected tick the hitsplat will happen on
	// most recent hitsplat and the target it was on
		// This event runs prior to player and npc updating, making getInteracting() too early to call..
		// defer this with invokeLater(), but note that this will run after incrementing the server tick counter
		// so we capture the current server tick counter here for use in computing the final hitsplat tick
				// unrecognized special attack weapon
		// Ignore all hitsplats other than mine
		// only check hitsplats applied to the target we are specing
		// If this is a new NPC reset the counters
		// The weapon hitsplat is always last, after other hitsplats which occur on the same tick such as from
		// venge or thralls.
		// Duke does not despawn when dead
			// If not interacting with any npcs currently, add to interacting list
			// Otherwise we only add the count if it is against a npc we are already tracking
		// Display a notification if special attack thresholds are met
		// If in a party, add hit to partySpecs for the infobox tooltip
}