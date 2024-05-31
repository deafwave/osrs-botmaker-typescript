/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Food.d.ts" />
/// <reference path="DeltaCalculator.d.ts" />
/// <reference path="SingleEffect....d.ts" />
/// <reference path="Effect.d.ts" />
/// <reference path="Stat.d.ts" />
/// <reference path="SimpleStatBoost.d.ts" />
/// <reference path="DeltaPercentage.d.ts" />
/// <reference path="StatBoost.d.ts" />
/// <reference path="RangeStatBoost.d.ts" />
/*
 * Copyright (c) 2016-2018, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.itemstats {
export class Builders
{
	static food(diff: number): Food;
	static food(p: DeltaCalculator): Food;
	static combo(effect: SingleEffect...): Effect;
	static boost(stat: Stat, boost: number): SimpleStatBoost;
	static boost(stat: Stat, p: DeltaCalculator): SimpleStatBoost;
	static heal(stat: Stat, boost: number): SimpleStatBoost;
	static heal(stat: Stat, p: DeltaCalculator): SimpleStatBoost;
	static dec(stat: Stat, boost: number): SimpleStatBoost;
	static perc(perc: number, delta: number): DeltaPercentage;
	static range(a: StatBoost, b: StatBoost): RangeStatBoost;
}
}