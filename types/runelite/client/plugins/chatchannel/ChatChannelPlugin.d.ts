/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatLineBuffer.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="ChatPlayer.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="FriendsChatManager.d.ts" />
/// <reference path="FriendsChatMember.d.ts" />
/// <reference path="FriendsChatRank.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="Ignore.d.ts" />
/// <reference path="MessageNode.d.ts" />
/// <reference path="NameableContainer.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="VarClientStr.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="clan/ClanChannel.d.ts" />
/// <reference path="clan/ClanChannelMember.d.ts" />
/// <reference path="clan/ClanRank.d.ts" />
/// <reference path="clan/ClanSettings.d.ts" />
/// <reference path="clan/ClanTitle.d.ts" />
/// <reference path="events/ClanMemberJoined.d.ts" />
/// <reference path="events/ClanMemberLeft.d.ts" />
/// <reference path="events/FriendsChatChanged.d.ts" />
/// <reference path="events/FriendsChatMemberJoined.d.ts" />
/// <reference path="events/FriendsChatMemberLeft.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/ScriptCallbackEvent.d.ts" />
/// <reference path="events/ScriptPostFired.d.ts" />
/// <reference path="events/VarClientStrChanged.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetType.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2017, Devin French <https://github.com/devinfrench>
 * Copyright (c) 2019, Adam <Adam@sigterm.info>
 * Copyright (c) 2018, trimbe <github.com/trimbe>
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
declare namespace net.runelite.client.plugins.chatchannel {
( ) 
export class ChatChannelPlugin extends Plugin
	/**
	 * queue of temporary messages added to the client
	 */
		// members getting initialized isn't relevant
		// attempt to filter out world hopping joins
				// If this message has been reused since, it will get a different id
				// Everything else in the deque is newer
				// everything after this is older
		// Use configured friends chat info colors if set, otherwise default to the jagex text and fc name colors
			// Clan ranks are always included in chat messages, so we'll just always include it in join messages.
		// Use configured clan chat info colors if set, otherwise default to the jagex text and fc name colors
				// Set a flag so the script doesn't instantly kick them
				// Get name of player we are trying to kick
				// Show a chatbox panel confirming the kick
		// Iterate every 3 widgets, since the order of widgets is name, world, icon
}