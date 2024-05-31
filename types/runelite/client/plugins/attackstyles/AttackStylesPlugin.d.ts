/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="EnumID.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="ParamID.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="StructComposition.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/ScriptPostFired.d.ts" />
/// <reference path="events/VarbitChanged.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2017, honeyhoney <https://github.com/honeyhoney>
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
declare namespace net.runelite.client.plugins.attackstyles {
( ) 
export class AttackStylesPlugin extends Plugin
	// Weapon type, component, hidden
	/**
	 * Hide or unhide widgets depending on widgetsToHide
	 */
			// this is required because the widgets need to be hidden prior to interface tick, which is soon after this,
			// and before the client tick event.
			// from script4525
			// Even though the client has 5 attack styles for Staffs, only attack styles 0-4 are used, with an additional
			// casting mode set for defensive casting
		// from script4525
				// "Other" is used for no style
			// "Defensive" is used for Defensive and also Defensive casting
	// update the 'warned skill selected' flag and also rebuild the hide widgets table
		// Iterate over attack styles
			// Remove appropriate combat option
					// Magic staves defensive casting mode
}