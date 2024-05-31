/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="MessageNode.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="annotations/Varp.d.ts" />
/// <reference path="events/ScriptCallbackEvent.d.ts" />
/// <reference path="ConfigChanged.d.ts" />
/// <reference path="ProfileChanged.d.ts" />
/// <reference path="Color.d.ts" />
/// <reference path="ChatColor.d.ts" />
/// <reference path="ChatMessageType....d.ts" />
/// <reference path="QueuedMessage.d.ts" />
/*
 * Copyright (c) 2017, Tomas Slusny <slusnucky@gmail.com>
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
declare namespace net.runelite.client.chat {
export class ChatMessageManager
{
Client client;
ChatColorConfig chatColorConfig;
ClientThread clientThread;
ChatMessageManager( Client client, ChatColorConfig chatColorConfig, ClientThread clientThread, EventBus eventBus) 
	onConfigChanged(event: ConfigChanged): void;
	onProfileChanged(profileChanged: ProfileChanged): void;
	colorChatMessage(): void;
			// username recoloring for MODPRIVATECHAT, PRIVATECHAT and PRIVATECHATOUT
			// ChatMessageTypes is handled in the script callback event
			// Replace </col> tags in the message with the new color so embedded </col> won't reset the color
	onScriptCallbackEvent(scriptCallbackEvent: net.runelite.api.events.ScriptCallbackEvent): void;
	private static getDefaultColor(type: ChatMessageType, transparent: boolean): Color;
	// get the variable holding the chat color from the settings, from script4484
	private static getSettingsColor(type: ChatMessageType, transparent: boolean): number;
	/**
	 * Load all configured colors
	 */
	private loadColors(): void;
		// Apply defaults
		//region opaque clanchat
		//endregion
		//Transparent Chat Colours
		//region transpaprent friends chat
		//endregion
		//region transparent clanchat
		//endregion
	private cacheColor(chatColor: ChatColor, types: ChatMessageType...): void;
			// color is excluded from equals/hashCode on ChatColor
	queue(message: QueuedMessage): void;
	process(): void;
	private add(message: QueuedMessage): void;
		// Do not send message if the player is on tutorial island
		// this updates chat cycle
		// Update the message with RuneLite additions
	/**
	 * Rebuild the message node message from the RuneLite format message.
	 * DEPRECATED: no longer needs to be called.
	 *
	 * @param messageNode message node
	 */
/** @deprecated */
	update(messageNode: MessageNode): void;
	formatRuneLiteMessage(runeLiteFormatMessage: string, type: ChatMessageType, pmbox: boolean): string;
					// The default ChatColors for private have the chatbox text color, not the split chat color,
					// and the split chat color is set by widget color, so just use </col>. The in-game
					// private chat color doesn't apply to split chat either so using that here also is incorrect.
					//
					// If we recolor the final message later we replace </col> with the desired color in
					// colorChatMessage()
						// Apply configured color from game settings, if set
				// Replace custom formatting with actual colors
}
}