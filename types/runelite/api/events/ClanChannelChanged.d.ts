/// <reference path="ClanChannel.d.ts" />
/// <reference path="ClanID.d.ts" />

/**
 * Represents an event when the local player joins or leaves a clan channel in TypeScript.
 */
declare class ClanChannelChanged {
	private readonly clanChannel: ClanChannel | null;
	private readonly clanId: number;
	private readonly guest: boolean;

	constructor(
		clanChannel: ClanChannel | null,
		clanId: number,
		guest: boolean,
	);
}
