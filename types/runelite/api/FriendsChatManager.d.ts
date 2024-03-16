/// <reference path="FriendsChatRank.d.ts" />
/**
 * Represents a container of friends chat members
 */
interface FriendsChatManager extends NameableContainer<FriendsChatMember> {
	/**
	 * Gets the owner of the currently joined friends chat
	 *
	 * @return
	 */
	getOwner(): string;

	/**
	 * Gets the name of the currently joined friends chat
	 *
	 * @return
	 */
	getName(): string;

	/**
	 * Get the local player's rank in the friend chat
	 *
	 * @return
	 */
	getMyRank(): FriendsChatRank;

	/**
	 * Get the rank required to kick members from the friends chat
	 *
	 * @return
	 */
	getKickRank(): FriendsChatRank;
}
