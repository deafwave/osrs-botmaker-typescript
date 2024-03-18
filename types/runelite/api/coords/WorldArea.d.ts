/// <reference path="WorldPoint.d.ts" />
/// <reference path="../Client.d.ts" />
/// <reference path="../../../java/index.d.ts" />

/**
 * Represents an area on the world.
 */
declare namespace net.runelite.api {
	class WorldArea {
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

		distanceTo(other: WorldArea): number;
		distanceTo2D(other: WorldArea): number;
		distanceTo(other: WorldPoint): number;
		distanceTo2D(other: WorldPoint): number;
		contains(worldPoint: WorldPoint): boolean;
		contains2D(worldPoint: WorldPoint): boolean;
		isInMeleeDistance(other: WorldArea): boolean;
		isInMeleeDistance(other: WorldPoint): boolean;
		intersectsWith(other: WorldArea): boolean;

		canTravelInDirection(client: Client, dx: number, dy: number): boolean;
		canTravelInDirection(
			client: Client,
			dx: number,
			dy: number,
			extraCondition: Predicate<WorldPoint>,
		): boolean;

		hasLineOfSightTo(client: Client, other: WorldArea): boolean;
		hasLineOfSightTo(client: Client, other: WorldPoint): boolean;

		toWorldPoint(): WorldPoint;
		toWorldPointList(): WorldPoint[];
	}
}
