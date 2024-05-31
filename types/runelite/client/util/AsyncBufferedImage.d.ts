/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/// <reference path="synchronized void.d.ts" />
/// <reference path="Runnable.d.ts" />
/// <reference path="JButton.d.ts" />
/// <reference path="JLabel.d.ts" />
/// <reference path="JComponent.d.ts" />
/// <reference path="ImageIcon.d.ts" />
/*
 * Copyright (c) 2018 Abex
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
declare namespace net.runelite.client.util {
export class AsyncBufferedImage extends BufferedImage
{
ClientThread clientThread;
boolean loaded;
AsyncBufferedImage(ClientThread clientThread, int width, int height, int imageType) 
	/**
	 * Call when the image has been loaded
	 */
	loaded(): synchronized void;
	/**
	 * Register a function to be ran when the image has been loaded.
	 * If the image is already loaded the function will be invoked later on the client thread.
	 */
	onLoaded(r: Runnable): synchronized void;
	/**
	 * Calls setIcon on c, ensuring it is repainted when this changes
	 */
	addTo(c: JButton): void;
	/**
	 * Calls setIcon on c, ensuring it is repainted when this changes
	 */
	addTo(c: JLabel): void;
	private makeIcon(c: JComponent): ImageIcon;
}
}