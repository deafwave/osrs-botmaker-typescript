/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="default Color.d.ts" />
/// <reference path="default int.d.ts" />
/// <reference path="default boolean.d.ts" />
/// <reference path="default Notification.d.ts" />
/*
 * Copyright (c) 2017, Devin French <https://github.com/devinfrench>
 * Copyright (c) 2019, Aleios <https://github.com/aleios>
 * Copyright (c) 2020, Unmoon <https://github.com/unmoon>
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
declare namespace net.runelite.client.plugins.itemcharges {
export interface ItemChargeConfig extends Config
{
( ) 
( ) 
( ) 
	veryLowWarningColor(): default Color;
( ) 
	lowWarningolor(): default Color;
( ) 
	veryLowWarning(): default int;
( ) 
	lowWarning(): default int;
( ) 
	showTeleportCharges(): default boolean;
( ) 
	showDodgyCount(): default boolean;
( ) 
	dodgyNotification(): default Notification;
( ) 
	showImpCharges(): default boolean;
( ) 
	showFungicideCharges(): default boolean;
( ) 
	showWateringCanCharges(): default boolean;
( ) 
	showWaterskinCharges(): default boolean;
( ) 
	showBellowCharges(): default boolean;
( ) 
	showBasketCharges(): default boolean;
( ) 
	showSackCharges(): default boolean;
( ) 
	showAbyssalBraceletCharges(): default boolean;
( ) 
	showAmuletOfChemistryCharges(): default boolean;
( ) 
	showAmuletOfBountyCharges(): default boolean;
( ) 
	recoilNotification(): default Notification;
( ) 
	showBindingNecklaceCharges(): default boolean;
( ) 
	bindingNotification(): default Notification;
( ) 
	showExplorerRingCharges(): default boolean;
( ) 
	showRingOfForgingCount(): default boolean;
( ) 
	ringOfForgingNotification(): default Notification;
( ) 
	showInfoboxes(): default boolean;
( ) 
	showPotionDoseCount(): default boolean;
( ) 
	showBraceletOfSlaughterCharges(): default boolean;
( ) 
	slaughterNotification(): default Notification;
( ) 
	showExpeditiousBraceletCharges(): default boolean;
( ) 
	expeditiousNotification(): default Notification;
( ) 
	showGuthixRestDoses(): default boolean;
( ) 
	showBloodEssenceCharges(): default boolean;
( ) 
	showBraceletOfClayCharges(): default boolean;
( ) 
	braceletOfClayNotification(): default Notification;
( ) 
	amuletOfChemistryNotification(): default Notification;
}
}