/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="Color.d.ts" />
/*
 * Copyright (c) 2018, Kruithne <kruithne@gmail.com>
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
declare namespace net.runelite.client.plugins.skillcalculator {
export class UIActionSlot extends JPanel
{
BorderFactory.createMatteBorder(0, 4, 0, 0, (ColorScheme.PROGRESS_COMPLETE_COLOR).darker()), BorderFactory.createEmptyBorder(7, 12, 7, 7)); 
BorderFactory.createMatteBorder(0, 4, 0, 0, (ColorScheme.PROGRESS_ERROR_COLOR).darker()), BorderFactory.createEmptyBorder(7, 12, 7, 7)); 
BorderFactory.createMatteBorder(0, 4, 0, 0, (ColorScheme.PROGRESS_INPROGRESS_COLOR).darker()), BorderFactory.createEmptyBorder(7, 12, 7, 7)); 
SkillAction action;
String actionName;
JShadowedLabel uiLabelActions;
JPanel uiInfo;
boolean isAvailable;
boolean isSelected;
boolean isOverlapping;
int value;
UIActionSlot(SkillAction action, ClientThread clientThread, ItemManager itemManager, JLabel uiIcon) 
	setSelected(selected: boolean): void;
	setAvailable(available: boolean): void;
	setOverlapping(overlapping: boolean): void;
	setText(text: string): void;
	private updateBackground(): void;
	setBackground(color: Color): void;
}
}