/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="EnumComposition.d.ts" />
/// <reference path="EnumID.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="ParamID.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="annotations/Interface.d.ts" />
/// <reference path="events/DraggingWidgetChanged.d.ts" />
/// <reference path="events/MenuOptionClicked.d.ts" />
/// <reference path="events/ScriptPostFired.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetConfig/DRAG.d.ts" />
/// <reference path="widgets/WidgetConfig/DRAG_ON.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="ProfileChanged.d.ts" />
/*
 * Copyright (c) 2018, 2023, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.prayer {
)
export class PrayerReorder
{
"", ComponentID.FIXED_VIEWPORT_PRAYER_TAB);
"", ComponentID.FIXED_VIEWPORT_PRAYER_TAB);
"", ComponentID.RESIZABLE_VIEWPORT_PRAYER_TAB);
"", ComponentID.RESIZABLE_VIEWPORT_PRAYER_TAB);
"", ComponentID.RESIZABLE_VIEWPORT_BOTTOM_LINE_PRAYER_TAB);
"", ComponentID.RESIZABLE_VIEWPORT_BOTTOM_LINE_PRAYER_TAB);
Client client;
ClientThread clientThread;
ConfigManager configManager;
ChatMessageManager chatMessageManager;
MenuManager menuManager;
boolean reordering;
	private static startUp(): void;
		// original plugin's config
	shutDown(): void;
	reset(): void;
	private getPrayerOrder(prayerbook: number): number[];
	private setPrayerOrder(prayerbook: number, prayers: number[]): void;
	private isHidden(prayerbook: number, prayer: number): boolean;
	private setHidden(prayerbook: number, prayer: number, hidden: boolean): void;
	onDraggingWidgetChanged(event: net.runelite.api.events.DraggingWidgetChanged): void;
		// is dragging widget and mouse button released
				// reset dragged on widget to prevent sending a drag widget packet to the server
	onScriptPostFired(scriptPostFired: net.runelite.api.events.ScriptPostFired): void;
			// this script calls if_clearops on the prayer, removing our hide/unhide, so we just re-build the entire ui
			// rebuild after eg. a prayer book swap
			// rebuild after opening quick prayers
	private getPrayerBookEnum(prayerbook: number): EnumComposition;
	private defaultPrayerOrder(prayerEnum: EnumComposition): number[];
	private findPrayerIdFromComponent(prayerbook: number, component: net.runelite.api.widgets.Widget): number;
	private clearPrayerTabMenus(): void;
	private reordering(state: boolean): void;
	private refreshPrayerTabOption(): void;
	private redrawPrayers(): void;
	private rebuildPrayers(unlocked: boolean): void;
					// allow dragging of this widget & to be dragged on
					// remove drag flag & drag on flags
				// in unlocked mode we show the prayers, but they have opacity set
			// (op targetable component)* (prayer icon, checkbox)*
	private isInterfaceOpen(interfaceId: number): boolean;
	onMenuOptionClicked(menuOptionClicked: net.runelite.api.events.MenuOptionClicked): void;
				// child 0 is the background if the prayer is active.
				// child 1 is the prayer icon itself.
	onProfileChanged(e: ProfileChanged): void;
}
}