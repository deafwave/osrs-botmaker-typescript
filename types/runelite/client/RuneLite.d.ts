/// <reference path="../../java/index.d.ts" />
/// <reference path="../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="File> valueType().d.ts" />
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
export class RuneLite
			// This includes arguments from _JAVA_OPTIONS, which are parsed after command line flags and applied to
			// the global VM args
		// Load RuneLite or Vanilla client
			// Inject members into client
		// Start the applet
			// Client size must be set prior to init
		// Load the session so that the session profiles can be loaded next
		// Load user configuration
		// Tell the plugin manager if client is outdated or not
		// Update check requires ConfigManager to be ready before it runs
		// Load the plugins, but does not start them yet.
		// This will initialize configuration
		// Plugins have provided their config, so set default config
		// to main settings
		// Start client session
		// Initialize UI
		// Initialize Discord service
		// Register event listeners
			// Add core overlays
		// Start plugins
			// Setup cache
				// This has to be a network interceptor so it gets hit before the cache tries to store stuff
					// if the request 404'd we don't want to cache it because its probably temporary
		// Recursively copy path https://stackoverflow.com/a/50418060
	// region trust manager
		// javax.net.ssl.trustStoreType controls which keystore implementation the TrustStoreManager uses
		// restore old value
		// Use the Windows Trusted Root Certificate Authorities in addition to the bundled cacerts.
		// Corporations, schools, antivirus, and malware commonly install root certificates onto
		// machines for security or other reasons that are not present in the JRE certificate store.
		// Even though SSLContext.init() accepts TrustManager[], Sun's SSLContextImpl only picks the first
		// X509TrustManager and uses that.
							// accept if any of the trust managers accept the certificate
							// accept if any of the trust managers accept the certificate
		// the insecure trust manager trusts everything
	// endregion
},},},}