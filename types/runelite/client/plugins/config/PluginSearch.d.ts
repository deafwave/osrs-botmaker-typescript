/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="SearchablePlugin> List<T> search(Collection<T> searchablePlugins.d.ts" />
/// <reference path="String query).d.ts" />
/// <reference path="Collection.d.ts" />
/// <reference path="T.d.ts" />
/// <reference path=".d.ts" />
/// <reference path="T extends SearchablePlugin> List<T.d.ts" />
/// <reference path="Comparator.d.ts" />
/// <reference path="SearchablePlugin.d.ts" />
/// <reference path="Iterable.d.ts" />
/// <reference path="String.d.ts" />
/// <reference path="Stream.d.ts" />
/*
 * Copyright (c) 2020, Jack Hodkinson <https://github.com/jrhodkinson>
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
export class PluginSearch
{
	private static search(searchablePlugins: Collection<T>, query: string): <T extends SearchablePlugin> List<T>;
	private static comparator(query: string): Comparator<SearchablePlugin>;
	private static stream(iterable: Iterable<String>): Stream<String>;
	private static containsOrIsContainedBy(a: string, b: string): boolean;
}
}