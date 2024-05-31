/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="StatsChanges.d.ts" />
/*
 * Copyright (c) 2022, Jordan Atwood <nightfirecat@nightfirec.at>
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
declare namespace net.runelite.client.plugins.itemstats.potions {
export class MixedPotion implements Effect
{
int heal;
Effect potion;
	private calculate(client: Client): StatsChanges;
					/*
					 * Mixed potions do not exist ingame for all types of potions. In fact, at the time of writing, the
					 * Zamorak mix is the only mixed potion which includes base potion effects which affect a player's
					 * Hitpoints. Working from what we know of how these behave, this code assumes that mixed potions
					 * including Hitpoints changes will only include negative HP effects as the
					 * absolute/relative/theoretical end values cannot be determined otherwise. For this reason, potions
					 * with positive HP effects will not have their stat changes affected here.
					 */
					/*
					 * Mixed potions apply two hitpoints changes, both based on the current hitpoints value. Because of
					 * this, the two effects are calculated independently of each other, both against the same starting
					 * hitpoints value and later combined. These effects are:
					 *   1. A food effect of `heal` amount
					 *   2. Deduct hitpoints equal to the potion's boost amount
					 */
}
}