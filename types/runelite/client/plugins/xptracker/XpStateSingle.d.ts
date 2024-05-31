/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Experience.d.ts" />
/// <reference path="XpActionType.d.ts" />
/// <reference path="XpAction.d.ts" />
/// <reference path="XpGoalTimeType.d.ts" />
/// <reference path="XpSnapshotSingle.d.ts" />
/*
 * Copyright (c) 2017, Cameron <moberg@tuta.io>
 * Copyright (c) 2018, Levi <me@levischuck.com>
 * Copyright (c) 2020, Anthony <https://github.com/while-loop>
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
declare namespace net.runelite.client.plugins.xptracker {
export class XpStateSingle
{
long startXp;
long lastChangeMillis;
XpStateSingle(long startXp) 
	getXpAction(type: XpActionType): XpAction;
	getCurrentXp(): number;
	setXpGainedSinceReset(xpGainedSinceReset: number): void;
	getTotalXpGained(): number;
	private getActionsHr(): number;
	private toHourly(value: number): number;
	private getTimeElapsedInSeconds(): number;
		// If the skill started just now, we can divide by near zero, this results in odd behavior.
		// To prevent that, pretend the skill has been active for a minute (60 seconds)
		// This will create a lower estimate for the first minute,
		// but it isn't ridiculous like saying 2 billion XP per hour.
	private getXpRemaining(): number;
	private getActionsRemaining(): number;
			// Let's not divide by zero (or negative)
				// Make sure to account for the very last action at the end
	private getSkillProgress(): number;
	private getSecondsTillLevel(): number;
		// formula is xpRemaining / xpPerSecond
		// xpPerSecond being xpGained / seconds
		// This can be simplified so division is only done once and we can work in whole numbers!
	private getTimeTillLevel(goalTimeType: XpGoalTimeType): string;
		// Java 8 doesn't have good duration / period objects to represent spans of time that can be formatted
		// Rather than importing another dependency like joda time (which is practically built into java 10)
		// below will be a custom formatter that handles spans larger than 1 day
				// durationDays = 0 or durationHoursTotal = 0 or goalTimeType = SHORT if we got here.
				// return time remaining in hh:mm:ss or mm:ss format where hh can be > 24
				// Minutes and seconds will always be present
	getXpHr(): number;
	resetPerHour(): void;
		//reset actions per hour
		//reset xp per hour
	update(currentXp: number): boolean;
		// No experience gained
		// Update EXPERIENCE action
			// populate all values in our action history array with this first value that we see
			// so the average value of our action history starts out as this first value we see
		// Calculate experience gained
	updateGoals(currentXp: number, goalStartXp: number, goalEndXp: number): void;
	tick(delta: number): void;
		// Don't tick skills that have not gained XP or have been reset.
	snapshot(): XpSnapshotSingle;
}
}