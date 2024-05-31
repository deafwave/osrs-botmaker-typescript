/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="Color.d.ts" />
/// <reference path="default Color.d.ts" />
/*
 * Copyright (c) 2018, Hydrox6 <ikada@protonmail.ch>
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
declare namespace net.runelite.client.config {
export interface ChatColorConfig extends Config
{
( ) 
( ) 
( ) 
	opaquePublicChat(): Color;
( ) 
	opaquePublicChatHighlight(): default Color;
( ) 
	opaquePrivateMessageSent(): Color;
( ) 
	opaquePrivateMessageSentHighlight(): default Color;
( ) 
	opaquePrivateMessageReceived(): Color;
( ) 
	opaquePrivateMessageReceivedHighlight(): default Color;
	//region opaque friends chat
( ) 
	opaqueFriendsChatInfo(): Color;
( ) 
	opaqueFriendsChatInfoHighlight(): default Color;
( ) 
	opaqueFriendsChatMessage(): Color;
( ) 
	opaqueFriendsChatMessageHighlight(): default Color;
	//endregion
	//region opaque clan chat
( ) 
	opaqueClanChatInfo(): Color;
( ) 
	opaqueClanChatInfoHighlight(): default Color;
( ) 
	opaqueClanChatMessage(): Color;
( ) 
	opaqueClanChatMessageHighlight(): default Color;
( ) 
	opaqueClanChatGuestInfo(): Color;
( ) 
	opaqueClanChatGuestInfoHighlight(): default Color;
( ) 
	opaqueClanChatGuestMessage(): Color;
( ) 
	opaqueClanChatGuestMessageHighlight(): default Color;
	//endregion
( ) 
	opaqueAutochatMessage(): Color;
( ) 
	opaqueAutochatMessageHighlight(): Color;
( ) 
	opaqueTradeChatMessage(): Color;
( ) 
	opaqueTradeChatMessageHighlight(): Color;
( ) 
	opaqueServerMessage(): Color;
( ) 
	opaqueServerMessageHighlight(): Color;
( ) 
	opaqueGameMessage(): Color;
( ) 
	opaqueGameMessageHighlight(): default Color;
( ) 
	opaqueExamine(): Color;
( ) 
	opaqueExamineHighlight(): default Color;
( ) 
	opaqueFiltered(): Color;
( ) 
	opaqueFilteredHighlight(): Color;
( ) 
	opaqueUsername(): Color;
( ) 
	opaquePrivateUsernames(): Color;
( ) 
	opaqueFriendsChatChannelName(): Color;
( ) 
	opaqueClanChannelName(): Color;
( ) 
	opaqueClanGuestChatChannelName(): Color;
( ) 
	opaqueFriendsChatUsernames(): Color;
( ) 
	opaqueClanChatUsernames(): Color;
( ) 
	opaqueClanChatGuestUsernames(): Color;
( ) 
	opaquePublicFriendUsernames(): Color;
( ) 
	opaquePlayerUsername(): Color;
( ) 
	transparentPublicChat(): Color;
( ) 
	transparentPublicChatHighlight(): default Color;
( ) 
	transparentPrivateMessageSent(): Color;
( ) 
	transparentPrivateMessageSentHighlight(): default Color;
( ) 
	transparentPrivateMessageReceived(): Color;
( ) 
	transparentPrivateMessageReceivedHighlight(): default Color;
	//region transparent friends chat
( ) 
	transparentFriendsChatInfo(): Color;
( ) 
	transparentFriendsChatInfoHighlight(): default Color;
( ) 
	transparentFriendsChatMessage(): Color;
( ) 
	transparentFriendsChatMessageHighlight(): default Color;
	//endregion
	//region transparent clan chat
( ) 
	transparentClanChatInfo(): Color;
( ) 
	transparentClanChatInfoHighlight(): default Color;
( ) 
	transparentClanChatMessage(): Color;
( ) 
	transparentClanChatMessageHighlight(): default Color;
( ) 
	transparentClanChatGuestInfo(): Color;
( ) 
	transparentClanChatGuestInfoHighlight(): default Color;
( ) 
	transparentClanChatGuestMessage(): Color;
( ) 
	transparentClanChatGuestMessageHighlight(): default Color;
	//endregion
( ) 
	transparentAutochatMessage(): Color;
( ) 
	transparentAutochatMessageHighlight(): Color;
( ) 
	transparentTradeChatMessage(): Color;
( ) 
	transparentTradeChatMessageHighlight(): Color;
( ) 
	transparentServerMessage(): Color;
( ) 
	transparentServerMessageHighlight(): Color;
( ) 
	transparentGameMessage(): Color;
( ) 
	transparentGameMessageHighlight(): default Color;
( ) 
	transparentExamine(): Color;
( ) 
	transparentExamineHighlight(): default Color;
( ) 
	transparentFiltered(): Color;
( ) 
	transparentFilteredHighlight(): Color;
( ) 
	transparentUsername(): Color;
( ) 
	transparentPrivateUsernames(): Color;
( ) 
	transparentFriendsChatChannelName(): Color;
( ) 
	transparentClanChannelName(): Color;
( ) 
	transparentClanChannelGuestName(): Color;
( ) 
	transparentFriendsChatUsernames(): Color;
( ) 
	transparentClanChatUsernames(): Color;
( ) 
	transparentClanChatGuestUsernames(): Color;
( ) 
	transparentPublicFriendUsernames(): Color;
( ) 
	transparentPlayerUsername(): Color;
}
}