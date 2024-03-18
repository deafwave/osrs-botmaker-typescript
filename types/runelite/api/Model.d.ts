/// <reference path="Mesh.d.ts" />
/// <reference path="Renderable.d.ts" />
/// <reference path="AABB.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents the model of an object.
	 */
	export interface Model extends Mesh<any>, Renderable {
		getFaceColors1(): number[];

		getFaceColors2(): number[];

		getFaceColors3(): number[];

		getSceneId(): number;
		setSceneId(sceneId: number): void;

		getBufferOffset(): number;
		setBufferOffset(bufferOffset: number): void;

		getUvBufferOffset(): number;
		setUvBufferOffset(bufferOffset: number): void;

		getBottomY(): number;

		calculateBoundsCylinder(): void;

		getFaceRenderPriorities(): number[];

		getRadius(): number;
		getDiameter(): number;

		/**
		 * @see #getAABB(int)
		 */

		calculateExtreme(orientation: number): void;

		getAABB(orientation: number): AABB;

		getXYZMag(): number;
		isClickable(): boolean;

		getVertexNormalsX(): number[];
		getVertexNormalsY(): number[];
		getVertexNormalsZ(): number[];

		getOverrideAmount(): number;
		getOverrideHue(): number;
		getOverrideSaturation(): number;
		getOverrideLuminance(): number;

		getTextureFaces(): number[];

		getTexIndices1(): number[];
		getTexIndices2(): number[];
		getTexIndices3(): number[];

		getUnskewedModel(): Model;

		drawFrustum(
			zero: number,
			xRotate: number,
			yRotate: number,
			zRotate: number,
			xCamera: number,
			yCamera: number,
			zCamera: number,
		): void;
	}
}
