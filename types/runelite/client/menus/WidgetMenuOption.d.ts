/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="annotations/Component.d.ts" />
/// <reference path="widgets/WidgetInfo.d.ts" />
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
export class WidgetMenuOption
{
	/**
	 * The left hand text to be displayed on the menu option. (ex. the menuOption of "Drop Bones" is "Drop")
	 */
String menuOption;
	/**
	 * The right hand text to be displayed on the menu option. (ex. the menuTarget of "Drop Bones" is "Bones")
	 */
String menuTarget;
	/**
	 * The color that the menuTarget should be. Defaults to the brownish color that most menu options have.
	 */
	/**
	 * The widgetinfo to add the option to, if available
	 */
WidgetInfo widget;
	/**
	 * The widget to add the option to
	 */
int widgetId;
Consumer<MenuEntry> callback;
	/**
	 * Creates a menu to be added to right click menus. The menu will only be added if match is found within the menu options
	 *
	 * @param menuOption Option text of this right click option
	 * @param menuTarget Target text of this right click option
	 * @param widget     The widget to attach this option to
	 */
/** @deprecated */
WidgetMenuOption(String menuOption, String menuTarget, WidgetInfo widget) 
	/**
	 * Creates a menu to be added to right click menus. The menu will only be added if match is found within the menu options
	 *
	 * @param menuOption Option text of this right click option
	 * @param menuTarget Target text of this right click option
	 * @param widgetId   The widget to attach this option to
	 */
WidgetMenuOption(String menuOption, String menuTarget, int widgetId) 
	/**
	 * Sets the target of the menu option. Color code will be added on to target
	 *
	 * @param target The target text without color code.
	 */
	setMenuTarget(target: string): void;
}
}