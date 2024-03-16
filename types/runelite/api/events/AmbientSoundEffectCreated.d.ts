/// <reference path="AmbientSoundEffect.d.ts" />

/**
 * Represents an event for when an ambient sound effect is created in TypeScript.
 */
declare class AmbientSoundEffectCreated {
	private readonly ambientSoundEffect: AmbientSoundEffect;

	constructor(ambientSoundEffect: AmbientSoundEffect);
}
