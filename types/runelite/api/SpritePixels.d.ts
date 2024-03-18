/// <reference path="../../java/index.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents data about the pixels of a sprite image.
	 */
	export interface SpritePixels {
		DEFAULT_SHADOW_COLOR: 3153952;

		/**
		 * Draws the pixels at the given coordinates on the canvas.
		 *
		 * @param x the x-axis coordinate
		 * @param y the y-axis coordinate
		 */
		drawAt(x: number, y: number): void;

		/**
		 * Gets the width of the sprite image in pixels.
		 *
		 * @return the width
		 */
		getWidth(): number;

		/**
		 * Gets the height of the sprite image in pixels.
		 *
		 * @return the height
		 */
		getHeight(): number;

		/**
		 * Gets the max width of the sprite image in pixels.
		 *
		 * @return the width
		 */
		getMaxWidth(): number;

		/**
		 * Gets the max height of the sprite image in pixels.
		 *
		 * @return the height
		 */
		getMaxHeight(): number;

		/**
		 * Gets the x offset of the sprite image in pixels.
		 *
		 * @return the offset
		 */
		getOffsetX(): number;

		/**
		 * Gets the y offset of the sprite image in pixels.
		 *
		 * @return the offset
		 */
		getOffsetY(): number;

		/**
		 * Sets the max width of the sprite image in pixels.
		 *
		 * @param maxWidth the width
		 */
		setMaxWidth(maxWidth: number): void;

		/**
		 * Sets the max height of the sprite image in pixels.
		 *
		 * @param maxHeight the height
		 */
		setMaxHeight(maxHeight: number): void;

		/**
		 * Sets the x offset of the sprite image in pixels.
		 *
		 * @param offsetX the offset
		 */
		setOffsetX(offsetX: number): void;

		/**
		 * Sets the y offset of the sprite image in pixels.
		 *
		 * @param offsetY the offset
		 */
		setOffsetY(offsetY: number): void;

		/**
		 * Gets an array of all pixels data in the sprite.
		 *
		 * @return the pixel data
		 */
		getPixels(): number[];

		/**
		 * Converts the sprite into a BufferedImage.
		 *
		 * @return the resulting BufferedImage
		 */
		toBufferedImage(): BufferedImage;

		/**
		 * Writes the contents of the sprite to the given BufferedImage.
		 *
		 * @param img the passsed buffered image
		 * @throws IllegalArgumentException if the width or height do not match
		 */
		toBufferedImage(img: BufferedImage): void;

		/**
		 * Writes the contents of the SpritePixels with chosen outline to the BufferedImage
		 *
		 * @param color target color
		 */
		toBufferedOutline(color: Color): BufferedImage;

		/**
		 * Writes the contents of the SpritePixels with chosen outline to the BufferedImage
		 *
		 * @param img target image
		 * @param color target color
		 */
		toBufferedOutline(img: BufferedImage, color: number): void;
	}
}
