/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="EnumComposition.d.ts" />
/// <reference path="PluginPanel.d.ts" />
/// <reference path="Integer>.d.ts" />
/// <reference path="WorldTableRow.d.ts" />
/// <reference path="Comparable>.d.ts" />
/// <reference path="World.d.ts" />
/// <reference path="WorldOrder.d.ts" />
/// <reference path="JPanel.d.ts" />
/*
 * Copyright (c) 2018, Psikoi <https://github.com/Psikoi>
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
declare namespace net.runelite.client.plugins.worldhopper {
export class WorldSwitcherPanel extends PluginPanel
{
boolean active;
WorldTableHeader worldHeader;
WorldTableHeader playersHeader;
WorldTableHeader activityHeader;
WorldTableHeader pingHeader;
WorldHopperPlugin plugin;
SubscriptionFilterMode subscriptionFilterMode;
Set<RegionFilterMode> regionFilterMode;
Set<WorldTypeFilter> worldTypeFilters;
WorldSwitcherPanel(WorldHopperPlugin plugin) 
	onActivate(): void;
	onDeactivate(): void;
	switchCurrentHighlight(newWorld: number, lastWorld: number): void;
	updateListData(Map<Integer, worldData: Integer>): void;
		// If the list is being ordered by player count, then it has to be re-painted
		// to properly display the new data
	updatePing(world: number, ping: number): void;
				// If the panel is sorted by ping, re-sort it
	hidePing(): void;
	showPing(): void;
	updateList(): void;
					// Leave worlds with unknown ping at the bottom
					// Leave empty activity worlds on the bottom of the list
	private getCompareValue(row1: WorldTableRow, row2: WorldTableRow,  Function<WorldTableRow, compareByFn: Comparable>): number;
	updateFavoriteMenu(world: number, favorite: boolean): void;
	populate(worlds: Array<World>, worldLocations: EnumComposition): void;
	private orderBy(order: WorldOrder): void;
	/**
	 * Builds the entire table header.
	 */
	private buildHeader(): JPanel;
	/**
	 * Builds a table row, that displays the world's information.
	 */
	private buildRow(world: World, stripe: boolean, current: boolean, favorite: boolean, worldLocation: number): WorldTableRow;
	/**
	 * Enumerates the multiple ordering options for the world list.
	 */
enum WorldOrder
}
}