/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Quest.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="dbtable/DBTableID.d.ts" />
/// <reference path="events/ClientTick.d.ts" />
/// <reference path="events/ScriptPostFired.d.ts" />
/// <reference path="events/StatChanged.d.ts" />
/// <reference path="worldmap/MapElementConfig.d.ts" />
/// <reference path="worldmap/WorldMap.d.ts" />
/// <reference path="worldmap/WorldMapIcon.d.ts" />
/// <reference path="worldmap/WorldMapRegion.d.ts" />
/// <reference path="worldmap/WorldMapRenderer.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2018, Morgan Lewis <https://github.com/MESLewis>
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
declare namespace net.runelite.client.plugins.worldmap {
( ) 
export class WorldMapPlugin extends Plugin
		// Original size of world map icons
		//A size of 17 gives us a buffer when triggering tooltips
		// Quest icons are a bit bigger than regular icons
		// A size of 25 aligns the quest icons when converting the world map point to pixel coordinates
		// The new quest icons must be offset by 5, for a size of 25, to align when drawing on top of the original icon
			// this is called whenever the map is opened or the map is changed
		// the world map renderer, which contains the regions with the icons, doesn't load
		// its data until it is rendered
			// this relies on the code in Hooks to reinitialize the map after is closed to avoid
			// running after the map is closed
		// WorldMapRenderer only loads icons that are visible, so lazy load the quest start locations by checking
		// what icons are loaded each tick.
								// rfd subquests all have the same map element
							// our quest ids are actually dbrow ids
		// quest points are lazy loaded in the client tick event
}