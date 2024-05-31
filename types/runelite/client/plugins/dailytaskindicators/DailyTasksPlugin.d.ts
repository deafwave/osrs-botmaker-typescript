/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="VarClientInt.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="Plugin.d.ts" />
/// <reference path="ConfigManager.d.ts" />
/// <reference path="DailyTasksConfig.d.ts" />
/*
 * Copyright (c) 2018, Infinitay <https://github.com/Infinitay>
 * Copyright (c) 2018-2019, Shaun Dreclin <https://github.com/ShaunDreclin>
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
declare namespace net.runelite.client.plugins.dailytaskindicators {
( ) 
export class DailyTasksPlugin extends Plugin
{
Client client;
DailyTasksConfig config;
ChatMessageManager chatMessageManager;
long lastReset;
boolean loggingIn;
	private static provideConfig(configManager: ConfigManager): DailyTasksConfig;
	startUp(): void;
	shutDown(): void;
	onGameStateChanged(event: net.runelite.api.events.GameStateChanged): void;
	onGameTick(event: net.runelite.api.events.GameTick): void;
			// Round down to the nearest day
	private checkHerbBoxes(dailyReset: boolean): void;
	private checkStaves(dailyReset: boolean): void;
	private checkEssence(dailyReset: boolean): void;
	private checkRunes(dailyReset: boolean): void;
	private checkSand(dailyReset: boolean): void;
		if (client.getVarbitValue(Varbits.ACCOUNT_TYPE) != 2 /* UIM */
	private checkFlax(dailyReset: boolean): void;
	private checkArrows(dailyReset: boolean): void;
	private checkBonemeal(dailyReset: boolean): void;
	private checkDynamite(dailyReset: boolean): void;
	private sendChatMessage(chatMessage: string): void;
}
}