declare namespace net.runelite.api {
	/**
	 * Represents the model of a tile in the current scene.
	 */
	export interface SceneTileModel {
		/**
		 * Gets the underlay color of the tile.
		 *
		 * @return the underlay color
		 */
		getModelUnderlay(): number;

		/**
		 * Gets the overlay color of the tile.
		 *
		 * @return the overlay color
		 */
		getModelOverlay(): number;

		/**
		 * Gets the shape mask type.
		 *
		 * @return the shape mask
		 */
		getShape(): number;

		/**
		 * Gets the rotation of the tile.
		 *
		 * @return the rotation
		 */
		getRotation(): number;

		getFaceX(): number[];

		getFaceY(): number[];

		getFaceZ(): number[];

		getVertexX(): number[];

		getVertexY(): number[];

		getVertexZ(): number[];

		getTriangleColorA(): number[];

		getTriangleColorB(): number[];

		getTriangleColorC(): number[];

		getTriangleTextureId(): number[];

		isFlat(): boolean;

		getBufferOffset(): number;
		setBufferOffset(bufferOffset: number): void;

		getUvBufferOffset(): number;
		setUvBufferOffset(bufferOffset: number): void;

		getBufferLen(): number;
		setBufferLen(bufferLen: number): void;
	}
}
