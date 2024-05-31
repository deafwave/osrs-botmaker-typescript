/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="ChatMessageType/ENGINE.d.ts" />
/// <reference path="ChatMessageType/GAMEMESSAGE.d.ts" />
/// <reference path="ChatMessageType/ITEM_EXAMINE.d.ts" />
/// <reference path="ChatMessageType/MODCHAT.d.ts" />
/// <reference path="ChatMessageType/NPC_EXAMINE.d.ts" />
/// <reference path="ChatMessageType/OBJECT_EXAMINE.d.ts" />
/// <reference path="ChatMessageType/PUBLICCHAT.d.ts" />
/// <reference path="ChatMessageType/SPAM.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="FriendsChatManager.d.ts" />
/// <reference path="MessageNode.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="clan/ClanChannel.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/OverheadTextChanged.d.ts" />
/// <reference path="events/ScriptCallbackEvent.d.ts" />
/// <reference path="Plugin.d.ts" />
/// <reference path="LinkedHashMap<Integer.d.ts" />
/// <reference path="String>.d.ts" />
/// <reference path="ConfigManager.d.ts" />
/// <reference path="ChatFilterConfig.d.ts" />
/// <reference path="Pattern.d.ts" />
/// <reference path="ConfigChanged.d.ts" />
/*
 * Copyright (c) 2018, Magic fTail
 * Copyright (c) 2019, osrs-music-map <osrs-music-map@users.noreply.github.com>
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
declare namespace net.runelite.client.plugins.chatfilter {
( ) 
export class ChatFilterPlugin extends Plugin
{
.on("\n") 
.omitEmptyStrings() 
.trimResults(); 
ENGINE,
GAMEMESSAGE,
ITEM_EXAMINE,
NPC_EXAMINE,
OBJECT_EXAMINE,
SPAM,
PUBLICCHAT,
MODCHAT
);
export class Duplicate
export class FilterCacheMap extends LinkedHashMap<Integer, String>
Client client;
ChatFilterConfig config;
	private static provideConfig(configManager: ConfigManager): ChatFilterConfig;
	private startUp(): void;
			// Login drops references to all messages and also resets the global message id counter.
			// Invalidate the message id so it doesn't collide later when rebuilding the chatfilter.
	onScriptCallbackEvent(event: net.runelite.api.events.ScriptCallbackEvent): void;
		// Only filter public chat and private messages
			// If messageId is -1 then this is a replayed message, which we can't easily collapse since we don't know
			// the most recent message. This is only for public chat since it is the only thing both replayed and also
			// collapsed. Just allow uncollapsed playback.
			// Block the message
			// Replace the message
	onOverheadTextChanged(event: net.runelite.api.events.OverheadTextChanged): void;
 // run after ChatMessageManager
	onChatMessage(chatMessage: net.runelite.api.events.ChatMessage): void;
			// remove and re-insert into map to move to end of list
	canFilterPlayer(playerName: string): boolean;
	private isFriendsChatMember(name: string): boolean;
	private isClanChatMember(name: string): boolean;
	censorMessage(username: string, message: string): string;
	private censorMessage(messageNode: MessageNode, username: string, message: string): string;
	updateFilteredPatterns(): void;
	private stripAccents(input: string): string;
	private static compilePattern(pattern: string): Pattern;
	onConfigChanged(event: ConfigChanged): void;
		//Refresh chat after config change to reflect current rules
	isNameFiltered(playerName: string): boolean;
}
}