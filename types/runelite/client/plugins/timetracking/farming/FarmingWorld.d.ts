/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="NpcID.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="FarmingRegion.d.ts" />
/// <reference path="int....d.ts" />
/// <reference path="Collection.d.ts" />
/*
 * Copyright (c) 2018, NotFoxtrot <https://github.com/NotFoxtrot>
 * Copyright (c) 2018 Abex
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *     list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 *  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 *  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 *  ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 *  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 *  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.plugins.timetracking.farming {
export class FarmingWorld
{
.comparing(FarmingPatch::getImplementation) 
.thenComparing((FarmingPatch p) -> p.getRegion().getName()) 
.thenComparing(FarmingPatch::getName); 
FarmingRegion farmingGuildRegion;
FarmingWorld() 
		// Some of these patches get updated in multiple regions.
		// It may be worth it to add a specialization for these patches
					//Upstairs sends different varbits
			//The fruit tree patch is always sent when upstairs in 11317
				//Not on region boundary due to Port Sarim Spirit Tree patch
				//Hardwood tree varbits are sent anywhere on plane 0 of fossil island.
				//Varbits get sent 1 tick earlier than expected when climbing certain ladders and stairs
				//Stairs to house on the hill
				//East and west ladders to rope bridge
		//Full 3x3 region area centered on farming guild
		//All of Prifddinas, and all of Prifddinas Underground
			/* Underground */ 12994, 12993, 12737, 12738, 12126, 12127, 13250);
		// Finalize
	private add(r: FarmingRegion, extraRegions: int...): void;
	getRegionsForLocation(location: net.runelite.api.coords.WorldPoint): Collection<FarmingRegion>;
}
}