/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="ItemID/*.d.ts" />
/// <reference path="ObjectComposition.d.ts" />
/// <reference path="ObjectID/CRATE_18506.d.ts" />
/// <reference path="ObjectID/CRATE_2620.d.ts" />
/// <reference path="ObjectID/CRATE_354.d.ts" />
/// <reference path="ObjectID/CRATE_357.d.ts" />
/// <reference path="ObjectID/CRATE_6616.d.ts" />
/// <reference path="TileObject.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="ClueScroll implements ObjectClueScroll.d.ts" />
/// <reference path="new.d.ts" />
/// <reference path="ClueScrollPlugin.d.ts" />
/// <reference path="PanelComponent.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="MapClue.d.ts" />
/*
 * Copyright (c) 2018, Lotto <https://github.com/devLotto>
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
declare namespace net.runelite.client.plugins.cluescrolls.clues {
export class MapClue extends ClueScroll implements ObjectClueScroll
{
	static MapClue(CLUE_SCROLL_EASY_12179, WorldPoint(3300: new,  3291,  0): new;
);
int itemId;
WorldPoint location;
int objectId;
String description;
MapClue(int itemId, WorldPoint location, int objectId) 
MapClue(int itemId, WorldPoint location, String description) 
MapClue(int itemId, WorldPoint location, int objectId, String description) 
	getLocation(plugin: ClueScrollPlugin): net.runelite.api.coords.WorldPoint;
	makeOverlayHint(panelComponent: PanelComponent, plugin: ClueScrollPlugin): void;
	makeWorldOverlayHint(graphics: Graphics2D, plugin: ClueScrollPlugin): void;
		// Mark game object
		// Mark tile
	static forItemId(itemId: number): MapClue;
	getObjectIds(): number[];
	getConfigKeys(): number[];
}
}