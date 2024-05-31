/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="GrandExchangeOffer.d.ts" />
/// <reference path="GrandExchangeOfferState.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="VarClientStr.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/FocusChanged.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/GrandExchangeOfferChanged.d.ts" />
/// <reference path="events/GrandExchangeSearched.d.ts" />
/// <reference path="events/MenuEntryAdded.d.ts" />
/// <reference path="events/ScriptCallbackEvent.d.ts" />
/// <reference path="events/ScriptPostFired.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2019, Adam <Adam@sigterm.info>
 * Copyright (c) 2017, Robbie <https://github.com/rbbi>
 * Copyright (c) 2018, SomeoneWithAnInternetConnection
 * Copyright (c) 2020, Dennis <me@dennis.dev>
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
declare namespace net.runelite.client.plugins.grandexchange {
( ) 
export class GrandExchangePlugin extends Plugin
	/**
	 * Logic from {@link org.apache.commons.text.similarity.FuzzyScore}
	 */
		// fuzzy logic is case insensitive. We normalize the Strings to lower
		// case right from the start. Turning characters to lower case
		// via Character.toLowerCase(char) is unfortunately insufficient
		// as it does not accept a locale.
		// the position in the term which will be scanned next for potential
		// query character matches
					// we can leave the nested loop. Every character in the
					// query can match at most one character in the term.
		//CHECKSTYLE:OFF
		//CHECKSTYLE:ON
			// Trades are cleared by the client during LOGIN_SCREEN/HOPPING/LOGGING_IN, ignore those so we don't
			// clear the offer config.
			// new offer
			// desync
			// no change
		// Completed trades are either fully completed (qty == total) or partially complete
		// (qty > 0) and cancelled.
		// At the moment, if the user disables quick lookup, the input listener gets disabled. Thus, isHotKeyPressed()
		// should always return false when quick lookup is disabled.
		// Replace the default option with "Search ..." when holding alt
				// Don't show for view tabs and such
		// run after the bank tags plugin, and potentially anything
		// else which wants to consume the event and override
		// the search behavior
			// We do this so that for example the items "Anti-venom ..." are still at the top
			// when searching "anti venom"
		// Append to title
			// If we have item buy limit, append it
		// Sell offers include an additional fee text which doesn't fit, so we truncate the examine text
}