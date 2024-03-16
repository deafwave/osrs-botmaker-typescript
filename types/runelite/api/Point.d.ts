/**
 * A two-dimensional coordinate on the canvas.
 */
interface Point {
	/**
	 * The x-coordinate of the point.
	 */
	readonly x: number;

	/**
	 * The y-coordinate of the point.
	 */
	readonly y: number;

	/**
	 * Gets the distance between this point and another.
	 *
	 * @param other other point
	 * @return the distance
	 */
	distanceTo(other: Point): number;
}
