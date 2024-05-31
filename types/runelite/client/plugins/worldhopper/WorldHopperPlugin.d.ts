/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="ChatPlayer.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="EnumID.d.ts" />
/// <reference path="Friend.d.ts" />
/// <reference path="FriendsChatManager.d.ts" />
/// <reference path="FriendsChatMember.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="NameableContainer.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="clan/ClanChannel.d.ts" />
/// <reference path="clan/ClanChannelMember.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/CommandExecuted.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/MenuEntryAdded.d.ts" />
/// <reference path="events/VarbitChanged.d.ts" />
/// <reference path="events/WorldListLoad.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2017, Adam <Adam@sigterm.info>
 * Copyright (c) 2018, Lotto <https://github.com/devLotto>
 * Copyright (c) 2019, gregg1494 <https://github.com/gregg1494>
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
declare namespace net.runelite.client.plugins.worldhopper {
( ) 
export class WorldHopperPlugin extends Plugin
		// The plugin has its own executor for pings, as it blocks for a long time
		// populate initial world list
		// Run the first-run ping
		// Give some initial delay - this won't run until after pingInitialWorlds finishes anyway
			// Don't add entry if user is offline
				// Disable Hop-to a PVP world from a regular world
		// If the player has disabled the side bar plugin panel, do not update the UI
	/**
	 * This method ONLY updates the list's UI, not the actual world list and data it displays.
	 */
		// Make it so you always hop out of PVP and high risk worlds
		// Don't regard these worlds as a type that must be hopped between
			/*
			 */
			// Check world region if filter is enabled
			// Treat LMS world like casual world
			// Avoid switching to near-max population worlds, as it will refuse to allow the hop if the world is full
				// offline world
			// Break out if we've found a good world to hop to
		// Don't try to hop if the world doesn't exist
		// this is called from the panel, on edt
			// on the login screen we can just change the world by ourselves
		// Search friends chat members first, because we can always get their world;
		// friends worlds may be hidden if they have private off. (#5679)
	/**
	 * Ping all worlds. This takes a long time and is only run on first run.
	 */
	/**
	 * Ping the next world
	 */
			// Wrap back around
		// If we are displaying the ping overlay, there is a separate scheduled task for the current world
	/**
	 * Ping the current world for the ping overlay
	 */
		// There is no reason to ping the current world if not logged in, as the overlay doesn't draw
}