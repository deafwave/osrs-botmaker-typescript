/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="DecorativeObject.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="GroundObject.d.ts" />
/// <reference path="KeyCode.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="ObjectComposition.d.ts" />
/// <reference path="Scene.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="TileObject.d.ts" />
/// <reference path="WallObject.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/DecorativeObjectDespawned.d.ts" />
/// <reference path="events/DecorativeObjectSpawned.d.ts" />
/// <reference path="events/GameObjectDespawned.d.ts" />
/// <reference path="events/GameObjectSpawned.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GroundObjectDespawned.d.ts" />
/// <reference path="events/GroundObjectSpawned.d.ts" />
/// <reference path="events/MenuEntryAdded.d.ts" />
/// <reference path="events/WallObjectDespawned.d.ts" />
/// <reference path="events/WallObjectSpawned.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2018, Tomas Slusny <slusnucky@gmail.com>
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
declare namespace net.runelite.client.plugins.objectindicators {
( ) 
export class ObjectIndicatorsPlugin extends Plugin
				// load points for region
			// Reload points with new map regions
		// add a few default colors
		// add a few default colors
				// default fill color depends on the highlight type. just use a=50 from hull fill.
		// object.getId() is always the base object id, getObjectComposition transforms it to
		// the correct object we see
		// Name is probably never "null" - however prevent adding it if it is, as it will
		// become ambiguous as objects with no name are assigned name "null"
		// rebuild the ColorTileObject from the new config
			// object is under a bridge, which can't be marked anyway
			// Multiloc names are instead checked in the overlay
				// was marked, but name has changed
		// Menu action EXAMINE_OBJECT sends the transformed object id, not the base id, unlike
		// all of the GAME_OBJECT_OPTION actions, so check the id against the impostor ids
	/** mark or unmark an object
	 *
	 * @param objectComposition transformed composition of object based on vars
	 * @param name name of objectComposition
	 * @param object tile object, for multilocs object.getId() is the base id
	 */
			// use the default config values
		// Find the ObjectPoint for the given composition, object, and world point. There are two cases:
		// 1) object is a multiloc, the name may have changed since marking - match from base id
		// 2) not a multiloc, but an object has spawned with an identical name and a different
		//    id as what was originally marked
		// Prior to multiloc support the plugin would mark objects named "null", which breaks
		// in most cases due to the specific object being identified being ambiguous, so remove
		// them
}