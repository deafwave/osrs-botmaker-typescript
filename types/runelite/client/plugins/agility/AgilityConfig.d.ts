/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="default boolean.d.ts" />
/// <reference path="default int.d.ts" />
/// <reference path="default Color.d.ts" />
/// <reference path="default Notification.d.ts" />
/*
 * Copyright (c) 2018, Cas <https://github.com/casvandongen>
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
declare namespace net.runelite.client.plugins.agility {
export interface AgilityConfig extends Config
{
( ) 
( ) 
	showClickboxes(): default boolean;
( ) 
	showLapCount(): default boolean;
( ) 
	lapTimeout(): default int;
( ) 
	lapsToLevel(): default boolean;
( ) 
	lapsPerHour(): default boolean;
( ) 
	getOverlayColor(): default Color;
( ) 
	highlightMarks(): default boolean;
( ) 
	getMarkColor(): default Color;
( ) 
	highlightPortals(): default boolean;
( ) 
	getPortalsColor(): default Color;
( ) 
	highlightShortcuts(): default boolean;
( ) 
	showTrapOverlay(): default boolean;
( ) 
	getTrapColor(): default Color;
( ) 
	notifyAgilityArena(): default Notification;
( ) 
	showAgilityArenaTimer(): default boolean;
( ) 
	highlightStick(): default boolean;
( ) 
	stickHighlightColor(): default Color;
( ) 
	highlightSepulchreNpcs(): default boolean;
( ) 
	sepulchreHighlightColor(): default Color;
( ) 
	highlightSepulchreObstacles(): default boolean;
( ) 
	highlightSepulchreSkilling(): default boolean;
}
}