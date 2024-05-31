/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="ItemContainer.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="Color.d.ts" />
/*
 * Copyright (c) 2018, Charlie Waters
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
declare namespace net.runelite.client.plugins.itemprices {
export class ItemPricesOverlay extends Overlay
{
Client client;
ItemPricesConfig config;
TooltipManager tooltipManager;
ItemManager itemManager;
ItemPricesOverlay(Client client, ItemPricesConfig config, TooltipManager tooltipManager) 
	render(graphics: Graphics2D): Dimension;
		// Tooltip action type handling
				// Check target widget is the inventory
				// FALLTHROUGH
				// Require showWhileAlching and Cast High Level Alchemy
				// FALLTHROUGH
				// Check that this is the inventory
	private addTooltip(menuEntry: MenuEntry, isAlching: boolean, groupId: number): void;
		// Item tooltip values
				// FALLTHROUGH
				// Make tooltip
	private makeValueTooltip(menuEntry: MenuEntry): string;
		// Disabling both disables all value tooltips
		// Inventory item
		// Bank item
		// Seed vault item
		// Find the item in the container to get stack size
	private getItemStackValueText(item: Item): string;
		// Special case for coins and platinum tokens
		// Only check prices for things with store prices
	private stackValueText(qty: number, gePrice: number, haValue: number, haProfit: number): string;
		// Build string and reset builder
	private calculateHAProfit(haPrice: number, gePrice: number): number;
	private static haProfitColor(haProfit: number): Color;
}
}