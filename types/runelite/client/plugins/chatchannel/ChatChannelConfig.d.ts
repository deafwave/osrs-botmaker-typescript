/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="FriendsChatRank.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="default int.d.ts" />
/// <reference path="default boolean.d.ts" />
/// <reference path="default String.d.ts" />
/// <reference path="default FriendsChatRank.d.ts" />
/// <reference path="default Color.d.ts" />
/*
 * Copyright (c) 2017, Ron <https://github.com/raiyni>
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
export interface ChatChannelConfig extends Config
{
( ) 
( ) 
( ) 
( ) 
	joinLeaveTimeout(): default int;
( ) 
	chatIcons(): default boolean;
( ) 
	recentChats(): default boolean;
( ) 
	chatsData(): default String;
( ) 
	chatsData(str: string): void;
( ) 
	showFriendsChatJoinLeave(): default boolean;
( ) 
	joinLeaveRank(): default FriendsChatRank;
( ) 
	privateMessageIcons(): default boolean;
( ) 
	publicChatIcons(): default boolean;
( ) 
	confirmKicks(): default boolean;
( ) 
	showIgnores(): default boolean;
( ) 
	showIgnoresColor(): default Color;
( ) 
	clanChatShowJoinLeave(): default boolean;
( ) 
	clanChatShowOnlineMemberCount(): default boolean;
( ) 
	guestClanChatShowJoinLeave(): default boolean;
( ) 
	guestClanChatShowOnlineMemberCount(): default boolean;
}
}