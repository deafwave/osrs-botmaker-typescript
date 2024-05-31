/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="StatsChanges.d.ts" />
/// <reference path="Stat.d.ts" />
/// <reference path="StatChange.d.ts" />
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
declare namespace net.runelite.client.plugins.itemstats.special {
export class SpicyStew implements Effect
{
	calculate(client: Client): StatsChanges;
		/*
		 * Spice boosts listed in the colour order of [Spicy stew -> Smell]
		 */
		/*
		 * Red spices: Attack, Strength, Defence, Ranged, Magic
		 */
		/*
		 * Yellow spices: Prayer, Agility, Thieving, Slayer, Hunter
		 */
		/*
		 * Orange spices: Smithing, Cooking, Crafting, Firemaking, Fletching, Runecraft, Construction
		 */
		/*
		 * Brown spices: Mining, Herblore, Fishing, Woodcutting, Farming
		 */
	/**
	 * Calculate the potential boost that a spice currently offers,
	 * based on its number of doses in the stew.
	 *
	 * @param spiceDoses Number of doses between 0 and 3.
	 * @return Either 0, +1, +3, or +5.
	 */
	private static spiceBoostOf(spiceDoses: number): number;
	/**
	 * Calculate the fields of a stat change tooltip row.
	 *
	 * @param stat Stat that the spice boost affects.
	 * @param spiceBoost Potential spice boost before capping.
	 * @param client Client API, needed to check current stat values.
	 * @return StatChange object with all required values.
	 */
	private static statChangeOf(stat: Stat, spiceBoost: number, client: Client): StatChange;
}
}