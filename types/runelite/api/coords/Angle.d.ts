/// <reference path="Direction.d.ts" />
declare namespace net.runelite.api.coords {
	export class Angle {
		/**
		 * The raw angle value.
		 */
		constructor(angle: number);

		getAngle(): number;

		/**
		 * Converts the angle value to the nearest cardinal direction.
		 * <p>
		 * Each cardinal direction contains 512 angles, ranging between
		 * -256 and +256 of it's true value. Negative values and values
		 * above 2047 are wrapped accordingly.
		 *
		 * @return Nearest cardinal direction to the angle
		 */
		getNearestDirection(): Direction;
	}
}
