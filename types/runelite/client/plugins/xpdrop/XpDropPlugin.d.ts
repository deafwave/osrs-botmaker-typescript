/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="EnumComposition.d.ts" />
/// <reference path="EnumID.d.ts" />
/// <reference path="Prayer.d.ts" />
/// <reference path="ScriptID/XPDROPS_SETDROPSIZE.d.ts" />
/// <reference path="ScriptID/XPDROP_DISABLED.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="SpriteID.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/ScriptPreFired.d.ts" />
/// <reference path="events/StatChanged.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2018, Cameron <https://github.com/noremac201>, SoyChai <https://github.com/SoyChai>
 * Copyright (c) 2023, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.xpdrop {
( ) 
export class XpDropPlugin extends Plugin
		// RP
			// This runs prior to the proc being invoked, so the arguments are still on the stack.
			// Grab the first argument to the script.
		// child 0 is the xpdrop text, everything else are sprite ids for skills
		// Check MELEE last to avoid defensive casting being categorized as melee
			// keep only text
		// If an xp drop was created this tick, reset the counter
}