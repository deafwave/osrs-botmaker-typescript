/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="String>.d.ts" />
/// <reference path="ChatboxInput.d.ts" />
/// <reference path="PrivateMessageInput.d.ts" />
/*
 * Copyright (c) 2019, Adam <Adam@sigterm.info>
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
export class ChatCommandManager
{
ScheduledExecutorService scheduledExecutorService;
ChatCommandManager(EventBus eventBus, ChatInputManager chatInputManager, ScheduledExecutorService scheduledExecutorService) 
		// unused chatInputManager parameter must exist to cause it to be instantiated by guice
	registerCommand(command: string,  BiConsumer<ChatMessage, execute: String>): void;
	registerCommand(command: string,  BiConsumer<ChatMessage, execute: String>,  BiPredicate<ChatInput, input: String>): void;
	registerCommandAsync(command: string,  BiConsumer<ChatMessage, execute: String>): void;
	registerCommandAsync(command: string,  BiConsumer<ChatMessage, execute: String>,  BiPredicate<ChatInput, input: String>): void;
	unregisterCommand(command: string): void;
	onChatMessage(chatMessage: net.runelite.api.events.ChatMessage): void;
	onChatboxInput(chatboxInput: ChatboxInput): void;
	onPrivateMessageInput(privateMessageInput: PrivateMessageInput): void;
	private static extractCommand(message: string): string;
}
}