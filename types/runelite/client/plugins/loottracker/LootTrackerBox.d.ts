/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="LootTrackerRecord.d.ts" />
/// <reference path="LootRecordType.d.ts" />
/// <reference path="LootTrackerItem.d.ts" />
/*
 * Copyright (c) 2018, Psikoi <https://github.com/psikoi>
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
declare namespace net.runelite.client.plugins.loottracker {
export class LootTrackerBox extends JPanel
{
ItemManager itemManager;
String id;
LootRecordType lootRecordType;
LootTrackerPriceType priceType;
boolean showPriceType;
int kills;
long totalPrice;
boolean hideIgnoredItems;
BiConsumer<String, Boolean> onItemToggle;
LootTrackerBox( ItemManager itemManager, String id, LootRecordType lootRecordType, String subtitle, boolean hideIgnoredItems, LootTrackerPriceType priceType, boolean showPriceType, BiConsumer<String, Boolean> onItemToggle, BiConsumer<String, Boolean> onEventToggle, boolean eventIgnored) 
		// Set a size to make BoxLayout truncate the name
		// Create popup menu for ignoring the loot event
	/**
	 * Returns total amount of kills
	 *
	 * @return total amount of kills
	 */
	private getTotalKills(): number;
	/**
	 * Checks if this box matches specified record
	 *
	 * @param record loot record
	 * @return true if match is made
	 */
	matches(record: LootTrackerRecord): boolean;
	/**
	 * Checks if this box matches specified id and type
	 *
	 * @param id other record id
	 * @param type other record type
	 * @return true if match is made
	 */
	matches(id: string, type: LootRecordType): boolean;
	/**
	 * Adds an record's data into a loot box.
	 */
	addKill(record: LootTrackerRecord): void;
			// Combine it into an existing item if one already exists
	rebuild(): void;
	collapse(): void;
	expand(): void;
	isCollapsed(): boolean;
	private applyDimmer(brighten: boolean, panel: JPanel): void;
	/**
	 * This method creates stacked items from the item list, calculates total price and then
	 * displays all the items in the UI.
	 */
	private buildItems(): void;
		// Calculates how many rows need to be display to fit all items
				// Create popup menu
	private static buildToolTip(item: LootTrackerItem): string;
}
}