/// <reference path="../Renderable.d.ts" />
/// <reference path="../SceneTilePaint.d.ts" />
/// <reference path="../SceneTileModel.d.ts" />
/// <reference path="../Scene.d.ts" />
/// <reference path="../Texture.d.ts" />

interface DrawCallbacks {
	/**
	 * GPU mode on.
	 */
	GPU: 1;
	/**
	 * GPU hillskew support. Enables the {@link Model#getUnskewedModel()}
	 * API to get the unskewed model.
	 */
	HILLSKEW: 2;
	/**
	 * Requests normals be computed for models. Enables the {@link Model#getVertexNormalsX()}
	 * {@link Model#getVertexNormalsY()} {@link Model#getVertexNormalsZ()} API.
	 */
	NORMALS: 4;

	draw(
		renderable: Renderable,
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

	drawScenePaint(
		orientation: number,
		pitchSin: number,
		pitchCos: number,
		yawSin: number,
		yawCos: number,
		x: number,
		y: number,
		z: number,
		paint: SceneTilePaint,
		tileZ: number,
		tileX: number,
		tileY: number,
		zoom: number,
		centerX: number,
		centerY: number,
	): void;

	drawSceneModel(
		orientation: number,
		pitchSin: number,
		pitchCos: number,
		yawSin: number,
		yawCos: number,
		x: number,
		y: number,
		z: number,
		model: SceneTileModel,
		tileZ: number,
		tileX: number,
		tileY: number,
		zoom: number,
		centerX: number,
		centerY: number,
	): void;

	/**
	 * Called when a frame should be drawn.
	 *
	 * @param overlayColor Color of full-viewport overlays, if any
	 */
	draw(overlayColor: number): void;

	/**
	 * Called before the scene is drawn
	 */
	drawScene(
		cameraX: number,
		cameraY: number,
		cameraZ: number,
		cameraPitch: number,
		cameraYaw: number,
		plane: number,
	): void;

	/**
	 * Called after the scene has been drawn
	 */
	postDrawScene(): void;

	animate(texture: Texture, diff: number): void;

	loadScene(scene: Scene): void;

	swapScene(scene: Scene): void;

	tileInFrustum(
		scene: Scene,
		pitchSin: number,
		pitchCos: number,
		yawSin: number,
		yawCos: number,
		cameraX: number,
		cameraY: number,
		cameraZ: number,
		plane: number,
		msx: number,
		msy: number,
	): boolean;
}
