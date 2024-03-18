/// <reference path="Mesh.d.ts" />
/// <reference path="Model.d.ts" />
declare namespace net.runelite.api {
	/**
	 * An unlit model
	 */
	export interface ModelData extends Mesh<ModelData>, Renderable {
		DEFAULT_AMBIENT: 64;
		DEFAULT_CONTRAST: 768;
		DEFAULT_X: -50;
		DEFAULT_Y: -10;
		DEFAULT_Z: -50;

		/**
		 * Gets colors as Jagex HSL
		 *
		 * @see JagexColor
		 */
		getFaceColors(): number[];

		/**
		 * Lights a model.
		 *
		 * The produced model shares verticies, face transparencies, face indicies, and textures with
		 * the underlying ModelData. If any of these may be mutated the corresponding {@code cloneX}
		 * method should be called before {@code light}ing
		 */
		light(
			ambient: number,
			contrast: number,
			x: number,
			y: number,
			z: number,
		): Model;

		/**
		 * Lights a model with default values
		 *
		 * @see #light(int, int, int, int, int)
		 */
		light(): Model;

		/**
		 * Applies a recolor using Jagex's HSL format. You should call {@link #cloneColors()} ()} before calling
		 * this method
		 */
		recolor(colorToReplace: number, colorToReplaceWith: number): ModelData;

		/**
		 * Applies a retexture, changing texture ids. You should call {@link #cloneTextures()} before calling
		 * this method
		 */
		retexture(find: number, replace: number): ModelData;

		/**
		 * Shallow-copies a model. Does not copy any arrays, which are still shared with this object.
		 */
		shallowCopy(): ModelData;

		/**
		 * Clones {@link #getVerticesX()}, {@link #getVerticesY()}, and {@link #getVerticesZ()} so
		 * they can be safely mutated
		 */
		cloneVertices(): ModelData;

		/**
		 * Clones {@link #getFaceColors()} so they can be safely mutated
		 */
		cloneColors(): ModelData;

		/**
		 * Clones {@link #getFaceTextures()} so they can be safely mutated
		 */
		cloneTextures(): ModelData;

		/**
		 * Clones {@link #getFaceTransparencies()} so they can be safely mutated
		 */
		cloneTransparencies(): ModelData;
	}
}
