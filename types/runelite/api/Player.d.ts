/// <reference path="Actor.d.ts" />
/// <reference path="HeadIcon.d.ts" />
/// <reference path="SkullIcon.d.ts" />
interface Player extends Actor {
	/**
	 * Get the ID of the player
	 */
	getId(): number;

	/**
	 * Gets the combat level of the player
	 */
	getCombatLevel(): number;

	/**
	 * Gets the composition of this player.
	 */
	getPlayerComposition(): PlayerComposition;

	/**
	 * Gets the polygons that make up the players model.
	 */
	getPolygons(): Polygon[];

	/**
	 * Gets the current team cape team number the player is on.
	 */
	getTeam(): number;

	/**
	 * Checks whether this player is a member of the same friends chat as the local player.
	 */
	isFriendsChatMember(): boolean;

	/**
	 * Checks whether this player is a friend of the local player.
	 */
	isFriend(): boolean;

	/**
	 * Checks whether the player is a member of the same clan as the local player.
	 */
	isClanMember(): boolean;

	/**
	 * Gets the displayed overhead icon of the player.
	 */
	getOverheadIcon(): HeadIcon;

	/**
	 * Gets the displayed skull icon of the player.
	 * Only works on the local player.
	 */
	getSkullIcon(): SkullIcon | null; // Nullable in Java is similar to Type | null in TypeScript
}
