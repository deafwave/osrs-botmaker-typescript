/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="EquipmentInventorySlot.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="ItemContainer.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="ItemID/FIRE_CAPE.d.ts" />
/// <reference path="ItemID/INFERNAL_CAPE.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NpcID.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="VarPlayer/LAST_HOME_TELEPORT.d.ts" />
/// <reference path="VarPlayer/LAST_MINIGAME_TELEPORT.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="annotations/Varp.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/ActorDeath.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/GraphicChanged.d.ts" />
/// <reference path="events/ItemContainerChanged.d.ts" />
/// <reference path="events/NpcDespawned.d.ts" />
/// <reference path="events/VarbitChanged.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2017, Seth <Sethtroll3@gmail.com>
 * Copyright (c) 2018, Jordan Atwood <jordan.atwood423@gmail.com>
 * Copyright (c) 2019, winterdaze
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
declare namespace net.runelite.client.plugins.timers {
( ) 
export class TimersPlugin extends Plugin
			// staminaEffectActive is checked to match https://github.com/Joshua-F/cs2-scripts/blob/741271f0c3395048c1bad4af7881a13734516adf/scripts/%5Bproc%2Cbuff_bar_get_value%5D.cs2#L25
				// by default the thrall lasts 1 tick per magic level
				// ca tiers being completed boosts this
					// The first wave message of the inferno comes six seconds after the ingame timer starts counting
				// Advance start time by how long it has been paused
				// Other var changes are not handled as teleports
			// assume movement means unfrozen
				// fall through
				// pause tzhaar timer if logged out without pausing
			// downgrade freeze based on graphic, if at the same tick as the freeze message
	/**
	 * Remove SOTD timer when equipment is changed.
	 */
			// remove sotd timer if the staff has been unwielded
		// Reset the timer when its duration increases in order to allow it to turn red at the correct time even when refreshed early
}