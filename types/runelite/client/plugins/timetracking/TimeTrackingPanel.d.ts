/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="PluginPanel.d.ts" />
/// <reference path="Tab.d.ts" />
/// <reference path="TabContentPanel.d.ts" />
/*
 * Copyright (c) 2018 Abex
 * Copyright (c) 2018, Psikoi <https://github.com/psikoi>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *     list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 *  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 *  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 *  ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 *  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 *  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.plugins.timetracking {
export class TimeTrackingPanel extends PluginPanel
{
ItemManager itemManager;
TimeTrackingConfig config;
	/* This is the panel the tabs' respective panels will be displayed on. */
boolean active;
TimeTrackingPanel(ItemManager itemManager, TimeTrackingConfig config, FarmingTracker farmingTracker, BirdHouseTracker birdHouseTracker, ClockManager clockManager, FarmingContractManager farmingContractManager, ConfigManager configManager,  boolean developerMode) 
	private addTab(tab: Tab, tabContentPanel: TabContentPanel): void;
		// Use a placeholder icon until the async image gets loaded
	switchTab(tab: Tab): void;
	/**
	 * Gets the update interval of the active tab panel, in units of 200 milliseconds.
	 */
	getUpdateInterval(): number;
	/**
	 * Updates the active tab panel, if this plugin panel is displayed.
	 */
	update(): void;
	onActivate(): void;
	onDeactivate(): void;
}
}