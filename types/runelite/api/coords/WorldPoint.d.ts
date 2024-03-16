/// <reference path="LocalPoint.d.ts" />
/// <reference path="WorldArea.d.ts" />
/// <reference path="../Scene.d.ts" />
/// <reference path="../../../java/index.d.ts" />

/**
 * A three-dimensional point representing the coordinate of a Tile.
 * WorldPoints are immutable. Methods that modify the properties create a new instance.
 */
declare class WorldPoint {
	private readonly x: number;
	private readonly y: number;
	private readonly plane: number;

	constructor(x: number, y: number, plane: number);

	dx(dx: number): WorldPoint;
	dy(dy: number): WorldPoint;
	dz(dz: number): WorldPoint;

	static isInScene(scene: Scene, x: number, y: number): boolean;
	static isInScene(client: Client, x: number, y: number): boolean;
	isInScene(client: Client): boolean;

	static fromLocal(client: Client, local: LocalPoint): WorldPoint;
	static fromLocal(
		scene: Scene,
		x: number,
		y: number,
		plane: number,
	): WorldPoint;
	static fromLocal(
		client: Client,
		x: number,
		y: number,
		plane: number,
	): WorldPoint;

	static fromLocalInstance(
		client: Client,
		localPoint: LocalPoint,
	): WorldPoint;
	static fromLocalInstance(
		client: Client,
		localPoint: LocalPoint,
		plane: number,
	): WorldPoint;
	static fromLocalInstance(
		scene: Scene,
		localPoint: LocalPoint,
		plane: number,
	): WorldPoint;

	static toLocalInstance(
		client: Client,
		worldPoint: WorldPoint,
	): Collection<WorldPoint>;
	static toLocalInstance(
		scene: Scene,
		worldPoint: WorldPoint,
	): Collection<WorldPoint>;

	distanceTo(other: WorldArea): number;
	distanceTo(other: WorldPoint): number;
	distanceTo2D(other: WorldPoint): number;

	static fromScene(
		client: Client,
		x: number,
		y: number,
		plane: number,
	): WorldPoint;
	static fromScene(
		scene: Scene,
		x: number,
		y: number,
		plane: number,
	): WorldPoint;

	getRegionID(): number;
	static fromRegion(
		regionId: number,
		regionX: number,
		regionY: number,
		plane: number,
	): WorldPoint;
	getRegionX(): number;
	getRegionY(): number;

	static getMirrorPoint(
		worldPoint: WorldPoint,
		toOverworld: boolean,
	): WorldPoint;

	isInArea(...worldAreas: WorldArea[]): boolean;
	isInArea2D(...worldAreas: WorldArea[]): boolean;

	toWorldArea(): WorldArea;
}
