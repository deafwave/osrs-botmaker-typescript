/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="default boolean.d.ts" />
/// <reference path="default Notification.d.ts" />
/// <reference path="default GrandExchangeSearchMode.d.ts" />
/*
 * Copyright (c) 2018, Seth <https://github.com/sethtroll>
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
declare namespace net.runelite.client.plugins.grandexchange {
export interface GrandExchangeConfig extends Config
{
( ) 
	quickLookup(): default boolean;
( ) 
	enableNotifications(): default Notification;
( ) 
	notifyOnOfferComplete(): default Notification;
( ) 
	showActivelyTradedPrice(): default boolean;
( ) 
	enableGELimits(): default boolean;
( ) 
	enableGELimitReset(): default boolean;
( ) 
	showTotal(): default boolean;
( ) 
	showExact(): default boolean;
( ) 
	highlightSearchMatch(): default boolean;
( + "Default - Matches exact text only<br>" + "Fuzzy Only - Matches inexact text such as 'sara sword'<br>" + "Fuzzy Fallback - Uses default search, falling back to fuzzy search if no results were found" ) 
	geSearchMode(): default GrandExchangeSearchMode;
}
}