/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/WidgetItem.d.ts" />
/// <reference path="ConfigChanged.d.ts" />
/// <reference path="ProfileChanged.d.ts" />
/// <reference path="OverlayLayer.d.ts" />
/// <reference path="Collection.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="synchronized boolean.d.ts" />
/// <reference path="Predicate.d.ts" />
/// <reference path="synchronized void.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="OverlayPosition.d.ts" />
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
/**
 * Manages state of all game overlays
 */
export class OverlayManager
{
			// This is so non-dynamic overlays render after dynamic
			// overlays, which are generally in the scene
		// For dynamic overlays, higher priority means to
		// draw *later* so it is on top.
		// For non-dynamic overlays, higher priority means
		// draw *earlier* so that they are closer to their
		// defined position.
	/**
	 * Insertion-order sorted set of overlays
	 * All access to this must be guarded by a lock on this OverlayManager
	 */
	/**
	 * Valid keys are:
	 * OverlayLayer ABOVE_SCENE, UNDER_WIDGETS, and ALWAYS_ON_TOP
	 * A component id that is a layer
	 * An interface id << 16 | 0xffff
	 */
ConfigManager configManager;
RuneLiteConfig runeLiteConfig;
OverlayManager(ConfigManager configManager, RuneLiteConfig runeLiteConfig) 
	onConfigChanged(event: ConfigChanged): void;
	onProfileChanged(event: ProfileChanged): void;
	/**
	 * Gets all of the overlays on a layer sorted by priority and position
	 *
	 * @param layer the layer
	 * @return An immutable list of all of the overlays on that layer
	 */
	getLayer(layer: OverlayLayer): Collection<Overlay>;
	getForInterface(interfaceId: number): Collection<Overlay>;
	getForLayer(layerId: number): Collection<Overlay>;
	/**
	 * Add overlay.
	 *
	 * @param overlay the overlay
	 * @return true if overlay was added
	 */
	add(overlay: Overlay): synchronized boolean;
		// Add is always true
		// WidgetItemOverlays have a reference to the overlay manager in order to get the WidgetItems
		// for each frame.
	/**
	 * Remove overlay.
	 *
	 * @param overlay the overlay
	 * @return true if overlay was removed
	 */
	remove(overlay: Overlay): synchronized boolean;
	/**
	 * Remove if overlay matches filter
	 *
	 * @param filter the filter
	 * @return true if any overlay was removed
	 */
	removeIf(filter: Predicate<Overlay>): synchronized boolean;
	/**
	 * Returns whether an overlay exists which matches the given predicate.
	 *
	 * @param filter Filter predicate function
	 * @return {@code true} if any overlays match the given filter, {@code false} otherwise
	 */
	anyMatch(filter: Predicate<Overlay>): synchronized boolean;
	/**
	 * Clear all overlays
	 */
	clear(): synchronized void;
	/**
	 * Force save overlay data
	 *
	 * @param overlay overlay to save
	 */
	saveOverlay(overlay: Overlay): synchronized void;
	/**
	 * Resets stored overlay position data
	 *
	 * @param overlay overlay to reset
	 */
	resetOverlay(overlay: Overlay): synchronized void;
	rebuildOverlayLayers(): synchronized void;
				// When UNDER_WIDGET overlays are in preferred locations, move to
				// ABOVE_WIDGETS so that it can draw over interfaces
					// draw after each of the top level interfaces
	private loadOverlay(overlay: Overlay): void;
	private updateOverlayConfig(overlay: Overlay): void;
			// Update preferred color for overlay panels based on configuration
	private saveOverlayLocation(overlay: Overlay): void;
	private saveOverlaySize(overlay: Overlay): void;
	private saveOverlayPosition(overlay: Overlay): void;
	private loadOverlayLocation(overlay: Overlay): Point;
	private loadOverlaySize(overlay: Overlay): Dimension;
	private loadOverlayPosition(overlay: Overlay): OverlayPosition;
}
}