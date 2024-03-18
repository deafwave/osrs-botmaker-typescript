/// <reference path="Renderable.d.ts" />
/// <reference path="Animation.d.ts" />
declare namespace net.runelite.api {
	/**
	 * An animated object
	 */
	export interface DynamicObject extends Renderable {
		/**
		 * Get the animation applied to the object
		 * @return
		 */
		getAnimation(): Animation;

		/**
		 * Get the frame of the current animation
		 * @return
		 */
		getAnimFrame(): number;

		/**
		 * Get the frame cycle. The number of ticks the client has been on this frame.
		 * @return
		 */
		getAnimCycle(): number;
	}
}
