/// <reference path="RuneliteNode.d.ts" />
/// <reference path="Model.d.ts" />
/**
 * Represents an object that can be rendered.
 */
interface Renderable extends RuneliteNode {
	/**
	 * Gets the model of the object.
	 */
	getModel(): Model;

	/**
	 * Gets the height of the model.
	 */
	getModelHeight(): number;

	setModelHeight(modelHeight: number): void;

	draw(
		orientation: number,
		pitchSin: number,
		pitchCos: number,
		yawSin: number,
		yawCos: number,
		x: number,
		y: number,
		z: number,
		hash: number,
	): void;
}
