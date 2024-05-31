/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="WorldType.d.ts" />
/// <reference path="PluginPanel.d.ts" />
/// <reference path="Set.d.ts" />
/// <reference path="XpSnapshotSingle.d.ts" />
/*
 * Copyright (c) 2017, Cameron <moberg@tuta.io>
 * Copyright (c) 2018, Psikoi <https://github.com/psikoi>
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
export class XpPanel extends PluginPanel
{
	/* This displays the "No exp gained" text */
XpPanel(XpTrackerPlugin xpTrackerPlugin, XpTrackerConfig xpTrackerConfig, Client client, SkillIconManager iconManager) 
		// Create open xp tracker menu
		// Create reset all menu
		// Create reset all per hour menu
		// Create pause all menu
		// Create unpause all menu
		// Create popup menu
	static buildXpTrackerUrl(worldTypes: Set<WorldType>, player: Actor, skill: Skill): string;
	resetAllInfoBoxes(): void;
	resetSkill(skill: Skill): void;
	updateSkillExperience(updated: boolean, paused: boolean, skill: Skill, xpSnapshotSingle: XpSnapshotSingle): void;
	updateTotal(xpSnapshotTotal: XpSnapshotSingle): void;
		// if player has gained exp and hasn't switched displays yet, hide error panel and show overall info
	private rebuildAsync(xpSnapshotTotal: XpSnapshotSingle): void;
}
}