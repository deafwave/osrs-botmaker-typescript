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
/*
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
declare namespace net.runelite.client.config {
export class ConfigManager
	// null => we need to make a new profile
		// Ensure existing config is saved
		// sync the latest config revision from the server
		// special case for $rsprofile since it acts as an automatically-synced profile that is always merged
		// instead of overwritten. After a login send a PATCH for the offline $rsprofile to merge it with the
		// remote $rsprofile so that when $rsprofile is synced later it doesn't overwrite and lose the local
		// $rsprofile settings.
		// remove the remote profiles
		// flush pending config changes first in the event the profile being
		// synced is the active profile.
				// sync the entire profile from disk
			// synced rsprofile need to be fetched if outdated
			// --profile
				// select a config profile associated with the display name from the jagex launcher, if available
						// Calling getConfiguration before a profile has been loaded is usually invalid. Because
						// rsProfile is loaded above before this is run and we are only attempting to load rsProfile
						// keys, it is safe to be called.
					// if creating the initial default profile
			// synced profile need to be fetched if outdated
				// convert the profile to a non-synced profile
			// $rsprofile is normally synced, even when logged out
				// remote configuration replaces local
	// region get configuration
	// endregion
	// region set configuration
	// endregion
	// region unset configuration
	// endregion
	/**
	 * Initialize the configuration from the default settings
	 *
	 * @param proxy proxy instance implementing {@link Config}
	 */
			// only apply default configuration for methods which read configuration (0 args)
					// only unset if already set
				// This checks if it is set and is also unmarshallable to the correct type; so
				// we will overwrite invalid config values with the default
			// null and the empty string are treated identically in sendConfig and treated as an unset
			// If a config value defaults to "" and the current value is null, it will cause an extra
			// unset to be sent, so treat them as equal
					// Guice holds references to all jitted types.
					// To allow class unloading, use a temporary child injector
					// and use it to get the instance, and cache it a weak map.
		// run after plugins, in the event they save config on shutdown
			// since we hold references to profiles outside of the lock, they are stale.
			// fetch the latest version.
			// We just recreate it, with the same id, so that the ConfigData stays valid
			// I think this is okay because while the in memory config on this client will be outdated,
			// the version on disk and also the remote version will still be consistent
						// version on disk now mismatches the remote config. Set rev as -1 to force a reload
						// on next start.
		// Note profileName is only used for internal profiles and on initial sync, to prevent
		// clients fighting over profile names.
		// generate the new key deterministically so if you "create" the same profile on 2 different clients it doesn't duplicate
					// change active profile
	/**
	 * Split a config key into (group, profile, key)
	 *
	 * @param key in form group.(rsprofile.profile.)?key
	 * @return an array of {group, profile, key}
	 */
			// all keys must have a group and key
},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},},}