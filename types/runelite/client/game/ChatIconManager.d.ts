/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="EnumComposition.d.ts" />
/// <reference path="EnumID.d.ts" />
/// <reference path="FriendsChatRank.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="IndexedSprite.d.ts" />
/// <reference path="clan/ClanTitle.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/// <reference path="synchronized int.d.ts" />
/// <reference path="synchronized void.d.ts" />
/*
 * Copyright (c) 2021, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.game {
export class ChatIconManager
{
Client client;
SpriteManager spriteManager;
ClientThread clientThread;
BufferedImage[] friendsChatRankImages;
BufferedImage[] clanRankImages;
ChatIconManager(Client client, SpriteManager spriteManager, ClientThread clientThread, EventBus eventBus) 
			// if the client is not booted yet, this will be picked up by the game state change handler below instead
export class ChatIcon
	private static onGameStateChanged(gameStateChanged: net.runelite.api.events.GameStateChanged): void;
	registerChatIcon(image: BufferedImage): synchronized int;
	chatIconIndex(iconId: number): number;
	getRankImage(friendsChatRank: FriendsChatRank): BufferedImage | null;
	getRankImage(clanTitle: net.runelite.api.clan.ClanTitle): BufferedImage | null;
	getIconNumber(friendsChatRank: FriendsChatRank): number;
	getIconNumber(clanTitle: net.runelite.api.clan.ClanTitle): number;
	private refreshIcons(): synchronized void;
	private loadRankIcons(): void;
	private static friendsChatImageFromSprite(sprite: BufferedImage): BufferedImage;
	private static clanRankToIdx(key: number): number;
		// keys are -6 to 265, with no 0
}
}