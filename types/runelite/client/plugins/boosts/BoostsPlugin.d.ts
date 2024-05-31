/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="MenuAction/RUNELITE_OVERLAY_CONFIG.d.ts" />
/// <reference path="Prayer.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/StatChanged.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2016-2017, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.boosts {
( ) 
export class BoostsPlugin extends Plugin
		// Add infoboxes for everything at startup and then determine inside if it will be rendered
				// After world hop and log out timers are in undefined state so just reset
			// Stat was restored down (from buff)
			// Stat was restored up (from debuff)
		// Reset is boosted
		// Check if we are still boosted
	/**
	 * Calculates the amount of time until boosted stats decay,
	 * accounting for the effect of preserve prayer.
	 * Preserve extends the time of boosted stats by 50% while active.
	 * The length of a boost is split into 4 sections of 15 seconds each.
	 * If the preserve prayer is active for the entire duration of the final
	 * section it will "activate" adding an additional 15 second section
	 * to the boost timing. If again the preserve prayer is active for that
	 * entire section a second 15 second section will be added.
	 *
	 * Preserve is only required to be on for the 4th and 5th sections of the boost timer
	 * to gain full effect (seconds 45-75).
	 *
	 * @return integer value in ticks until next boost change
	 */
	/**
	 * Restoration from debuff is separate timer as restoration from buff because of preserve messing up the buff timer.
	 * Restoration timer is always in 100 tick cycles.
	 *
	 * @return integer value in ticks until next stat restoration up
	 */
	/**
	 * Converts tick-based time to accurate second time
	 * @param time tick-based time
	 * @return second-based time
	 */
}