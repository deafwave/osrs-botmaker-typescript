/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	export class InteractingChanged {
		getSource(): Actor;

		/**
		 * Target actor, may be null
		 */
		getTarget(): Actor;
	}
}
