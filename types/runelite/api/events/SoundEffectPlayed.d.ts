/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	export class SoundEffectPlayed {
		getSource(): Actor | null;

		getSoundId(): number;
		setSoundId(id: number): void;

		getDelay(): number;
		setDelay(delay: number): void;

		setConsumed(consume: boolean): void;
		isConsumed(): boolean;

		consume(): void;
	}
}
