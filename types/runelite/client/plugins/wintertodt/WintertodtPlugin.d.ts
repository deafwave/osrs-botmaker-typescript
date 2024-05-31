/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="AnimationID/CONSTRUCTION.d.ts" />
/// <reference path="AnimationID/CONSTRUCTION_IMCANDO.d.ts" />
/// <reference path="AnimationID/FIREMAKING.d.ts" />
/// <reference path="AnimationID/FLETCHING_BOW_CUTTING.d.ts" />
/// <reference path="AnimationID/IDLE.d.ts" />
/// <reference path="AnimationID/LOOKING_INTO.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_3A.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_ADAMANT.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_BLACK.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_BRONZE.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_CRYSTAL.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_CRYSTAL_INACTIVE.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_DRAGON.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_IRON.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_MITHRIL.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_RUNE.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_2H_STEEL.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_3A_AXE.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_ADAMANT.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_BLACK.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_BRONZE.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_CRYSTAL.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_DRAGON.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_DRAGON_OR.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_GILDED.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_INFERNAL.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_IRON.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_MITHRIL.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_RUNE.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_STEEL.d.ts" />
/// <reference path="AnimationID/WOODCUTTING_TRAILBLAZER.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="ItemContainer.d.ts" />
/// <reference path="ItemID/BRUMA_KINDLING.d.ts" />
/// <reference path="ItemID/BRUMA_ROOT.d.ts" />
/// <reference path="MessageNode.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="events/AnimationChanged.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/ItemContainerChanged.d.ts" />
/// <reference path="events/VarbitChanged.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2018, terminatusx <jbfleischman@gmail.com>
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
 * Copyright (c) 2020, loldudester <HannahRyanster@gmail.com>
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
declare namespace net.runelite.client.plugins.wintertodt {
( ) 
export class WintertodtPlugin extends Plugin
			// Sometimes wt var updates are sent to players even after leaving wt.
			// So only notify if in wt or after just having left.
				// Recolor message for damage notification
				// all actions except woodcutting and idle are interrupted from damage
		//If we're currently fletching but there are no more logs, go ahead and abort fletching immediately
		//Otherwise, if we're currently feeding the brazier but we've run out of both logs and kindling, abort the feeding activity
}