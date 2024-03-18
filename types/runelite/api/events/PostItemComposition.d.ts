/// <reference path="../ItemComposition.d.ts" />
declare namespace net.runelite.api.events {
	export class PostItemComposition {
		/**
		 * The newly created item.
		 */
		getItemComposition(): ItemComposition;
	}
}
