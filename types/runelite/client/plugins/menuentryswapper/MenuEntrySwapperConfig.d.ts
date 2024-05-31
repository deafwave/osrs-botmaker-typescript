/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="default boolean.d.ts" />
/// <reference path="default FairyRingMode.d.ts" />
/// <reference path="default HouseMode.d.ts" />
/// <reference path="default KaramjaGlovesMode.d.ts" />
/// <reference path="default ArdougneCloakMode.d.ts" />
/// <reference path="default RadasBlessingMode.d.ts" />
/// <reference path="default MorytaniaLegsMode.d.ts" />
/// <reference path="default DesertAmuletMode.d.ts" />
/// <reference path="default GEItemCollectMode.d.ts" />
/// <reference path="default ShiftWithdrawMode.d.ts" />
/// <reference path="default ShiftDepositMode.d.ts" />
/// <reference path="default BuyMode.d.ts" />
/// <reference path="default SellMode.d.ts" />
/// <reference path="default StairsMode.d.ts" />
/*
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
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
export interface MenuEntrySwapperConfig extends Config
{
( ) 
( ) 
( ) 
( ) 
( ) 
enum ArdougneCloakMode
enum KaramjaGlovesMode
enum MorytaniaLegsMode
enum RadasBlessingMode
enum DesertAmuletMode
( ) 
	leftClickCustomization(): default boolean;
( ) 
	shiftClickCustomization(): default boolean;
( ) 
	objectCustomization(): default boolean;
( ) 
	objectShiftClickWalkHere(): default boolean;
( ) 
	npcCustomization(): default boolean;
( ) 
	npcShiftClickWalkHere(): default boolean;
( ) 
	swapAdmire(): default boolean;
( ) 
	swapAssignment(): default boolean;
( ) 
	swapBank(): default boolean;
( ) 
	swapBirdhouseEmpty(): default boolean;
( ) 
	swapBones(): default boolean;
( ) 
	swapHerbs(): default boolean;
( ) 
	swapChase(): default boolean;
( ) 
	swapExchange(): default boolean;
( ) 
	swapFairyRing(): default FairyRingMode;
( ) 
	swapHarpoon(): default boolean;
( ) 
	swapBait(): default boolean;
( ) 
	swapHelp(): default boolean;
( ) 
	swapHomePortal(): default HouseMode;
( ) 
	swapPay(): default boolean;
( ) 
	swapJewelleryBox(): default boolean;
( ) 
	swapPortalNexus(): default boolean;
( ) 
	swapPrivate(): default boolean;
( ) 
	swapPick(): default boolean;
( ) 
	swapQuick(): default boolean;
( ) 
	swapBoxTrap(): default boolean;
( ) 
	swapTeleportItem(): default boolean;
( ) 
	teleportSubmenus(): default boolean;
( ) 
	swapTeleToPoh(): default boolean;
( ) 
	swapKaramjaGlovesMode(): default KaramjaGlovesMode;
( ) 
	swapArdougneCloakMode(): default ArdougneCloakMode;
( ) 
	swapRadasBlessingMode(): default RadasBlessingMode;
( ) 
	swapMorytaniaLegsMode(): default MorytaniaLegsMode;
( ) 
	swapDesertAmuletMode(): default DesertAmuletMode;
( ) 
	swapAbyssTeleport(): default boolean;
( ) 
	swapTrade(): default boolean;
( ) 
	swapTravel(): default boolean;
( ) 
	swapGEItemCollect(): default GEItemCollectMode;
( ) 
	swapGEAbort(): default boolean;
( ) 
	bankWithdrawShiftClick(): default ShiftWithdrawMode;
( ) 
	bankDepositShiftClick(): default ShiftDepositMode;
( ) 
	shopBuy(): default BuyMode;
( ) 
	shopSell(): default SellMode;
( ) 
	swapEssenceMineTeleport(): default boolean;
( ) 
	swapTan(): default boolean;
( ) 
	swapDepositItems(): default boolean;
enum StairsMode
( ) 
	swapStairsLeftClick(): default StairsMode;
( ) 
	swapStairsShiftClick(): default StairsMode;
( ) 
	swapTemporossLeave(): default boolean;
( ) 
	removeDeadNpcMenus(): default boolean;
( ) 
	groundItemShiftClickWalkHere(): default boolean;
}
}