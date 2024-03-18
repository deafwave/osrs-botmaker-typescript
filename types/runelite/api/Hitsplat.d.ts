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

		isMine(): boolean;

		isOthers(): boolean;
	}
}
