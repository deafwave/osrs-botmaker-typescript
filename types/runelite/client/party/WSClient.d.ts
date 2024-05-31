/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="WebSocketListener implements AutoCloseable.d.ts" />
/// <reference path="WebsocketMessage>> messages = new HashSet<>();.d.ts" />
/// <reference path="UUID.d.ts" />
/// <reference path="WebsocketMessage> message).d.ts" />
/// <reference path="Class.d.ts" />
/// <reference path="Class<.d.ts" />
/// <reference path="WebsocketMessage.d.ts" />
/// <reference path="Party.C2S.d.ts" />
/// <reference path="WebSocket.d.ts" />
/// <reference path="Response.d.ts" />
/// <reference path="ByteString.d.ts" />
/// <reference path="Throwable.d.ts" />
/*
 * Copyright (c) 2017, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.party {
export class WSClient extends WebSocketListener implements AutoCloseable
{
EventBus eventBus;
OkHttpClient okHttpClient;
HttpUrl runeliteWs;
volatile Gson gson;
UUID sessionId;
WebSocket webSocket;
WSClient(EventBus eventBus, OkHttpClient okHttpClient,  HttpUrl runeliteWs) 
	sessionExists(): boolean;
	changeSession(sessionId: UUID): void;
	connect(): void;
	isOpen(): boolean;
	registerMessage(extends: Class<?): void;
	unregisterMessage(extends: Class<?): void;
	join(partyId: number, memberId: number): void;
	part(): void;
	send(message: WebsocketMessage): void;
	private send(message: Party.C2S): void;
	close(): void;
	onOpen(webSocket: WebSocket, response: Response): void;
	onMessage(webSocket: WebSocket, bytes: ByteString): void;
	onClosed(webSocket: WebSocket, code: number, reason: string): void;
	onFailure(webSocket: WebSocket, t: Throwable, response: Response): void;
}
}