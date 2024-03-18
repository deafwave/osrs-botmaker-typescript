declare namespace net.runelite.api {
	class Point {
		constructor(x: number, y: number);

		/**
		 * Gets the distance between this point and another.
		 *
		 * @param other other point
		 * @return the distance
		 */
		distanceTo(other: Point): number;
	}
}
