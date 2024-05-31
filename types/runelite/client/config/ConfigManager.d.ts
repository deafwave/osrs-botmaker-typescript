/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/AccountHashChanged.d.ts" />
/// <reference path="events/PlayerChanged.d.ts" />
/// <reference path="events/WorldChanged.d.ts" />
/// <reference path="ConfigProfile.d.ts" />
/// <reference path="SessionOpen.d.ts" />
/// <reference path="SessionClose.d.ts" />
/// <reference path="ProfileManager.Lock.d.ts" />
/// <reference path="File.d.ts" />
/// <reference path="Profile.d.ts" />
/// <reference path="Config> T getConfig(Class<T> clazz).d.ts" />
/// <reference path="Class.d.ts" />
/// <reference path="T.d.ts" />
/// <reference path=".d.ts" />
/// <reference path="T extends Config.d.ts" />
/// <reference path="ConfigData.d.ts" />
/// <reference path="Type.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="ConfigDescriptor.d.ts" />
/// <reference path="Config> void setDefaultConfiguration(T proxy.d.ts" />
/// <reference path="boolean override).d.ts" />
/// <reference path="Enum>) type.d.ts" />
/// <reference path="str);.d.ts" />
/// <reference path="Serializer<?>> serializerClass = configSerializer.value();.d.ts" />
/// <reference path="ClientShutdown.d.ts" />
/// <reference path="String>.d.ts" />
/// <reference path="ConfigPatch.d.ts" />
/// <reference path="RuneScapeProfile.d.ts" />
/// <reference path="RuneScapeProfileType.d.ts" />
/// <reference path="synchronized RuneScapeProfile.d.ts" />
/// <reference path="RuneScapeProfileChanged.d.ts" />
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
{
String configProfileName;
EventBus eventBus;
Client client;
Gson gson;
ConfigClient configClient;
ProfileManager profileManager;
SessionManager sessionManager;
ConfigProfile profile;
ConfigProfile rsProfile;
ConfigData configProfile;
ConfigData rsProfileConfigProfile;
	// null => we need to make a new profile
String rsProfileKey;
ConfigManager(  String profile, ScheduledExecutorService scheduledExecutorService, EventBus eventBus, Client client, Gson gson, ConfigClient configClient, ProfileManager profileManager, SessionManager sessionManager ) 
	switchProfile(newProfile: ConfigProfile): void;
		// Ensure existing config is saved
		// sync the latest config revision from the server
	getRSProfileKey(): string;
	onSessionOpen(sessionOpen: SessionOpen): void;
		// special case for $rsprofile since it acts as an automatically-synced profile that is always merged
		// instead of overwritten. After a login send a PATCH for the offline $rsprofile to merge it with the
		// remote $rsprofile so that when $rsprofile is synced later it doesn't overwrite and lose the local
		// $rsprofile settings.
	onSessionClose(sessionClose: SessionClose): void;
		// remove the remote profiles
	toggleSync(profile: ConfigProfile, sync: boolean): void;
		// flush pending config changes first in the event the profile being
		// synced is the active profile.
				// sync the entire profile from disk
	renameProfile(profile: ConfigProfile, name: string): void;
	private migrate(): void;
	importAndMigrate(lock: ProfileManager.Lock, from: File, targetProfile: ConfigProfile): void;
	private static removeDuplicateProfiles(lock: ProfileManager.Lock): void;
	private static fixRsProfileName(lock: ProfileManager.Lock): void;
	load(): void;
			// synced rsprofile need to be fetched if outdated
			// --profile
				// select a config profile associated with the display name from the jagex launcher, if available
						// Calling getConfiguration before a profile has been loaded is usually invalid. Because
						// rsProfile is loaded above before this is run and we are only attempting to load rsProfile
						// keys, it is safe to be called.
					// if creating the initial default profile
			// synced profile need to be fetched if outdated
	private mergeRemoteProfiles(remoteProfiles: Array<Profile>): void;
				// convert the profile to a non-synced profile
	private syncRemote(lock: ProfileManager.Lock, profile: ConfigProfile, remoteProfiles: Array<Profile>): void;
			// $rsprofile is normally synced, even when logged out
				// remote configuration replaces local
	getConfig(clazz: Class<T>): <T extends Config> T;
	getConfigurationKeys(prefix: string): Array<string>;
	getRSProfileConfigurationKeys(group: string, profile: string, keyPrefix: string): Array<string>;
	static getWholeKey(groupName: string, profile: string, key: string): string;
	// region get configuration
	private getConfiguration(configData: ConfigData, groupName: string, rsProfile: string, key: string): string;
	getConfiguration(groupName: string, key: string): string;
	getRSProfileConfiguration(groupName: string, key: string): string;
	getConfiguration(groupName: string, profile: string, key: string): string;
	getConfiguration(groupName: string, key: string, clazz: Type): <T> T;
	getRSProfileConfiguration(groupName: string, key: string, clazz: Type): <T> T;
	getConfiguration(groupName: string, profile: string, key: string, type: Type): <T> T;
	// endregion
	// region set configuration
	private setConfiguration(configData: ConfigData, groupName: string, profile: string, key: string, value: string): void;
	setConfiguration(groupName: string, profile: string, key: string, value: string): void;
	setConfiguration(groupName: string, key: string, value: string): void;
	setConfiguration(groupName: string, profile: string, key: string, value: T): <T> void;
	setConfiguration(groupName: string, key: string, value: T): <T> void;
	setRSProfileConfiguration(groupName: string, key: string, value: T): <T> void;
	// endregion
	// region unset configuration
	private unsetConfiguration(configData: ConfigData, groupName: string, profile: string, key: string): void;
	unsetConfiguration(groupName: string, profile: string, key: string): void;
	unsetConfiguration(groupName: string, key: string): void;
	unsetRSProfileConfiguration(groupName: string, key: string): void;
	// endregion
	getConfigDescriptor(configurationProxy: Config): ConfigDescriptor;
	/**
	 * Initialize the configuration from the default settings
	 *
	 * @param proxy proxy instance implementing {@link Config}
	 */
	setDefaultConfiguration(proxy: T, override: boolean): <T extends Config> void;
			// only apply default configuration for methods which read configuration (0 args)
					// only unset if already set
				// This checks if it is set and is also unmarshallable to the correct type; so
				// we will overwrite invalid config values with the default
			// null and the empty string are treated identically in sendConfig and treated as an unset
			// If a config value defaults to "" and the current value is null, it will cause an extra
			// unset to be sent, so treat them as equal
	stringToObject(str: string, type: Type): Record<string, any>;
					// Guice holds references to all jitted types.
					// To allow class unloading, use a temporary child injector
					// and use it to get the instance, and cache it a weak map.
	objectToString(object: Record<string, any>): string | null;
		// run after plugins, in the event they save config on shutdown
( ) 
	private onClientShutdown(e: ClientShutdown): void;
	sendConfig(): void;
			// since we hold references to profiles outside of the lock, they are stale.
			// fetch the latest version.
	private static updateProfile(lock: ProfileManager.Lock, profile: ConfigProfile): ConfigProfile;
			// We just recreate it, with the same id, so that the ConfigData stays valid
			// I think this is okay because while the in memory config on this client will be outdated,
			// the version on disk and also the remote version will still be consistent
	private saveConfiguration(lock: ProfileManager.Lock, profile: ConfigProfile, data: ConfigData): void;
						// version on disk now mismatches the remote config. Set rev as -1 to force a reload
						// on next start.
	private static buildConfigPatch(profileName: string,  Map<String, patchChanges: String>): ConfigPatch;
		// Note profileName is only used for internal profiles and on initial sync, to prevent
		// clients fighting over profile names.
	getRSProfiles(): Array<RuneScapeProfile>;
	private findRSProfile(profiles: Array<RuneScapeProfile>, accountHash: number, type: RuneScapeProfileType, displayName: string, create: boolean): synchronized RuneScapeProfile;
		// generate the new key deterministically so if you "create" the same profile on 2 different clients it doesn't duplicate
	private updateRSProfile(): void;
	private onAccountHashChanged(ev: net.runelite.api.events.AccountHashChanged): void;
	private onWorldChanged(ev: net.runelite.api.events.WorldChanged): void;
	private onPlayerChanged(ev: net.runelite.api.events.PlayerChanged): void;
	private onRuneScapeProfileChanged(ev: RuneScapeProfileChanged): void;
					// change active profile
	/**
	 * Split a config key into (group, profile, key)
	 *
	 * @param key in form group.(rsprofile.profile.)?key
	 * @return an array of {group, profile, key}
	 */
	static splitKey(key: string): string[] | null;
			// all keys must have a group and key
}
}