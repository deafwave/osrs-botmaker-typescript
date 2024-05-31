/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="JLabel.d.ts" />
/*
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
declare namespace net.runelite.client.ui.components.materialtabs {
/**
 * This class represents a Material Design inspired tab.
 * <p>
 * Each tab will communicate with it's containing group when it's clicked
 * and that group will display the tab's content on it's own display.
 *
 * @author Psikoi
 */
export class MaterialTab extends JLabel
{
BorderFactory.createMatteBorder(0, 0, 1, 0, ColorScheme.BRAND_ORANGE), BorderFactory.createEmptyBorder(5, 10, 4, 10)); 
.createEmptyBorder(5, 10, 5, 10); 
	/* The tab's associated content display */
JComponent content;
	/* To be execuded when the tab is selected */
BooleanSupplier onSelectEvent;
boolean selected;
MaterialTab(String string, MaterialTabGroup group, JComponent content) 
MaterialTab(ImageIcon icon, MaterialTabGroup group, JComponent content) 
	select(): boolean;
	unselect(): void;
}
}