/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Perspective.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/*
 * Copyright (c) 2019, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.mining {
export class MiningRocksOverlay extends Overlay
{
Client client;
MiningPlugin plugin;
MiningRocksOverlay(Client client, MiningPlugin plugin) 
	render(graphics: Graphics2D): Dimension;
			// Only draw timer for veins on the same level in motherlode mine
			// Recolour pie during the portion of the timer where they may respawn
	/**
	 * Checks if the given point is "upstairs" in the mlm.
	 * The upper floor is actually on z=0.
	 *
	 * This method assumes that the given point is already in the mlm
	 * and is not meaningful when outside the mlm.
	 *
	 * @param localPoint the LocalPoint to be tested
	 * @return true if localPoint is at same height as mlm upper floor
	 */
	private isUpstairsMotherlode(localPoint: net.runelite.api.coords.LocalPoint): boolean;
}
}