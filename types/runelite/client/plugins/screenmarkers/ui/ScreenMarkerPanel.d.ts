/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="JPanel.d.ts" />
/*
 * Copyright (c) 2018, Kamiel, <https://github.com/Kamielvf>
 * Copyright (c) 2018, Psikoi <https://github.com/psikoi>
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
declare namespace net.runelite.client.plugins.screenmarkers.ui {
export class ScreenMarkerPanel extends JPanel
{
BorderFactory.createMatteBorder(0, 0, 1, 0, ColorScheme.DARK_GRAY_COLOR), BorderFactory.createLineBorder(ColorScheme.DARKER_GRAY_COLOR)); 
ImageIcon BORDER_COLOR_ICON;
ImageIcon BORDER_COLOR_HOVER_ICON;
ImageIcon NO_BORDER_COLOR_ICON;
ImageIcon NO_BORDER_COLOR_HOVER_ICON;
ImageIcon FILL_COLOR_ICON;
ImageIcon FILL_COLOR_HOVER_ICON;
ImageIcon NO_FILL_COLOR_ICON;
ImageIcon NO_FILL_COLOR_HOVER_ICON;
ImageIcon LABEL_ICON;
ImageIcon LABEL_HOVER_ICON;
ImageIcon NO_LABEL_ICON;
ImageIcon NO_LABEL_HOVER_ICON;
ImageIcon VISIBLE_ICON;
ImageIcon VISIBLE_HOVER_ICON;
ImageIcon INVISIBLE_ICON;
ImageIcon INVISIBLE_HOVER_ICON;
ImageIcon DELETE_ICON;
ImageIcon DELETE_HOVER_ICON;
ScreenMarkerPlugin plugin;
ScreenMarkerOverlay marker;
boolean visible;
boolean showLabel;
ScreenMarkerPanel(ScreenMarkerPlugin plugin, ScreenMarkerOverlay marker) 
	private preview(on: boolean): void;
	private toggle(on: boolean): void;
	private toggleLabelling(on: boolean): void;
	private save(): void;
	private cancel(): void;
	private updateNameActions(saveAndCancel: boolean): void;
	/* Updates the thickness without saving on config */
	private updateThickness(save: boolean): void;
	private updateVisibility(): void;
	private updateLabelling(): void;
	private updateFill(): void;
	private updateBorder(): void;
	private openFillColorPicker(): void;
	private openBorderColorPicker(): void;
}
}