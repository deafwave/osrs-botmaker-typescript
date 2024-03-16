interface AABB {
	/**
	 * Returns the x-coordinate of the center of this AABB.
	 * @returns The x-coordinate of the center.
	 */
	getCenterX(): number;

	/**
	 * Returns the y-coordinate of the center of this AABB.
	 * @returns The y-coordinate of the center.
	 */
	getCenterY(): number;

	/**
	 * Returns the z-coordinate of the center of this AABB.
	 * @returns The z-coordinate of the center.
	 */
	getCenterZ(): number;

	/**
	 * Returns the extreme x-coordinate of this AABB.
	 * @returns The extreme x-coordinate.
	 */
	getExtremeX(): number;

	/**
	 * Returns the extreme y-coordinate of this AABB.
	 * @returns The extreme y-coordinate.
	 */
	getExtremeY(): number;

	/**
	 * Returns the extreme z-coordinate of this AABB.
	 * @returns The extreme z-coordinate.
	 */
	getExtremeZ(): number;
}
