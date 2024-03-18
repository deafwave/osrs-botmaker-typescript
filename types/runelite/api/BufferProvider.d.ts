declare namespace net.runelite.api {
	/**
	 * Represents an engine graphic buffer.
	 */
	export interface BufferProvider {
		getPixels(): number[];

		getWidth(): number;

		getHeight(): number;
	}
}
