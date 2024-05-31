/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="AnimationID.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NPCComposition.d.ts" />
/// <reference path="NpcID.d.ts" />
/// <reference path="ParamID.d.ts" />
/// <reference path="events/AnimationChanged.d.ts" />
/// <reference path="events/NpcChanged.d.ts" />
/*
 * Copyright (c) 2022, Jordan Atwood <nightfirecat@nightfirec.at>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.game {
export class NpcUtil
{
RuntimeConfig runtimeConfig;
NpcUtil(RuntimeConfig runtimeConfig, EventBus eventBus) 
	/**
	 * Returns whether an NPC is dying and can no longer be interacted with, or if it is still alive or in some special
	 * state where it can be 0hp without dying. (For example, Gargoyles and other slayer monsters with item weaknesses
	 * are not killed by reaching 0hp, so would not be dead based on that alone.)
	 *
	 * @param npc NPC to check whether it is dying
	 * @return {@code true} if the NPC is dying
	 */
	isDying(npc: NPC): boolean;
			// These NPCs hit 0hp but don't actually die
			// These NPCs die, but transform into forms which are attackable or interactable, so it would be jarring for
			// them to be considered dead when reaching 0hp.
			// Tutorial island giant rats respawn instantly.
			// Agrith Naar restores health upon reaching 0hp if the player does not have Silverlight
			// equipped, or moved away immediately after applying the killing blow.
			// These NPCs have no attack options, but are the dead and uninteractable form of otherwise attackable NPCs,
			// thus should not be considered alive.
			// Gargoyles, Dawn, and Dusk each have cracking forms which contain their death animations, so should always
			// be considered dead.
	onNpcChanged(e: net.runelite.api.events.NpcChanged): void;
			// These NPCs are final new forms of previous NPCs and should not be considered dead upon transformation.
			// Prior form(s) should be added to the `isDying()` exceptions list above to ensure they are not hidden or
			// made uninteractable during their death animations.
			// The Nightmare should be considered alive again once reaching its sleeping form
			// Skotizo's altars should be considered alive again once they "respawn" from their inactive altar forms
	onAnimationChanged(animationChanged: net.runelite.api.events.AnimationChanged): void;
			// Corp frequently dies in masses with hitpoints remaining, so additionally use the death anim
			// to determine if it is dead
				// intentional fallthrough
}
}