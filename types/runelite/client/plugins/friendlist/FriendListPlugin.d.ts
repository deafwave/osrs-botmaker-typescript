/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="ChatPlayer.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Friend.d.ts" />
/// <reference path="Ignore.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MessageNode.d.ts" />
/// <reference path="NameableContainer.d.ts" />
/// <reference path="PendingLogin.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/MenuEntryAdded.d.ts" />
/// <reference path="events/ScriptPostFired.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="Plugin.d.ts" />
/// <reference path="ConfigManager.d.ts" />
/// <reference path="FriendListConfig.d.ts" />
/*
 * Copyright (c) 2018, Connor <contact@connor-parks.email>
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.friendlist {
( ) 
export class FriendListPlugin extends Plugin
{
Client client;
FriendListConfig config;
ConfigManager configManager;
ChatMessageManager chatMessageManager;
	private static getConfig(configManager: ConfigManager): FriendListConfig;
	private shutDown(): void;
	onScriptPostFired(event: net.runelite.api.events.ScriptPostFired): void;
	onChatMessage(message: net.runelite.api.events.ChatMessage): void;
			// get the player name out of the notification
	onMenuEntryAdded(event: net.runelite.api.events.MenuEntryAdded): void;
		// Look for "Message" on friends list
	setHideNotifications(): void;
	private setFriendsListTitle(title: string): void;
	private setIgnoreListTitle(title: string): void;
	private findFriend(name: string): ChatPlayer;
	private setHideNotifications(friend: string, hide: boolean): void;
	private isHideNotification(friend: string): boolean;
}
}