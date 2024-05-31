/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="ItemContainer.d.ts" />
/// <reference path="KeyCode.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="ScriptEvent.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="SoundEffectID.d.ts" />
/// <reference path="SpriteID.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="events/DraggingWidgetChanged.d.ts" />
/// <reference path="events/MenuEntryAdded.d.ts" />
/// <reference path="events/MenuOptionClicked.d.ts" />
/// <reference path="events/ScriptPreFired.d.ts" />
/// <reference path="events/WidgetClosed.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/ItemQuantityMode.d.ts" />
/// <reference path="widgets/JavaScriptCallback.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetConfig.d.ts" />
/// <reference path="widgets/WidgetSizeMode.d.ts" />
/// <reference path="widgets/WidgetType.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="TagTab.d.ts" />
/*
 * Copyright (c) 2018, Tomas Slusny <slusnucky@gmail.com>
 * Copyright (c) 2018, Ron Young <https://github.com/raiyni>
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
declare namespace net.runelite.client.plugins.banktags.tabs {
export class TabInterface
{
Client client;
ClientThread clientThread;
ItemManager itemManager;
TagManager tagManager;
TabManager tabManager;
ChatboxPanelManager chatboxPanelManager;
BankTagsConfig config;
BankSearch bankSearch;
ChatboxItemSearch searchProvider;
ChatMessageManager chatMessageManager;
boolean enabled;
TagTab activeTab;
boolean tagTabActive;
int tabScrollOffset;
int tabCount;
Widget parent;
Widget scrollComponent;
Widget upButton;
Widget downButton;
Widget newTab;
TabInterface( Client client, ClientThread clientThread, ItemManager itemManager, TagManager tagManager, TabManager tabManager, ChatboxPanelManager chatboxPanelManager, BankTagsConfig config, BankSearch bankSearch, ChatboxItemSearch searchProvider, ChatMessageManager chatMessageManager ) 
	isActive(): boolean;
	onScriptPreFired(event: net.runelite.api.events.ScriptPreFired): void;
					// this is probably the "Use Tag Tabs" option being toggled off when the bank is open
			// from [proc,bankmain_size_check] - resize tab layer when the bank is resized
				// This is right before the bank is resized, so wait until after so the computed tab layer size is right
				// close the active tab when search is pressed
			// Since we apply tag tab search filters even when the bank is not in search mode,
			// bankkmain_build will reset the bank title to "The Bank of Gielinor". So apply our
			// own title.
				// Tag tab tab has its own title since it isn't a real tag
			// Recompute scroll size. Only required for tag tab tab and with remove separators, to remove the
			// space that the separators took.
				// New scroll height for if_setscrollsize
				// This is prior to bankmain_finishbuilding running, so the arguments are still on the stack. Overwrite
				// argument int12 (7 from the end) which is the height passed to if_setscrollsize
	onWidgetClosed(event: net.runelite.api.events.WidgetClosed): void;
	private init(): void;
			// the server will resync the last opened vanilla tab when the bank is opened
		// Move equipment button to the titlebar
			// the bank item count is 3 widgets
	deinit(): void;
	private removeSeparators(): void;
		// sort the child array as the items are not in the displayed order
				// calculate correct item position as if this was a normal tab
			// separator line or tab text
	private handleDeposit(event: net.runelite.api.events.MenuOptionClicked, inventory: boolean): void;
	private handleNewTab(event: ScriptEvent): void;
	private handleTagTab(event: ScriptEvent): void;
	handleAdd(event: net.runelite.api.events.MenuEntryAdded): void;
	onMenuOptionClicked(event: net.runelite.api.events.MenuOptionClicked): void;
		// Close the chatbox input when clicking on things in the bank, to mimic how actions like withdrawing
		// items or changing tabs close the withdraw-x input or the bank search input.
			// Add "remove" menu entry to all items in bank while tab is selected
	onDraggingWidgetChanged(event: net.runelite.api.events.DraggingWidgetChanged): void;
		// Returning early or nulling the drag release listener has no effect. Hence, we need to
		// null the draggedOnWidget instead.
		// is dragging widget and mouse button released
				// Tag an item dragged on a tag tab
				// Reorder tag tabs
				// Rebuild to avoid the dragged tab being left over due to it being excluded from being hidden when layouted
	private moveTagTab(source: net.runelite.api.widgets.Widget, dest: net.runelite.api.widgets.Widget): void;
	private addTabActions(w: net.runelite.api.widgets.Widget): void;
	private addTabOptions(w: net.runelite.api.widgets.Widget): void;
	private loadTab(tag: string): void;
	private deleteTab(tag: string): void;
	private renameTab(oldTag: string): void;
	private scrollTick(direction: number): void;
		// This ensures that dragging on scroll buttons does not scroll too fast
	private scrollTab(d: number): void;
	private openNamedTag(name: string, relayout: boolean): void;
	private openTag(tab: TagTab, relayout: boolean): void;
	private closeTag(relayout: boolean): void;
	reloadActiveTab(): void;
	private repositionButtons(): void;
			// ~bankmain_build is run three times when the bank is opened, the first is from ~bankmain_viewbuttons
			// which is prior to the incinerator being setup.
		// Keep the tab layer height a multiple of the tab heights
	private rebuildTabs(): void;
		// remove the tag tabs but keep the buttons and scroll component
	// layout the tabs for their position due to scroll or window resize
	private layoutTabs(): void;
			// avoid hiding dragged widget if scrolling from drag
	private rebuildTagTabTab(): void;
		// tabs are stored at the end of the item container to avoid interfering with the real items,
		// this is easier than making a layer for them because the bank scrollbar has to be adjusted
		// otherwise for the new layer
	private hideBank(): void;
		// hide the items & the separators
	private createGraphic(container: net.runelite.api.widgets.Widget, name: string, spriteId: number, itemId: number, width: number, height: number, x: number, y: number): net.runelite.api.widgets.Widget;
	private getItem(idx: number): ItemComposition;
	private createMenuEntry(event: net.runelite.api.events.MenuEntryAdded, option: string, target: string): void;
	private sendChatMessage(message: string): void;
}
}