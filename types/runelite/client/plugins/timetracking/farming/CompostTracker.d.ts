/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="ObjectComposition.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="annotations/Varbit.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/MenuOptionClicked.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="FarmingPatch.d.ts" />
/// <reference path="CompostState.d.ts" />
/// <reference path="PendingCompost.d.ts" />
/*
 * Copyright (c) 2022 LlemonDuck
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
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
declare namespace net.runelite.client.plugins.timetracking.farming {
)
export class CompostTracker
{
export class PendingCompost
"You treat the .+ with (?<compostType>ultra|super|)compost\\."); 
"^The .+ has been treated with (?<compostType>ultra|super|)compost"); 
"This .+ has already been (treated|fertilised) with (?<compostType>ultra|super|)compost(?: - the spell can't make it any more fertile)?\\."); 
"This is an? .+\\. The soil has been treated with (?<compostType>ultra|super|)compost\\..*"); 
ItemID.COMPOST,
ItemID.SUPERCOMPOST,
ItemID.ULTRACOMPOST,
ItemID.BOTTOMLESS_COMPOST_BUCKET_22997
);
Client client;
FarmingWorld farmingWorld;
ConfigManager configManager;
	private static configKey(fp: FarmingPatch): string;
	setCompostState(fp: FarmingPatch, state: CompostState): void;
	getCompostState(fp: FarmingPatch): CompostState;
	onMenuOptionClicked(e: net.runelite.api.events.MenuOptionClicked): void;
	private isCompostAction(e: net.runelite.api.events.MenuOptionClicked): boolean;
	onChatMessage(e: net.runelite.api.events.ChatMessage): void;
	onGameStateChanged(e: net.runelite.api.events.GameStateChanged): void;
	private playerIsBesidePatch(pendingCompost: PendingCompost): boolean;
		// find gameobject instance in scene
		// it is possible that the scene has reloaded between use and action occurring so we use worldpoint
		// instead of storing scene coords in the menuoptionclicked event
		// player coords
		// patch coords
		// player should be within one tile of these coords
	private expirePendingActions(): void;
	static determineCompostUsed(chatMessage: string): CompostState;
}
}