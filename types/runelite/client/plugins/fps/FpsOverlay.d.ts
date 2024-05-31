/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="events/FocusChanged.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="Color.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/*
 * Copyright (c) 2017, Levi <me@levischuck.com>
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
declare namespace net.runelite.client.plugins.fps {
/**
 * The built in FPS overlay has a few problems that this one does not have, most of all: it is distracting.
 * 1. The built in one also shows memory, which constantly fluctuates and garbage collects.
 * It is useful for devs profiling memory.
 * 2. The built in one shifts around constantly because it is not monospace.
 * This locks "FPS:" into one position (the far top right corner of the canvas),
 * along with a locked position for the FPS value.
 */
export class FpsOverlay extends Overlay
{
	// Local dependencies
FpsConfig config;
Client client;
	// Often changing values
FpsOverlay(FpsConfig config, Client client) 
	onFocusChanged(event: net.runelite.api.events.FocusChanged): void;
	private isEnforced(): boolean;
	private getFpsValueColor(): Color;
	render(graphics: Graphics2D): Dimension;
		// On resizable bottom line mode the logout button is at the top right, so offset the overlay
		// to account for it
}
}