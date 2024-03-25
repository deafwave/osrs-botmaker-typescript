/// <reference path="LocalPoint.d.ts" />
/// <reference path="WorldArea.d.ts" />
/// <reference path="../Scene.d.ts" />
/// <reference path="../../../java/index.d.ts" />

declare namespace net.runelite.api.coords {
	/**
	 * A three-dimensional point representing the coordinate of a Tile.
	 * WorldPoints are immutable. Methods that modify the properties create a new instance.
	 */
	export class WorldPoint {
		getX(): number;
		getY(): number;
		getPlane(): number;

		constructor(x: number, y: number, plane: number);

		dx(dx: number): net.runelite.api.coords.WorldPoint;
		dy(dy: number): net.runelite.api.coords.WorldPoint;
		dz(dz: number): net.runelite.api.coords.WorldPoint;

		static isInScene(scene: Scene, x: number, y: number): boolean;
		static isInScene(client: Client, x: number, y: number): boolean;
		isInScene(client: Client): boolean;

		static fromLocal(
			client: Client,
			local: net.runelite.api.coords.LocalPoint,
		): net.runelite.api.coords.WorldPoint;
		static fromLocal(
			scene: Scene,
			x: number,
			y: number,
			plane: number,
		): net.runelite.api.coords.WorldPoint;
		static fromLocal(
			client: Client,
			x: number,
			y: number,
			plane: number,
		): net.runelite.api.coords.WorldPoint;

		static fromLocalInstance(
			client: Client,
			localPoint: net.runelite.api.coords.LocalPoint,
		): net.runelite.api.coords.WorldPoint;
		static fromLocalInstance(
			client: Client,
			localPoint: net.runelite.api.coords.LocalPoint,
			plane: number,
		): net.runelite.api.coords.WorldPoint;
		static fromLocalInstance(
			scene: Scene,
			localPoint: net.runelite.api.coords.LocalPoint,
			plane: number,
		): net.runelite.api.coords.WorldPoint;

		static toLocalInstance(
			client: Client,
			worldPoint: net.runelite.api.coords.WorldPoint,
		): Array<WorldPoint>; // TODO: Validate that this is not a Java Collection
		static toLocalInstance(
			scene: Scene,
			worldPoint: net.runelite.api.coords.WorldPoint,
		): Array<WorldPoint>; // TODO: Validate that this is not a Java Collection

		distanceTo(other: net.runelite.api.coords.WorldArea): number;
		distanceTo(other: net.runelite.api.coords.WorldPoint): number;
		distanceTo2D(other: net.runelite.api.coords.WorldPoint): number;

		static fromScene(
			client: Client,
			x: number,
			y: number,
			plane: number,
		): net.runelite.api.coords.WorldPoint;
		static fromScene(
			scene: Scene,
			x: number,
			y: number,
			plane: number,
		): net.runelite.api.coords.WorldPoint;

		getRegionID(): number;
		static fromRegion(
			regionId: number,
			regionX: number,
			regionY: number,
			plane: number,
		): net.runelite.api.coords.WorldPoint;
		getRegionX(): number;
		getRegionY(): number;

		static getMirrorPoint(
			worldPoint: net.runelite.api.coords.WorldPoint,
			toOverworld: boolean,
		): net.runelite.api.coords.WorldPoint;

		isInArea(...worldAreas: net.runelite.api.coords.WorldArea[]): boolean;
		isInArea2D(...worldAreas: net.runelite.api.coords.WorldArea[]): boolean;

		toWorldArea(): net.runelite.api.coords.WorldArea;
	}
}
