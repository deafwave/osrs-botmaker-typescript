/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="MessageNode.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2018, Hydrox6 <ikada@protonmail.ch>
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
declare namespace net.runelite.client.plugins.chatnotifications {
( ) 
export class ChatNotificationsPlugin extends Plugin
	//Custom Highlights
			// To match <word> \b doesn't work due to <> not being in \w,
			// so match \b or \s, as well as \A and \z for beginning and end of input respectively
				// Some broadcasts have links attached, notated by `|` followed by a number, while others contain color tags.
				// We don't want to see either in the printed notification.
				// Don't notify for notification messages
		// Get nodeValue to store and update in between the different pattern passes
		// The messageNode value is only set after all patterns have been processed
				// Determine the ending color by finding the last color tag up to and
				// including the match.
				// Strip color tags from the highlighted region so that it remains highlighted correctly
			// Append stringBuffer with remainder of message and update nodeValue
	/**
	 * Get the last color tag from a string, or null if there was none
	 *
	 * @param str
	 * @return
	 */
			// ends in a </col> which resets the color to normal
	/**
	 * Strip color tags from a string.
	 *
	 * @param str
	 * @return
	 */
}