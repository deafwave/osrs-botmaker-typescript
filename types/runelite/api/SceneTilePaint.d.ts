/**
 * Represents the paint of a tile in the current scene.
 */
interface SceneTilePaint {
	/**
	 * Gets the RGB value of the paint.
	 *
	 * @return the paint RGB
	 */
	getRBG(): number;

	getSwColor(): number;

	getSeColor(): number;

	getNwColor(): number;

	getNeColor(): number;

	getTexture(): number;

	isFlat(): boolean;

	getBufferOffset(): number;
	setBufferOffset(bufferOffset: number): void;

	getUvBufferOffset(): number;
	setUvBufferOffset(bufferOffset: number): void;

	getBufferLen(): number;
	setBufferLen(bufferLen: number): void;
}
