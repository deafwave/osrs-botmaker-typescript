/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	/**
	 * Represents an event where an area sound effect is played in TypeScript.
	 */
	export class AreaSoundEffectPlayed {
		getSource(): Actor | null;
		getSoundId(): number;
		getSceneX(): number;
		getSceneY(): number;
		getRange(): number;
		getDelay(): number;

		isConsumed(): boolean;

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
