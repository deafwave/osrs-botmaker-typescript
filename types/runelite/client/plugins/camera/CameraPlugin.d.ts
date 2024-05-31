/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="SettingID.d.ts" />
/// <reference path="VarClientInt.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="events/BeforeRender.d.ts" />
/// <reference path="events/ClientTick.d.ts" />
/// <reference path="events/FocusChanged.d.ts" />
/// <reference path="events/ScriptCallbackEvent.d.ts" />
/// <reference path="events/ScriptPreFired.d.ts" />
/// <reference path="events/WidgetLoaded.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/JavaScriptCallback.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="Plugin implements KeyListener.d.ts" />
/// <reference path="MouseListener.d.ts" />
/*
 * Copyright (c) 2018 Abex
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
 * Copyright (c) 2019, Wynadorn <https://github.com/Wynadorn>
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
declare namespace net.runelite.client.plugins.camera {
( ) 
export class CameraPlugin extends Plugin implements KeyListener, MouseListener
	// flags used to store the mousedown states
	/**
	 * Whether or not the current menu has any non-ignored menu entries
	 */
		// rightClickMenuBlocksCamera=true works because mousePressed() does *not* remap rmb->mmb when the menu has object menus.
		// The camera click mask is mmb, so no camera movement happens.
		//
		// rightClickMenuBlocksCamera=false works because the camera click mask is set to 2 or 4. Clicking on objects does *not*
		// remap rmb->mmb, so the rmb click both opens the menu and moves the camera. Clicking on nothing *does* remap rmb->mmb
		// which moves the camera, but won't open a Walk-here only menu.
			// if any cache overlay fails to load then assume at least one of the zoom scripts is outdated
			// and prevent zoom extending entirely.
			// This lets the options panel's slider have an exponential rate
	/**
	 * Checks if the menu has any non-ignored entries
	 */
	/**
	 * Checks if the menu has any options, because menu entries are built each
	 * tick and the MouseListener runs on the awt thread
	 */
	/**
	 * The event that is triggered when a mouse button is pressed
	 * In this method the right click is changed to a middle-click to enable rotating the camera
	 * <p>
	 * This method also provides the config option to enable the middle-mouse button to always open the right click menu
	 */
			// Only move the camera if there is nothing at the menu, or if
			// in one-button mode. In one-button mode, left and right click always do the same thing,
			// so always treat it as the menu is empty
				// Set the rightClick flag to true so we can release the button in mouseReleased() later
				// Change the mousePressed() MouseEvent to the middle mouse button
			// Set the middleClick flag to true so we can release it later in mouseReleased()
			// Chance the middle mouse button MouseEvent to a right-click
	/**
	 * Correct the MouseEvent to release the correct button
	 */
			// Change the MouseEvent to button 2 so the middle mouse button will be released
			// Change the MouseEvent ot button 3 so the right mouse button will be released
	/*
	 * These methods are unused but required to be present in a MouseListener implementation
	 */
	// region Unused MouseListener methods
	// endregion
}