/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="events/FocusChanged.d.ts" />
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
 * FPS Draw Listener runs after the canvas has been painted with the buffered image (unused in this plugin)
 * It specifically is designed only to pause when RS decides to paint the canvas, after the canvas has been painted.
 * The RS client operates at 50 cycles happen per second in the RS Client with higher priority than draws per second.
 * For high powered computers, drawing is limited by client cycles, so 50 is the max FPS observed.
 * After running a game cycle and a draw operation, the RS client burns the rest of the time with a nano timer.
 * For low powered computers, the RS client is often throttled by the hardware or OS and draws at 25-30 fps.
 * The nano timer is not used in this scenario.
 * Instead to catch up the RS client runs several cycles before drawing, thus maintaining 50 cycles / second.
 * <p>
 * Enforcing FPS in the draw code does not impact the client engine's ability to run including its audio,
 * even when forced to 1 FPS with this plugin.
 */
export class FpsDrawListener implements Runnable
{
FpsConfig config;
	// Often changing values
	// Working set
FpsDrawListener(FpsConfig config) 
	reloadConfig(): void;
	onFocusChanged(event: net.runelite.api.events.FocusChanged): void;
	private isEnforced(): boolean;
	run(): void;
		// We can't trust client.getFPS to get frame-perfect FPS knowledge
		// If we do try to use client.getFPS, we will end up oscillating
		// So we rely on currentTimeMillis which is occasionally cached by the JVM unlike nanotime
		// Its caching will not cause oscillation as it is granular enough for our uses here
		// We take a sampling approach because sometimes the game client seems to repaint
		// after only running 1 game cycle, and then runs repaint again after running 30 cycles
		// Sleep delay is a moving target due to the nature of how and when the engine
		// decides to run cycles.
		// This will also keep us safe from time spent in plugins conditionally
		// as some plugins and overlays are only appropriate in some game areas
				// Can happen on shutdown
}
}