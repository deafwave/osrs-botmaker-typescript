/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="ItemContainer.d.ts" />
/// <reference path="ItemID/ANIMALS_BONES.d.ts" />
/// <reference path="ItemID/ANIMALS_BONES_6905.d.ts" />
/// <reference path="ItemID/ANIMALS_BONES_6906.d.ts" />
/// <reference path="ItemID/ANIMALS_BONES_6907.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/ItemContainerChanged.d.ts" />
/// <reference path="MTARoom.d.ts" />
/*
 * Copyright (c) 2018, Jasper Ketelaar <Jasper0781@gmail.com>
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
declare namespace net.runelite.client.plugins.mta.graveyard {
export class GraveyardRoom extends MTARoom
{
Client client;
MTAPlugin plugin;
ItemManager itemManager;
InfoBoxManager infoBoxManager;
int score;
GraveyardCounter counter;
GraveyardRoom(MTAConfig config, Client client, MTAPlugin plugin, ItemManager itemManager, InfoBoxManager infoBoxManager) 
	inside(): boolean;
	onGameTick(tick: net.runelite.api.events.GameTick): void;
	onItemContainerChanged(event: net.runelite.api.events.ItemContainerChanged): void;
	private score(items: Item[]): number;
	private getPoints(id: number): number;
}
}