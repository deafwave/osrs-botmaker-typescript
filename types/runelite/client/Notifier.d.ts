/// <reference path="../../java/index.d.ts" />
/// <reference path="../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="TrayIcon.MessageType.d.ts" />
/// <reference path="Notification.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="Process.d.ts" />
/// <reference path="synchronized void.d.ts" />
/*
 * Copyright (c) 2016-2017, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client {
export class Notifier
{
enum NativeCustomOff
.addEscape('"', "'") 
.build(); 
	// Notifier properties
Client client;
RuneLiteConfig runeLiteConfig;
ClientUI clientUI;
ScheduledExecutorService executorService;
ChatMessageManager chatMessageManager;
EventBus eventBus;
String appName;
Path notifyIconPath;
boolean terminalNotifierAvailable;
Instant flashStart;
FlashNotification flashNotification;
Color flashColor;
long mouseLastPressedMillis;
Notifier( ClientUI clientUI, Client client, RuneLiteConfig runeliteConfig, ScheduledExecutorService executorService, ChatMessageManager chatMessageManager, EventBus eventBus,  String appName ) 
		// Check if we are running in the launcher because terminal-notifier notifications don't work
		// if the group/sender are unknown to it.
	private defaultNotification(trayMessageType: TrayIcon.MessageType): Notification;
		// Create a new notification just using the RuneLite notification settings
	notify(message: string): void;
	notify(message: string, type: TrayIcon.MessageType): void;
	notify(notification: Notification, message: string): void;
		// Non-overriden notifications use the default notification settings.
	private buildTitle(): string;
	processFlash(graphics: Graphics2D): void;
					// Any interaction with the client since the notification started will cancel it after the minimum duration
			// For solid colour, fall through every time.
	private sendNotification(notification: Notification, title: string, message: string): void;
	private sendTrayNotification(notification: Notification, title: string, message: string): void;
	private sendLinuxNotification(notification: Notification, title: string, message: string): void;
			// fall back to tray notification
	private sendMacNotification(title: string, message: string): void;
	private static sendCommand(commands: Array<string>): Process;
	private isTerminalNotifierAvailable(): boolean;
			// The PATH seen by Cocoa apps does not resemble that seen by the shell, so we defer to the latter.
	private static toUrgency(type: TrayIcon.MessageType): string;
	private playCustomSound(notification: Notification): synchronized void;
		// converts user controlled linear volume ranging 1-100 to exponential decibel gains
		// Using loop instead of start + setFramePosition prevents the clip
		// from not being played sometimes, presumably a race condition in the
		// underlying line driver
	private tryLoadNotification(): boolean;
		// Otherwise load from the classpath
}
}