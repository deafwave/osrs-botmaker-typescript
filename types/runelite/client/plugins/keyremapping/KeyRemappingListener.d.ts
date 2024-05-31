/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="VarClientStr.d.ts" />
/// <reference path="KeyEvent.d.ts" />
/*
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
 * Copyright (c) 2018, Abexlry <abexlry@gmail.com>
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
declare namespace net.runelite.client.plugins.keyremapping {
export class KeyRemappingListener implements KeyListener
{
KeyRemappingPlugin plugin;
KeyRemappingConfig config;
Client client;
ClientThread clientThread;
	private keyTyped(e: KeyEvent): void;
	keyPressed(e: KeyEvent): void;
			// In addition to the above checks, the F-key remapping shouldn't
			// activate when dialogs are open which listen for number keys
			// to select options
			// Do not remap to space key when the options dialog is open, since the options dialog never
			// listens for space, and the remapped key may be one of keys it listens for.
				// arrow keys and fkeys do not have a character
					// If this key event has a valid key char then a key typed event may be received next,
					// we must block it
					// refocus chatbox
					// When exiting typing mode, block the escape key
					// so that it doesn't trigger the in-game hotkeys
					// Only lock chat on backspace when the typed text is now empty
	keyReleased(e: KeyEvent): void;
}
}