/// <reference path="../Actor.d.ts" />
declare namespace net.runelite.api.events {
	/**
	 * Event fired when an actors overhead text is changed.
	 */
	export class OverheadTextChanged {
		getActor(): Actor;

		getOverheadText(): string;
	}
}
