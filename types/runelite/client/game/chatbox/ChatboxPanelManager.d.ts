/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="VarClientInt.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/ScriptPreFired.d.ts" />
/// <reference path="vars/InputType.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/JavaScriptCallback.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="ChatboxInput.d.ts" />
/// <reference path="ChatboxTextMenuInput.d.ts" />
/// <reference path="ChatboxTextInput.d.ts" />
/*
 * Copyright (c) 2018 Abex
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
declare namespace net.runelite.client.game.chatbox {
export class ChatboxPanelManager
{
Client client;
ClientThread clientThread;
EventBus eventBus;
KeyManager keyManager;
MouseManager mouseManager;
Provider<ChatboxTextMenuInput> chatboxTextMenuInputProvider;
Provider<ChatboxTextInput> chatboxTextInputProvider;
ChatboxPanelManager(EventBus eventBus, Client client, ClientThread clientThread, KeyManager keyManager, MouseManager mouseManager, Provider<ChatboxTextMenuInput> chatboxTextMenuInputProvider, Provider<ChatboxTextInput> chatboxTextInputProvider) 
	close(): void;
	private unsafeCloseInput(): void;
	private unsafeOpenInput(input: ChatboxInput): void;
	openInput(input: ChatboxInput): void;
	openTextMenuInput(title: string): ChatboxTextMenuInput;
	openTextInput(prompt: string): ChatboxTextInput;
	onScriptPreFired(ev: net.runelite.api.events.ScriptPreFired): void;
	private onGameStateChanged(ev: net.runelite.api.events.GameStateChanged): void;
	private killCurrentPanel(): void;
	getContainerWidget(): net.runelite.api.widgets.Widget;
	shouldTakeInput(): boolean;
		// the search box on the world map can be focused, and chat input goes there, even
		// though the chatbox still has its key listener.
}
}