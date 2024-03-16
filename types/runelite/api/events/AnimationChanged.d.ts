/// <reference path="Actor.d.ts" />

/**
 * Represents an event where an Actor has changed animations in TypeScript.
 * Use Actor.getAnimation() to get the new animation ID.
 */
declare class AnimationChanged {
	private readonly actor: Actor;

	constructor(actor: Actor);
}
