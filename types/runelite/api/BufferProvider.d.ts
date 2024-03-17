/**
 * Represents an engine graphic buffer.
 */
interface BufferProvider
{
	getPixels(): number[];

	getWidth(): number;

	getHeight(): number;
}