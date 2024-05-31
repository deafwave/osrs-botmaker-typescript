/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="AnimationID.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GraphicID.d.ts" />
/// <reference path="MenuAction/RUNELITE_OVERLAY.d.ts" />
/// <reference path="MenuAction/RUNELITE_OVERLAY_CONFIG.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="OverlayPanel.d.ts" />
/// <reference path="Graphics2D.d.ts" />
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
declare namespace net.runelite.client.plugins.fishing {
export class FishingOverlay extends OverlayPanel
{
AnimationID.FISHING_BARBTAIL_HARPOON,
AnimationID.FISHING_BAREHAND,
AnimationID.FISHING_BAREHAND_CAUGHT_SHARK_1,
AnimationID.FISHING_BAREHAND_CAUGHT_SHARK_2,
AnimationID.FISHING_BAREHAND_CAUGHT_SWORDFISH_1,
AnimationID.FISHING_BAREHAND_CAUGHT_SWORDFISH_2,
AnimationID.FISHING_BAREHAND_CAUGHT_TUNA_1,
AnimationID.FISHING_BAREHAND_CAUGHT_TUNA_2,
AnimationID.FISHING_BAREHAND_WINDUP_1,
AnimationID.FISHING_BAREHAND_WINDUP_2,
AnimationID.FISHING_BIG_NET,
AnimationID.FISHING_CAGE,
AnimationID.FISHING_CRYSTAL_HARPOON,
AnimationID.FISHING_DRAGON_HARPOON,
AnimationID.FISHING_DRAGON_HARPOON_OR,
AnimationID.FISHING_HARPOON,
AnimationID.FISHING_INFERNAL_HARPOON,
AnimationID.FISHING_TRAILBLAZER_HARPOON,
AnimationID.FISHING_KARAMBWAN,
AnimationID.FISHING_NET,
AnimationID.FISHING_OILY_ROD,
AnimationID.FISHING_POLE_CAST,
AnimationID.FISHING_PEARL_ROD,
AnimationID.FISHING_PEARL_FLY_ROD,
AnimationID.FISHING_PEARL_BARBARIAN_ROD,
AnimationID.FISHING_PEARL_ROD_2,
AnimationID.FISHING_PEARL_FLY_ROD_2,
AnimationID.FISHING_PEARL_BARBARIAN_ROD_2,
AnimationID.FISHING_PEARL_OILY_ROD,
AnimationID.FISHING_BARBARIAN_ROD);
Client client;
FishingPlugin plugin;
FishingConfig config;
XpTrackerService xpTrackerService;
FishingOverlay(Client client, FishingPlugin plugin, FishingConfig config, XpTrackerService xpTrackerService) 
	render(graphics: Graphics2D): Dimension;
}
}