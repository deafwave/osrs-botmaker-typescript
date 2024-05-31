/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="IndexedSprite.d.ts" />
/// <reference path="SpritePixels.d.ts" />
/// <reference path="Image.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/// <reference path="Color.d.ts" />
/// <reference path="Boolean.d.ts" />
/// <reference path="Class.d.ts" />
/// <reference path="?.d.ts" />
/*
 * Copyright (c) 2018, Jordan Atwood <jordan.atwood423@gmail.com>
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
/**
 * Various Image/BufferedImage utilities.
 */
export class ImageUtil
{
	/**
	 * Creates a {@link BufferedImage} from an {@link Image}.
	 *
	 * @param image An Image to be converted to a BufferedImage.
	 * @return      A BufferedImage instance of the same given image.
	 */
	static bufferedImageFromImage(image: Image): BufferedImage;
	/**
	 * Creates an ARGB {@link BufferedImage} from an {@link Image}.
	 */
	static toARGB(image: Image): BufferedImage;
	/**
	 * Creates a new image with the same alpha channel, but a constant RGB channel
	 */
	static recolorImage(image: Image, rgb: Color): BufferedImage;
	/**
	 * Offsets an image's luminance by a given value.
	 *
	 * @param rawImg  The image to be darkened or brightened.
	 * @param offset A signed 8-bit integer value to brighten or darken the image with.
	 *               Values above 0 will brighten, and values below 0 will darken.
	 * @return       The given image with its brightness adjusted by the given offset.
	 */
	static luminanceOffset(rawImg: Image, offset: number): BufferedImage;
		// Set alpha to not offset
	/**
	 * Changes an images luminance by a scaling factor
	 *
	 * @param rawImg      The image to be darkened or brightened.
	 * @param percentage The ratio to darken or brighten the given image.
	 *                   Values above 1 will brighten, and values below 1 will darken.
	 * @return           The given image with its brightness scaled by the given percentage.
	 */
	static luminanceScale(rawImg: Image, percentage: number): BufferedImage;
		// Set alpha to not scale
	/**
	 * Offsets an image's alpha component by a given offset.
	 *
	 * @param rawImg  The image to be made more or less transparent.
	 * @param offset A signed 8-bit integer value to modify the image's alpha component with.
	 *               Values above 0 will increase transparency, and values below 0 will decrease
	 *               transparency.
	 * @return       The given image with its alpha component adjusted by the given offset.
	 */
	static alphaOffset(rawImg: Image, offset: number): BufferedImage;
	/**
	 * Offsets an image's alpha component by a given percentage.
	 *
	 * @param rawImg      The image to be made more or less transparent.
	 * @param percentage The ratio to modify the image's alpha component with.
	 *                   Values above 1 will increase transparency, and values below 1 will decrease
	 *                   transparency.
	 * @return           The given image with its alpha component scaled by the given percentage.
	 */
	static alphaOffset(rawImg: Image, percentage: number): BufferedImage;
	/**
	 * Creates a grayscale image from the given image.
	 *
	 * @param image The source image to be converted.
	 * @return      A copy of the given imnage, with colors converted to grayscale.
	 */
	static grayscaleImage(image: BufferedImage): BufferedImage;
	/**
	 * Re-size a BufferedImage to the given dimensions.
	 *
	 * @param image the BufferedImage.
	 * @param newWidth The width to set the BufferedImage to.
	 * @param newHeight The height to set the BufferedImage to.
	 * @return The BufferedImage with the specified dimensions
	 */
	static resizeImage(image: BufferedImage, newWidth: number, newHeight: number): BufferedImage;
	/**
	 * Re-size a BufferedImage to the given dimensions.
	 *
	 * @param image the BufferedImage.
	 * @param newWidth The width to set the BufferedImage to.
	 * @param newHeight The height to set the BufferedImage to.
	 * @param preserveAspectRatio Whether to preserve the original image's aspect ratio. When {@code true}, the image
	 *                               will be scaled to have a maximum of {@code newWidth} width and {@code newHeight}
	 *                               height.
	 * @return The BufferedImage with the specified dimensions
	 */
	static resizeImage(image: BufferedImage, newWidth: number, newHeight: number, preserveAspectRatio: boolean): BufferedImage;
	/**
	 * Re-size a BufferedImage's canvas to the given dimensions.
	 *
	 * @param image     The image whose canvas should be re-sized.
	 * @param newWidth  The width to set the BufferedImage to.
	 * @param newHeight The height to set the BufferedImage to.
	 * @return          The BufferedImage centered within canvas of given dimensions.
	 */
	static resizeCanvas(image: BufferedImage, newWidth: number, newHeight: number): BufferedImage;
	/**
	 * Rotates an image around its center by a given number of radians.
	 *
	 * @param image The image to be rotated.
	 * @param theta The number of radians to rotate the image.
	 * @return      The given image, rotated by the given theta.
	 */
	static rotateImage(image: BufferedImage, theta: number): BufferedImage;
	/**
	 * Flips an image horizontally and/or vertically.
	 *
	 * @param image      The image to be flipped.
	 * @param horizontal Whether the image should be flipped horizontally.
	 * @param vertical   Whether the image should be flipped vertically.
	 * @return           The given image, flipped horizontally and/or vertically.
	 */
	static flipImage(image: BufferedImage, horizontal: boolean, vertical: boolean): BufferedImage;
	/**
	 * Outlines non-transparent pixels of a BufferedImage with the given color.
	 *
	 * @param image The image to be outlined.
	 * @param color The color to use for the outline.
	 * @return      The BufferedImage with its edges outlined with the given color.
	 */
	static outlineImage(image: BufferedImage, color: Color): BufferedImage;
	/**
	 * Outlines non-transparent pixels of a BufferedImage with the given color. Optionally outlines
	 * corners in addition to edges.
	 *
	 * @param image          The image to be outlined.
	 * @param color          The color to use for the outline.
	 * @param outlineCorners Whether to draw an outline around corners, or only around edges.
	 * @return               The BufferedImage with its edges--and optionally, corners--outlined
	 *                       with the given color.
	 */
	static outlineImage(image: BufferedImage, color: Color, outlineCorners: Boolean): BufferedImage;
	/**
	 * @see #loadImageResource(Class, String)
	 */
/** @deprecated */
	static getResourceStreamFromClass(c: Class<?>, path: string): BufferedImage;
	/**
	 * Reads an image resource from a given path relative to a given class.
	 * This method is primarily shorthand for the synchronization and error handling required for
	 * loading image resources from the classpath.
	 *
	 * @param c    The class to be referenced for the package path.
	 * @param path The path, relative to the given class.
	 * @return     A {@link BufferedImage} of the loaded image resource from the given path.
	 */
	static loadImageResource(c: Class<?>, path: string): BufferedImage;
	/**
	 * Fills all non-transparent pixels of the given image with the given color.
	 *
	 * @param image The image which should have its non-transparent pixels filled.
	 * @param color The color with which to fill pixels.
	 * @return      The given image with all non-transparent pixels set to the given color.
	 */
	static fillImage(image: BufferedImage, color: Color): BufferedImage;
	/**
	 * Performs a rescale operation on the image's color components.
	 *
	 * @param image   The image to be adjusted.
	 * @param scales  An array of scale operations to be performed on the image's color components.
	 * @param offsets An array of offset operations to be performed on the image's color components.
	 * @return        The modified image after applying the given adjustments.
	 */
	private static offset(image: BufferedImage, scales: number[], offsets: number[]): BufferedImage;
	/**
	 * Converts the buffered image into a sprite image and returns it
	 * @param image  The image to be converted
	 * @param client Current client instance
	 * @return       The buffered image as a sprite image
	 */
	static getImageSpritePixels(image: BufferedImage, client: Client): SpritePixels;
			// Make any fully transparent pixels fully black, because the sprite draw routines
			// check for == 0, not actual transparency
	/**
	 * Converts an image into an {@code IndexedSprite} instance.
	 *
	 * The passed in image can only have at max 255 different colors.
	 *
	 * @param image  The image to be converted
	 * @param client Current client instance
	 * @return		 The image as an {@code IndexedSprite}
	 */
	static getImageIndexedSprite(image: BufferedImage, client: Client): IndexedSprite;
		/*
		 */
		/*
		 */
			// Default to not drawing the pixel.
			// If the pixel is fully opaque, draw it.
}
}