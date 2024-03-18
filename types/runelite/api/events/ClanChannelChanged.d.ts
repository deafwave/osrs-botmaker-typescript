/// <reference path="../clan/ClanChannel.d.ts" />
declare namespace net.runelite.api.events {
	export class ClanChannelChanged {
		/**
		 * The clan channel
		 */
		getClanChannel(): net.runelite.api.clan.ClanChannel;

		/**
		 * The clan id, or -1 for guest clan
		 * @see net.runelite.api.clan.ClanID
		 */

		getClanId(): number;

		/**
		 * Whether or not this was the guest clan channel
		 */
		isGuest(): boolean;
	}
}
