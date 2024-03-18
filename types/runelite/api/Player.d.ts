/// <reference path="Actor.d.ts" />
/// <reference path="PlayerComposition.d.ts" />
/// <reference path="../../java/index.d.ts" />
/// <reference path="HeadIcon.d.ts" />
/// <reference path="SkullIcon.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents a player entity in the game.
	 */
	export interface Player extends Actor {
		/**
		 * Get the ID of the player
		 *
		 * @return
		 */
		getId(): number;

		getCombatLevel(): number;

		/**
		 * Gets the composition of this player.
		 *
		 * @return the composition
		 */
		getPlayerComposition(): PlayerComposition;

		/**
		 * Gets the polygons that make up the players model.
		 *
		 * @return the model polygons
		 */
		getPolygons(): Polygon[];

		/**
		 * Gets the current team cape team number the player is on.
		 *
		 * @return team number, or 0 if not on any team
		 */
		getTeam(): number;

		/**
		 * Checks whether this player is a member of the same friends chat
		 * the local player.
		 *
		 * @return true if the player is a friends chat member, false otherwise
		 */
		isFriendsChatMember(): boolean;

		/**
		 * Checks whether this player is a friend of the local player.
		 *
		 * @return true if the player is a friend, false otherwise
		 */
		isFriend(): boolean;

		/**
		 * Checks whether the player is a member of the same clan as the local player.
		 *
		 * @return
		 */
		isClanMember(): boolean;

		/**
		 * Gets the displayed overhead icon of the player.
		 *
		 * @return the overhead icon
		 */
		getOverheadIcon(): HeadIcon;

		/**
		 * Gets the displayed skull icon of the player.
		 * Only works on the local player.
		 *
		 * @return the skull icon
		 */

		getSkullIcon(): SkullIcon | null;
	}
}
