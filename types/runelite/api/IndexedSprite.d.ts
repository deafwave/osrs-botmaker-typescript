/**
 * Represents an paletted sprite.
 */
interface IndexedSprite {
	/**
	 * The bitmap of this sprite. Each value is an index into {@link #getPalette()}.
	 * 0 is transparent
	 */
	getPixels(): Uint8Array;
	setPixels(pixels: Uint8Array): void;

	/**
	 * The color palette in RGB. The zero index is unused.
	 */
	getPalette(): number[];
	setPalette(palette: number[]): void;

	getOffsetX(): number;
	setOffsetX(offsetX: number): void;

	getOffsetY(): number;
	setOffsetY(offsetY: number): void;

	getWidth(): number;
	setWidth(width: number): void;

	getHeight(): number;
	setHeight(height: number): void;

	getOriginalWidth(): number;
	setOriginalWidth(originalWidth: number): void;

	getOriginalHeight(): number;
	setOriginalHeight(originalHeight: number): void;
}
