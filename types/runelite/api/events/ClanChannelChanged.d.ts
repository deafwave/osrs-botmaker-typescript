/// <reference path="ClanChannel.d.ts" />
declare namespace net.runelite.api {
class ClanChannelChanged
{
/**
	 * The clan channel
	 */


/**
	 * The clan id, or -1 for guest clan
	 * @see net.runelite.api.clan.ClanID
	 */

int clanId;
/**
	 * Whether or not this was the guest clan channel
	 */
boolean guest;
}

}