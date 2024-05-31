/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="FlatTabbedPaneUI.d.ts" />
/// <reference path="JComponent.d.ts" />
/// <reference path="ComponentUI.d.ts" />
/// <reference path="LayoutManager.d.ts" />
/// <reference path="FlatTabbedPaneLayout.d.ts" />
/// <reference path="MouseListener.d.ts" />
/*
 * Copyright (c) 2022 Abex
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
declare namespace net.runelite.client.ui.laf {
export class RuneLiteTabbedPaneUI extends FlatTabbedPaneUI
{
	static createUI(c: JComponent): ComponentUI;
.Styleable
.Styleable
	/**
	 * If the tabs are always a single size
	 */
.Styleable
	/**
	 * If the there can be no tab selected
	 */
.Styleable
	private createLayoutManager(): LayoutManager;
export class RuneLiteTabbedPaneLayout extends FlatTabbedPaneLayout
			// the jdk's method to do this iteratively moves stuff around until its close enough,
			// however this means that with 16 equally sized tabs you get 2 runs of 7 and 9 tabs
			// each, which looks wrong
			// XXX this assumes all tabs are the same size
			// assume the directions the tabs are running is a fixed size
			// and we want to calculate the size of the tab bar + our current
			// content only in the perpendicular axis
	private shouldPadTabRun(tabPlacement: number, run: number): boolean;
	private createMouseListener(): MouseListener;
}
}