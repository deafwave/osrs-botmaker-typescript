/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="PartyMessage> void send(T message).d.ts" />
/// <reference path="T.d.ts" />
/// <reference path=".d.ts" />
/// <reference path="T extends PartyMessage.d.ts" />
/// <reference path="UserJoin.d.ts" />
/// <reference path="UserPart.d.ts" />
/// <reference path="PartyChatMessage.d.ts" />
/// <reference path="PartyMember.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/*
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
 * Copyright (c) 2021, Jonathan Rousseau <https://github.com/JoRouss>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.party {
export class PartyService
{
Client client;
WSClient wsClient;
EventBus eventBus;
ChatMessageManager chat;
long partyId; // secret party id
String partyPassphrase;
PartyService(Client client, WSClient wsClient, EventBus eventBus, ChatMessageManager chat) 
	generatePassphrase(): string;
	changeParty(passphrase: string): void;
		// If there isn't already a session open, open one
	send(message: T): <T extends PartyMessage> void;
 // run prior to plugins so that the member is joined by the time the plugins see it.
	onUserJoin(message: UserJoin): void;
			// This can happen when a session is resumed server side after the client party
			// changes when disconnected.
		// Send info to other clients that this user successfully finished joining party
 // run prior to plugins so that the member is removed by the time the plugins see it.
	onUserPart(message: UserPart): void;
	onPartyChatMessage(message: PartyChatMessage): void;
		// Remove non-printable characters, and <img> tags from message
		// Cap the message length
	getLocalMember(): PartyMember;
	getMemberById(id: number): PartyMember;
	getMemberByDisplayName(name: string): PartyMember;
	getMembers(): Array<PartyMember>;
	isInParty(): boolean;
	setPartyMemberAvatar(memberID: number, image: BufferedImage): void;
	private static passphraseToId(passphrase: string): number;
	private static randomMemberId(): number;
}
}