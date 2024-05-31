/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NpcID.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="events/InteractingChanged.d.ts" />
/// <reference path="events/MenuEntryAdded.d.ts" />
/// <reference path="events/NpcDespawned.d.ts" />
/// <reference path="Plugin.d.ts" />
/// <reference path="ConfigManager.d.ts" />
/// <reference path="RandomEventConfig.d.ts" />
/// <reference path="Notification.d.ts" />
/*
 *  Copyright (c) 2018, trimbe <github.com/trimbe>
 *  All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *
 *  1. Redistributions of source code must retain the above copyright notice, this
 *     list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 *  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 *  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 *  ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 *  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 *  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.plugins.randomevents {
( ) 
export class RandomEventPlugin extends Plugin
{
NpcID.BEE_KEEPER_6747,
NpcID.CAPT_ARNAV,
NpcID.DR_JEKYLL, NpcID.DR_JEKYLL_314,
NpcID.DRUNKEN_DWARF,
NpcID.DUNCE_6749,
NpcID.EVIL_BOB, NpcID.EVIL_BOB_6754,
NpcID.FLIPPA_6744,
NpcID.FREAKY_FORESTER_6748,
NpcID.FROG_5429,
NpcID.GENIE, NpcID.GENIE_327,
NpcID.GILES, NpcID.GILES_5441,
NpcID.LEO_6746,
NpcID.MILES, NpcID.MILES_5440,
NpcID.MYSTERIOUS_OLD_MAN_6750, NpcID.MYSTERIOUS_OLD_MAN_6751,
NpcID.MYSTERIOUS_OLD_MAN_6752, NpcID.MYSTERIOUS_OLD_MAN_6753,
NpcID.NILES, NpcID.NILES_5439,
NpcID.PILLORY_GUARD,
NpcID.POSTIE_PETE_6738,
NpcID.QUIZ_MASTER_6755,
NpcID.RICK_TURPENTINE, NpcID.RICK_TURPENTINE_376,
NpcID.SANDWICH_LADY,
NpcID.SERGEANT_DAMIEN_6743,
NpcID.COUNT_CHECK_12551, NpcID.COUNT_CHECK_12552
);
"Talk-to",
"Dismiss"
);
NPC currentRandomEvent;
Client client;
Notifier notifier;
RandomEventConfig config;
	private static getConfig(configManager: ConfigManager): RandomEventConfig;
	private shutDown(): void;
		// Check that the npc is interacting with the player and the player isn't interacting with the npc, so
		// that the notification doesn't fire from talking to other user's randoms
	onNpcDespawned(npcDespawned: net.runelite.api.events.NpcDespawned): void;
	onMenuEntryAdded(event: net.runelite.api.events.MenuEntryAdded): void;
	private shouldNotify(id: number): Notification;
}
}