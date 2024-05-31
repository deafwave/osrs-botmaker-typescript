/// <reference path="../../java/index.d.ts" />
/// <reference path="../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="File> valueType().d.ts" />
/// <reference path="hooks/Callbacks.d.ts" />
/// <reference path="AbstractModule.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="annotations/Component.d.ts" />
/// <reference path="annotations/Interface.d.ts" />
/// <reference path="annotations/VarCInt.d.ts" />
/// <reference path="annotations/VarCStr.d.ts" />
/// <reference path="annotations/Varbit.d.ts" />
/// <reference path="annotations/Varp.d.ts" />
/// <reference path="annotations/VisibleForDevtools.d.ts" />
/// <reference path="clan/ClanChannel.d.ts" />
/// <reference path="clan/ClanID.d.ts" />
/// <reference path="clan/ClanSettings.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="dbtable/DBRowConfig.d.ts" />
/// <reference path="hooks/DrawCallbacks.d.ts" />
/// <reference path="vars/AccountType.d.ts" />
/// <reference path="widgets/ItemQuantityMode.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetConfig.d.ts" />
/// <reference path="widgets/WidgetInfo.d.ts" />
/// <reference path="widgets/WidgetModalMode.d.ts" />
/// <reference path="worldmap/MapElementConfig.d.ts" />
/// <reference path="worldmap/WorldMap.d.ts" />
/// <reference path="GameEngine.d.ts" />
/// <reference path="MainBufferProvider.d.ts" />
/// <reference path="Renderable.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="events/BeforeRender.d.ts" />
/// <reference path="events/FakeXpDrop.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/PostClientTick.d.ts" />
/// <reference path="events/ScriptCallbackEvent.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/WidgetItem.d.ts" />
/// <reference path="worldmap/WorldMapRenderer.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="MessageNode.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="Varbits.d.ts" />
/*
 * Copyright (c) 2017, Tomas Slusny <slusnucky@gmail.com>
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
declare namespace net.runelite.client.chat {
export class ChatMessageManager
			// username recoloring for MODPRIVATECHAT, PRIVATECHAT and PRIVATECHATOUT
			// ChatMessageTypes is handled in the script callback event
			// Replace </col> tags in the message with the new color so embedded </col> won't reset the color
	// get the variable holding the chat color from the settings, from script4484
	/**
	 * Load all configured colors
	 */
		// Apply defaults
		//region opaque clanchat
		//endregion
		//Transparent Chat Colours
		//region transpaprent friends chat
		//endregion
		//region transparent clanchat
		//endregion
			// color is excluded from equals/hashCode on ChatColor
		// Do not send message if the player is on tutorial island
		// this updates chat cycle
		// Update the message with RuneLite additions
	/**
	 * Rebuild the message node message from the RuneLite format message.
	 * DEPRECATED: no longer needs to be called.
	 *
	 * @param messageNode message node
	 */
/** @deprecated */
					// The default ChatColors for private have the chatbox text color, not the split chat color,
					// and the split chat color is set by widget color, so just use </col>. The in-game
					// private chat color doesn't apply to split chat either so using that here also is incorrect.
					//
					// If we recolor the final message later we replace </col> with the desired color in
					// colorChatMessage()
						// Apply configured color from game settings, if set
				// Replace custom formatting with actual colors
},},},},},},},},},},},},},},},},},},},},},},},}