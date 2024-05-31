/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="MenuAction/RUNELITE_OVERLAY_CONFIG.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="OverlayPanel.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/*
 * Copyright (c) 2018, Seth <http://github.com/sethtroll>
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
declare namespace net.runelite.client.plugins.barrows {
export class BarrowsBrotherSlainOverlay extends OverlayPanel
{
Client client;
BarrowsBrotherSlainOverlay(BarrowsPlugin plugin, Client client) 
	render(graphics: Graphics2D): Dimension;
		// Only render the brothers slain overlay if the vanilla interface is loaded
	/**
	 * Compute the barrows reward potential. Potential rewards are based off of the amount of
	 * potential.
	 * <p>
	 * The reward potential thresholds are as follows:
	 * Mind rune - 381
	 * Chaos rune - 506
	 * Death rune - 631
	 * Blood rune - 756
	 * Bolt rack - 881
	 * Half key - 1006
	 * Dragon med - 1012
	 *
	 * @return potential, 0-1012 inclusive
	 * @see <a href="https://twitter.com/jagexkieren/status/705428283509366785?lang=en">source</a>
	 */
	private rewardPotential(): number;
		// this is from [proc,barrows_overlay_reward]
}
}