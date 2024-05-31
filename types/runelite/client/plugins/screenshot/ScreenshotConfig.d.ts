/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="default boolean.d.ts" />
/// <reference path="default Keybind.d.ts" />
/// <reference path="default int.d.ts" />
/*
 * Copyright (c) 2018, Lotto <https://github.com/devLotto>
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
declare namespace net.runelite.client.plugins.screenshot {
export interface ScreenshotConfig extends Config
{
( ) 
( ) 
	includeFrame(): default boolean;
( ) 
	displayDate(): default boolean;
( ) 
	notifyWhenTaken(): default boolean;
( ) 
	copyToClipboard(): default boolean;
( ) 
	hotkey(): default Keybind;
( ) 
	screenshotRewards(): default boolean;
( ) 
	screenshotLevels(): default boolean;
( ) 
	screenshotKingdom(): default boolean;
( ) 
	screenshotPet(): default boolean;
( ) 
	screenshotKills(): default boolean;
( ) 
	screenshotBossKills(): default boolean;
( ) 
	screenshotPlayerDeath(): default boolean;
( ) 
	screenshotFriendDeath(): default boolean;
( ) 
	screenshotClanDeath(): default boolean;
( ) 
	screenshotDuels(): default boolean;
( + "Requires 'Loot drop notifications' to be enabled in the RuneScape settings.", ) 
	screenshotValuableDrop(): default boolean;
( + "Requires 'Minimum item value needed for loot notification' to be set to a lesser or equal value in the RuneScape settings.", ) 
	valuableDropThreshold(): default int;
( + "Requires 'Untradeable loot notifications' to be enabled in the RuneScape settings.", ) 
	screenshotUntradeableDrop(): default boolean;
( ) 
	screenshotKick(): default boolean;
( ) 
	screenshotHighGamble(): default boolean;
( + "Requires 'Collection log - New addition notification' to be enabled in the RuneScape settings.", ) 
	screenshotCollectionLogEntries(): default boolean;
( ) 
	screenshotCombatAchievements(): default boolean;
( ) 
	screenshotWildernessLootChest(): default boolean;
}
}