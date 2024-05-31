/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="PluginPanel.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/// <reference path="LootRecordType.d.ts" />
/// <reference path="LootTrackerItem.d.ts" />
/// <reference path="Collection.d.ts" />
/// <reference path="LootTrackerRecord.d.ts" />
/// <reference path="LootTrackerBox.d.ts" />
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
export class LootTrackerPanel extends PluginPanel
{
ImageIcon SINGLE_LOOT_VIEW;
ImageIcon SINGLE_LOOT_VIEW_FADED;
ImageIcon SINGLE_LOOT_VIEW_HOVER;
ImageIcon GROUPED_LOOT_VIEW;
ImageIcon GROUPED_LOOT_VIEW_FADED;
ImageIcon GROUPED_LOOT_VIEW_HOVER;
ImageIcon BACK_ARROW_ICON;
ImageIcon BACK_ARROW_ICON_HOVER;
ImageIcon VISIBLE_ICON;
ImageIcon VISIBLE_ICON_HOVER;
ImageIcon INVISIBLE_ICON;
ImageIcon INVISIBLE_ICON_HOVER;
ImageIcon COLLAPSE_ICON;
ImageIcon EXPAND_ICON;
String HTML_LABEL_TEMPLATE =
"<html><body style='color:%s'>%s<span style='color:white'>%s</span></body></html>";
String RESET_ALL_WARNING_TEXT =
"<html>This will permanently delete <b>all</b> loot.</html>";
String RESET_CURRENT_WARNING_TEXT =
"This will permanently delete \"%s\" loot.";
String RESET_ONE_WARNING_TEXT =
"This will delete one kill.";
	// When there is no loot, display this
	// Handle loot boxes
	// Handle overall session data
JPanel overallPanel;
	// Details and navigation
JPanel actionsPanel;
	// Aggregate of all kills
	// Individual records for the individual kills this session
ItemManager itemManager;
LootTrackerPlugin plugin;
LootTrackerConfig config;
boolean groupLoot;
boolean hideIgnoredItems;
String currentView;
LootRecordType currentType;
LootTrackerPanel(LootTrackerPlugin plugin, ItemManager itemManager, LootTrackerConfig config) 
		// Create layout panel for wrapping
		// Create loot boxes wrapper
		// Add error pane
	/**
	 * The actions panel includes the back/title label for the current view,
	 * as well as the view controls panel which includes hidden, single/grouped, and
	 * collapse buttons.
	 */
	private buildActionsPanel(): JPanel;
	private buildOverallPanel(): JPanel;
		// Create panel that will contain overall data
		// Add icon and contents
		// Create reset all menu
			// If not in detailed view, remove all, otherwise only remove for the currently detailed title
			// Delete all loot, or loot matching the current view
		// Create popup menu
	updateCollapseText(): void;
	private isAllCollapsed(): boolean;
	loadHeaderIcon(img: BufferedImage): void;
	/**
	 * Adds a new entry to the plugin.
	 * Creates a subtitle, adds a new entry and then passes off to the render methods, that will decide
	 * how to display this new data.
	 */
	add(eventName: string, type: LootRecordType, actorLevel: number, items: LootTrackerItem[], kills: number): void;
	/**
	 * Clear all records in the panel
	 */
	clearRecords(): void;
	/**
	 * Adds a Collection of records to the panel
	 */
	addRecords(recs: Collection<LootTrackerRecord>): void;
	/**
	 * Changes grouping mode of panel
	 *
	 * @param group if loot should be grouped or not
	 */
	private changeGrouping(group: boolean): void;
	/**
	 * Changes item hiding mode of panel
	 *
	 * @param hide if ignored items should be hidden or not
	 */
	private changeItemHiding(hide: boolean): void;
	/**
	 * Changes the collapse status of loot entries
	 */
	private changeCollapse(): void;
	/**
	 * After an item changed it's ignored state, iterate all the records and make
	 * sure all items of the same name also get updated
	 */
	updateIgnoredRecords(): void;
	/**
	 * Rebuilds all the boxes from scratch using existing listed records, depending on the grouping mode.
	 */
	private rebuild(): void;
			// Loop in reverse insertion order so limiting includes most recent data
				// filter records prior to limiting so that it is limited to the correct amount
				// The box that is built last is first inside the UI.
				// since we are looping in reverse order we need to use a data type that support reverse iterating
	/**
	 * This method decides what to do with a new record, if a similar log exists, it will
	 * add its items to it, updating the log's overall price and kills. If not, a new log will be created
	 * to hold this entry's information.
	 */
	private buildBox(record: LootTrackerRecord): LootTrackerBox;
		// If this record is not part of current view, return
		// Group all similar loot together
					// float the matched box to the top of the UI list if it's not already first
		// Show main view
		// Create box
		// Use the existing popup menu or create a new one
		// Create collapse event
		// Create reset menu
				// With grouped loot, remove any record with this title
				// Otherwise remove specifically this entry
			// Without loot being grouped we have no way to identify single kills to be deleted
		// Create details menu
		// Add box to panel
	private updateOverall(): void;
	private static htmlLabel(key: string, value: number): string;
}
}