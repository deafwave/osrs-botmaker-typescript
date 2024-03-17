/**
 * Jagex 2D and 3D drawing utilities.
 * Similar to AWT's {@link java.awt.Graphics2D}
 *
 * @see JagexColor
 */
interface Rasterizer
{
	/**
	 * Gets the back buffer of the rasterizer
	 *
	 * ARGB or RGB depending on {@link Client#isGpu()}
	 */
	getPixels(): number[];

	/**
	 * Width of {@link #getPixels()}
	 */
	getWidth(): number;

	/**
	 * Height of {@link #getPixels()}
	 */
	getHeight(): number;


	/**
	 * Draws a filled rectangle onto the rasterizer buffer at full opacity
	 */
	fillRectangle(x: number, y: number, w: number, h: number, rgb: number): void;

	/**
	 * Draws a filled triangle onto the rasterizer buffer at rasterizer opacity
	 */
	rasterFlat(y0: number, y1: number, y2: number, x0: number, x1: number, x2: number, rgb: number): void;


	/**
	 * Sets if {@link #rasterGouraud} uses a faster shading algorithm
	 */
	setRasterGouraudLowRes(lowRes: boolean): void;

	/**
	 * Draws a gouraud shaded filled triangle onto the rasterizer buffer at rasterizer opacity
	 */
	rasterGouraud(y0: number, y1: number, y2: number, x0: number, x1: number, x2: number, hsl0: number, hsl1: number, hsl2: number): void;

	setDrawRegion(x0: number, y0: number, x1: number, x2: number): void;

	resetRasterClipping(): void;
}