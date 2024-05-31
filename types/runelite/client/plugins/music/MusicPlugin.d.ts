/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="ParamID.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Preferences.d.ts" />
/// <reference path="ScriptEvent.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="SettingID.d.ts" />
/// <reference path="SoundEffectID.d.ts" />
/// <reference path="SpriteID.d.ts" />
/// <reference path="StructComposition.d.ts" />
/// <reference path="StructID.d.ts" />
/// <reference path="VarClientInt.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="annotations/Component.d.ts" />
/// <reference path="annotations/Varbit.d.ts" />
/// <reference path="annotations/Varp.d.ts" />
/// <reference path="events/AmbientSoundEffectCreated.d.ts" />
/// <reference path="events/AreaSoundEffectPlayed.d.ts" />
/// <reference path="events/BeforeRender.d.ts" />
/// <reference path="events/ClientTick.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/PostStructComposition.d.ts" />
/// <reference path="events/ScriptPreFired.d.ts" />
/// <reference path="events/SoundEffectPlayed.d.ts" />
/// <reference path="events/VarClientIntChanged.d.ts" />
/// <reference path="events/VolumeChanged.d.ts" />
/// <reference path="events/WidgetLoaded.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/JavaScriptCallback.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetConfig.d.ts" />
/// <reference path="widgets/WidgetPositionMode.d.ts" />
/// <reference path="widgets/WidgetType.d.ts" />
/// <reference path="Plugin.d.ts" />
/// <reference path="Slider.d.ts" />
/*
 * Copyright (c) 2019, Anthony Chen <https://github.com/achencoms>
 * Copyright (c) 2019, Adam <Adam@sigterm.info>
 * Copyright (c) 2020, Sean Dewar <https://github.com/seandewar>
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
declare namespace net.runelite.client.plugins.music {
( ) 
export class MusicPlugin extends Plugin
					// Reload the scene to remove ambient sounds
				// Reload the scene to reapply ambient sounds
			// Reset music filter on logout
			// Reset filter state as the widget has been reloaded.
			// It is too early here to call updateFilter()
		//Creation of the search and toggle status buttons
					// Reload the scene to reapply ambient sounds
		// Original music track list has a little offset
			// emulate [proc,settings_update_icon]
			// Set name + no tooltip; we have our own for ops
			// calling settings_init will do teardown for us
			// we have to set the var to our value so toplevel_redraw doesn't try to set
			// the volume to what vanilla has stored
				// Use the vanilla value
				// the varps are known by the engine and it requires they are stored so
				// 0 = max and 4 = muted
				// readd our 1 offset for unknown's place
			// muted with saved restore point
			// 0 is used for unknown, so config values are 1 away from zero
				// muted without a reset value
		// the side panel uses this too, so it has to run before they get shut down
			// [clientscript, settings_init]
}