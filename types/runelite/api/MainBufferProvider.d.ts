/// <reference path="../../java/index.d.ts" />
/// <reference path="BufferProvider.d.ts" />
/**
 * Represents the client's primary image buffer.
 */
interface MainBufferProvider extends BufferProvider {
	/**
	 * Retrieves the image currently loaded in the buffer.
	 *
	 * @returns The loaded image
	 */
	getImage(): Image;
}
