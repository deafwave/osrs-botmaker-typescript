/**
 * A hitsplat that has been applied to an Actor.
 */
declare class Hitsplat {
	/**
	 * The type of hitsplat.
	 */
	readonly hitsplatType: number;

	/**
	 * The value displayed by the hitsplat.
	 */
	readonly amount: number;

	/**
	 * When the hitsplat will disappear.
	 */
	readonly disappearsOnGameCycle: number;

	constructor(
		hitsplatType: number,
		amount: number,
		disappearsOnGameCycle: number,
	) {
		this.hitsplatType = hitsplatType;
		this.amount = amount;
		this.disappearsOnGameCycle = disappearsOnGameCycle;
	}

	isMine(): boolean {
		switch (this.hitsplatType) {
			case 40 /* BLOCK_ME */:
			case 41 /* DAMAGE_ME */:
			case 42 /* DAMAGE_ME_CYAN */:
			case 43 /* DAMAGE_ME_YELLOW */:
			case 44 /* DAMAGE_ME_ORANGE */:
			case 45 /* DAMAGE_ME_WHITE */:
			case 46 /* DAMAGE_ME_POISE */:
			case 47 /* DAMAGE_MAX_ME */:
			case 48 /* DAMAGE_MAX_ME_CYAN */:
			case 49 /* DAMAGE_MAX_ME_ORANGE */:
			case 50 /* DAMAGE_MAX_ME_YELLOW */:
			case 51 /* DAMAGE_MAX_ME_WHITE */:
			case 52 /* DAMAGE_MAX_ME_POISE */:
				return true;
			default:
				return false;
		}
	}

	isOthers(): boolean {
		switch (this.hitsplatType) {
			case 20 /* BLOCK_OTHER */:
			case 21 /* DAMAGE_OTHER */:
			case 22 /* DAMAGE_OTHER_CYAN */:
			case 23 /* DAMAGE_OTHER_YELLOW */:
			case 24 /* DAMAGE_OTHER_ORANGE */:
			case 25 /* DAMAGE_OTHER_WHITE */:
			case 26 /* DAMAGE_OTHER_POISE */:
				return true;
			default:
				return false;
		}
	}
}
