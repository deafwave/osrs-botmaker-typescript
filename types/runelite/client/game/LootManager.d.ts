/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="AnimationID.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NPCComposition.d.ts" />
/// <reference path="NpcID.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="TileItem.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="coords/WorldArea.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/AnimationChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/ItemDespawned.d.ts" />
/// <reference path="events/ItemSpawned.d.ts" />
/// <reference path="events/NpcChanged.d.ts" />
/// <reference path="events/NpcDespawned.d.ts" />
/// <reference path="events/PlayerDespawned.d.ts" />
/// <reference path="ItemStack.d.ts" />
/// <reference path="Collection.d.ts" />
/*
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
declare namespace net.runelite.client.game {
export class LootManager
{
NpcID.CAVE_KRAKEN, AnimationID.CAVE_KRAKEN_DEATH
);
EventBus eventBus;
Client client;
NpcUtil npcUtil;
WorldPoint playerLocationLastTick;
WorldPoint krakenPlayerLocation;
NPC delayedLootNpc;
int delayedLootTick;
List<WorldArea> delayedLootAreas;
LootManager(EventBus eventBus, Client client, NpcUtil npcUtil) 
	onNpcDespawned(npcDespawned: net.runelite.api.events.NpcDespawned): void;
					// these monsters die with >0 hp, so we just look for coincident
					// item spawn with despawn
	onPlayerDespawned(playerDespawned: net.runelite.api.events.PlayerDespawned): void;
		// Only care about dead Players
	onItemSpawned(itemSpawned: net.runelite.api.events.ItemSpawned): void;
	onItemDespawned(itemDespawned: net.runelite.api.events.ItemDespawned): void;
	onAnimationChanged(e: net.runelite.api.events.AnimationChanged): void;
		// We only care about certain NPCs
		// Current animation is death animation?
				// Big Kraken drops loot wherever player is standing when animation starts.
				// These NPCs drop loot on death animation, which is right now.
	onNpcChanged(npcChanged: net.runelite.api.events.NpcChanged): void;
			// it is too early to call getAdjacentSquareLootTile() because the player might move before the
			// loot location is calculated by the server.
	onGameTick(gameTick: net.runelite.api.events.GameTick): void;
	private processDelayedLoot(): void;
			// This is only for nightmare
	private processNpcLoot(npc: NPC): void;
	private getItemStacksFromAreas(areas: Array<net.runelite.api.coords.WorldArea>): Array<ItemStack>;
	private getDropLocations(npc: NPC): Array<net.runelite.api.coords.WorldArea>;
				// Nex loot is under the player, or under nex
				// Bones are dropped under the center of the boss and loot is dropped under the player
	private getAdjacentSquareLootTile(npc: NPC): net.runelite.api.coords.WorldPoint;
	/**
	 * Get the list of items present at the provided WorldPoint that spawned this tick.
	 *
	 * @param worldPoint the location in question
	 * @return the list of item stacks
	 */
	getItemSpawns(worldPoint: net.runelite.api.coords.WorldPoint): Collection<ItemStack>;
	private clearDelayedLootNpc(): void;
}
}