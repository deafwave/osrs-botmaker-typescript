/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	export class GraphicChanged {
		/**
		 * The actor that has had their graphic changed.
		 */
		getActor(): Actor;
		setActor(actor: Actor): void;
	}
}
