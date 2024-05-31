/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="IndexDataBase.d.ts" />
/// <reference path="VarClientInt.d.ts" />
/// <reference path="VarClientStr.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="VarbitComposition.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="events/VarClientIntChanged.d.ts" />
/// <reference path="events/VarClientStrChanged.d.ts" />
/// <reference path="events/VarbitChanged.d.ts" />
/// <reference path="DevToolsFrame.d.ts" />
/// <reference path="VarType.d.ts" />
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
declare namespace net.runelite.client.plugins.devtools {
export class VarInspector extends DevToolsFrame
{
enum VarType
Map<Integer, String> VARBIT_NAMES;
Map<Integer, String> VARCINT_NAMES;
Map<Integer, String> VARCSTR_NAMES;
Map<Integer, String> VARP_NAMES;
Client client;
ClientThread clientThread;
EventBus eventBus;
Multimap<Integer, Integer> varbits;
VarInspector(Client client, ClientThread clientThread, EventBus eventBus) 
	private addVarLog(type: VarType, name: string, old: number, neew: number): void;
	private addVarLog(type: VarType, name: string, old: string, neew: string): void;
			// Cull very old stuff
	onVarbitChanged(varbitChanged: net.runelite.api.events.VarbitChanged): void;
		// Check varbits
				// Set the varbit so it doesn't show in the varp changes
				// However, some varbits share common bits, so we only do it in oldVarps2
				// Example: 4101 collides with 4104-4129
		// Check varps
	onVarClientIntChanged(e: net.runelite.api.events.VarClientIntChanged): void;
	onVarClientStrChanged(e: net.runelite.api.events.VarClientStrChanged): void;
	open(): void;
			// Build varp index -> varbit id map
	close(): void;
}
}