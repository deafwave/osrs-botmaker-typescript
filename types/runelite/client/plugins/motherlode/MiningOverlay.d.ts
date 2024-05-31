/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_3A.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_ADAMANT.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_BLACK.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_BRONZE.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_CRYSTAL.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_DRAGON.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_DRAGON_OR.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_DRAGON_OR_TRAILBLAZER.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_DRAGON_UPGRADED.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_GILDED.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_INFERNAL.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_IRON.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_MITHRIL.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_RUNE.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_STEEL.d.ts" />
/// <reference path="AnimationID/MINING_MOTHERLODE_TRAILBLAZER.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="MenuAction/RUNELITE_OVERLAY.d.ts" />
/// <reference path="OverlayPanel.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/*
 * Copyright (c) 2018, Seth <Sethtroll3@gmail.com>
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
declare namespace net.runelite.client.plugins.motherlode {
export class MiningOverlay extends OverlayPanel
{
MINING_MOTHERLODE_BRONZE, MINING_MOTHERLODE_IRON, MINING_MOTHERLODE_STEEL,
MINING_MOTHERLODE_BLACK, MINING_MOTHERLODE_MITHRIL, MINING_MOTHERLODE_ADAMANT,
MINING_MOTHERLODE_RUNE, MINING_MOTHERLODE_GILDED, MINING_MOTHERLODE_DRAGON,
MINING_MOTHERLODE_DRAGON_UPGRADED, MINING_MOTHERLODE_DRAGON_OR, MINING_MOTHERLODE_DRAGON_OR_TRAILBLAZER,
MINING_MOTHERLODE_INFERNAL, MINING_MOTHERLODE_3A, MINING_MOTHERLODE_CRYSTAL,
MINING_MOTHERLODE_TRAILBLAZER
);
Client client;
MotherlodePlugin plugin;
MotherlodeSession motherlodeSession;
MotherlodeConfig config;
MiningOverlay(Client client, MotherlodePlugin plugin, MotherlodeSession motherlodeSession, MotherlodeConfig config) 
	render(graphics: Graphics2D): Dimension;
			// Anim regularly goes to -1 when mining, add a small delay after the last anim
}
}