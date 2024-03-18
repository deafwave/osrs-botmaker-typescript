/// <reference path="../Actor.d.ts" />
/// <reference path="../Hitsplat.d.ts" />
declare namespace net.runelite.api.events {
	export class HitsplatApplied {
		/**
		 * The actor the hitsplat was applied to.
		 */
		private actor: Actor;
		/**
		 * The applied hitsplat.
		 */
		private hitsplat: Hitsplat;
	}
}
