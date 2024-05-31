/// <reference path="../../../../java/index.d.ts" />
/// <reference path="./Overlay.d.ts" />
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
	abstract class OverlayPanel extends net.runelite.client.ui.overlay.Overlay {

		// protected PanelComponent: net.runelite.client.ui.overlay.components.PanelComponent; not implemented yet.

		
		/**
		 * Gets the panel component.
		 * @returns The panel component.
		 */
		getPanelComponent(): any; // PanelComponent - not implemented yet.

		/**
		 * Gets the preferred color used for the panel component background.
		 * @returns The preferred color.
		 */
		getPreferredColor(): Color;

		/**
		 * Checks if automatic clearing of panel component children after rendering is enabled.
		 * @returns True if enabled, false otherwise.
		 */
		isClearChildren(): boolean;

		/**
		 * Checks if automatic font size changes based on panel component size relative to default size is enabled.
		 * @returns True if enabled, false otherwise.
		 */
		isDynamicFont(): boolean;

		/**
		 * Renders the overlay on the provided Graphics2D object.
		 * @param graphics The Graphics2D object to render on.
		 * @returns The dimension of the rendered overlay.
		 */
		render(graphics: Graphics2D): Dimension;

		/**
		 * Enables or disables automatic clearing of panel component children after rendering.
		 * @param clearChildren True to enable, false to disable.
		 */
		setClearChildren(clearChildren: boolean): void;

		/**
		 * Enables or disables automatic font size changes based on panel component size relative to default size.
		 * @param dynamicFont True to enable, false to disable.
		 */
		setDynamicFont(dynamicFont: boolean): void;

		/**
		 * Sets the preferred color used for the panel component background.
		 * @param preferredColor The preferred color.
		 */
		setPreferredColor(preferredColor: Color): void;
	}
}