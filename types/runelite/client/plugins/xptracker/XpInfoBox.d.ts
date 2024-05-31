/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Experience.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="XpSnapshotSingle.d.ts" />
/// <reference path="XpPanelLabel.d.ts" />
/*
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
 * Copyright (c) 2018, Psikoi <https://github.com/psikoi>
 * Copyright (c) 2020, Anthony <https://github.com/while-loop>
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
export class XpInfoBox extends JPanel
{
	// Templates
String HTML_TOOL_TIP_TEMPLATE =
"<html>%s %s done<br/>"
+ "%s %s/hr<br/>"
+ "%s %s</html>";
String HTML_LABEL_TEMPLATE =
"<html><body style='color:%s'>%s<span style='color:white'>%s</span></body></html>";
	// Instance members
JComponent panel;
Skill skill;
	/* The tracker's wrapping container */
	/* Contains the skill icon and the stats panel */
	/* Contains all the skill information (exp gained, per hour, etc) */
XpTrackerConfig xpTrackerConfig;
XpInfoBox(XpTrackerPlugin xpTrackerPlugin, XpTrackerConfig xpTrackerConfig, Client client, JComponent panel, Skill skill, SkillIconManager iconManager) 
		// Create open xp tracker menu
		// Create reset menu
		// Create reset others menu
		// Create reset per hour menu
		// Create reset others menu
		// Create popup menu
		// forward mouse drag events to parent panel for drag and drop reordering
	reset(): void;
	update(updated: boolean, paused: boolean, xpSnapshotSingle: XpSnapshotSingle): void;
	private rebuildAsync(updated: boolean, skillPaused: boolean, xpSnapshotSingle: XpSnapshotSingle): void;
			// Update progress bar
			// Add intermediate level positions to progressBar
			// React to the skill state now being paused
			// React to the skill being unpaused (without update)
		// Update information labels
		// Update exp per hour separately, every time (not only when there's an update)
	static htmlLabel(panelLabel: XpPanelLabel, xpSnapshotSingle: XpSnapshotSingle): string;
	static htmlLabel(key: string, value: number): string;
	static htmlLabel(key: string, valueStr: string): string;
}
}