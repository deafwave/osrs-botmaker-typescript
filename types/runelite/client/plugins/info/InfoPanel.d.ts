/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="PluginPanel.d.ts" />
/// <reference path="ImageIcon.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="Runnable.d.ts" />
/// <reference path="SessionOpen.d.ts" />
/// <reference path="SessionClose.d.ts" />
/*
 * Copyright (c) 2018 Abex
 * Copyright (c) 2018, Psikoi <https://github.com/psikoi>
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
declare namespace net.runelite.client.plugins.info {
export class InfoPanel extends PluginPanel
{
ImageIcon ARROW_RIGHT_ICON;
ImageIcon GITHUB_ICON;
ImageIcon DISCORD_ICON;
ImageIcon PATREON_ICON;
ImageIcon WIKI_ICON;
JPanel actionsContainer;
Client client;
EventBus eventBus;
SessionManager sessionManager;
ScheduledExecutorService executor;
String runeliteVersion;
String githubLink;
String discordInvite;
String patreonLink;
String wikiLink;
	private static init(): void | null;
	deinit(): void;
	/**
	 * Builds a link panel with a given icon, text and url to redirect to.
	 */
	private static buildLinkPanel(icon: ImageIcon, topText: string, bottomText: string, url: string): JPanel;
	/**
	 * Builds a link panel with a given icon, text and callable to call.
	 */
	private static buildLinkPanel(icon: ImageIcon, topText: string, bottomText: string, callback: Runnable): JPanel;
	private updateLoggedIn(): void;
	private static htmlLabel(key: string, value: string): string;
	onSessionOpen(sessionOpen: SessionOpen): void;
	onSessionClose(e: SessionClose): void;
}
}