/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Plugin>[] builtinExternals = null;.d.ts" />
/// <reference path="ProfileChanged.d.ts" />
/// <reference path="Plugin> pluginClass : builtinExternals).d.ts" />
/// <reference path="Plugin> plugin).d.ts" />
/// <reference path="Class.d.ts" />
/// <reference path="Class<.d.ts" />
/// <reference path="PluginHubManifest.JarData.d.ts" />
/// <reference path="PluginHubManifest.DisplayData.d.ts" />
/// <reference path="Plugin>... plugins).d.ts" />
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
declare namespace net.runelite.client.externalplugins {
export class ExternalPluginManager
{
boolean safeMode;
ConfigManager configManager;
ExternalPluginClient externalPluginClient;
ScheduledExecutorService executor;
PluginManager pluginManager;
EventBus eventBus;
OkHttpClient okHttpClient;
Gson gson;
ExternalPluginManager( ConfigManager configManager, ExternalPluginClient externalPluginClient, ScheduledExecutorService executor, PluginManager pluginManager, EventBus eventBus, OkHttpClient okHttpClient, Gson gson ) 
			// builtin external's don't actually have a manifest or a separate classloader...
		// run before PluginManager to avoid it starting plugins which we are about to uninstall
	loadExternalPlugins(): void;
	onProfileChanged(profileChanged: ProfileChanged): void;
	private refreshPlugins(): void;
				// delete old plugins
			// TODO(abex): make sure the plugins get fully removed from the scheduler/eventbus/other managers (iterate and check classloader)
			// list of loaded external plugins that aren't in the manifest
				// I think this can't happen, but just in case
	getInstalledExternalPlugins(): Array<string>;
	install(key: string): void;
	remove(key: string): void;
	update(): void;
	static getJarData(extends: Class<?): PluginHubManifest.JarData | null;
	static getDisplayData(extends: Class<?): PluginHubManifest.DisplayData | null;
	static getInternalName(extends: Class<?): string | null;
	static loadBuiltin(extends: Class<?): void;
}
}