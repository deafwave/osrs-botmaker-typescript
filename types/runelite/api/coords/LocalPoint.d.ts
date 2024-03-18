/// <reference path="../Client.d.ts" />
/// <reference path="WorldPoint.d.ts" />
/// <reference path="../Perspective.d.ts" />

declare namespace net.runelite.api.coords {
	export class LocalPoint {
		getX(): number;
		getY(): number;

		private constructor(x: number, y: number);

		/**
		 * Gets the local coordinate at the center of the passed tile.
		 * @param client the client
		 * @param world the passed tile
		 * @returns LocalPoint | null
		 */
		public static fromWorld(
			client: Client,
			world: net.runelite.api.coords.WorldPoint,
		): net.runelite.api.coords.LocalPoint | null;

		/**
		 * Gets the local coordinate at the center of the passed tile.
		 * @param client the client
		 * @param x x-axis coordinate of the tile
		 * @param y y-axis coordinate of the tile
		 * @returns LocalPoint | null
		 */
		public static fromWorld(
			client: Client,
			x: number,
			y: number,
		): net.runelite.api.coords.LocalPoint | null;

		/**
		 * Gets the distance between this point and another.
		 * @param other other point
		 * @returns number
		 */
		public distanceTo(other: net.runelite.api.coords.LocalPoint): number;

		/**
		 * Test if this point is in the loaded scene, a 104x104 tile area.
		 * @returns boolean
		 */
		public isInScene(): boolean;

		/**
		 * Gets the coordinate at the center of the passed tile.
		 * @param x x-axis coordinate of the tile in Scene coords
		 * @param y y-axis coordinate of the tile in Scene coords
		 * @returns LocalPoint
		 */
		public static fromScene(
			x: number,
			y: number,
		): net.runelite.api.coords.LocalPoint;

		/**
		 * Gets the x-axis coordinate in scene space (tiles).
		 * @returns number
		 */
		public getSceneX(): number;

		/**
		 * Gets the y-axis coordinate in scene space (tiles).
		 * @returns number
		 */
		public getSceneY(): number;
	}
}
