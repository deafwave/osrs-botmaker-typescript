/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
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
/**
 * A single stat change
 */
export class StatChange
{
	/**
	 * The stat which will be boosted (or damaged).
	 */
Stat stat;
	/**
	 * Relative change that will occur if the stat boost is applied now.
	 */
int relative;
	/**
	 * Theoretical change that can occur before boost cap is enforced.
	 */
int theoretical;
	/**
	 * Absolute total of the stat after applying the boost.
	 */
int absolute;
	/**
	 * How beneficial this stat boost will be to the player.
	 */
Positivity positivity;
	/**
	 * Returns a human-readable formatted relative boost.
	 * Should be the boost amount prefixed by "+" or "-".
	 *
	 * @return The formatted relative boost amount
	 */
	private getFormattedRelative(): string;
	/**
	 * Returns a human-readable formatted theoretical boost.
	 * Should be the boost amount prefixed by "+" or "-".
	 *
	 * @return The formatted theoretical boost amount
	 */
	getFormattedTheoretical(): string;
	static formatBoost(boost: number): string;
}
}