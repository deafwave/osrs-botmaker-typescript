/// <reference path="annotations/HitsplatType.d.ts" />
/**
 * A hitsplat that has been applied to an {@link Actor}.
 */
declare namespace net.runelite.api {
	class Hitsplat {
		constructor(
			hitsplatType: HitsplatType,
			amount: number,
			disappearsOnGameCycle: number,
		);

		isMine(): boolean;

		isOthers(): boolean;
	}
}
