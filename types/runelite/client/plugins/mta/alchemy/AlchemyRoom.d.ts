/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="ObjectID/CUPBOARD_23678.d.ts" />
/// <reference path="ObjectID/CUPBOARD_23679.d.ts" />
/// <reference path="ObjectID/CUPBOARD_23680.d.ts" />
/// <reference path="ObjectID/CUPBOARD_23681.d.ts" />
/// <reference path="ObjectID/CUPBOARD_23682.d.ts" />
/// <reference path="ObjectID/CUPBOARD_23683.d.ts" />
/// <reference path="ObjectID/CUPBOARD_23684.d.ts" />
/// <reference path="ObjectID/CUPBOARD_23685.d.ts" />
/// <reference path="ObjectID/CUPBOARD_23686.d.ts" />
/// <reference path="ObjectID/CUPBOARD_23687.d.ts" />
/// <reference path="ObjectID/CUPBOARD_23688.d.ts" />
/// <reference path="ObjectID/CUPBOARD_23689.d.ts" />
/// <reference path="Perspective.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/GameObjectSpawned.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetItem.d.ts" />
/// <reference path="MTARoom.d.ts" />
/// <reference path="AlchemyItem.d.ts" />
/// <reference path="Cupboard.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="Color.d.ts" />
/*
 * Copyright (c) 2018, Jasper Ketelaar <Jasper0781@gmail.com>
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
declare namespace net.runelite.client.plugins.mta.alchemy {
export class AlchemyRoom extends MTARoom
{
MTAPlugin plugin;
Client client;
ItemManager itemManager;
InfoBoxManager infoBoxManager;
AlchemyItem best;
Cupboard suggestion;
boolean hintSet;
AlchemyRoom(Client client, MTAConfig config, MTAPlugin plugin, ItemManager itemManager, InfoBoxManager infoBoxManager) 
	onGameTick(event: net.runelite.api.events.GameTick): void;
			// Reset items to unknown
	onGameObjectSpawned(event: net.runelite.api.events.GameObjectSpawned): void;
			// Closed and opened versions of each
	onGameStateChanged(gameStateChanged: net.runelite.api.events.GameStateChanged): void;
	onChatMessage(wrapper: net.runelite.api.events.ChatMessage): void;
	private reset(): void;
	inside(): boolean;
	private getBest(): AlchemyItem;
	private getClicked(): Cupboard;
	private fill(cupboard: Cupboard, alchemyItem: AlchemyItem): void;
	under(graphics: Graphics2D): void;
	private getSuggestion(): Cupboard;
		// check if a cupboard has the best item in it
	renderItemOverlay(graphics: Graphics2D, itemId: number, widgetItem: net.runelite.api.widgets.WidgetItem): void;
	private drawItem(graphics: Graphics2D, item: net.runelite.api.widgets.WidgetItem, border: Color): void;
}
}