/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="events/ItemContainerChanged.d.ts" />
/// <reference path="DevToolsFrame.d.ts" />
/// <reference path="InventoryLog.d.ts" />
/// <reference path="InventoryLogNode.d.ts" />
/// <reference path="InventoryItem.d.ts" />
/*
 * Copyright (c) 2020, TheStonedTurtle <https://github.com/TheStonedTurtle>
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
declare namespace net.runelite.client.plugins.devtools {
export class InventoryInspector extends DevToolsFrame
{
Client client;
EventBus eventBus;
ItemManager itemManager;
InventoryDeltaPanel deltaPanel;
InventoryInspector(Client client, EventBus eventBus, ItemManager itemManager, ClientThread clientThread) 
	private open(): void;
	close(): void;
	onItemContainerChanged(event: net.runelite.api.events.ItemContainerChanged): void;
		// Delay updates until refresh button is pressed
	private addLog(invLog: InventoryLog): void;
		// Cull very old stuff
	private clearTracker(): void;
	private refreshTracker(): void;
	private displayItemSnapshot(logNode: InventoryLogNode): void;
		// Compare against previous snapshot
	private convertToInventoryItems(items: Item[]): InventoryItem[];
	/**
	 * Compares the current inventory to the old one returning the InventoryItems that were added and removed.
	 * @param previous old snapshot
	 * @param current new snapshot
	 * @return The first InventoryItem[] contains the items that were added and the second contains the items that were removed
	 */
	private compareItemSnapshots(previous: Item[], current: Item[]): InventoryItem[][];
		// ItemContainers shouldn't become smaller over time, but just in case
			// Make quantities positive now that its been sorted.
	private static getNameForInventoryID(id: number): string | null;
}
}