/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="Color.d.ts" />
/// <reference path="Font.d.ts" />
/// <reference path="JButton.d.ts" />
/// <reference path="ActionListener.d.ts" />
/// <reference path="Icon.d.ts" />
/// <reference path="ImageIcon.d.ts" />
/// <reference path="KeyListener.d.ts" />
/// <reference path="Runnable.d.ts" />
/// <reference path="Document.d.ts" />
/*
 * Copyright (c) 2017, Adam <Adam@sigterm.info>
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
 * This component is a FlatTextField with an icon on its left side, and a clear button (×) on its right side.
 */
export class IconTextField extends JPanel
{
	// To support gifs, the icon needs to be wrapped in a JLabel
JLabel iconWrapperLabel;
FlatTextField textField;
JButton clearButton;
JButton suggestionButton;
DefaultListModel<String> suggestionListModel;
IconTextField() 
		// Show the clear button when text is present, and hide again when empty
	private createRHSButton(fg: Color, rollover: Color, font: Font): JButton;
	private updateContextButton(): void;
	addActionListener(actionListener: ActionListener): void;
	setIcon(icon: Icon): void;
	setIcon(imageIcon: ImageIcon): void;
	getText(): string;
	setText(text: string): void;
	setBackground(color: Color): void;
	setHoverBackgroundColor(hoverBackgroundColor: Color): void;
	addKeyListener(keyListener: KeyListener): void;
	addClearListener(clearListener: Runnable): void;
	removeKeyListener(keyListener: KeyListener): void;
	setEditable(editable: boolean): void;
	requestFocusInWindow(): boolean;
	getDocument(): Document;
enum Icon
}
}