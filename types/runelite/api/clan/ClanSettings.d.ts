/// <reference path="../../../java/index.d.ts" />
/// <reference path="ClanMember.d.ts" />
/// <reference path="ClanRank.d.ts" />
/// <reference path="ClanTitle.d.ts" />
/**
 * A clan's settings.
 */
interface ClanSettings {
	/**
	 * The clan name
	 * @return
	 */
	getName(): string;

	/**
	 * The members of the clan. This includes all members, whether online or offline.
	 * @return
	 */
	getMembers(): List<ClanMember>;

	/**
	 * Find a member of the clan.
	 * @param name
	 * @return
	 */

	findMember(name: string): ClanMember | null;

	/**
	 * Get the clan title for a clan rank.
	 * @param clanRank the rank
	 * @see ClanRank
	 * @return
	 */

	titleForRank(clanRank: ClanRank): ClanTitle | null;
}
