/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="ItemContainer.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/InteractingChanged.d.ts" />
/// <reference path="events/ItemContainerChanged.d.ts" />
/// <reference path="events/NpcDespawned.d.ts" />
/// <reference path="events/NpcSpawned.d.ts" />
/// <reference path="events/WidgetLoaded.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2017, Seth <Sethtroll3@gmail.com>
 * Copyright (c) 2018, Levi <me@levischuck.com>
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
declare namespace net.runelite.client.plugins.fishing {
( ) 
export class FishingPlugin extends Plugin
		// Reset fishing session
				// create the minnow spot if it doesn't already exist
				// or if it was moved, reset it
	/**
	 * Updates the trawler contribution value
	 */
	/**
	 * Changes the Fishing Trawler timer widget from minutes to minutes and seconds
	 */
				// Negate to have the furthest first
				// Order by position
				// And then by id
}