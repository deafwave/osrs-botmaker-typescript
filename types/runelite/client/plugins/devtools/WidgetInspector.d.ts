/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="SpriteID.d.ts" />
/// <reference path="events/MenuEntryAdded.d.ts" />
/// <reference path="events/MenuOptionClicked.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/JavaScriptCallback.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetConfig.d.ts" />
/// <reference path="widgets/WidgetType.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="DevToolsFrame.d.ts" />
/// <reference path="ConfigChanged.d.ts" />
/// <reference path="DefaultMutableTreeNode.d.ts" />
/// <reference path="Color.d.ts" />
/*
 * Copyright (c) 2018 Abex
 * Copyright (c) 2017, Kronos <https://github.com/KronosDesign>
 * Copyright (c) 2017, Adam <Adam@sigterm.info>
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
export class WidgetInspector extends DevToolsFrame
{
float SELECTED_WIDGET_HUE;
Client client;
ClientThread clientThread;
DevToolsConfig config;
Provider<WidgetInspectorOverlay> overlay;
OverlayManager overlayManager;
JTree widgetTree;
WidgetInfoTableModel infoTableModel;
JCheckBox alwaysOnTop;
JCheckBox hideHidden;
DefaultMutableTreeNode root;
Widget selectedWidget;
WidgetInspector( Client client, ClientThread clientThread, WidgetInfoTableModel infoTableModel, DevToolsConfig config, EventBus eventBus, Provider<WidgetInspectorOverlay> overlay, OverlayManager overlayManager) 
	private onConfigChanged(ev: ConfigChanged): void;
	private refreshWidgets(): void;
	private addWidget(type: string, widget: net.runelite.api.widgets.Widget): DefaultMutableTreeNode;
	private setSelectedWidget(widget: net.runelite.api.widgets.Widget, updateTree: boolean): void;
	static getWidgetName(componentId: number): string;
			//Initialize map here, so it doesn't create the index
			//until it's actually needed.
	open(): void;
	close(): void;
	private removePickerWidget(): void;
	private addPickerWidget(): void;
	private onPickerDeselect(): void;
	private onMenuOptionClicked(ev: net.runelite.api.events.MenuOptionClicked): void;
	private onMenuEntryAdded(event: net.runelite.api.events.MenuEntryAdded): void;
	colorForWidget(index: number, length: number): Color;
	getWidgetForMenuOption(type: MenuAction, param0: number, param1: number): net.runelite.api.widgets.Widget;
	static getWidgetIdentifier(widget: net.runelite.api.widgets.Widget): string;
}
}