/// <reference path="../../../java/index.d.ts" />
/// <reference path="ClanChannelMember.d.ts" />
declare namespace net.runelite.api.clan {
	/**
	 * A clan channel.
	 */
	export interface ClanChannel {
		/**
		 * The name of the channel
		 * @return
		 */
		getName(): string;

		/**
		 * The members currently online in the channel.
		 * @return
		 */
		getMembers(): Array<ClanChannelMember>; // TODO: Validate that this is not a Java List

		/**
		 * Find a clan member by name
		 * @param name
		 * @return
		 */

		findMember(
			name: string,
		): net.runelite.api.clan.ClanChannelMember | null;
	}
}
