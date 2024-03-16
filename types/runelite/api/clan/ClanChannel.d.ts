/// <reference path="ClanChannelMember.d.ts" />
/**
 * Represents the 'ClanChannel' interface from Java in TypeScript.
 * This TypeScript interface replicates the structure and methods of the Java interface.
 */
interface ClanChannel {
	/**
	 * The name of the channel
	 * @returns {string} The name.
	 */
	getName(): string;

	/**
	 * The members currently online in the channel.
	 * @returns {ClanChannelMember[]} The list of members.
	 */
	getMembers(): ClanChannelMember[];

	/**
	 * Find a clan member by name
	 * @param {string} name The name of the member to find.
	 * @returns {ClanChannelMember | null} The clan member, or null if not found.
	 */
	findMember(name: string): ClanChannelMember | null;
}
