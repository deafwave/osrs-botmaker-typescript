/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="PluginPanel.d.ts" />
/// <reference path="Component.d.ts" />
/// <reference path="JCheckBox.d.ts" />
/// <reference path="Enum<T>> JComboBox<Enum<T>> combobox(Class<T> clazz.d.ts" />
/// <reference path="T value).d.ts" />
/// <reference path="Class.d.ts" />
/// <reference path="T.d.ts" />
/// <reference path=".d.ts" />
/// <reference path="T extends Enum<T>> JComboBox<Enum<T>.d.ts" />
/// <reference path="JSpinner.d.ts" />
/// <reference path="Color.d.ts" />
/// <reference path="ColorJButton.d.ts" />
/// <reference path="ConfigDescriptor.d.ts" />
/// <reference path="ConfigItemDescriptor.d.ts" />
/// <reference path="Notification.d.ts" />
/*
 * Copyright (c) 2024, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.config {
export class NotificationPanel extends PluginPanel
{
ConfigManager configManager;
ColorPickerManager colorPickerManager;
JLabel title;
FixedWidthPanel mainPanel;
JCheckBox enabled;
ConfigDescriptor configDescriptor;
ConfigItemDescriptor configItemDescriptor;
NotificationPanel( ConfigManager configManager, ColorPickerManager colorPickerManager, RuneLiteConfig runeLiteConfig, PluginListPanel pluginList ) 
			// If the notification has not been initialized yet, apply default config from the RuneLite settings
	private item(name: string, description: string, component: Component): void;
	private checkbox(selected: boolean): JCheckBox;
	private combobox(clazz: Class<T>, value: T): <T extends Enum<T>> JComboBox<Enum<T>>;
		// set renderer prior to calling box.getPreferredSize(), since it will invoke the renderer
		// to build components for each combobox element in order to compute the display size of the
		// combobox
	private createIntSpinner(min: number, max: number, value: number, unit: string): JSpinner;
		// Config may previously have been out of range
	private createColorPicker(name: string, existing: Color, onClose: Consumer<Color>): ColorJButton;
	init(cd: ConfigDescriptor, cid: ConfigItemDescriptor): void;
	private rebuild(notif: Notification): void;
					// Reset every setting
	private loadNotification(): Notification;
	private saveNotification(notification: Notification): void;
}
}