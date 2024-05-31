/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="ItemID/*.d.ts" />
/// <reference path="MenuAction/RUNELITE_OVERLAY.d.ts" />
/// <reference path="MenuAction/RUNELITE_OVERLAY_CONFIG.d.ts" />
/// <reference path="OverlayPanel.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/*
 * Copyright (c) 2016-2017, Seth <Sethtroll3@gmail.com>
 * Copyright (c) 2018, Lotto <https://github.com/devLotto>
 * Copyright (c) 2019, David <https://github.com/drahenshaw>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.plugins.cluescrolls {
export class ClueScrollOverlay extends OverlayPanel
{
item(SPADE), item(EASTFLOOR_SPADE)); 
item(LIT_TORCH), item(LIT_CANDLE), item(LIT_BLACK_CANDLE), item(CANDLE_LANTERN_4531), item(CANDLE_LANTERN_4534), // lit black candle lantern item(OIL_LAMP_4524), item(OIL_LANTERN_4539), item(BULLSEYE_LANTERN_4550), item(SAPPHIRE_LANTERN_4702), item(EMERALD_LANTERN_9065), item(MINING_HELMET), item(FIREMAKING_CAPE), item(FIREMAKING_CAPET), item(KANDARIN_HEADGEAR_1), item(KANDARIN_HEADGEAR_2), item(KANDARIN_HEADGEAR_3), item(KANDARIN_HEADGEAR_4), item(BRUMA_TORCH), item(MAX_CAPE), item(MAX_CAPE_13342), item(ABYSSAL_LANTERN_NORMAL_LOGS), item(ABYSSAL_LANTERN_BLUE_LOGS), item(ABYSSAL_LANTERN_RED_LOGS), item(ABYSSAL_LANTERN_WHITE_LOGS), item(ABYSSAL_LANTERN_PURPLE_LOGS), item(ABYSSAL_LANTERN_GREEN_LOGS), item(ABYSSAL_LANTERN_OAK_LOGS), item(ABYSSAL_LANTERN_WILLOW_LOGS), item(ABYSSAL_LANTERN_MAPLE_LOGS), item(ABYSSAL_LANTERN_YEW_LOGS), item(ABYSSAL_LANTERN_BLISTERWOOD_LOGS), item(ABYSSAL_LANTERN_MAGIC_LOGS), item(ABYSSAL_LANTERN_REDWOOD_LOGS)); 
ClueScrollPlugin plugin;
Client client;
ClueScrollOverlay(ClueScrollPlugin plugin, Client client) 
	render(graphics: Graphics2D): Dimension;
}
}