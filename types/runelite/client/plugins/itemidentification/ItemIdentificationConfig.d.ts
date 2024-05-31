/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="default ItemIdentificationMode.d.ts" />
/// <reference path="default Color.d.ts" />
/// <reference path="default boolean.d.ts" />
/*
 * Copyright (c) 2019, Hydrox6 <ikada@protonmail.ch>
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
declare namespace net.runelite.client.plugins.itemidentification {
export interface ItemIdentificationConfig extends Config
{
( ) 
( ) 
	identificationType(): default ItemIdentificationMode;
( ) 
	textColor(): default Color;
( ) 
	showHerbSeeds(): default boolean;
( ) 
	showAllotmentSeeds(): default boolean;
( ) 
	showFlowerSeeds(): default boolean;
( ) 
	showFruitTreeSeeds(): default boolean;
( ) 
	showTreeSeeds(): default boolean;
( ) 
	showSpecialSeeds(): default boolean;
( ) 
	showBerrySeeds(): default boolean;
( ) 
	showHopsSeeds(): default boolean;
( ) 
	showSacks(): default boolean;
( ) 
	showHerbs(): default boolean;
( ) 
	showLogs(): default boolean;
( ) 
	showPyreLogs(): default boolean;
( ) 
	showPlanks(): default boolean;
( ) 
	showSaplings(): default boolean;
( ) 
	showComposts(): default boolean;
( ) 
	showOres(): default boolean;
( ) 
	showBars(): default boolean;
( ) 
	showGems(): default boolean;
( ) 
	showPotions(): default boolean;
( ) 
	showImplingJars(): default boolean;
( ) 
	showTablets(): default boolean;
( ) 
	showTeleportScrolls(): default boolean;
( ) 
	showJewellery(): default boolean;
( ) 
	showEnchantedJewellery(): default boolean;
}
}