/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="PluginPanel.d.ts" />
/// <reference path="ProfileChanged.d.ts" />
/// <reference path="RuneScapeProfileChanged.d.ts" />
/// <reference path="SessionOpen.d.ts" />
/// <reference path="SessionClose.d.ts" />
/// <reference path="ConfigProfile.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="File.d.ts" />
/// <reference path="ActionEvent.d.ts" />
/// <reference path="Component.d.ts" />
/*
 * Copyright (c) 2023 Adam <Adam@sigterm.info>
 * Copyright (c) 2023 Abex
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
declare namespace net.runelite.client.plugins.config {
export class ProfilePanel extends PluginPanel
{
ImageIcon RENAME_ICON;
ImageIcon RENAME_ACTIVE_ICON;
ImageIcon LINK_ICON;
ImageIcon LINK_ACTIVE_ICON;
ImageIcon SYNC_ICON;
ImageIcon SYNC_ACTIVE_ICON;
ConfigManager configManager;
ProfileManager profileManager;
SessionManager sessionManager;
ScheduledExecutorService executor;
DragAndDropReorderPane profilesList;
JButton addButton;
JButton importButton;
boolean active;
ProfilePanel( ConfigManager configManager, ProfileManager profileManager, SessionManager sessionManager, ScheduledExecutorService executor ) 
	onActivate(): void;
	onDeactivate(): void;
	private onProfileChanged(ev: ProfileChanged): void;
	private onRuneScapeProfileChanged(ev: RuneScapeProfileChanged): void;
	onSessionOpen(sessionOpen: SessionOpen): void;
	onSessionClose(sessionClose: SessionClose): void;
	private reload(): void;
	private reload(profiles: Array<ConfigProfile>): void;
export class ProfileCard extends JPanel
					// characters commonly forbidden in file names
						// add properties file extension
				// Ensure buttons do not expand beyond the intended card width; this would cause the activate button to
				// disappear off the right edge of the card.
	private static createProfile(): void;
	private deleteProfile(profile: ConfigProfile): void;
		// disabling sync causes the profile to be deleted
	private renameProfile(id: number, name: string): void;
				// maybe profile was removed by another client, reload the panel
	private switchToProfile(id: number): void;
				// maybe profile was removed by another client, reload the panel
			// change active profile
	private unsetRsProfileDefaultProfile(): void;
	private setRsProfileDefaultProfile(id: number): void;
						// maybe profile was removed by another client, reload the panel
	private exportProfile(profile: ConfigProfile, file: File): void;
			// save config to disk so the export copies the full config
	private importProfile(file: File): void;
	private cloneProfile(profile: ConfigProfile): void;
			// save config to disk so the clone copies the full config
				// copy config if present
	private toggleSync(event: ActionEvent, profile: ConfigProfile, sync: boolean): void;
	private handleDrag(component: Component): void;
			// Because the profilesList indexes don't include internal profiles, they can't be used to manipulate the
			// profile list directly. Just re-sort the profiles instead.
}
}