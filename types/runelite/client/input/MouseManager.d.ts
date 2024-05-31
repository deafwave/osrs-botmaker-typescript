/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="MouseListener.d.ts" />
/// <reference path="MouseWheelListener.d.ts" />
/// <reference path="MouseEvent.d.ts" />
/// <reference path="MouseWheelEvent.d.ts" />
/*
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.input {
export class MouseManager
{
	// Button numbers greater than BUTTON3 have no constant identifier
RuneLiteConfig runeLiteConfig;
MouseManager(RuneLiteConfig runeLiteConfig) 
	registerMouseListener(mouseListener: MouseListener): void;
	registerMouseListener(position: number, mouseListener: MouseListener): void;
	unregisterMouseListener(mouseListener: MouseListener): void;
	registerMouseWheelListener(mouseWheelListener: MouseWheelListener): void;
	registerMouseWheelListener(position: number, mouseWheelListener: MouseWheelListener): void;
	unregisterMouseWheelListener(mouseWheelListener: MouseWheelListener): void;
	processMousePressed(mouseEvent: MouseEvent): MouseEvent;
	processMouseReleased(mouseEvent: MouseEvent): MouseEvent;
	processMouseClicked(mouseEvent: MouseEvent): MouseEvent;
	private checkExtraMouseButtons(mouseEvent: MouseEvent): void;
		// Prevent extra mouse buttons from being passed into the client,
		// as it treats them all as left click
	processMouseEntered(mouseEvent: MouseEvent): MouseEvent;
	processMouseExited(mouseEvent: MouseEvent): MouseEvent;
	processMouseDragged(mouseEvent: MouseEvent): MouseEvent;
	processMouseMoved(mouseEvent: MouseEvent): MouseEvent;
	processMouseWheelMoved(mouseWheelEvent: MouseWheelEvent): MouseWheelEvent;
}
}