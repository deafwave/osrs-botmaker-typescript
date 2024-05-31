/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="events/AreaSoundEffectPlayed.d.ts" />
/// <reference path="events/SoundEffectPlayed.d.ts" />
/// <reference path="OverlayPanel.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/*
 * Copyright (c) 2018, WooxSolo <https://github.com/WooxSolo>
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
declare namespace net.runelite.client.plugins.devtools {
export class SoundEffectOverlay extends OverlayPanel
{
Client client;
DevToolsPlugin plugin;
SoundEffectOverlay(Client client, DevToolsPlugin plugin) 
	render(graphics: Graphics2D): Dimension;
	onSoundEffectPlayed(event: net.runelite.api.events.SoundEffectPlayed): void;
	onAreaSoundEffectPlayed(event: net.runelite.api.events.AreaSoundEffectPlayed): void;
		// Check if the player is within range to hear the sound
	private checkMaxLines(): void;
}
}