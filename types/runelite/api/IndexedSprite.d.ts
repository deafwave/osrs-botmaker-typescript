declare namespace net.runelite.api {
	/**
	 * Represents an paletted sprite.
	 */
	export interface IndexedSprite {
		/**
		 * The bitmap of this sprite. Each value is an index into {@link #getPalette()}.
		 * 0 is transparent
		 */
		getPixels(): number[];
		setPixels(pixels: number[]): void;

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
}
