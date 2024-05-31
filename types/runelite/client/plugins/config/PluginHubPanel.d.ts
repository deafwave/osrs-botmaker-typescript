/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="PluginPanel.d.ts" />
/// <reference path="JLabel.d.ts" />
/// <reference path="JPanel implements SearchablePlugin.d.ts" />
/// <reference path="PluginHubManifest.ManifestFull.d.ts" />
/// <reference path="Integer>.d.ts" />
/// <reference path="Plugin> clazz = p.getClass();.d.ts" />
/// <reference path="ExternalPluginsChanged.d.ts" />
/*
 * Copyright (c) 2019 Abex
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
export class PluginHubPanel extends PluginPanel
{
ImageIcon MISSING_ICON;
ImageIcon HELP_ICON;
ImageIcon CONFIGURE_ICON;
ImageIcon PLUGIN_UNAVAILABLE_ICON;
export class PluginIcon extends JLabel
	private static pumpIconQueue(): void | null;
		// re add ourselves to the executor queue so we don't block the executor for a long time
export class PluginItem extends JPanel implements SearchablePlugin
TopLevelConfigPanel topLevelConfigPanel;
ExternalPluginManager externalPluginManager;
PluginManager pluginManager;
ExternalPluginClient externalPluginClient;
ScheduledExecutorService executor;
IconTextField searchBar;
JLabel refreshing;
JPanel mainPanel;
PluginHubManifest.ManifestFull lastManifest;
PluginHubPanel( TopLevelConfigPanel topLevelConfigPanel, ExternalPluginManager externalPluginManager, PluginManager pluginManager, ExternalPluginClient externalPluginClient, ScheduledExecutorService executor) 
		// Can't use Short.MAX_VALUE like the docs say because of JDK-8079640
	private reloadPluginList(): void;
	private reloadPluginList(manifest: PluginHubManifest.ManifestFull,  Map<String, pluginCounts: Integer>): void;
	filter(): void;
	onActivate(): void;
	onDeactivate(): void;
	private onExternalPluginsChanged(ev: ExternalPluginsChanged): void;
}
}