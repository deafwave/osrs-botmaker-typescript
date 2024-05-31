/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="FriendsChatRank.d.ts" />
/// <reference path="FriendsChatRank/UNRANKED.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MenuAction/ITEM_USE_ON_PLAYER.d.ts" />
/// <reference path="MenuAction/PLAYER_EIGHTH_OPTION.d.ts" />
/// <reference path="MenuAction/PLAYER_FIFTH_OPTION.d.ts" />
/// <reference path="MenuAction/PLAYER_FIRST_OPTION.d.ts" />
/// <reference path="MenuAction/PLAYER_FOURTH_OPTION.d.ts" />
/// <reference path="MenuAction/PLAYER_SECOND_OPTION.d.ts" />
/// <reference path="MenuAction/PLAYER_SEVENTH_OPTION.d.ts" />
/// <reference path="MenuAction/PLAYER_SIXTH_OPTION.d.ts" />
/// <reference path="MenuAction/PLAYER_THIRD_OPTION.d.ts" />
/// <reference path="MenuAction/RUNELITE_PLAYER.d.ts" />
/// <reference path="MenuAction/WALK.d.ts" />
/// <reference path="MenuAction/WIDGET_TARGET_ON_PLAYER.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="events/ClientTick.d.ts" />
/// <reference path="events/ScriptPostFired.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2018, Tomas Slusny <slusnucky@gmail.com>
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
declare namespace net.runelite.client.plugins.playerindicators {
( ) 
export class PlayerIndicatorsPlugin extends Plugin
				// 'Walk here' identifiers are offset by 1 because the default
				// identifier for this option is 0, which is also a player index.
			// <col=ff0000>title0RuneLitetitle1<col=ff>  (level-126)title2
			// remove leading <col>
}