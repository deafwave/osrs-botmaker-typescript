/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="ScriptEvent.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="SoundEffectID.d.ts" />
/// <reference path="SpriteID.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/WidgetType.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/VarbitChanged.d.ts" />
/// <reference path="events/WidgetLoaded.d.ts" />
/// <reference path="widgets/JavaScriptCallback.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2018 Abex
 * Copyright (c) 2017, Tyler <https://github.com/tylerthardy>
 * Copyright (c) 2018, Yoav Ram <https://github.com/yoyo421>
 * Copyright (c) 2018, Infinitay <https://github.com/Infinitay>
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
declare namespace net.runelite.client.plugins.fairyring {
( ) 
export class FairyRingPlugin extends Plugin
		// The fairy hideout has both of these null, because its not the same as the rest of them
		// This has to happen because the only widget that gets hidden is the tli one
			// Check to make sure the list hasn't been rebuild since we were last her
			// Do this by making sure the list's dynamic children are the same as when we last saw them
			// Find all of the widgets that we care about, grouping by their Y value
		// Relayout the panel
}