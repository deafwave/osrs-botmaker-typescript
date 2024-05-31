/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="PluginPanel.d.ts" />
/// <reference path="PluginConfigurationDescriptor....d.ts" />
/// <reference path="Plugin.d.ts" />
/// <reference path="PluginConfigurationDescriptor.d.ts" />
/// <reference path="PluginChanged.d.ts" />
/// <reference path="ExternalPluginsChanged.d.ts" />
/// <reference path="ProfileChanged.d.ts" />
/*
 * Copyright (c) 2017, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.config {
export class PluginListPanel extends PluginPanel
{
"Combat",
"Chat",
"Item",
"Minigame",
"Notification",
"Plugin Hub",
"Skilling",
"XP"
);
ConfigManager configManager;
PluginManager pluginManager;
Provider<ConfigPanel> configPanelProvider;
ExternalPluginManager externalPluginManager;
MultiplexingPluginPanel muxer;
IconTextField searchBar;
JScrollPane scrollPane;
FixedWidthPanel mainPanel;
List<PluginListItem> pluginList;
PluginListPanel( ConfigManager configManager, PluginManager pluginManager, ExternalPluginManager externalPluginManager, EventBus eventBus, Provider<ConfigPanel> configPanelProvider) 
	private rebuildPluginList(): void;
		// populate pluginList with all non-hidden plugins
	addFakePlugin(descriptor: PluginConfigurationDescriptor...): void;
	refresh(): void;
		// update enabled / disabled status of all items
	openWithFilter(filter: string): void;
	private onSearchBarChanged(): void;
	openConfigurationPanel(configGroup: string): void;
	openConfigurationPanel(plugin: Plugin): void;
	openConfigurationPanel(plugin: PluginConfigurationDescriptor): void;
	startPlugin(plugin: Plugin): void;
	stopPlugin(plugin: Plugin): void;
	private getPinnedPluginNames(): Array<string>;
	savePinnedPlugins(): void;
	onPluginChanged(event: PluginChanged): void;
	getPreferredSize(): Dimension;
	onActivate(): void;
	private onExternalPluginsChanged(ev: ExternalPluginsChanged): void;
	private onProfileChanged(ev: ProfileChanged): void;
}
}