/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="Color.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="Graphics.d.ts" />
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
export class ColorPanel extends JPanel
{
int size;
BufferedImage image;
Point targetPosition;
int selectedY;
boolean forceRedraw;
Consumer<Color> onColorChange;
ColorPanel(int size) 
	/*
	 * Sets the gradient's base hue index.
	 */
	setBaseColor(selectedY: number): void;
	/*
	 * Move the indicator to the closest color without firing change event.
	 */
	moveToClosestColor(y: number, color: Color): void;
	/*
	 * Calculates the closest point to a given color.
	 */
	private closestPointToColor(target: Color): Point;
	/**
	 * Moves the target (selector) to a specified x,y coordinates.
	 */
	private moveTarget(x: number, y: number, shouldUpdate: boolean): void;
	paint(g: Graphics): void;
		// Paint the gradient
		// Paint the target (selector)
	/*
	 * Draws a 3-color gradient based on white, black, and current hue index.
	 */
	private redrawGradient(): void;
	/*
	 * Determines which color is displayed on the gradient at x,y.
	 */
	private colorAt(x: number, y: number): Color;
}
}