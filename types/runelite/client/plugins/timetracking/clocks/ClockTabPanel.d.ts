/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="TabContentPanel.d.ts" />
/// <reference path="ActionListener.d.ts" />
/// <reference path="JPanel.d.ts" />
/*
 * Copyright (c) 2018, Daniel Teo <https://github.com/takuyakanbr>
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
declare namespace net.runelite.client.plugins.timetracking.clocks {
export class ClockTabPanel extends TabContentPanel
{
ImageIcon DELETE_ICON;
ImageIcon DELETE_ICON_HOVER;
ImageIcon LAP_ICON;
ImageIcon LAP_ICON_HOVER;
ImageIcon PAUSE_ICON;
ImageIcon PAUSE_ICON_HOVER;
ImageIcon RESET_ICON;
ImageIcon RESET_ICON_HOVER;
ImageIcon START_ICON;
ImageIcon START_ICON_HOVER;
ImageIcon LOOP_ICON;
ImageIcon LOOP_ICON_HOVER;
ImageIcon LOOP_SELECTED_ICON;
ImageIcon LOOP_SELECTED_ICON_HOVER;
ImageIcon ADD_ICON;
ImageIcon ADD_ICON_HOVER;
ClockManager clockManager;
ClockTabPanel(ClockManager clockManager) 
	/**
	 * Clears and recreates the components of this panel.
	 * This should be done whenever a clock is added or removed.
	 */
	rebuild(): void;
	private createHeaderPanel(title: string, type: string, largePadding: boolean, actionListener: ActionListener): JPanel;
	private createInfoPanel(text: string): JPanel;
	getUpdateInterval(): number;
	update(): void;
}
}