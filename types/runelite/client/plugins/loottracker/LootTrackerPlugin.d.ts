/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="ItemContainer.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MessageNode.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NpcID.d.ts" />
/// <reference path="ObjectID.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="SpriteID.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="WorldType.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/ItemContainerChanged.d.ts" />
/// <reference path="events/MenuOptionClicked.d.ts" />
/// <reference path="events/NpcDespawned.d.ts" />
/// <reference path="events/PostClientTick.d.ts" />
/// <reference path="events/WidgetLoaded.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2018, Psikoi <https://github.com/psikoi>
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.loottracker {
( ) 
export class LootTrackerPlugin extends Plugin
	// Activity/Event loot handling
	// Herbiboar loot handling
	// Seed Pack loot handling
	// Hespori loot handling
	// Chest loot handling
	// Used by Stone Chest, Isle of Souls chest, Dark Chest
	// Chests opened with keys from slayer tasks
	// Shade chest loot handling
	// Hallow Sepulchre Coffin handling
	// Last man standing map regions
	// Birdhouses
	/*
	 * This map is used when a pickpocket target has a different name in the chat message than their in-game name.
	 * Note that if the two NPCs can be found in the same place, there is a chance of race conditions
	 * occurring when changing targets mid-pickpocket, in which case a different solution may need to be considered.
	 */
	// Soul Wars
	// Tempoross
	// Guardians of the Rift
	// Mahogany Homes
	// Implings
	// Raids
		// session close is fired after the config has been synced and the
		// session has been invalidated, so it is too late to submit loot
		// if there is any.
			// Current queued loot is for the previous profile, so save it first with the current profile key
					// fast drop
				// convertToLootTrackerRecord requires item compositions to be available to get the item name,
				// so it can't be run while the client is starting
				// convertToLootTrackerRecord must be called on client thread
		// For the wiki to determine drop rates based on dmm brackets / identify leagues drops
			// Whisperer death:
			//   loot spawn at z=0, which you can't see since you are in the shadow realm on z=3
			//   npc despawn on z=3
			//   player teleport from z=3 to z=0
			//   server sends zone clear packet
			//   server spawns in the loot, along with any other items already on the ground
			//
			// We take advantage of that the items left on z=0 when you move into the shadow realm are not
			// cleared until the zoneclear packet. So if you record them at the time the whisperer despawns,
			// you can subtract it from the spawned items at the end of the tick.
			// collect all items on z=0
			// the entire arena is in an instance, which appears to be never region aligned,
			// however the template is, so use the region id from it.
			// the player location can't be used because on death the player might have already been teleported.
			// the loot spawns next tick, which is typically in 30 cycles, but
			// network latency can cause it to happen a little later instead.
			// use 59 to be safe.
				// loot is not spawned yet
			// convert to item stack
		// Ignore Last Man Standing and Soul Wars player loots
		// Convert container items to array of ItemStack
			// Get the target's name as listed in the chat box
			// Occasional edge case where the pickpocket message doesn't list the correct name of the NPC (e.g. H.A.M. Members)
		// Check if message is for a clue scroll reward
			// Clue Scrolls use same InventoryID as Barrows
			// Player didn't have the key they needed.
		// Check if message is a birdhouse type
		// when the wilderness chest empties, clear chest loot flag for the next key
		// There are some pickpocket targets who show up in the chat box with a different name (e.g. H.A.M. members -> man/woman)
		// We use the value selected from the right-click menu as a fallback for the event lookup in those cases.
					//Hunters loot sacks are stackable and multiple can be opened in one tick.
					//This provides an accurate count of how many were opened for each event
		// the config changed will update the panel
		// the config changed will update the panel
	/**
	 * Is player currently within the provided map regions
	 */
}