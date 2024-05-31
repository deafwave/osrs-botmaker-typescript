/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetItem.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="abstract void.d.ts" />
/// <reference path="int....d.ts" />
/// <reference path="OverlayPosition.d.ts" />
/// <reference path="OverlayPriority.d.ts" />
/// <reference path="OverlayLayer.d.ts" />
/*
 * Copyright (c) 2019, Adam <Adam@sigterm.info>
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
abstract class WidgetItemOverlay extends Overlay
{
OverlayManager overlayManager;
WidgetItemOverlay() 
	renderItemOverlay(graphics: Graphics2D, itemId: number, widgetItem: net.runelite.api.widgets.WidgetItem): abstract void;
	render(graphics: Graphics2D): Dimension;
				// If dragging, clip if the dragged item is outside of the parent bounds
				// Otherwise, we only need to clip the overlay if it intersects the parent bounds,
				// since items completely outside of the parent bounds are not drawn
	private showOnInventory(): void;
	private showOnBank(): void;
	private showOnEquipment(): void;
	private showOnInterfaces(ids: int...): void;
	// Don't allow setting position, priority, or layer
	setPosition(position: OverlayPosition): void;
	setPriority(priority: number): void;
	setPriority(priority: OverlayPriority): void;
	setLayer(layer: OverlayLayer): void;
}
}