/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../api/events/BeforeRender.d.ts" />
/// <reference path="../../../api/events/FocusChanged.d.ts" />
/// <reference path="../../../api/events/ClientTick.d.ts" />
/// <reference path="../../../api/widgets/Widget.d.ts" />
/// <reference path="../../../api/widgets/WidgetItem.d.ts" />
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
declare namespace net.runelite.client.ui.overlay {
	//  extends MouseAdapter
	export class OverlayRenderer {
		onFocusChanged(event: net.runelite.api.events.FocusChanged): void;
		onClientTick(t: net.runelite.api.events.ClientTick): void;
		// Add in reverse order so they display correctly in the right-click menu
		onBeforeRender(event: net.runelite.api.events.BeforeRender): void;
		// Create copy of snap corners because overlays will modify them
		renderOverlayLayer(graphics: Graphics2D, layer: any): void; // OverlayLayer
		renderAfterInterface(
			graphics: Graphics2D,
			interfaceId: number,
			widgetItems: Collection<net.runelite.api.widgets.WidgetItem>,
		): void;
		renderAfterLayer(
			graphics: Graphics2D,
			layer: net.runelite.api.widgets.Widget,
			widgetItems: Collection<net.runelite.api.widgets.WidgetItem>,
		): void;
		// Draw snap corners
		// Save graphics2d properties so we can restore them later
		// If the final position is not modified, layout it
		// Target x/y to draw the overlay
		// Clamp the target position to ensure it is on screen or within parent bounds
		// Clamp the overlay position to ensure it is on screen or within parent bounds
		// Adjust snap corner based on where the overlay was drawn
		// Restore graphics2d properties prior to drawing bounds
		mousePressed(mouseEvent: MouseEvent): MouseEvent;
		// See if we've clicked on an overlay
		mouseMoved(mouseEvent: MouseEvent): MouseEvent;
		// center
		mouseDragged(mouseEvent: MouseEvent): MouseEvent;
		// No longer over drag target
		// center
		// If this resize operation would cause the dimensions to go below the minimum width/height, reset the
		// dimensions and adjust the x/y position accordingly as needed
		// Clamp drag to parent component
		// Move currently moved overlay to correct layer
		mouseReleased(mouseEvent: MouseEvent): MouseEvent;
	}
}
