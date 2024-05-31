/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="GraphicID.d.ts" />
/// <reference path="GraphicsObject.d.ts" />
/// <reference path="KeyCode.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NPCComposition.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/GraphicsObjectCreated.d.ts" />
/// <reference path="events/MenuEntryAdded.d.ts" />
/// <reference path="events/NpcChanged.d.ts" />
/// <reference path="events/NpcDespawned.d.ts" />
/// <reference path="events/NpcSpawned.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2018, James Swindle <wilingua@gmail.com>
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
declare namespace net.runelite.client.plugins.npchighlight {
( ) 
export class NpcIndicatorsPlugin extends Plugin
	// Option added to NPC menu
	/**
	 * NPCs to highlight
	 */
	/**
	 * Dead NPCs that should be displayed with a respawn indicator if the config is on.
	 */
	/**
	 * The time when the last game tick event ran.
	 */
	/**
	 * Tagged NPCs that have died at some point, which are memorized to
	 * remember when and where they will respawn
	 */
	/**
	 * Highlight strings from the configuration
	 */
	/**
	 * NPC ids marked with the Tag option
	 */
	/**
	 * Tagged NPCs that spawned this tick, which need to be verified that
	 * they actually spawned and didn't just walk into view range.
	 */
	/**
	 * Tagged NPCs that despawned this tick, which need to be verified that
	 * they actually spawned and didn't just walk into view range.
	 */
	/**
	 * World locations of graphics object which indicate that an
	 * NPC teleported that were played this tick.
	 */
	/**
	 * The players location on the last game tick.
	 */
	/**
	 * When hopping worlds, NPCs can spawn without them actually respawning,
	 * so we would not want to mark it as a real spawn in those cases.
	 */
			// Add tag and tag-all options
			// Only add Untag-All option to npcs not highlighted by a wildcard entry, because untag-all will not remove wildcards
			// Add tag options only if the npc is currently tagged
		// add a few default colors
			// this trips a config change which triggers the overlay rebuild
			// NPCs are still in the client after logging out,
			// but we don't want to highlight those.
			// NPC is not highlighted
						// NPC teleported away, so we don't want to add the respawn timer
						// NPC teleported here, so we don't want to update the respawn timer
						// By killing a monster and leaving the area before seeing it again, an erroneously lengthy
						// respawn time can be recorded. Thus, if the respawn time is already set and is greater than
						// the observed time, assume that the lower observed respawn time is correct.
					// An NPC can move in the same tick as it spawns, so we also have
					// to consider whatever tile is behind the npc
		// if set, value from config overrides global config
	/**
	 * get some of the in-use colors from nearby npcs to prepopulate the menu
	 */
}