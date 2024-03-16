/// <reference path="Renderable.d.ts" />
/// <reference path="Animation.d.ts" />
/**
 * An animated object.
 */
interface DynamicObject extends Renderable {
	/**
	 * Get the animation applied to the object.
	 * @returns the animation
	 */
	getAnimation(): Animation;

	/**
	 * Get the frame of the current animation.
	 * @returns the frame number
	 */
	getAnimFrame(): number;

	/**
	 * Get the frame cycle. The number of ticks the client has been on this frame.
	 * @returns the frame cycle
	 */
	getAnimCycle(): number;
}
