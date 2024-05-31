/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="events/MenuEntryAdded.d.ts" />
/// <reference path="events/PlayerMenuOptionsChanged.d.ts" />
/// <reference path="WidgetMenuOption.d.ts" />
/*
 * Copyright (c) 2017, Robin <robin.weymans@gmail.com>
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
declare namespace net.runelite.client.menus {
export class MenuManager
{
	/*
	 * The index needs to be between 4 and 7,
	 */
Client client;
	//Maps the indexes that are being used to the menu option.
	//Used to manage custom non-player menu options
MenuManager(Client client, EventBus eventBus) 
	/**
	 * Adds a CustomMenuOption to the list of managed menu options.
	 *
	 * @param customMenuOption The custom menu to add
	 * @param callback callback to be called when the menu is clicked
	 */
	addManagedCustomMenu(customMenuOption: WidgetMenuOption, callback: Consumer<MenuEntry>): void;
	/**
	 * Removes a CustomMenuOption from the list of managed menu options.
	 *
	 * @param customMenuOption The custom menu to add
	 */
	removeManagedCustomMenu(customMenuOption: WidgetMenuOption): void;
	private static menuContainsCustomMenu(menuEntries: MenuEntry[], customMenuOption: WidgetMenuOption): boolean;
	onMenuEntryAdded(event: net.runelite.api.events.MenuEntryAdded): void;
		// Menu entries are sorted with higher-index entries appearing toward the top of the minimenu, so insert older
		// managed menu entries at higher indices and work backward for newer entries so newly-added entries appear at
		// the bottom
			// Exit if we've inserted the managed menu entries already
	addPlayerMenuItem(menuText: string): void;
	removePlayerMenuItem(menuText: string): void;
	onPlayerMenuOptionsChanged(event: net.runelite.api.events.PlayerMenuOptionsChanged): void;
		// find new index for this option
	private addPlayerMenuItem(playerOptionIndex: number, menuText: string): void;
	private removePlayerMenuItem(playerOptionIndex: number): void;
	/**
	 * Find the next empty player menu slot index
	 */
	private findEmptyPlayerMenuIndex(): number;
}
}