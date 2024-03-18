/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	export class InteractingChanged {
		private readonly source: Actor;

		/**
		 * Target actor, may be null
		 */
		private readonly target: Actor;
	}
}
