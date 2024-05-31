/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="PartyMessage.d.ts" />
declare namespace net.runelite.client.party.messages {
abstract class PartyMemberMessage extends PartyMessage
{
transient long memberId;
}
}