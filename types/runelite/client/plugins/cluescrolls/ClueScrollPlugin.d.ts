/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="EnumComposition.d.ts" />
/// <reference path="EnumID.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="ItemContainer.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="MenuAction/RUNELITE_OVERLAY.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="ObjectComposition.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="Scene.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="TileObject.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="annotations/Component.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/CommandExecuted.d.ts" />
/// <reference path="events/DecorativeObjectDespawned.d.ts" />
/// <reference path="events/DecorativeObjectSpawned.d.ts" />
/// <reference path="events/GameObjectDespawned.d.ts" />
/// <reference path="events/GameObjectSpawned.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/GroundObjectDespawned.d.ts" />
/// <reference path="events/GroundObjectSpawned.d.ts" />
/// <reference path="events/ItemContainerChanged.d.ts" />
/// <reference path="events/MenuOptionClicked.d.ts" />
/// <reference path="events/NpcDespawned.d.ts" />
/// <reference path="events/NpcSpawned.d.ts" />
/// <reference path="events/WallObjectDespawned.d.ts" />
/// <reference path="events/WallObjectSpawned.d.ts" />
/// <reference path="events/WidgetLoaded.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2016-2017, Seth <Sethtroll3@gmail.com>
 * Copyright (c) 2018, Lotto <https://github.com/devLotto>
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
declare namespace net.runelite.client.plugins.cluescrolls {
( ) 
export class ClueScrollPlugin extends Plugin
	// Some objects will only update to their "active" state when changing to their plane after varbit changes,
	// which take one extra tick to fire after the plane change. These fields are used to track those changes and delay
	// scans of the current plane's tiles accordingly.
		// Add runes from rune pouch to inventoryItems
		// Check if item was removed from inventory
			// Check if clue was removed from inventory
		// if three step clue check for clue scroll pieces
				// Always set hint arrow to first seen NPC
				// Only set the location hint arrow if we do not already have more accurate location
		// Delay one tick when changing planes before scanning for new named objects on the new plane
		// Load the current plane's tiles if a tick has elapsed since the player has changed planes
		// or upon reaching a logged in state after hopping worlds
		// Reset clue when receiving a new beginner or master clue
		// These clues use a single item ID, so we cannot detect step changes based on the item ID changing
		// Remove line breaks and also the rare occasion where there are double line breaks
		// three step cryptic clues need unedited text to check which steps are already done
	/**
	 * Example input: "00 degrees 00 minutes north 07 degrees 13 minutes west"
	 * Note: some clues use "1 degree" instead of "01 degrees"
	 */
		// Convert from overworld to real
		// Use mirror point as mirrorLocation if there is one
	/**
	 * This conversion is explained on
	 * https://oldschool.runescape.wiki/w/Treasure_Trails/Guide/Coordinates
	 */
		// Center of the Observatory
					// Check impostors
			// Always set hint arrow to first seen NPC
	/**
	 * Scans all of the current plane's loaded tiles for {@link TileObject}s and passes any found objects to
	 * {@link ClueScrollPlugin#checkClueNamedObject(ClueScroll, TileObject)} for storing in the cache of discovered
	 * named objects.
	 *
	 * @param clue The active clue scroll
	 */
		// Search loaded tiles for objects
	/**
	 * Checks passed objects against the active clue's object names and regions. If the clue is a
	 * {@link NamedObjectClueScroll} and the object matches its allowable object names and is within its regions, the
	 * object will be stored in the cache of discovered named objects.
	 *
	 * @param clue   The active clue scroll
	 * @param object The spawned or scanned object
	 */
		// If we have a clue, save that knowledge
		// so the clue window doesn't have to be open.
		// Visible area of widget
	// from [proc,poh_costumes_countmembers] and [proc,poh_costumes_countalternates]
					// check members in the group
					// single member group
}