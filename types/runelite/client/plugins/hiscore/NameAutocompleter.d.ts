/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Friend.d.ts" />
/// <reference path="FriendsChatManager.d.ts" />
/// <reference path="Nameable.d.ts" />
/// <reference path="NameableContainer.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="clan/ClanID.d.ts" />
/// <reference path="clan/ClanMember.d.ts" />
/// <reference path="clan/ClanSettings.d.ts" />
/// <reference path="KeyEvent.d.ts" />
/// <reference path="JTextComponent.d.ts" />
/*
 * Copyright (c) 2018, John Pettenger
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
declare namespace net.runelite.client.plugins.hiscore {
export class NameAutocompleter implements KeyListener
{
	/**
	 * Non-breaking space character.
	 */
	/**
	 * Character class for characters that cannot be in an RSN.
	 */
Client client;
HiscoreConfig hiscoreConfig;
	/**
	 * The name currently being autocompleted.
	 */
String autocompleteName;
	/**
	 * Pattern for the name currently being autocompleted.
	 */
Pattern autocompleteNamePattern;
NameAutocompleter(Client client, HiscoreConfig hiscoreConfig) 
	keyPressed(e: KeyEvent): void;
	keyReleased(e: KeyEvent): void;
	keyTyped(e: KeyEvent): void;
		// Only autocomplete if the selection end is at the end of the text.
		// Character to be inserted at the selection start.
		// Don't attempt to autocomplete if the name is invalid.
		// This condition is also true when the user presses a key like backspace.
		// Check if we are already autocompleting.
					// Insert the character and move the selection.
				// Prevent default behavior.
	private newAutocomplete(e: KeyEvent): void;
			// Assert this.autocompleteName != null
	private findAutocompleteName(nameStart: string): boolean;
		// Pattern to match names that start with nameStart.
		// Allows spaces to be represented as common whitespaces, underscores,
		// hyphens, or non-breaking spaces.
		// Matching non-breaking spaces is necessary because the API
		// returns non-breaking spaces when a name has whitespace.
		// Search all previous successful queries
		// Search friends if previous searches weren't matched
		// Search friends chat if a friend wasn't found
		// Search clans
		// Search cached players if a friend wasn't found
	addToSearchHistory(name: string): void;
	private isExpectedNext(input: JTextComponent, nextChar: string): boolean;
}
}