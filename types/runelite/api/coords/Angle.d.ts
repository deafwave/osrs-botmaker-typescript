/// <reference path="Direction.d.ts" />

/**
 * Represents an in-game orientation that uses fixed point arithmetic.
 * Angles are represented as an int value ranging from 0-2047, where:
 * - 0 is true South
 * - 512 is true West
 * - 1024 is true North
 * - 1536 is true East
 */
declare class Angle {
	/**
	 * The raw angle value.
	 */
	private readonly angle: number;

	/**
	 * Converts the angle value to the nearest cardinal direction.
	 * Each cardinal direction contains 512 angles, ranging between
	 * -256 and +256 of its true value. Negative values and values
	 * above 2047 are wrapped accordingly.
	 *
	 * @returns {Direction} Nearest cardinal direction to the angle
	 */
	public getNearestDirection(): Direction;
}
