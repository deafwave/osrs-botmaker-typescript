/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="JFrame.d.ts" />
/// <reference path="Rectangle.d.ts" />
/*
 * Copyright (c) 2018, Woox <https://github.com/wooxsolo>
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
declare namespace net.runelite.client.ui {
export class ContainableFrame extends JFrame
{
enum Mode
Mode containedInScreen;
boolean rightSideSuction;
boolean overrideUndecorated;
	// we must use the deprecated variants since that it what Component ultimately delegates to
	private static applyChange(wX: number, wY: number, wWidth: number, wHeight: number, wOldx: number, wOldY: number, wOldWidth: number, contain: boolean): void;
				// only keep suction while where are near the screen edge
				// shift the window so the right side is near the edge again
				// attempt to retain the distance between us and the edge when shifting left
			// if we are just resizing don't try to move the left side out
				// we have shifted the window left to avoid the right side going oob
	/**
	 * Adjust the frame's size, containing to the screen if {@code Mode.RESIZING} is set
	 */
	containedSetSize(size: Dimension, oldBounds: Rectangle): void;
		// accept oldSize from the outside since the min size might have been set, which forces the size to change
	/**
	 * Force minimum size of frame to be it's layout manager's minimum size
	 */
	revalidateMinimumSize(): void;
	setMinimumSize(minSize: Dimension): void;
			// JDK-8221452 - Window.setMinimumSize does not respect DPI scaling
			// Window::setMinimumSize will call setSize if the window is smaller
			// than the new minimum size. Because of this, and other places reading
			// minimumSize expecting scaling to be unscaled, we have to scale the size
			// only when WWindowPeer::updateMinimumSize is called. This is also called
			// during pack, but we call this afterwards so it doesn't matter much
	getMinimumSize(): Dimension;
	private isFullScreen(): boolean;
	updateContainsInScreen(): void;
	setOpacity(opacity: number): void;
		// JDK-6993784 requires the frame to be undecorated to apply opacity, but in practice it works on Windows regardless.
		// Temporarily pretend to be an undecorated frame to satisfy Frame.setOpacity().
	isUndecorated(): boolean;
}
}