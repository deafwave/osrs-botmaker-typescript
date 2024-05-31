/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="KeyCode.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="events/BeforeRender.d.ts" />
/// <reference path="events/ClientTick.d.ts" />
/// <reference path="events/FocusChanged.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetItem.d.ts" />
/// <reference path="MouseAdapter.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="OverlayLayer.d.ts" />
/// <reference path="Collection.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="MouseEvent.d.ts" />
/// <reference path="Rectangle.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="OverlayPosition.d.ts" />
/// <reference path="OverlayBounds.d.ts" />
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
export class OverlayRenderer extends MouseAdapter
{
Client client;
OverlayManager overlayManager;
RuneLiteConfig runeLiteConfig;
ClientUI clientUI;
EventBus eventBus;
ChatMessageManager chatMessageManager;
	// Overlay movement variables
Overlay currentManagedOverlay;
Overlay dragTargetOverlay;
Rectangle currentManagedBounds;
boolean inOverlayManagingMode;
boolean inOverlayResizingMode;
boolean inOverlayDraggingMode;
boolean startedMovingOverlay;
Overlay curHoveredOverlay; // for building menu entries
Overlay lastHoveredOverlay; // for off-thread access
	// Overlay state validation
Rectangle viewportBounds;
Rectangle chatboxBounds;
boolean chatboxHidden;
boolean isResizeable;
OverlayBounds emptySnapCorners, snapCorners;
boolean dragWarn;
OverlayRenderer( Client client, OverlayManager overlayManager, RuneLiteConfig runeLiteConfig, MouseManager mouseManager, KeyManager keyManager, ClientUI clientUI, EventBus eventBus, ChatMessageManager chatMessageManager ) 
	onFocusChanged(event: net.runelite.api.events.FocusChanged): void;
	private onClientTick(t: net.runelite.api.events.ClientTick): void;
		// Add in reverse order so they display correctly in the right-click menu
	onBeforeRender(event: net.runelite.api.events.BeforeRender): void;
			// Create copy of snap corners because overlays will modify them
	renderOverlayLayer(graphics: Graphics2D, layer: OverlayLayer): void;
	renderAfterInterface(graphics: Graphics2D, interfaceId: number, widgetItems: Collection<WidgetItem>): void;
	renderAfterLayer(graphics: Graphics2D, layer: net.runelite.api.widgets.Widget, widgetItems: Collection<WidgetItem>): void;
	private renderOverlays(graphics: Graphics2D, overlays: Collection<Overlay>, layer: OverlayLayer): void;
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
		// Check if the overlay is over a snapcorner and snap it if so
						// overlay moves back to default position
	private clipBounds(layer: OverlayLayer): Rectangle;
	private safeRender(overlay: Overlay, graphics: Graphics2D, point: Point): void;
		// Set font based on configuration
	private getCorrectedOverlayPosition(overlay: Overlay): OverlayPosition;
			// On fixed mode, ABOVE_CHATBOX_RIGHT is in the same location as
			// BOTTOM_RIGHT and CANVAS_TOP_RIGHT is same as TOP_RIGHT.
			// Just use BOTTOM_RIGHT and TOP_RIGHT to prevent overlays from
			// drawing over each other.
	private resetOverlayManagementMode(): void;
	private shouldInvalidateBounds(): boolean;
	private getViewportLayer(): net.runelite.api.widgets.Widget;
	private buildSnapCorners(): OverlayBounds;
		// Check to see if chat box is minimized
	/**
	 * Adjust the given overlay position to be within its parent's bounds.
	 *
	 * @param overlayX
	 * @param overlayY
	 * @param overlayWidth
	 * @param overlayHeight
	 * @param overlay       the overlay
	 * @return the clamped position
	 */
	private clampOverlayLocation(overlayX: number, overlayY: number, overlayWidth: number, overlayHeight: number, overlay: Overlay): Point;
			// If no bounds are set, use the full client bounds
		// Constrain overlay position to be within the parent bounds
}
}