/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Perspective.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="HunterTrap.d.ts" />
/// <reference path="Color.d.ts" />
/*
 * Copyright (c) 2017, Robin Weymans <Robin.weymans@gmail.com>
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
declare namespace net.runelite.client.plugins.hunter {
/**
 * Represents the overlay that shows timers on traps that are placed by the
 * player.
 */
export class TrapOverlay extends Overlay
{
	/**
	 * The timer is low when only 25% is left.
	 */
Client client;
HunterPlugin plugin;
HunterConfig config;
Color colorOpen, colorOpenBorder;
Color colorEmpty, colorEmptyBorder;
Color colorFull, colorFullBorder;
Color colorTrans, colorTransBorder;
TrapOverlay(Client client, HunterPlugin plugin, HunterConfig config) 
	render(graphics: Graphics2D): Dimension;
	/**
	 * Updates the timer colors.
	 */
	updateConfig(): void;
	/**
	 * Iterates over all the traps that were placed by the local player, and
	 * draws a circle or a timer on the trap, depending on the trap state.
	 *
	 * @param graphics
	 */
	private drawTraps(graphics: Graphics2D): void;
	/**
	 * Draws a timer on a given trap.
	 *
	 * @param graphics
	 * @param trap The trap on which the timer needs to be drawn
	 * @param fill The fill color of the timer
	 * @param border The border color of the timer
	 * @param fillTimeLow The fill color of the timer when it is low
	 * @param borderTimeLow The border color of the timer when it is low
	 */
	private drawTimerOnTrap(graphics: Graphics2D, trap: HunterTrap, fill: Color, border: Color, fillTimeLow: Color, borderTimeLow: Color): void;
	/**
	 * Draws a timer on a given trap.
	 *
	 * @param graphics
	 * @param trap The trap on which the timer needs to be drawn
	 * @param fill The fill color of the timer
	 * @param border The border color of the timer
	 */
	private drawCircleOnTrap(graphics: Graphics2D, trap: HunterTrap, fill: Color, border: Color): void;
}
}