/// <reference path="BufferProvider.d.ts" />
/// <reference path="../../java/index.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents the clients primary image buffer.
	 */
	export interface MainBufferProvider extends BufferProvider {
		/**
		 * Gets the image currently loaded in the buffer.
		 *
		 * @return the loaded image
		 */
		getImage(): Image;
	}
}
