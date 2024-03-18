/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	export class SoundEffectPlayed {
		private source: Actor | null;
		private soundId: number;
		private delay: number;

		private consumed: boolean;

		private consume(): void | null;
	}
}
