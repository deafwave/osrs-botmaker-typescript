/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="DiscordPresence.d.ts" />
/// <reference path="DiscordUser.d.ts" />
/*
 * Copyright (c) 2018, Tomas Slusny <slusnucky@gmail.com>
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
declare namespace net.runelite.client.discord {
export class DiscordService implements AutoCloseable
{
EventBus eventBus;
ScheduledExecutorService executorService;
String discordAppId;
DiscordRPC discordRPC;
	// Hold a reference to the event handlers to prevent the garbage collector from deleting them
DiscordEventHandlers discordEventHandlers;
DiscordUser currentUser;
DiscordService( EventBus eventBus, ScheduledExecutorService executorService,  boolean enable,  String discordAppId ) 
	/**
	 * Initializes the Discord service, sets up the event handlers and starts worker thread that will poll discord
	 * events every 2 seconds.
	 * Before closing the application it is recommended to call {@link #close()}
	 */
	init(): void;
	/**
	 * Shuts the RPC connection down.
	 * If not currently connected, this does nothing.
	 */
	close(): void;
	/**
	 * Updates the currently set presence of the logged in user.
	 * <br>Note that the client only updates its presence every <b>15 seconds</b>
	 * and queues all additional presence updates.
	 *
	 * @param discordPresence The new presence to use
	 */
	updatePresence(discordPresence: DiscordPresence): void;
	/**
	 * Clears the currently set presence.
	 */
	clearPresence(): void;
	/**
	 * Responds to the given user with the specified reply type.
	 *
	 * @param userId The id of the user to respond to
	 * @param reply  The reply type
	 * @see DiscordRPC#DISCORD_REPLY_NO
	 * @see DiscordRPC#DISCORD_REPLY_YES
	 * @see DiscordRPC#DISCORD_REPLY_IGNORE
	 */
	respondToRequest(userId: string, reply: number): void;
	private ready(user: DiscordUser): void;
	private disconnected(errorCode: number, message: string): void;
	private errored(errorCode: number, message: string): void;
	private joinGame(joinSecret: string): void;
	private spectateGame(spectateSecret: string): void;
	private joinRequest(user: DiscordUser): void;
}
}