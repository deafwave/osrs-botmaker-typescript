/// <reference path="../Actor.d.ts" />

/**
 * Represents an event where an area sound effect is played in TypeScript.
 */
declare namespace net.runelite.api {
	class AreaSoundEffectPlayed {
		private readonly source: Actor | null;
		private readonly soundId: number;
		private readonly sceneX: number;
		private readonly sceneY: number;
		private readonly range: number;
		private readonly delay: number;

		private consumed: boolean;

		constructor(
			source: Actor | null,
			soundId: number,
			sceneX: number,
			sceneY: number,
			range: number,
			delay: number,
		);

		consume(): void;
	}
}
