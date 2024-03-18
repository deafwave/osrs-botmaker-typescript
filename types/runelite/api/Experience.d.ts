declare namespace net.runelite.api {
	/**
	 * A utility class used for calculating experience related values.
	 * <p>
	 * Skill levels calculated and handled by this class are within (inclusive)
	 * the range 1-126 rather than 1-99 to account for virtual levels obtained
	 * when reaching the 200M experience limit.
	 */
	export class Experience {
		/**
		 * Maximum effective skill level at 13,034,431 experience.
		 */
		static readonly MAX_REAL_LEVEL = 99;

		/**
		 * The maximum virtual skill level for any skill (200M experience).
		 */
		static readonly MAX_VIRT_LEVEL = 126;
		static readonly MAX_SKILL_XP = 200_000_000;

		/**
		 * The maximum possible combat level.
		 */
		static readonly MAX_COMBAT_LEVEL = 126;

		/**
		 * The total experience required for each skill level.
		 */
		static readonly XP_FOR_LEVEL: number;
		/**
		 * Gets the total experience required to obtain the passed skill
		 * level.
		 *
		 * @param level the skill level
		 * @return the required experience for the level
		 * @throws IllegalArgumentException if skill level is invalid
		 */
		static getXpForLevel(level: number): number;

		/**
		 * Gets the skill level for the passed total experience.
		 *
		 * @param xp the passed experience (non-negative)
		 * @return the skill level
		 */
		static getLevelForXp(xp: number): number;

		private static getMeleeRangeOrMagicCombatLevelContribution(
			attackLevel: number,
			strengthLevel: number,
			magicLevel: number,
			rangeLevel: number,
		): number;

		/**
		 * Calculates a non-virtual high-precision combat level without integer
		 * rounding.
		 * <p>
		 * Combat levels range between 1.15 and ~126.1.
		 *
		 * @param attackLevel the attack level
		 * @param strengthLevel the strength level
		 * @param defenceLevel the defence level
		 * @param hitpointsLevel the hitpoints level
		 * @param magicLevel the magic level
		 * @param rangeLevel the range level
		 * @param prayerLevel the prayer level
		 * @return the non-virtual combat level
		 */

		static getCombatLevelPrecise(
			attackLevel: number,
			strengthLevel: number,
			defenceLevel: number,
			hitpointsLevel: number,
			magicLevel: number,
			rangeLevel: number,
			prayerLevel: number,
		): number;

		/**
		 * Calculates a regular combat level.
		 *
		 * @param attackLevel the attack level
		 * @param strengthLevel the strength level
		 * @param defenceLevel the defence level
		 * @param hitpointsLevel the hitpoints level
		 * @param magicLevel the magic level
		 * @param rangeLevel the range level
		 * @param prayerLevel the prayer level
		 * @return the combat level, rounded down
		 */

		static getCombatLevel(
			attackLevel: number,
			strengthLevel: number,
			defenceLevel: number,
			hitpointsLevel: number,
			magicLevel: number,
			rangeLevel: number,
			prayerLevel: number,
		): number;

		/**
		 * Calculate number of attack/strength levels required to increase combat level.
		 *
		 * @param attackLevel    the attack level
		 * @param strengthLevel  the strength level
		 * @param defenceLevel   the defence level
		 * @param hitpointsLevel the hitpoints level
		 * @param magicLevel     the magic level
		 * @param rangeLevel     the range level
		 * @param prayerLevel    the prayer level
		 * @return the number of levels required
		 */

		static getNextCombatLevelMelee(
			attackLevel: number,
			strengthLevel: number,
			defenceLevel: number,
			hitpointsLevel: number,
			magicLevel: number,
			rangeLevel: number,
			prayerLevel: number,
		): number;

		/**
		 * Calculate number of hitpoints/defence levels required to increase combat level.
		 *
		 * @param attackLevel    the attack level
		 * @param strengthLevel  the strength level
		 * @param defenceLevel   the defence level
		 * @param hitpointsLevel the hitpoints level
		 * @param magicLevel     the magic level
		 * @param rangeLevel     the range level
		 * @param prayerLevel    the prayer level
		 * @return the number of levels required
		 */

		static getNextCombatLevelHpDef(
			attackLevel: number,
			strengthLevel: number,
			defenceLevel: number,
			hitpointsLevel: number,
			magicLevel: number,
			rangeLevel: number,
			prayerLevel: number,
		): number;

		/**
		 * Calculate number of magic levels required to increase combat level.
		 *
		 * @param attackLevel    the attack level
		 * @param strengthLevel  the strength level
		 * @param defenceLevel   the defence level
		 * @param hitpointsLevel the hitpoints level
		 * @param magicLevel     the magic level
		 * @param rangeLevel     the range level
		 * @param prayerLevel    the prayer level
		 * @return the number of levels required
		 */

		static getNextCombatLevelMagic(
			attackLevel: number,
			strengthLevel: number,
			defenceLevel: number,
			hitpointsLevel: number,
			magicLevel: number,
			rangeLevel: number,
			prayerLevel: number,
		): number;

		/**
		 * Calculate number of ranged levels required to increase combat level.
		 *
		 * @param attackLevel    the attack level
		 * @param strengthLevel  the strength level
		 * @param defenceLevel   the defence level
		 * @param hitpointsLevel the hitpoints level
		 * @param magicLevel     the magic level
		 * @param rangeLevel     the range level
		 * @param prayerLevel    the prayer level
		 * @return the number of levels required
		 */

		static getNextCombatLevelRange(
			attackLevel: number,
			strengthLevel: number,
			defenceLevel: number,
			hitpointsLevel: number,
			magicLevel: number,
			rangeLevel: number,
			prayerLevel: number,
		): number;

		/**
		 * Calculate number of prayer levels required to increase combat level.
		 *
		 * @param attackLevel    the attack level
		 * @param strengthLevel  the strength level
		 * @param defenceLevel   the defence level
		 * @param hitpointsLevel the hitpoints level
		 * @param magicLevel     the magic level
		 * @param rangeLevel     the range level
		 * @param prayerLevel    the prayer level
		 * @return the number of levels required
		 */

		static getNextCombatLevelPrayer(
			attackLevel: number,
			strengthLevel: number,
			defenceLevel: number,
			hitpointsLevel: number,
			magicLevel: number,
			rangeLevel: number,
			prayerLevel: number,
		): number;
	}
}
