/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="dbtable/DBTableID.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="SoundEffectID.d.ts" />
/// <reference path="SpriteID.d.ts" />
/// <reference path="VarClientInt.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="events/ScriptCallbackEvent.d.ts" />
/// <reference path="events/ScriptPostFired.d.ts" />
/// <reference path="events/VarClientIntChanged.d.ts" />
/// <reference path="events/VarbitChanged.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/JavaScriptCallback.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetPositionMode.d.ts" />
/// <reference path="widgets/WidgetType.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2019 Spudjb <https://github.com/spudjb>
 * Copyright (c) 2022 Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.questlist {
( ) 
export class QuestListPlugin extends Plugin
{
Client client;
ChatboxPanelManager chatboxPanelManager;
ClientThread clientThread;
ChatboxTextInput searchInput;
Widget questSearchButton;
	private static startUp(): void;
	private shutDown(): void;
	onScriptPostFired(event: net.runelite.api.events.ScriptPostFired): void;
	private addQuestButtons(): void;
	onVarbitChanged(varbitChanged: net.runelite.api.events.VarbitChanged): void;
	onVarClientIntChanged(varClientIntChanged: net.runelite.api.events.VarClientIntChanged): void;
	onScriptCallbackEvent(scriptCallbackEvent: net.runelite.api.events.ScriptCallbackEvent): void;
	private isOnQuestTab(): boolean;
	private isChatboxOpen(): boolean;
	private closeSearch(): void;
	private openSearch(): void;
	private redrawQuests(): void;
}
}