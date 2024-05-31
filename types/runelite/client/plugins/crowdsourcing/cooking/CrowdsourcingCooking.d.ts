/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="ItemContainer.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/MenuOptionClicked.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/*
 * Copyright (c) 2019, Weird Gloop <admin@weirdgloop.org>
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
declare namespace net.runelite.client.plugins.crowdsourcing.cooking {
export class CrowdsourcingCooking
{
CrowdsourcingManager manager;
Client client;
int lastGameObjectClicked;
	private static hasCookingGauntlets(): boolean;
	onChatMessage(event: net.runelite.api.events.ChatMessage): void;
		// Message prefixes taken from CookingPlugin
	onMenuOptionClicked(menuOptionClicked: net.runelite.api.events.MenuOptionClicked): void;
}
}