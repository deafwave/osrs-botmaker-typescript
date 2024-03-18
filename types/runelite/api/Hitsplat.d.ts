/// <reference path="annotations/HitsplatType.d.ts" />
declare namespace net.runelite.api {
	/**
	 * A hitsplat that has been applied to an {@link Actor}.
	 */
	export class Hitsplat {
		constructor(
			hitsplatType: net.runelite.api.annotations.HitsplatType,
			amount: number,
			disappearsOnGameCycle: number,
		);

		/**
		 * The value displayed by the hitsplat.
		 */
		getAmount(): number;
		/**
		 * The type of hitsplat.
		 */
		getHitsplatType(): number;
		/**
		 * When the hitsplat will disappear.
		 */
		getDisappearsOnGameCycle(): number;

		isMine(): boolean;

		isOthers(): boolean;
	}
}
