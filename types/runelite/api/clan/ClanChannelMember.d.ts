/// <reference path="../ChatPlayer.d.ts" />
/// <reference path="ClanRank.d.ts" />
/**
 * A member of a clan channel
 */
interface ClanChannelMember extends ChatPlayer {
	/**
	 * The member name
	 * @return
	 */
	getName(): string;

	/**
	 * The member's rank relative to the other members. To get the member title,
	 * see ClanSettings.
	 * @see ClanRank
	 * @see ClanSettings#titleForRank(ClanRank)
	 * @return
	 */
	getRank(): ClanRank;

	/**
	 * The world the member is on
	 * @return
	 */
	getWorld(): number;
}
