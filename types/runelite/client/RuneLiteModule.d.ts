/// <reference path="../../java/index.d.ts" />
/// <reference path="../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="hooks/Callbacks.d.ts" />
/// <reference path="AbstractModule.d.ts" />
/// <reference path="Applet.d.ts" />
/// <reference path="RuntimeConfig.d.ts" />
/// <reference path="ConfigManager.d.ts" />
/// <reference path="RuneLiteConfig.d.ts" />
/// <reference path="ChatColorConfig.d.ts" />
/// <reference path="HttpUrl.d.ts" />
/// <reference path="OkHttpClient.d.ts" />
/// <reference path="Gson.d.ts" />
/// <reference path="TelemetryClient.d.ts" />
/*
 * Copyright (c) 2016-2017, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client {
export class RuneLiteModule extends AbstractModule
{
OkHttpClient okHttpClient;
Supplier<Applet> clientLoader;
RuntimeConfigLoader configLoader;
boolean developerMode;
boolean safeMode;
boolean disableTelemetry;
File sessionfile;
String profile;
boolean insecureWriteCredentials;
boolean noupdate;
	private configure(): void;
		// bind runelite.properties & runtime config
	provideApplet(): Applet;
	provideClient(applet: Applet): Client;
	provideRuntimeConfig(): RuntimeConfig;
	provideConfig(configManager: ConfigManager): RuneLiteConfig;
	provideChatColorConfig(configManager: ConfigManager): ChatColorConfig;
	provideApiBase(s: string): HttpUrl;
	provideSession(s: string): HttpUrl;
	provideStaticBase(s: string): HttpUrl;
	provideWs(s: string): HttpUrl;
	providePluginHubBase(s: string): HttpUrl;
	provideTelemetry(okHttpClient: OkHttpClient, gson: Gson, apiBase: HttpUrl): TelemetryClient;
}
}