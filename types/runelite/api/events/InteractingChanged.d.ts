/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	/**
	 * An event called when the actor an actor is interacting with changes
	 */
	export class InteractingChanged {
		getSource(): Actor;

		/**
		 * Target actor, may be null
		 */
		getTarget(): Actor;
	}
}
