/**
 * An enumeration of possible account types.
 * @deprecated This enum is deprecated.
 */
declare enum AccountType {
	/**
	 * Normal account type.
	 */
	NORMAL = 0,
	/**
	 * Ironman account type.
	 */
	IRONMAN = 1,
	/**
	 * Ultimate ironman account type.
	 */
	ULTIMATE_IRONMAN = 2,
	/**
	 * Hardcore ironman account type.
	 */
	HARDCORE_IRONMAN = 3,
	/**
	 * Group ironman account type.
	 */
	GROUP_IRONMAN = 4,
	/**
	 * Hardcore group ironman account type.
	 */
	HARDCORE_GROUP_IRONMAN = 5,
}

/**
 * Checks whether the provided AccountType is a non-group ironman.
 * @param accountType The AccountType to check.
 * @returns true if the AccountType is any of the non-group ironman types.
 */
declare function isIronman(accountType: AccountType): boolean;

/**
 * Checks whether the provided AccountType is a group ironman.
 * @param accountType The AccountType to check.
 * @returns true if the AccountType is either of the group ironman types.
 */
declare function isGroupIronman(accountType: AccountType): boolean;
