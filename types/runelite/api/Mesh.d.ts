/**
 * A {@link Model} or {@link ModelData}
 */
interface Mesh<T extends Mesh<T>> {
	getVerticesCount(): number;
	getVerticesX(): number[];
	getVerticesY(): number[];
	getVerticesZ(): number[];

	getFaceCount(): number;
	getFaceIndices1(): number[];
	getFaceIndices2(): number[];
	getFaceIndices3(): number[];
	getFaceTransparencies(): number[];
	getFaceTextures(): number[];

	/**
	 * Rotates this model 90 degrees around the vertical axis.
	 * {@link ModelData#cloneVertices()} should be called before calling this method
	 */
	rotateY90Ccw(): T;

	/**
	 * Rotates this model 180 degrees around the vertical axis.
	 * {@link ModelData#cloneVertices()} should be called before calling this method
	 */
	rotateY180Ccw(): T;

	/**
	 * Rotates this model 270 degrees around the vertical axis.
	 * {@link ModelData#cloneVertices()} should be called before calling this method
	 */
	rotateY270Ccw(): T;

	/**
	 * Offsets this model by the passed amount (1/128ths of a tile).
	 * {@link ModelData#cloneVertices()} should be called before calling this method
	 */
	translate(x: number, y: number, z: number): T;

	/**
	 * Resizes this model by the passed amount (1/128ths).
	 * {@link ModelData#cloneVertices()} should be called before calling this method
	 */
	scale(x: number, y: number, z: number): T;
}
