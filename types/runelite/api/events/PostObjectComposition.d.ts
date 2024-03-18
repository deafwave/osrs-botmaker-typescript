/// <reference path="../ObjectComposition.d.ts" />
declare namespace net.runelite.api.events {
	export class PostObjectComposition {
		/**
		 * The newly created object
		 */
		getObjectComposition(): ObjectComposition;
	}
}
