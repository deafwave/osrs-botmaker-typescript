/// <reference path="ChatPlayer.d.ts" />
/// <reference path="FriendsChatRank.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents a friends chat member.
	 */
	export interface FriendsChatMember extends ChatPlayer {
		/**
		 * Gets the world the member is in.
		 *
		 * @return the world
		 */
		getWorld(): number;

		/**
		 * Gets the rank of the friends chat member.
		 *
		 * @return the rank
		 */
		getRank(): FriendsChatRank;
	}
}
