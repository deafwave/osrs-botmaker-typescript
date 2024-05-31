/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="EquipmentInventorySlot.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="ItemContainer.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="ItemStats.d.ts" />
/// <reference path="StatChange.d.ts" />
/*
 * Copyright (c) 2018 Abex
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
declare namespace net.runelite.client.plugins.itemstats {
export class ItemStatOverlay extends Overlay
{
	// Unarmed attack speed is 4
ItemEquipmentStats.builder() 
.aspeed(4) 
.build()); 
Client client;
ItemManager itemManager;
TooltipManager tooltipManager;
ItemStatChanges statChanges;
ItemStatConfig config;
	private render(graphics: Graphics2D): Dimension;
			// For bank worn equipment, check widget parent to differentiate from normal bank items
					// Only show "Duration: <time>" if there is one tooltip
					// List the effect names and their duration (ranges)
	private getChangeString(value: number, inverse: boolean, showPercent: boolean): string;
	private buildStatRow(label: string, value: number, diffValue: number, inverse: boolean, showPercent: boolean): string;
	private buildStatRow(label: string, value: number, diffValue: number, inverse: boolean, showPercent: boolean, showBase: boolean): string;
	private getItemStatsFromContainer(container: ItemContainer, slotID: number): ItemStats;
	buildStatBonusString(s: ItemStats): string;
		// Used if switching into a 2 handed weapon to store off-hand stats
			// Check if this is a shield and there's a two-handed weapon equipped
						// Account for speed change when two handed weapon gets removed
						// shield - (2h - unarmed) == shield - 2h + unarmed
				// Get offhand's stats to be removed from equipping a 2h weapon
	private buildStatChangeString(c: StatChange): string;
}
}