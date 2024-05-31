/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="default boolean.d.ts" />
/// <reference path="Instant.d.ts" />
/*
 * Copyright (c) 2017, Seth <Sethtroll3@gmail.com>
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
declare namespace net.runelite.client.plugins.timers {
export interface TimersConfig extends Config
{
( ) 
	showHomeMinigameTeleports(): default boolean;
( ) 
	showAntiPoison(): default boolean;
( ) 
	showAntiFire(): default boolean;
( ) 
	showStamina(): default boolean;
( ) 
	showOverload(): default boolean;
( ) 
	showLiquidAdrenaline(): default boolean;
( ) 
	showMenaphiteRemedy(): default boolean;
( ) 
	showSilkDressing(): default boolean;
( ) 
	showBlessedCrystalScarab(): default boolean;
( ) 
	showPrayerEnhance(): default boolean;
( ) 
	showDivine(): default boolean;
( ) 
	showCannon(): default boolean;
( ) 
	showMagicImbue(): default boolean;
( ) 
	showCharge(): default boolean;
( ) 
	showImbuedHeart(): default boolean;
( ) 
	showVengeance(): default boolean;
( ) 
	showVengeanceActive(): default boolean;
( ) 
	showHealGroup(): default boolean;
( ) 
	showTeleblock(): default boolean;
( ) 
	showFreezes(): default boolean;
( ) 
	showGodWarsAltar(): default boolean;
( ) 
	showTzhaarTimers(): default boolean;
( ) 
	tzhaarStartTime(): Instant;
( ) 
	tzhaarStartTime(tzhaarStartTime: Instant): void;
( ) 
	tzhaarLastTime(): Instant;
( ) 
	tzhaarLastTime(tzhaarLastTime: Instant): void;
( ) 
	showStaffOfTheDead(): default boolean;
( ) 
	showAbyssalSireStun(): default boolean;
( ) 
	showDFSSpecial(): default boolean;
( ) 
	showArceuus(): default boolean;
( ) 
	showArceuusCooldown(): default boolean;
( ) 
	showPickpocketStun(): default boolean;
( ) 
	showFarmersAffinity(): default boolean;
( ) 
	showSpellbookSwap(): default boolean;
}
}