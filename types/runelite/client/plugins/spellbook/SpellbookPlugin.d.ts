/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="EnumComposition.d.ts" />
/// <reference path="EnumID.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="ParamID.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="events/DraggingWidgetChanged.d.ts" />
/// <reference path="events/ScriptCallbackEvent.d.ts" />
/// <reference path="events/ScriptPreFired.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/JavaScriptCallback.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetConfig/DRAG.d.ts" />
/// <reference path="widgets/WidgetConfig/DRAG_ON.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="Plugin.d.ts" />
/// <reference path="ConfigManager.d.ts" />
/// <reference path="SpellbookConfig.d.ts" />
/// <reference path="ProfileChanged.d.ts" />
/*
 * Copyright (c) 2024, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.spellbook {
( ) 
export class SpellbookPlugin extends Plugin
{
	// [proc,magic_spellbook_modifyops] shifts around ops, but seems to only use
	// 1 2 3 4 5 10. So use 6 for Hide/Unhide.
"", ComponentID.FIXED_VIEWPORT_MAGIC_TAB);
"", ComponentID.FIXED_VIEWPORT_MAGIC_TAB);
"", ComponentID.RESIZABLE_VIEWPORT_MAGIC_TAB);
"", ComponentID.RESIZABLE_VIEWPORT_MAGIC_TAB);
"", ComponentID.RESIZABLE_VIEWPORT_BOTTOM_LINE_MAGIC_TAB);
"", ComponentID.RESIZABLE_VIEWPORT_BOTTOM_LINE_MAGIC_TAB);
Client client;
ClientThread clientThread;
MenuManager menuManager;
ChatMessageManager chatMessageManager;
ConfigManager configManager;
boolean reordering;
	private static getConfig(configManager: ConfigManager): SpellbookConfig;
	private startUp(): void;
	private shutDown(): void;
	onProfileChanged(event: ProfileChanged): void;
	resetConfiguration(): void;
	private clearReoderMenus(): void;
	private refreshReorderMenus(): void;
	private reordering(state: boolean): void;
	onScriptPreFired(event: net.runelite.api.events.ScriptPreFired): void;
	onDraggingWidgetChanged(event: net.runelite.api.events.DraggingWidgetChanged): void;
			// from ~magic_spellbook_redraw
	private findSpellIdxForComponent(spellbook: EnumComposition, spells: number[], c: net.runelite.api.widgets.Widget): number;
	onScriptCallbackEvent(event: net.runelite.api.events.ScriptCallbackEvent): void;
		// this is called after ~magic_spellbook_redraw has built and sorted the array of visible spells
		// based on the vanilla filtering
		// Sort newSpells based on their configured order
	private initializeSpells(spellbookEnum: number): void;
			// spells with no target mask have an existing op listener, capture it to
			// call it later
					// Spells can be shared between spellbooks, so we can't assume spellbookEnum is the current spellbook.
					// from ~magic_spellbook_redraw
	private reinitializeSpellbook(): void;
	private redrawSpellbook(): void;
	private calculateSpellbookOrder(spellbookId: number, spellbook: EnumComposition): number[];
		// sort by desired index
	private defaultSpellbookOrder(spellbook: EnumComposition): number[];
	private isHidden(spellbook: number, spell: number): boolean;
	private setHidden(spellbook: number, spell: number, hidden: boolean): void;
	private getPosition(spellbook: number, spell: number): number;
	private setPosition(spellbook: number, spell: number, position: number): void;
}
}