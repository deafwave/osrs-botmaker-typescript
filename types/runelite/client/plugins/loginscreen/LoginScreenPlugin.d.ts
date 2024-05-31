/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="SpritePixels.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="Plugin implements KeyListener.d.ts" />
/// <reference path="ConfigChanged.d.ts" />
/// <reference path="ProfileChanged.d.ts" />
/// <reference path="KeyEvent.d.ts" />
/*
 * Copyright (c) 2017, Seth <Sethtroll3@gmail.com>
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
declare namespace net.runelite.client.plugins.loginscreen {
( ) 
export class LoginScreenPlugin extends Plugin implements KeyListener
{
Client client;
ClientThread clientThread;
LoginScreenConfig config;
KeyManager keyManager;
String usernameCache;
	private static startUp(): void;
	onConfigChanged(event: ConfigChanged): void;
	onGameStateChanged(event: net.runelite.api.events.GameStateChanged): void;
	onProfileChanged(profileChanged: ProfileChanged): void;
		// configuation for the account is available now, so update the username
	private applyUsername(): void;
			// Save it only once
	isEnabledOnLoginScreen(): boolean;
	keyTyped(e: KeyEvent): void;
	keyPressed(e: KeyEvent): void;
		// enable pasting on macOS with the Command (meta) key
					// Username/password form
							// Truncate data to maximum username length if necessary
					// Authenticator form
						// Truncate data to maximum OTP code length if necessary
	keyReleased(e: KeyEvent): void;
	private overrideLoginScreen(): void;
	private restoreLoginScreen(): void;
	private getFileSpritePixels(file: string): SpritePixels;
}
}