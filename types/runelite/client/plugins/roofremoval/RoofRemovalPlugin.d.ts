/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="Constants/ROOF_FLAG_BETWEEN.d.ts" />
/// <reference path="Constants/ROOF_FLAG_DESTINATION.d.ts" />
/// <reference path="Constants/ROOF_FLAG_HOVERED.d.ts" />
/// <reference path="Constants/ROOF_FLAG_POSITION.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="Scene.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="Plugin.d.ts" />
/// <reference path="ConfigManager.d.ts" />
/// <reference path="RoofRemovalConfig.d.ts" />
/// <reference path="ConfigChanged.d.ts" />
/*
 * Copyright (c) 2021 Hydrox6 <ikada@protonmail.ch>
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
declare namespace net.runelite.client.plugins.roofremoval {
( ) 
export class RoofRemovalPlugin extends Plugin
{
export class FlaggedArea
Client client;
ClientThread clientThread;
Gson gson;
RoofRemovalConfig config;
	private static getConfig(configManager: ConfigManager): RoofRemovalConfig;
				// this races with client startup which may not have the scene initialized yet
	startUp(): void;
			// Reload the scene to clear roof flag overrides
	onGameStateChanged(e: net.runelite.api.events.GameStateChanged): void;
	onConfigChanged(e: ConfigChanged): void;
	private buildRoofRemovalFlags(): number;
	private buildConfigOverrides(): void;
	private performRoofRemoval(): void;
			//CHECKSTYLE:OFF
			//CHECKSTYLE:ON
						// Given that each region is 64x64, and the override data is a boolean, one of the axis can be stored as
						// bits in a long. This removes the need for a boolean[64][64] and an extra array lookup in favour of
						// a bitwise &, and results in a consistently smaller amount of memory required to store the overrides.
	private loadRoofOverrides(): void;
		// the extended tile settings control what is actually drawn, the normal
		// tile settings are just a copy
					// Properly account for instances shifting worldpoints around
}
}