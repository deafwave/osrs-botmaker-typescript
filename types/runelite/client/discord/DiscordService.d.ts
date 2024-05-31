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
/// <reference path="ScriptID.d.ts" />
/// <reference path="VarClientStr.d.ts" />
/// <reference path="events/CommandExecuted.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="events/AccountHashChanged.d.ts" />
/// <reference path="events/PlayerChanged.d.ts" />
/// <reference path="events/WorldChanged.d.ts" />
/// <reference path="Config> T getConfig(Class<T> clazz).d.ts" />
/// <reference path="Config> void setDefaultConfiguration(T proxy.d.ts" />
/// <reference path="boolean override).d.ts" />
/// <reference path="Enum>) type.d.ts" />
/// <reference path="str);.d.ts" />
/// <reference path="Serializer<?>> serializerClass = configSerializer.value();.d.ts" />
/// <reference path="Serializer<?>> value();.d.ts" />
/// <reference path="Keybind.d.ts" />
/// <reference path="WorldType.d.ts" />
/*
 * Copyright (c) 2018, Tomas Slusny <slusnucky@gmail.com>
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
declare namespace net.runelite.client.discord {
export class DiscordService implements AutoCloseable
	// Hold a reference to the event handlers to prevent the garbage collector from deleting them
	/**
	 * Initializes the Discord service, sets up the event handlers and starts worker thread that will poll discord
	 * events every 2 seconds.
	 * Before closing the application it is recommended to call {@link #close()}
	 */
	/**
	 * Shuts the RPC connection down.
	 * If not currently connected, this does nothing.
	 */
	/**
	 * Updates the currently set presence of the logged in user.
	 * <br>Note that the client only updates its presence every <b>15 seconds</b>
	 * and queues all additional presence updates.
	 *
	 * @param discordPresence The new presence to use
	 */
	/**
	 * Clears the currently set presence.
	 */
	/**
	 * Responds to the given user with the specified reply type.
	 *
	 * @param userId The id of the user to respond to
	 * @param reply  The reply type
	 * @see DiscordRPC#DISCORD_REPLY_NO
	 * @see DiscordRPC#DISCORD_REPLY_YES
	 * @see DiscordRPC#DISCORD_REPLY_IGNORE
	 */
},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},}