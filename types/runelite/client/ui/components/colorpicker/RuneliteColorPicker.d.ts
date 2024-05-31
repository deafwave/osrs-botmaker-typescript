/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="JDialog.d.ts" />
/// <reference path="Color.d.ts" />
/// <reference path="Component.d.ts" />
/// <reference path="DocumentFilter.FilterBypass.d.ts" />
/*
 * Copyright (c) 2018, Psikoi <https://github.com/psikoi>
 * Copyright (c) 2018, Ron Young <https://github.com/raiyni>
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
declare namespace net.runelite.client.ui.components.colorpicker {
export class RuneliteColorPicker extends JDialog
{
boolean alphaHidden;
Color selectedColor;
Consumer<Color> onColorChange;
Consumer<Color> onClose;
RuneliteColorPicker(Window parent, Color previousColor, String title, boolean alphaHidden, ConfigManager configManager, ColorPickerManager colorPickerManager) 
		// Reset selected color when clicking the old color
				//  force update hex color because focus lost events fire after window closing
	private updatePanels(): void;
	private updateText(): void;
	private colorChange(newColor: Color): void;
		// Finally, before firing the color changed event, apply any transparency
		// that might have been edited by the user
	/**
	 * Parses the hex input, updating the color with the new values.
	 */
	private updateHex(): void;
	setLocationRelativeTo(c: Component): void;
		// Avoid being placed off the edge of the screen:
		// bottom
		// top
		// right
		// left
	/**
	 * Gets the whole string from the passed DocumentFilter replace.
	 */
	static getReplacedText(fb: DocumentFilter.FilterBypass, offset: number, length: number, str: string): string;
throws BadLocationException
}
}