/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Friend.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="Ignore.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="Nameable.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="events/MenuEntryAdded.d.ts" />
/// <reference path="events/NameableNameChanged.d.ts" />
/// <reference path="events/RemovedFriend.d.ts" />
/// <reference path="events/ScriptCallbackEvent.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="Plugin.d.ts" />
/// <reference path="ConfigManager.d.ts" />
/// <reference path="FriendNotesConfig.d.ts" />
/*
 * Copyright (c) 2018, Rheon <https://github.com/Rheon-D>
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *     list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
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
 *
 */
declare namespace net.runelite.client.plugins.friendnotes {
( ) 
export class FriendNotesPlugin extends Plugin
{
ColorUtil.prependColorTag("(Limit %s Characters)", new Color(0, 0, 170)); 
Client client;
ConfigManager configManager;
OverlayManager overlayManager;
FriendNoteOverlay overlay;
ChatboxPanelManager chatboxPanelManager;
ClientThread clientThread;
FriendNotesConfig config;
ChatIconManager chatIconManager;
String currentlyLayouting;
	private static getConfig(configManager: ConfigManager): FriendNotesConfig;
	private startUp(): void;
	/**
	 * Set a friend note, or unset by passing a null/empty note.
	 */
	private setFriendNote(displayName: string, note: string): void;
	/**
	 * Get the friend note of a display name, or null if no friend note exists for it.
	 */
	private getFriendNote(displayName: string): string | null;
	/**
	 * Migrate a friend note to a new display name, and remove the previous one.
	 * If current name already has a note, or previous name had none, do nothing.
	 */
	private migrateFriendNote(currentDisplayName: string, prevDisplayName: string): void;
	/**
	 * Set the currently hovered display name, if a friend note exists for it.
	 */
	private setHoveredFriend(displayName: string): void;
	onMenuEntryAdded(event: net.runelite.api.events.MenuEntryAdded): void;
		// Look for "Message" on friends list
			// Friends have color tags
			// Build "Add Note" or "Edit Note" menu entry
					//Friends have color tags
					// Open the new chatbox input dialog
	onNameableNameChanged(event: net.runelite.api.events.NameableNameChanged): void;
			// Migrate a friend's note to their new display name
	onRemovedFriend(event: net.runelite.api.events.RemovedFriend): void;
		// Delete a friend's note if they are removed
	onScriptCallbackEvent(event: net.runelite.api.events.ScriptCallbackEvent): void;
	private rebuildFriendsList(): void;
	private rebuildIgnoreList(): void;
	private loadIcon(): void;
}
}