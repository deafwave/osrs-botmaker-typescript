/// <reference path="../Actor.d.ts" />
/// <reference path="../Hitsplat.d.ts" />
declare namespace net.runelite.api.events {
	export class HitsplatApplied {
		/**
		 * The actor the hitsplat was applied to.
		 */
		getActor(): Actor;
		setActor(actor: Actor): void;

		/**
		 * The applied hitsplat.
		 */
		getHitsplat(): Hitsplat;
		setHitsplat(hitsplat: Hitsplat): void;
	}
}
