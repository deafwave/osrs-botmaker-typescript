/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Experience.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="WorldType.d.ts" />
/// <reference path="annotations/Varp.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/MenuEntryAdded.d.ts" />
/// <reference path="events/NpcDespawned.d.ts" />
/// <reference path="events/StatChanged.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2017, Cameron <moberg@tuta.io>
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
( ) 
export class XpTrackerPlugin extends Plugin
	/**
	 * Amount of EXP that must be gained for an update to be submitted.
	 */
		// Initialize the tracker & last xp if already logged in
			// LOGGED_IN is triggered between region changes too.
			// Check that the username changed or the world type changed.
				// Reset
				// xp is not available until after login is finished, so fetch it on the next gametick
				// Must be set from hitting the LOGGING_IN or HOPPING case below
			// Don't submit xptrack unless xp threshold is reached
	/**
	 * Adds an overlay to the canvas for tracking a specific skill.
	 *
	 * @param skill the skill for which the overlay should be added
	 */
	/**
	 * Removes an overlay from the overlayManager if it's present.
	 *
	 * @param skill the skill for which the overlay should be removed.
	 */
	/**
	 * Check if there is an overlay on the canvas for the skill.
	 *
	 * @param skill the skill which should have an overlay.
	 * @return true if the skill has an overlay.
	 */
	/**
	 * Reset internal state and re-initialize all skills with XP currently cached by the RS client
	 * This is called by the user manually clicking resetSkillState in the UI.
	 * It reloads the current skills from the client after resetting internal state.
	 */
	/**
	 * Throw out everything, the user has chosen a different account or world type.
	 * This resets both the internal state and UI elements
	 */
	/**
	 * Reset an individual skill with the client's current known state of the skill
	 * Will also clear the skill from the UI.
	 *
	 * @param skill Skill to reset
	 */
	/**
	 * Reset all skills except for the one provided
	 *
	 * @param skill Skill to ignore during reset
	 */
	/**
	 * Reset the xp gained since last reset of the skill
	 * Does not clear the skill from the UI.
	 *
	 * @param skill Skill to reset per hour rate
	 */
	/**
	 * Reset the xp gained since last reset of all skills including OVERALL
	 * Does not clear the UI.
	 */
			// This is the XP sync on login, wait until after login to begin counting
		// Also update the total experience
			// Check for xp gained while logged out
					// Offset start xp for offline gains
			// Initialize the tracker with the initial xp if not already initialized
					// goal exps are not necessary for skill initialization
			// Initialize the overall xp
		// Get skill from menu option, eg. "View <col=ff981f>Attack</col> guide"
		// Adjust unpause states
		// Rebuild calculated values like xp/hr in panel
}