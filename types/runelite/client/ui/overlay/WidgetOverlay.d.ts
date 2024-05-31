/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="annotations/Component.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="OverlayManager.d.ts" />
/// <reference path="Collection.d.ts" />
/// <reference path="WidgetOverlay.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="Rectangle.d.ts" />
/*
 * Copyright (c) 2018, Tomas Slusny <slusnucky@gmail.com>
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
export class WidgetOverlay extends Overlay
{
	static createOverlays(overlayManager: OverlayManager, client: Client): Collection<WidgetOverlay>;
			// classic resizable - these are in render order for managed overlay picking
			// modern resizable
			// The client forces the oxygen bar below the xp tracker, so set its priority lower
			// The client forces the health overlay bar below the xp tracker, so set its priority lower
Client client;
int componentId;
String name;
boolean revalidate;
WidgetOverlay(Client client, int componentId, String name, OverlayPosition overlayPosition) 
WidgetOverlay(Client client, int componentId, String name, OverlayPosition overlayPosition, float overlayPriority) 
		// It's almost possible to drawAfterInterface() here, but that fires
		// *after* the native components are drawn, which is too late.
	getName(): string;
	render(graphics: Graphics2D): Dimension;
		// OverlayRenderer sets the overlay bounds to where it would like the overlay to render at prior to calling
		// render(). If the overlay has a preferred location or position set we update the widget position to that.
			// The widget relative pos is relative to the parent
				// Revalidate the widget to reposition it back to its normal location after an overlay reset
			// Update the overlay bounds to the widget bounds so the drag overlay renders correctly.
			// Note OverlayManager uses original bounds reference to render managing mode and for
			// onMouseOver, so update the existing bounds vs. replacing the reference.
	private getParentBounds(widget: net.runelite.api.widgets.Widget): Rectangle;
	getParentBounds(): Rectangle;
			// During overlay drag this is called on the EDT, so we just
			// cache and reuse the last known parent bounds.
	revalidate(): void;
		// Revalidate must be called on the client thread, so defer til next frame
export class XpTrackerWidgetOverlay extends WidgetOverlay
			// The xptracker component layer isn't hidden if the counter and process bar are both configured "Off",
			// it just has its children hidden.
		/**
		 * Get the overlay position of the xptracker based on the configured location in-game.
		 *
		 * @return
		 */
				// During overlay drag, getPosition() is called on the EDT, so we just
				// cache and reuse the last known configured position.
export class PvpKDRWidgetOverlay extends WidgetOverlay
			// Don't draw widget overlay if the PVP KDR stats text will be empty
}
}