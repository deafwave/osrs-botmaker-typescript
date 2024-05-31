/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="KeyCode.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NPCComposition.d.ts" />
/// <reference path="ObjectComposition.d.ts" />
/// <reference path="ParamID.d.ts" />
/// <reference path="annotations/Component.d.ts" />
/// <reference path="events/ClientTick.d.ts" />
/// <reference path="events/MenuEntryAdded.d.ts" />
/// <reference path="events/MenuOpened.d.ts" />
/// <reference path="events/PostMenuSort.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetConfig.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="Plugin.d.ts" />
/// <reference path="Comparable<? super T>> void sortedInsert(List<T> list.d.ts" />
/// <reference path="T value) // NOPMD: UnusedPrivateMethod: false positive.d.ts" />
/*
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
 * Copyright (c) 2018, Kamiel
 * Copyright (c) 2019, Rami <https://github.com/Rami-J>
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
declare namespace net.runelite.client.plugins.menuentryswapper {
( ) 
export class MenuEntrySwapperPlugin extends Plugin
		// make sure assignment swap is higher priority than trade swap for slayer masters
				// Walk here
				// Reset
					// Attackable NPCs always have Attack as the first, last (deprioritized), or when hidden, no, option.
					// Due to this the default action would be either Attack or the first non-Attack option, based on
					// the game settings. Since it may be valid to swap an option up to override Attack, even when Attack
					// is left-click, we cannot assume any default currentAction on attackable NPCs.
					// Non-attackable NPCS have a predictable default action which we can prevent a swap to if no swap
					// config is set, which just avoids showing a Swap option on a 1-op NPC, which looks odd.
					// Attack can be swapped with the in-game settings, and this becomes very confusing if we try
					// to swap Attack and the game also tries to swap it (by deprioritizing), so just use the in-game
					// setting.
						// https://secure.runescape.com/m=news/third-party-client-guidelines?oldschool=1
				// Walk here swap
						// Use
					// inventory and worn items have their own swap systems
				// ui swap either:
				// 1) static components
				// 2) dynamic components with items
					// find lowest op from the widget actions, to prevent setting a swap to the default left click
					// action regardless of what is swapped.
					// find highest op from the current menu, post any existing swaps, for inserting Reset
		// Swap to shift-click deposit behavior
		// Deposit- op 1 is the current withdraw amount 1/5/10/x for deposit box interface and chambers of xeric storage unit.
		// Deposit- op 2 is the current withdraw amount 1/5/10/x for bank interface
		// Swap to shift-click withdraw behavior
		// Deposit- op 1 is the current withdraw amount 1/5/10/x
				// Raise the priority of the op so it doesn't get sorted later
		// Custom item swap
		// Worn items swap
			// Get multiloc id
					// Advance to the top-most op for this NPC.
		// UI swaps
			// fast check to avoid hitting config on components with single ops
		// Don't swap on hint arrow npcs, usually they need "Talk-to" for clues.
		// Built-in swaps
		// Walk here swaps. These work via deprioritizing swapped menus instead of prioritizing the Walk here
		// option above swapped menus. This is because a Walk here swap doesn't mean Walk here should always
		// be at the top, it should only be above the individual entries being swapped.
		//
		// For example:
		// cancel -> walk here -> ground item op -> npc op
		// with a npc <-> walk here swap should result in
		// cancel -> npc op -> walk here -> ground item op
		// which cannot be achieved with a simple swap.
				// Get multiloc id
		// The menu is not rebuilt when it is open, so don't swap or else it will
		// repeatedly swap entries
		// Build option map for quick lookup in findIndex
		// Perform swaps
		// find option to swap with
			// We want the last index which matches the target, as that is what is top-most
			// on the menu
				// Limit to the last index which is prior to the current entry
			// Without strict matching we have to iterate all entries up to the current limit...
		// Item op4 and op5 are CC_OP_LOW_PRIORITY so they get added underneath Use,
		// but this also makes them right-click only. Change them to CC_OP to avoid this.
		// Update optionIndexes
		// call remove(Object) instead of remove(int)
		// GAME_OBJECT_FIFTH_OPTION is never the default, even if it is the only option, because it
		// gets depriotizied below Walk here
		// take the first op above Use
		// region Max cape opworn
		// endregion
		// region Max cape opheld
		// endregion
		// region Con cape
		// endregion
		// region Achievement diary cape
		// endregion
		// region Hunter cape
		// endregion
}