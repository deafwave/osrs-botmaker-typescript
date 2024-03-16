/// <reference path="ClanMember.d.ts" />
/// <reference path="ClanRank.d.ts" />
/// <reference path="ClanTitle.d.ts" />

/**
 * A clan's settings.
 */
interface ClanSettings {
	/**
	 * The clan name
	 * @returns {string} The name of the clan.
	 */
	getName(): string;

	/**
	 * The members of the clan. This includes all members, whether online or offline.
	 * @returns {ClanMember[]} The list of clan members.
	 */
	getMembers(): ClanMember[];

	/**
	 * Find a member of the clan.
	 * @param {string} name The name of the member to find.
	 * @returns {ClanMember | null} The clan member, or null if not found.
	 */
	findMember(name: string): ClanMember | null;

	/**
	 * Get the clan title for a clan rank.
	 * @param {ClanRank} clanRank The rank.
	 * @returns {ClanTitle | null} The clan title associated with the rank, or null.
	 */
	titleForRank(clanRank: ClanRank): ClanTitle | null;
}
