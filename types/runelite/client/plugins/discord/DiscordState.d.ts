/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="DiscordGameEventType.d.ts" />
/*
 * Copyright (c) 2018, Tomas Slusny <slusnucky@gmail.com>
 * Copyright (c) 2021, Jonathan Rousseau <https://github.com/JoRouss>
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
declare namespace net.runelite.client.plugins.discord {
/**
 * This class contains data about currently active discord state.
 */
export class DiscordState
{
export class EventWithTime
DiscordService discordService;
DiscordConfig config;
String runeliteTitle;
String runeliteVersion;
DiscordPresence lastPresence;
boolean safeMode;
DiscordState( DiscordService discordService, DiscordConfig config,  String runeliteTitle,  String runeliteVersion,  boolean safeMode ) 
	/**
	 * Reset state.
	 */
	reset(): void;
	/**
	 * Trigger new discord state update.
	 *
	 * @param eventType discord event type
	 */
	triggerEvent(eventType: DiscordGameEventType): void;
	private updatePresenceWithLatestEvent(): void;
		// Replace snapshot with + to make tooltip shorter (so it will span only 1 line)
				// Use the start time of the IN_GAME event, which will always be
				// the lowest.
		// This is to reduce amount of RPC calls
	/**
	 * Check for current state timeout and act upon it.
	 */
	checkForTimeout(): void;
			// Only include clearable events
			// Find only events that should time out
}
}