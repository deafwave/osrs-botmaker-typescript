/// <reference path="WorldPoint.d.ts" />
/// <reference path="../Client.d.ts" />
/// <reference path="../../../java/index.d.ts" />
declare namespace net.runelite.api.coords {
	/**
	 * Represents an area on the world.
	 */
	export class WorldArea {
		private x: number;
		private y: number;
		private width: number;
		private height: number;
		private plane: number;

		constructor(
			x: number,
			y: number,
			width: number,
			height: number,
			plane: number,
		);

		distanceTo(other: net.runelite.api.coords.WorldArea): number;
		distanceTo2D(other: net.runelite.api.coords.WorldArea): number;
		distanceTo(other: net.runelite.api.coords.WorldPoint): number;
		distanceTo2D(other: net.runelite.api.coords.WorldPoint): number;
		contains(worldPoint: net.runelite.api.coords.WorldPoint): boolean;
		contains2D(worldPoint: net.runelite.api.coords.WorldPoint): boolean;
		isInMeleeDistance(other: net.runelite.api.coords.WorldArea): boolean;
		isInMeleeDistance(other: net.runelite.api.coords.WorldPoint): boolean;
		intersectsWith(other: net.runelite.api.coords.WorldArea): boolean;

		canTravelInDirection(client: Client, dx: number, dy: number): boolean;
		canTravelInDirection(
			client: Client,
			dx: number,
			dy: number,
			extraCondition: Predicate<WorldPoint>,
		): boolean;

		hasLineOfSightTo(
			client: Client,
			other: net.runelite.api.coords.WorldArea,
		): boolean;
		hasLineOfSightTo(
			client: Client,
			other: net.runelite.api.coords.WorldPoint,
		): boolean;

		toWorldPoint(): net.runelite.api.coords.WorldPoint;
		toWorldPointList(): net.runelite.api.coords.WorldPoint[];
	}
}
