/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="StatusBarsConfig.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/*
 * Copyright (c) 2019, Jos <Malevolentdev@gmail.com>
 * Copyright (c) 2019, Rheon <https://github.com/Rheon-D>
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
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.plugins.statusbars {
export class BarRenderer
{
Supplier<Integer> maxValueSupplier;
Supplier<Integer> currentValueSupplier;
Supplier<Integer> healSupplier;
Supplier<Color> colorSupplier;
Supplier<Color> healColorSupplier;
Supplier<Image> iconSupplier;
int maxValue;
int currentValue;
	private static refreshSkills(): void;
	/**
	 * Renders a status bar along with its restoration bar(s), icons and counters as appropriate
	 * @param config Plugin configuration which dictates certain settings, such as whether to show restoration bars and
	 *               whether or not to draw icons.
	 * @param graphics Graphics.
	 * @param x The location on the client where it will draw the bar on the x axis starting on the left side.
	 * @param y The location on the client where it will draw the bar on the y axis starting on the bottom side.
	 * @param height The height of the bar.
	 */
	renderBar(config: StatusBarsConfig, graphics: Graphics2D, x: number, y: number, width: number, height: number): void;
	private renderIconsAndCounters(config: StatusBarsConfig, graphics: Graphics2D, x: number, y: number, width: number): void;
		// Icons and counters overlap the bar at small widths, so they are not drawn when the bars are too small
	private renderRestore(graphics: Graphics2D, x: number, y: number, width: number, height: number): void;
	private static getBarHeight(base: number, current: number, size: number): number;
}
}