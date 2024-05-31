/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="Image.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/// <reference path="ImageUploadStyle.d.ts" />
/// <reference path="Date.d.ts" />
/*
 * Copyright (c) 2018, Lotto <https://github.com/devLotto>
 * Copyright (c) 2019, Alexsuperfly <https://github.com/Alexsuperfly>
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
)
export class ImageCapture
{
Client client;
Notifier notifier;
ClientUI clientUi;
DrawManager drawManager;
ScheduledExecutorService executor;
EventBus eventBus;
	/**
	 * Take a screenshot and save it
	 * @param subDir the subdirectory to save the screenshot in
	 * @param fileName the filename for the screenshot
	 * @param includeClientFrame whether to include the client ui in the screenshot
	 * @param notify whether to send a notification
	 * @param copyToClipboard whether to copy the screenshot to clipboard
	 */
	private static takeScreenshot(subDir: string, fileName: string, includeClientFrame: boolean, notify: boolean, copyToClipboard: boolean): void;
			// This callback is on the client thread, move to executor thread now that we have the screenshot
	/**
	 * Add the client frame to a screenshot
	 *
	 * @param image the screenshot
	 * @return
	 */
	addClientFrame(image: Image): BufferedImage;
		// create a new image, paint the client ui to it, and then draw the screenshot to that
		// on Windows the insets are the window border
		// scaled client dimensions
		// scale g2d for the paint() call
		// Draw the client frame onto the screenshot
		// Find the position of the canvas inside the frame
		// Draw the original screenshot onto the new screenshot
	private static getScaledValue(scale: number, value: number): number;
	/**
	 * Save a screenshot to disk. And optionally send a notification and copy it to clipboard.
	 *
	 * @param screenshot screenshot
	 * @param fileName Filename to use, without file extension.
	 * @param subDir Directory within the player screenshots dir to store the captured screenshot to.
	 * @param notify Send a notification to the system tray when the image is captured.
	 * @param saveToClipboard Whether to also save the screenshot to clipboard
	 */
	saveScreenshot(screenshot: BufferedImage, fileName: string, subDir: string, notify: boolean, saveToClipboard: boolean): void | null;
			// Prevent the screenshot from being captured
		// To make sure that screenshots don't get overwritten, check if file exists,
		// and if it does create file with same name and suffix.
	/**
	 * Saves a screenshot to the screenshots folder as a PNG, and fires a ScreenshotTaken
	 * event afterward.
	 * @deprecated This method formerly could upload the image to Imgur, which is no longer supported. Use saveScreenshot instead.
	 * @see #saveScreenshot(BufferedImage, String, String, boolean, boolean)
	 */
/** @deprecated */
	takeScreenshot(screenshot: BufferedImage, fileName: string, subDir: string, notify: boolean, imageUploadStyle: ImageUploadStyle): void;
	/**
	  * Saves a screenshot to the screenshots folder as a PNG, and fires a ScreenshotTaken
	  * event afterward.
	 * @deprecated This method formerly could upload the image to Imgur, which is no longer supported. Use saveScreenshot instead.
	 * @see #saveScreenshot(BufferedImage, String, String, boolean, boolean)
	 */
/** @deprecated */
	takeScreenshot(screenshot: BufferedImage, fileName: string, notify: boolean, imageUploadStyle: ImageUploadStyle): void;
	private static format(date: Date): string;
}
}