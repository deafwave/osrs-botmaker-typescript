/// <reference path="../clan/ClanChannel.d.ts" />
declare namespace net.runelite.api.events {
	export class ClanChannelChanged {
		/**
		 * The clan channel
		 */
		private readonly clanChannel: net.runelite.api.clan.ClanChannel;

		/**
		 * The clan id, or -1 for guest clan
		 * @see net.runelite.api.clan.ClanID
		 */

		private clanId: number;
		/**
		 * Whether or not this was the guest clan channel
		 */
		private guest: boolean;
	}
}
