/// <reference path="../StructComposition.d.ts" />

declare namespace net.runelite.api.events {
	export class PostStructComposition {
		/**
		 * The newly created struct.
		 */
		getStructComposition(): StructComposition;
		setStructComposition(structComposition: StructComposition): void;
	}
}
