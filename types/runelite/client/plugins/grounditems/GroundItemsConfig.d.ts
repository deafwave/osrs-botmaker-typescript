/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="default String.d.ts" />
/// <reference path="default boolean.d.ts" />
/// <reference path="default HighlightTier.d.ts" />
/// <reference path="default PriceDisplayMode.d.ts" />
/// <reference path="default ItemHighlightMode.d.ts" />
/// <reference path="default MenuHighlightMode.d.ts" />
/// <reference path="default ValueCalculationMode.d.ts" />
/// <reference path="default int.d.ts" />
/// <reference path="default Color.d.ts" />
/// <reference path="default DespawnTimerMode.d.ts" />
/// <reference path="default Lootbeam.Style.d.ts" />
/// <reference path="default Keybind.d.ts" />
/*
 * Copyright (c) 2017, Aria <aria@ar1as.space>
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
declare namespace net.runelite.client.plugins.grounditems {
export interface GroundItemsConfig extends Config
{
( ) 
( ) 
	getHighlightItems(): default String;
( ) 
	setHighlightedItem(key: string): void;
( ) 
	getHiddenItems(): default String;
( ) 
	setHiddenItems(key: string): void;
( ) 
	showHighlightedOnly(): default boolean;
( ) 
	dontHideUntradeables(): default boolean;
( ) 
	showMenuItemQuantities(): default boolean;
( ) 
	recolorMenuHiddenItems(): default boolean;
( ) 
	deprioritizeHiddenItems(): default boolean;
( ) 
	highlightTiles(): default boolean;
( ) 
	notifyHighlightedDrops(): default boolean;
( ) 
	notifyTier(): default HighlightTier;
( ) 
	priceDisplayMode(): default PriceDisplayMode;
( ) 
	itemHighlightMode(): default ItemHighlightMode;
( ) 
	menuHighlightMode(): default MenuHighlightMode;
( ) 
	valueCalculationMode(): default ValueCalculationMode;
( ) 
	getHideUnderValue(): default int;
( ) 
	defaultColor(): default Color;
( ) 
	highlightedColor(): default Color;
( ) 
	hiddenColor(): default Color;
( ) 
	lowValueColor(): default Color;
( ) 
	lowValuePrice(): default int;
( ) 
	mediumValueColor(): default Color;
( ) 
	mediumValuePrice(): default int;
( ) 
	highValueColor(): default Color;
( ) 
	highValuePrice(): default int;
( ) 
	insaneValueColor(): default Color;
( ) 
	insaneValuePrice(): default int;
( ) 
	onlyShowOwnItems(): default boolean;
( ) 
	doubleTapDelay(): default int;
( ) 
	collapseEntries(): default boolean;
( ) 
	groundItemTimers(): default DespawnTimerMode;
( ) 
	textOutline(): default boolean;
( ) 
	showLootbeamForHighlighted(): default boolean;
( ) 
	showLootbeamTier(): default HighlightTier;
( ) 
	lootbeamStyle(): default Lootbeam.Style;
( ) 
	hotkey(): default Keybind;
}
}