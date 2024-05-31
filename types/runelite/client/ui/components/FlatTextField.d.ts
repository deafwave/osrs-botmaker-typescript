/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="ActionListener.d.ts" />
/// <reference path="KeyListener.d.ts" />
/// <reference path="Color.d.ts" />
/// <reference path="Document.d.ts" />
/*
 * Copyright (c) 2018, Psikoi <https://github.com/psikoi>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 *  Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
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
declare namespace net.runelite.client.ui.components {
/**
 * This component is a JTextField with a flat design look.
 */
export class FlatTextField extends JPanel
{
JTextField textField;
	//the default background color, this needs to be stored for hover effects
	//the default hover background color, this needs to be stored for hover effects
Color hoverBackgroundColor;
	// the input can be blocked (no clicking, no editing, no hover effects)
boolean blocked;
FlatTextField() 
	addActionListener(actionListener: ActionListener): void;
	getText(): string;
	setText(text: string): void;
	addKeyListener(keyListener: KeyListener): void;
	removeKeyListener(keyListener: KeyListener): void;
	setBackground(color: Color): void;
	requestFocusInWindow(): boolean;
	setBackground(color: Color, saveColor: boolean): void;
	setHoverBackgroundColor(color: Color): void;
	setEditable(editable: boolean): void;
	getDocument(): Document;
}
}