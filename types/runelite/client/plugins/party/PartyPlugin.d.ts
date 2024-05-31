/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="SoundEffectID.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/CommandExecuted.d.ts" />
/// <reference path="events/FocusChanged.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/MenuOptionClicked.d.ts" />
/// <reference path="Plugin.d.ts" />
/// <reference path="Binder.d.ts" />
/// <reference path="ConfigChanged.d.ts" />
/// <reference path="TilePing.d.ts" />
/// <reference path="StatusUpdate.d.ts" />
/// <reference path="LocationUpdate.d.ts" />
/// <reference path="UserJoin.d.ts" />
/// <reference path="UserSync.d.ts" />
/// <reference path="UserPart.d.ts" />
/// <reference path="PartyChanged.d.ts" />
/// <reference path="PartyMemberAvatar.d.ts" />
/// <reference path="PartyData.d.ts" />
/// <reference path="Color.d.ts" />
/*
 * Copyright (c) 2019, Tomas Slusny <slusnucky@gmail.com>
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
declare namespace net.runelite.client.plugins.party {
( ) 
export class PartyPlugin extends Plugin
{
Client client;
PartyService party;
OverlayManager overlayManager;
PartyPingOverlay partyPingOverlay;
PartyStatusOverlay partyStatusOverlay;
WSClient wsClient;
WorldMapPointManager worldMapManager;
PartyConfig config;
ChatMessageManager chatMessageManager;
ClientThread clientThread;
ClientToolbar clientToolbar;
KeyManager keyManager;
boolean developerMode;
Instant lastLogout;
PartyPanel panel;
NavigationButton navButton;
WorldPoint lastLocation;
StatusUpdate lastStatus;
	private configure(binder: Binder): void;
		// Delay sync so the eventbus can register prior to the sync response
	private startUp(): void;
	onFocusChanged(focusChanged: net.runelite.api.events.FocusChanged): void;
	leaveParty(): void;
	onConfigChanged(event: ConfigChanged): void;
			// rebuild the panel in the event the "Recolor names" option changes
	onMenuOptionClicked(event: net.runelite.api.events.MenuOptionClicked): void;
	onGameStateChanged(event: net.runelite.api.events.GameStateChanged): void;
	onTilePing(event: TilePing): void;
( ) 
	scheduledTick(): void;
	private shareLocation(): void;
	private checkIdle(): void;
	onGameTick(event: net.runelite.api.events.GameTick): void;
	requestSync(): void;
			// Request sync
	onStatusUpdate(event: StatusUpdate): void;
	onLocationUpdate(event: LocationUpdate): void;
	onUserJoin(event: UserJoin): void;
		// this has a side effect of creating the party data
	onUserSync(event: UserSync): void;
	private checkStateChanged(forceSend: boolean): void;
			// non-null values for next-tick comparison
	onUserPart(event: UserPart): void;
	onPartyChanged(event: PartyChanged): void;
		// Reset party
	onCommandExecuted(commandExecuted: net.runelite.api.events.CommandExecuted): void;
	onPartyMemberAvatar(event: PartyMemberAvatar): void;
	getPartyData(uuid: number): PartyData | null;
			// This happens when you are not in party but you still receive message.
			// Can happen if you just left party and you received message before message went through
			// in ws service
			// When first joining a party, other members can join before getting a join for self
	private getLocalMemberColor(): Color;
	private static messageFreq(partySize: number): number;
		// introduce a tick delay for each member >6
}
}