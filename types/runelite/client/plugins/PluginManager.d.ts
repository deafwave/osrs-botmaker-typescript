/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="ProfileChanged.d.ts" />
/// <reference path="Plugin.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="Collection.d.ts" />
/// <reference path="Plugin>> graph = GraphBuilder.d.ts" />
/// <reference path="Plugin> pluginClazz : graph.nodes()).d.ts" />
/// <reference path="Plugin>> sortedPlugins = topologicalSort(graph);.d.ts" />
/// <reference path="Plugin> pluginClazz : sortedPlugins).d.ts" />
/// <reference path="Class<?>.d.ts" />
/// <reference path="Integer>.d.ts" />
/// <reference path="Class.d.ts" />
/// <reference path="Graph.d.ts" />
/// <reference path="T.d.ts" />
/// <reference path=".d.ts" />
/// <reference path="T> List<T.d.ts" />
/*
 * Copyright (c) 2016-2017, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins {
export class PluginManager
{
	/**
	 * Base package where the core plugins are
	 */
boolean developerMode;
boolean safeMode;
EventBus eventBus;
Scheduler scheduler;
ConfigManager configManager;
Provider<GameEventManager> sceneTileManager;
boolean isOutdated;
PluginManager(  boolean developerMode,  boolean safeMode, EventBus eventBus, Scheduler scheduler, ConfigManager configManager, Provider<GameEventManager> sceneTileManager) 
	onProfileChanged(profileChanged: ProfileChanged): void;
	private refreshPlugins(): void;
	getPluginConfigProxy(plugin: Plugin): Config;
	getPluginConfigProxies(plugins: Collection<Plugin>): Array<Config>;
	loadDefaultPluginConfiguration(plugins: Collection<Plugin>): void;
	startPlugins(): void;
	loadCorePlugins(): void;
				// also disable the plugin from autostarting later
		// Build plugin graph
		// plugins always start in the EDT
		// plugins always stop in the EDT
	loadPlugins(plugins: Array<Class<?>>,  BiConsumer<Integer, onPluginLoaded: Integer>): Array<Plugin>;
	isPluginEnabled(plugin: Plugin): boolean;
					// Create a module for each dependency
				// Create a parent injector containing all of the dependencies
				// With only one dependency we can simply use its injector
			// Create injector for the module
				// Since the plugin itself is a module, it won't bind itself, so we'll bind it here
	private instantiate(scannedPlugins: Array<Plugin>, clazz: Class<Plugin>): Plugin;
	remove(plugin: Plugin): void;
	getPlugins(): Collection<Plugin>;
	private schedule(plugin: Plugin): void;
	private unschedule(plugin: Plugin): void;
	/**
	 * Topologically sort a graph. Uses Kahn's algorithm.
	 *
	 * @param graph - A directed graph
	 * @param <T>   - The type of the item contained in the nodes of the graph
	 * @return - A topologically sorted list corresponding to graph.
	 * <p>
	 * Multiple invocations with the same arguments may return lists that are not equal.
	 */
	static topologicalSort(graph: Graph<T>): <T> List<T>;
	conflictsForPlugin(plugin: Plugin): Array<Plugin>;
}
}