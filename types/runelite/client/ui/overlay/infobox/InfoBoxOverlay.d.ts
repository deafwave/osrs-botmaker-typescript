/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="events/MenuOptionClicked.d.ts" />
/// <reference path="OverlayPanel.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="OverlayMenuEntry.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="ComponentOrientation.d.ts" />
/*
 * Copyright (c) 2017, Seth <Sethtroll3@gmail.com>
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
declare namespace net.runelite.client.ui.overlay.infobox {
export class InfoBoxOverlay extends OverlayPanel
{
InfoBoxManager infoboxManager;
TooltipManager tooltipManager;
Client client;
RuneLiteConfig config;
EventBus eventBus;
String name;
ComponentOrientation orientation;
InfoBoxComponent hoveredComponent;
InfoBoxOverlay( InfoBoxManager infoboxManager, TooltipManager tooltipManager, Client client, RuneLiteConfig config, EventBus eventBus, String name, ComponentOrientation orientation) 
	getName(): string;
	render(graphics: Graphics2D): Dimension;
		// Set preferred size to the size of DEFAULT_WRAP_COUNT infoboxes, including the padding - which is applied
		// to the last infobox prior to wrapping too.
		// Handle tooltips
			// Create intersection rectangle
	getMenuEntries(): Array<OverlayMenuEntry>;
		// we dynamically build the menu options based on which infobox is hovered
	onMenuOptionClicked(menuOptionClicked: net.runelite.api.events.MenuOptionClicked): void;
	onDrag(source: Overlay): boolean;
	flip(): ComponentOrientation;
}
}