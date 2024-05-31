/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="XpUpdateResult.d.ts" />
/// <reference path="XpStateSingle.d.ts" />
/// <reference path="XpSnapshotSingle.d.ts" />
/*
 * Copyright (c) 2018, Levi <me@levischuck.com>
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
declare namespace net.runelite.client.plugins.xptracker {
/**
 * Internal state for the XpTrackerPlugin
 * <p>
 * Note: This class's operations are not currently synchronized.
 * It is intended to be called by the XpTrackerPlugin on the client thread.
 */
export class XpState
{
NPC interactedNPC;
XpTrackerConfig xpTrackerConfig;
	/**
	 * Destroys all internal state, however any XpSnapshotSingle or XpSnapshotTotal remain unaffected.
	 */
	private static reset(): void;
	/**
	 * Resets the per hour rates of a single skill
	 *
	 * @param skill Skill to reset per hour rates
	 */
	resetSkillPerHour(skill: Skill): void;
	resetOverallPerHour(): void;
	/**
	 * Updates a skill with the current known XP.
	 * When the result of this operation is XpUpdateResult.UPDATED, the UI should be updated accordingly.
	 * This is to distinguish events that reload all the skill's current values (such as world hopping)
	 * and also first-login when the skills are not initialized (the start XP will be -1 in this case).
	 *
	 * @param skill       Skill to update
	 * @param currentXp   Current known XP for this skill
	 * @param goalStartXp Possible XP start goal
	 * @param goalEndXp   Possible XP end goal
	 * @return Whether or not the skill has been initialized, there was no change, or it has been updated
	 */
	updateSkill(skill: Skill, currentXp: number, goalStartXp: number, goalEndXp: number): XpUpdateResult;
				// Reinitialize with lesser currentXp, this can happen with negative xp lamps
	updateOverall(currentXp: number): void;
	private getCombatXPModifier(skill: Skill): number;
	/**
	 * Updates skill with average actions based on currently interacted NPC.
	 *
	 * @param skill     experience gained skill
	 * @param npc       currently interacted NPC
	 * @param npcHealth health of currently interacted NPC
	 */
	updateNpcExperience(skill: Skill, npc: NPC, npcHealth: number, xpModifier: number): void;
			// So we have a decent average off the bat, lets populate all values with what we see.
	/**
	 * Update number of actions performed for skill if last interacted NPC died.
	 * (eg. amount of kills in this case)
	 *
	 * @param skill     skill to update actions for
	 * @param npc       npc that just died
	 * @param npcHealth max health of npc that just died
	 * @return UPDATED in case new kill was successfully added
	 */
	updateNpcKills(skill: Skill, npc: NPC, npcHealth: number): XpUpdateResult;
	tick(skill: Skill, delta: number): void;
	tickOverall(delta: number): void;
	private tick(state: XpStateSingle, delta: number): void;
			// When pauseSkillAfter is 0, it is effectively disabled
	/**
	 * Forcefully initialize a skill with a known start XP from the current XP.
	 * This is used in resetAndInitState by the plugin. It should not result in showing the XP in the UI.
	 *
	 * @param skill     Skill to initialize
	 * @param currentXp Current known XP for the skill
	 */
	initializeSkill(skill: Skill, currentXp: number): void;
	initializeOverall(currentXp: number): void;
	isInitialized(skill: Skill): boolean;
	isOverallInitialized(): boolean;
	getSkill(skill: Skill): XpStateSingle;
	/**
	 * Obtain an immutable snapshot of the provided skill
	 * intended for use with the UI which operates on another thread
	 *
	 * @param skill Skill to obtain the snapshot for
	 * @return An immutable snapshot of the specified skill for this session since first login or last reset
	 */
	getSkillSnapshot(skill: Skill): XpSnapshotSingle;
	/**
	 * Obtain an immutable snapshot of the provided skill
	 * intended for use with the UI which operates on another thread
	 *
	 * @return An immutable snapshot of total information for this session since first login or last reset
	 */
	getTotalSnapshot(): XpSnapshotSingle;
}
}