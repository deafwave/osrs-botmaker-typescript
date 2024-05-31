/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="SpriteID.d.ts" />
/// <reference path="VarClientStr.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="annotations/Component.d.ts" />
/// <reference path="events/ActorDeath.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/ScriptCallbackEvent.d.ts" />
/// <reference path="events/ScriptPreFired.d.ts" />
/// <reference path="events/WidgetLoaded.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2018, Lotto <https://github.com/devLotto>
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
declare namespace net.runelite.client.plugins.screenshot {
( ) 
export class ScreenshotPlugin extends Plugin
				// level up widget gets loaded prior to the text being set, so wait until the next tick
	/**
	 * Parses skill name and level from levelup component.
	 *
	 * @return Shortened string in the format "Skill(99)"
	 */
	/**
	 * Parses the passed quest completion dialog text into a shortened string for filename usage.
	 *
	 * @return Shortened string in the format "Quest(The Corsair Curse)"
	 */
		// "You have completed The Corsair Curse!"
		// "'One Small Favour' completed!"
	/**
	 * Parses the Barbarian Assault high gamble reward dialog text into a shortened string for filename usage.
	 *
	 * @return Shortened string in the format "High Gamble(100)"
	 */
	/**
	 * Parses a combat achievement success chat message into a filename-safe string.
	 *
	 * @param text A received chat message which may or may not be from completing a combat achievement.
	 * @return A formatted string of the achieved combat task name, or the empty string if the passed message
	 *         is not a combat achievement completion message.
	 */
	/**
	 * Saves a screenshot of the client window to the screenshot folder as a PNG,
	 * and optionally uploads it to an image-hosting service.
	 *
	 * @param fileName Filename to use, without file extension.
	 * @param subDir   Subdirectory to store the captured screenshot in.
	 */
			// Prevent the screenshot from being captured
			// This callback is on the game thread, move to executor thread
			// just simply copy the image
}