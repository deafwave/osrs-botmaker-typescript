/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="EnumComposition.d.ts" />
/// <reference path="EnumID.d.ts" />
/// <reference path="Experience.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="IconID.d.ts" />
/// <reference path="IndexedSprite.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="MessageNode.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="WorldType.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/ScriptPostFired.d.ts" />
/// <reference path="events/VarbitChanged.d.ts" />
/// <reference path="events/WidgetLoaded.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2017. l2-
 * Copyright (c) 2017, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.chatcommands {
( ) 
export class ChatCommandsPlugin extends Plugin
		// !pets requires off thread pets access, so we just store a copy
				// modicons array might be replaced in between when we assign it and the callback,
				// so fetch modicons again
	/**
	 * Sets the list of owned pets for the local player
	 *
	 * @param petList The total list of owned pets for the local player
	 */
	/**
	 * Looks up the list of owned pets for the local player
	 */
			// CHECKSTYLE:OFF
			// CHECKSTYLE:ON
			// CHECKSTYLE:OFF
			// CHECKSTYLE:ON
				// The config service doesn't support keys with colons in them
				// Unset old TOB kc
				// Unset old story mode
			// We either already have the pb, or need to remember the boss for the upcoming pb
					// TOB team size isn't sent in the kill message, but can be computed from varbits
					// TOA team size isn't sent in the kill message, but can be computed from varbits
				// If a raid with a team size, only update the pb if it is lower than the existing pb
				// so that the pb is the overall lowest of any team size
		// If the seconds is an integer, it is ambiguous if the pb is a precise
		// pb or not. So we always show it without the trailing .00.
			// Most bosses send boss kill message, and then pb message, so we
			// use the remembered lastBossKill
			// Some bosses send the pb message, and then the kill message!
				// pattern has no team size
		// Adventure log - Counters
				// Each line is a separate static child
								// 3 player -> 3 players
								// 1 player -> Solo
								// Solo -> Solo
								// 2 players -> 2 players
				// Make sure that the player is looking in the All Pets tab of the collection log
	/**
	 * Looks up the pet list for the player who triggered !pets
	 *
	 * @param chatMessage The chat message containing the command.
	 * @param message     The chat message in string format
	 *                    <p>
	 */
		// Append pets that the player owns
	/**
	 * Submits the pet list for the local player
	 *
	 * @param chatInput The chat message containing the command.
	 * @param value     The chat message
	 */
	/**
	 * Looks up the item price and changes the original message to the
	 * response.
	 *
	 * @param chatMessage The chat message containing the command.
	 * @param message    The chat message
	 */
	/**
	 * Looks up the player skill and changes the original message to the
	 * response.
	 *
	 * @param chatMessage The chat message containing the command.
	 * @param message    The chat message
	 */
			// League points only exist on the league hiscores
	/**
	 * Gets correct lookup data for message
	 *
	 * @param chatMessage chat message
	 * @return hiscore lookup data
	 */
		// If we are sending the message then just use the local hiscore endpoint for the world
			// Public chat on a seasonal world is always seasonal or tournament hiscores, regardless of icon
		// Get ironman status from their icon in chat, this handles leagues too
	/**
	 * Compares the names of the items in the list with the original input.
	 * Returns the item if its name is equal to the original input or the
	 * shortest match if no exact match is found.
	 *
	 * @param items         List of items.
	 * @param originalInput String with the original input.
	 * @return Item which has a name equal to the original input.
	 */
		// Take a guess
	/**
	 * Looks up the ironman status of the local player. Does NOT work on other players.
	 *
	 * @return hiscore endpoint
	 */
			// leagues/dmmt or dmm
	/**
	 * Returns the ironman status based on the symbol in the name of the player.
	 *
	 * @param name player name
	 * @return hiscore endpoint
	 */
	/**
	 * Converts account type to hiscore endpoint
	 *
	 * @param accountType account type
	 * @return hiscore endpoint
	 */
			// gwd
			// dks
			// Chambers of Xeric
			// Chambers of Xeric Challenge Mode
			// Theatre of Blood
			// Theatre of Blood Entry Mode
			// Theatre of Blood Hard Mode
			// Tombs of Amascut
			// The Gauntlet
			// Corrupted Gauntlet
			// The Nightmare
			// Phosani's Nightmare
			// Hallowed Sepulchre
			// Prifddinas Agility Course
			// Shayzien Basic Agility Course
			// Shayzien Advanced Agility Course
			// Ape Atoll Agility
			// Draynor Village Rooftop Course
			// Al-Kharid Rooftop Course
			// Varrock Rooftop Course
			// Canifis Rooftop Course
			// Falador Rooftop Course
			// Seers' Village Rooftop Course
			// Pollnivneach Rooftop Course
			// Rellekka Rooftop Course
			// Ardougne Rooftop Course
			// Agility Pyramid
			// Barbarian Outpost
			// Brimhaven Agility Arena
			// Dorgesh-Kaan Agility Course
			// Gnome Stronghold Agility Course
			// Penguin Agility
			// Werewolf Agility
			// Skullball
			// Wilderness Agility Course
			// Jad challenge
			// Guardians of the Rift
			// Tempoross
			// Phantom Muspah
			// Desert Treasure 2 bosses
			// dt2 awakened variants
			// lunar chest variants
			// hunter rumour variants
			// longBossName the skill name to normalize from hiscore name
			// to our internal name (removing the colon)
}