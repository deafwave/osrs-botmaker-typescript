/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="Config.d.ts" />
/// <reference path="default Dimension.d.ts" />
/// <reference path="default ExpandResizeType.d.ts" />
/// <reference path="default boolean.d.ts" />
/// <reference path="default ContainableFrame.Mode.d.ts" />
/// <reference path="default int.d.ts" />
/// <reference path="default WarningOnExit.d.ts" />
/// <reference path="default RequestFocusType.d.ts" />
/// <reference path="default Notifier.NativeCustomOff.d.ts" />
/// <reference path="default FlashNotification.d.ts" />
/// <reference path="default Color.d.ts" />
/// <reference path="default FontType.d.ts" />
/// <reference path="default TooltipPositionType.d.ts" />
/// <reference path="default Keybind.d.ts" />
/*
 * Copyright (c) 2017, Tyler <https://github.com/tylerthardy>
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
declare namespace net.runelite.client.config {
export interface RuneLiteConfig extends Config
{
( ) 
( ) 
( ) 
( ) 
	gameSize(): default Dimension;
( ) 
	automaticResizeType(): default ExpandResizeType;
( ) 
	lockWindowSize(): default boolean;
( ) 
	containInScreen(): default ContainableFrame.Mode;
( ) 
	rememberScreenBounds(): default boolean;
( ) 
	enableCustomChrome(): default boolean;
( ) 
( ) 
	windowOpacity(): default int;
( ) 
	gameAlwaysOnTop(): default boolean;
( ) 
	warningOnExit(): default WarningOnExit;
( ) 
	usernameInTitle(): default boolean;
( ) 
	enableTrayIcon(): default boolean;
( ) 
	enableTrayNotifications(): default boolean;
( ) 
	notificationRequestFocus(): default RequestFocusType;
( ) 
	notificationSound(): default Notifier.NativeCustomOff;
( ) 
( ) 
	notificationVolume(): default int;
( ) 
	notificationTimeout(): default int;
( ) 
	enableGameMessageNotification(): default boolean;
( ) 
	flashNotification(): default FlashNotification;
( ) 
	sendNotificationsWhenFocused(): default boolean;
( ) 
	notificationFlashColor(): default Color;
( ) 
	fontType(): default FontType;
( ) 
	tooltipFontType(): default FontType;
( ) 
	interfaceFontType(): default FontType;
( ) 
	infoboxFontType(): default FontType;
( ) 
	tooltipPosition(): default TooltipPositionType;
( ) 
	infoBoxVertical(): default boolean;
( ) 
	infoBoxSize(): default int;
( ) 
	infoBoxTextOutline(): default boolean;
( ) 
	overlayBackgroundColor(): default Color;
( ) 
	sidebarToggleKey(): default Keybind;
( ) 
	panelToggleKey(): default Keybind;
( ) 
	blockExtraMouseButtons(): default boolean;
( ) 
	useWikiItemPrices(): default boolean;
( ) 
	dragHotkey(): default Keybind;
}
}