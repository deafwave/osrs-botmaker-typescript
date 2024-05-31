/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="events/ScriptPostFired.d.ts" />
/// <reference path="events/ScriptPreFired.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="DevToolsFrame.d.ts" />
/// <reference path="DefaultMutableTreeNode.d.ts" />
/// <reference path="ScriptTreeNode.d.ts" />
/// <reference path="ListState.d.ts" />
/// <reference path="JSpinner.d.ts" />
/// <reference path="Set.d.ts" />
/// <reference path="Integer.d.ts" />
/*
 * Copyright (c) 2020, Trevor <https://github.com/Trevor159>
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
export class ScriptInspector extends DevToolsFrame
{
	// These scripts are the only ones that fire every client tick regardless of location.
Client client;
EventBus eventBus;
ConfigManager configManager;
ScriptTreeNode currentNode;
int lastTick;
Set<Integer> blacklist;
Set<Integer> highlights;
JList jList;
DefaultListModel listModel;
enum ListState
export class ScriptTreeNode extends DefaultMutableTreeNode
ScriptInspector(Client client, EventBus eventBus, ConfigManager configManager) 
	private onScriptPreFired(event: net.runelite.api.events.ScriptPreFired): void;
	onScriptPostFired(event: net.runelite.api.events.ScriptPostFired): void;
	open(): void;
	close(): void;
	private addScriptLog(treeNode: ScriptTreeNode): void;
			// Cull very old stuff
	private changeState(state: ListState): void;
	private addToSet(spinner: JSpinner): void;
	private removeSelectedFromSet(): void;
	private refreshList(): void;
	private getSet(): Set<Integer>;
	private findHighlightPathNode(node: ScriptTreeNode): ScriptTreeNode;
}
}