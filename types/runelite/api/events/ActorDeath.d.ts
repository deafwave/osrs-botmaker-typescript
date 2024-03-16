/// <reference path="Actor.d.ts" />

/**
 * Represents an event for when an actor dies in TypeScript.
 */
declare class ActorDeath {
	private readonly actor: Actor;

	constructor(actor: Actor);
}
