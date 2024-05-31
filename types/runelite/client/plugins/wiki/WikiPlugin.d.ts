/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NPCComposition.d.ts" />
/// <reference path="NullItemID.d.ts" />
/// <reference path="ObjectComposition.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="SpriteID.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/MenuEntryAdded.d.ts" />
/// <reference path="events/MenuOptionClicked.d.ts" />
/// <reference path="events/ScriptPostFired.d.ts" />
/// <reference path="events/WidgetLoaded.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/JavaScriptCallback.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetConfig.d.ts" />
/// <reference path="widgets/WidgetPositionMode.d.ts" />
/// <reference path="widgets/WidgetType.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="Plugin.d.ts" />
/// <reference path="ConfigManager.d.ts" />
/// <reference path="WikiConfig.d.ts" />
/// <reference path="ConfigChanged.d.ts" />
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
declare namespace net.runelite.client.plugins.wiki {
( ) 
export class WikiPlugin extends Plugin
{
WikiConfig config;
ClientThread clientThread;
Client client;
ItemManager itemManager;
Provider<WikiSearchChatboxTextInput> wikiSearchChatboxTextInputProvider;
WikiDpsManager wikiDpsManager;
Widget icon;
	private static getConfig(configManager: ConfigManager): WikiConfig;
	startUp(): void;
	shutDown(): void;
	private removeWidgets(): void;
	private onWidgetLoaded(l: net.runelite.api.events.WidgetLoaded): void;
	private addWidgets(): void;
			// when the wiki entity lookup option is disabled the banner parent layer,
			// which is used for var transmit events, is not positioned. This is copied
			// from [proc,wiki_icon_update]
		// This doesn't always run because we cancel the menuop
	onScriptPostFired(scriptPostFired: net.runelite.api.events.ScriptPostFired): void;
	onConfigChanged(event: ConfigChanged): void;
	private onDeselect(): void;
	private onMenuOptionClicked(ev: net.runelite.api.events.MenuOptionClicked): void;
					// This is a quest widget op
					// fallthrough
	private openSearchInput(): void;
	private getWidget(wid: number, index: number): net.runelite.api.widgets.Widget;
	onMenuEntryAdded(event: net.runelite.api.events.MenuEntryAdded): void;
				// we don't support this widget
				// remove the last SPELL_CAST_ON_WIDGET; we can't blindly remove the top action because some other
				// plugin might have added something on this same event, and we probably shouldn't remove that instead
}
}