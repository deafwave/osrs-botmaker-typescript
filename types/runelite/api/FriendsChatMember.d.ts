/// <reference path="FriendsChatRank.d.ts" />
/// <reference path="ChatPlayer.d.ts" />
/**
 * Represents a friends chat member.
 */
interface FriendsChatMember extends ChatPlayer {
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
