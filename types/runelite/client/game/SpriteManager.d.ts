/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="SpritePixels.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/// <reference path="InfoBox.d.ts" />
/// <reference path="JButton.d.ts" />
/// <reference path="JLabel.d.ts" />
/// <reference path="SpriteOverride.d.ts" />
/*
 * Copyright (c) 2018 Abex
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
declare namespace net.runelite.client.game {
export class SpriteManager
{
Client client;
ClientThread clientThread;
InfoBoxManager infoBoxManager;
.maximumSize(128L) 
.expireAfterAccess(1, TimeUnit.HOURS) 
.build(); 
SpriteManager(Client client, ClientThread clientThread, InfoBoxManager infoBoxManager) 
	getSprite(archive: number, file: number): BufferedImage | null;
	getSpriteAsync(archive: number, file: number, user: Consumer<BufferedImage>): void;
				// Cache isn't loaded yet
	getSpriteAsync(archive: number, file: number, infoBox: InfoBox): void;
	/**
	 * Calls setIcon on c, ensuring it is repainted when this changes
	 */
	addSpriteTo(c: JButton, archive: number, file: number): void;
	/**
	 * Calls setIcon on c, ensuring it is repainted when this changes
	 */
	addSpriteTo(c: JLabel, archive: number, file: number): void;
	addSpriteOverrides(add: SpriteOverride[]): void;
	removeSpriteOverrides(remove: SpriteOverride[]): void;
}
}