/// <reference path="WorldPoint.d.ts" />
/// <reference path="../Client.d.ts" />
/// <reference path="../../../java/index.d.ts" />
declare namespace net.runelite.api.coords {
	/**
	 * Represents an area on the world.
	 */
	class WorldArea {
		/**
		 * The western most point of the area.
		 */
		private x: number;

		/**
		 * The southern most point of the area.
		 */
		private y: number;

		/**
		 * The width of the area.
		 */
		private width: number;

		/**
		 * The height of the area.
		 */
		private height: number;

		/**
		 * The plane the area is on.
		 */
		private plane: number;

		constructor(
			x: number,
			y: number,
			width: number,
			height: number,
			plane: number,
		);

		constructor(location: WorldPoint, width: number, height: number);

		getX(): number;

		getY(): number;

		getWidth(): number;

		getHeight(): number;

		getPlane(): number;

		/**
		 * Computes the shortest distance to another area.
		 *
		 * @param other the passed area
		 * @return the distance along both x and y axis
		 */
		private getAxisDistances(other: WorldArea): Point;

		/**
		 * Computes the shortest distance to another area.
		 *
		 * @param other the passed area
		 * @return the distance, or {@link Integer#MAX_VALUE} if the planes differ
		 */
		distanceTo(other: WorldArea): number;

		/**
		 * Computes the shortest distance to a world coordinate.
		 *
		 * @param other the passed coordinate
		 * @return the distance, or {@link Integer#MAX_VALUE} if the planes differ
		 */
		distanceTo(other: WorldPoint): number;

		/**
		 * Computes the shortest distance to another area while ignoring the plane.
		 *
		 * @param other the passed area
		 * @return the distance
		 */
		distanceTo2D(other: WorldArea): number;

		/**
		 * Computes the shortest distance to a world coordinate.
		 *
		 * @param other the passed coordinate
		 * @return the distance
		 */
		distanceTo2D(other: WorldPoint): number;

		/**
		 * Checks whether a tile is contained within the area and in the same plane.
		 *
		 * @return {@code true} if the tile is contained within the bounds of this area, {@code false} otherwise.
		 */
		contains(worldPoint: WorldPoint): boolean;

		/**
		 * Checks whether a tile is contained within the area while ignoring the plane.
		 *
		 * @return {@code true} if the tile is contained within the bounds of this area regardless of plane, {@code false} otherwise.
		 */
		contains2D(worldPoint: WorldPoint): boolean;

		/**
		 * Checks whether this area is within melee distance of another.
		 * <p>
		 * Melee distance is exactly 1 tile, so this method computes and returns
		 * whether the shortest distance to the passed area is directly
		 * on the outside of this areas edge.
		 *
		 * @param other the other area
		 * @return true if in melee distance, false otherwise
		 */
		isInMeleeDistance(other: WorldArea): boolean;

		/**
		 * Checks whether a coordinate is within melee distance of this area.
		 *
		 * @param other the coordinate
		 * @return true if in melee distance, false otherwise
		 * @see #isInMeleeDistance(WorldArea)
		 */
		isInMeleeDistance(other: WorldPoint): boolean;

		/**
		 * Checks whether this area intersects with another.
		 *
		 * @param other the other area
		 * @return true if the areas intersect, false otherwise
		 */
		intersectsWith(other: WorldArea): boolean;

		/**
		 * Determines if the area can travel in one of the 9 directions
		 * by using the standard collision detection algorithm.
		 * <p>
		 * Note that this method does not consider other actors as
		 * a collision, but most non-boss NPCs do check for collision
		 * with some actors. For actor collision checking, use the
		 * {@link #canTravelInDirection(Client, int, int, Predicate)} method.
		 *
		 * @param client the client to test in
		 * @param dx the x-axis direction to travel (-1, 0, or 1)
		 * @param dy the y-axis direction to travel (-1, 0, or 1)
		 * @return true if the area can travel in the specified direction
		 */
		canTravelInDirection(client: Client, dx: number, dy: number): boolean;

		/**
		 * Determines if the area can travel in one of the 9 directions
		 * by using the standard collision detection algorithm.
		 * <p>
		 * The passed x and y axis directions indicate the direction to
		 * travel in.
		 * <p>
		 * Note that this method does not normally consider other actors
		 * as a collision, but most non-boss NPCs do check for collision
		 * with some actors. However, using the {@code extraCondition} param
		 * it is possible to implement this check manually.
		 *
		 * @param client the client to test in
		 * @param dx the x-axis direction to travel (-1, 0, or 1)
		 * @param dy the y-axis direction to travel (-1, 0, or 1)
		 * @param extraCondition an additional condition to perform when checking valid tiles,
		 *                       such as performing a check for un-passable actors
		 * FIXME: extraConditions is supposed to be Predicate<? super WorldPoint>
		 * @return true if the area can travel in the specified direction
		 */
		canTravelInDirection(
			client: Client,
			dx: number,
			dy: number,
			extraCondition: any,
		): boolean;

		/**
		 * Gets the point within this area that is closest to another.
		 *
		 * @param other the other area
		 * @return the closest point to the passed area
		 */
		private getComparisonPoint(other: WorldArea): Point;

		/**
		 * Determine if this WorldArea has line of sight to another WorldArea.
		 * <p>
		 * Note that the reverse isn't necessarily true, meaning this can return true
		 * while the other WorldArea does not have line of sight to this WorldArea.
		 *
		 * @param client The client to compare in
		 * @param other The other WorldArea to compare with
		 * @return Returns true if this WorldArea has line of sight to the other
		 */
		hasLineOfSightTo(client: Client, other: WorldArea): boolean;

		private static hasLineOfSightTo(
			client: Client,
			from: Tile,
			to: Tile,
		): boolean;

		/**
		 * Determine if this WorldArea has line of sight to another WorldArea.
		 * <p>
		 * Note that the reverse isn't necessarily true, meaning this can return true
		 * while the other WorldArea does not have line of sight to this WorldArea.
		 *
		 * @param client The client to compare in
		 * @param other The other WorldPoint to compare with
		 * @return Returns true if this WorldPoint has line of sight to the WorldPoint
		 */
		hasLineOfSightTo(client: Client, other: WorldPoint): boolean;

		/**
		 * Retrieves the southwestern most point of this WorldArea.
		 *
		 * @return Returns the southwestern most WorldPoint in the area
		 */
		toWorldPoint(): WorldPoint;

		/**
		 * Accumulates all the WorldPoints that this WorldArea contains and returns them as a list
		 *
		 * @return Returns the WorldPoints in this WorldArea
		 */
		toWorldPointList(): Array<WorldPoint>; // TODO: Validate that this is not a Java List
	}
}
