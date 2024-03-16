Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:




import java.awt.Color;
import java.awt.image.BufferedImage;

/**
 * Represents data about the pixels of a sprite image.
 */
public interface SpritePixels
{
	int DEFAULT_SHADOW_COLOR = 3153952;

	/**
	 * Draws the pixels at the given coordinates on the canvas.
	 *
	 * @param x the x-axis coordinate
	 * @param y the y-axis coordinate
	 */
	void drawAt(int x, int y);

	/**
	 * Gets the width of the sprite image in pixels.
	 *
	 * @return the width
	 */
	int getWidth();

	/**
	 * Gets the height of the sprite image in pixels.
	 *
	 * @return the height
	 */
	int getHeight();

	/**
	 * Gets the max width of the sprite image in pixels.
	 *
	 * @return the width
	 */
	int getMaxWidth();

	/**
	 * Gets the max height of the sprite image in pixels.
	 *
	 * @return the height
	 */
	int getMaxHeight();

	/**
	 * Gets the x offset of the sprite image in pixels.
	 *
	 * @return the offset
	 */
	int getOffsetX();

	/**
	 * Gets the y offset of the sprite image in pixels.
	 *
	 * @return the offset
	 */
	int getOffsetY();

	/**
	 * Sets the max width of the sprite image in pixels.
	 *
	 * @param maxWidth the width
	 */
	void setMaxWidth(int maxWidth);

	/**
	 * Sets the max height of the sprite image in pixels.
	 *
	 * @param maxHeight the height
	 */
	void setMaxHeight(int maxHeight);

	/**
	 * Sets the x offset of the sprite image in pixels.
	 *
	 * @param offsetX the offset
	 */
	void setOffsetX(int offsetX);

	/**
	 * Sets the y offset of the sprite image in pixels.
	 *
	 * @param offsetY the offset
	 */
	void setOffsetY(int offsetY);

	/**
	 * Gets an array of all pixels data in the sprite.
	 *
	 * @return the pixel data
	 */
	int[] getPixels();

	/**
	 * Converts the sprite into a BufferedImage.
	 *
	 * @return the resulting BufferedImage
	 */
	BufferedImage toBufferedImage();

	/**
	 * Writes the contents of the sprite to the given BufferedImage.
	 *
	 * @param img the passsed buffered image
	 * @throws IllegalArgumentException if the width or height do not match
 	 */
	void toBufferedImage(BufferedImage img) throws IllegalArgumentException;

	/**
	 * Writes the contents of the SpritePixels with chosen outline to the BufferedImage
	 *
	 * @param color target color
	 */
	BufferedImage toBufferedOutline(Color color);

	/**
	 * Writes the contents of the SpritePixels with chosen outline to the BufferedImage
	 *
	 * @param img target image
	 * @param color target color
	 */
	void toBufferedOutline(BufferedImage img, int color);
}
