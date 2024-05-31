/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="ConfigChanged.d.ts" />
/// <reference path="NavigationButton.d.ts" />
/// <reference path="KeyEvent.d.ts" />
/// <reference path="Rectangle.d.ts" />
/// <reference path="GraphicsConfiguration.d.ts" />
/// <reference path="Graphics.d.ts" />
/// <reference path="Cursor.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="Insets.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="Image.d.ts" />
/// <reference path="Frame.d.ts" />
/// <reference path="TrayIcon.d.ts" />
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
declare namespace net.runelite.client.ui {
export class ClientUI
{
TrayIcon trayIcon;
RuneLiteConfig config;
MouseManager mouseManager;
Applet client;
ConfigManager configManager;
Provider<ClientThread> clientThreadProvider;
EventBus eventBus;
boolean safeMode;
String title;
BufferedImage sidebarOpenIcon;
BufferedImage sidebarCloseIcon;
JTabbedPane sidebar;
NavigationButton selectedTab;
ClientToolbarPanel toolbarPanel;
boolean withTitleBar;
ContainableFrame frame;
JPanel content;
ClientPanel clientPanel;
JButton sidebarNavBtn;
Dimension lastClientSize;
Cursor defaultCursor;
String lastNormalBounds;
Timer normalBoundsTimer;
List<KeyListener> keyListeners;
export class HistoryEntry
ClientUI( RuneLiteConfig config, MouseManager mouseManager, Applet client, ConfigManager configManager, Provider<ClientThread> clientThreadProvider, EventBus eventBus,  boolean safeMode,  String title ) 
	private onConfigChanged(event: ConfigChanged): void;
	addNavigation(navBtn: NavigationButton): void;
		// insertTab changes the selected index when the first tab is inserted, avoid this
	removeNavigation(navBtn: NavigationButton): void;
	private onGameStateChanged(event: net.runelite.api.events.GameStateChanged): void;
		// Keep scheduling event until we get our name
	/**
	 * Initialize UI.
	 */
			// Set some sensible swing defaults
			// Create main window
			// Try to enable fullscreen on OSX
				// Change the default quit strategy to CLOSE_ALL_WINDOWS so that ctrl+q
				// triggers the listener below instead of exiting.
					// maybe just include a map component -> navbtn?
			// Add key listener
			// Add mouse listener
			// Decorate window with custom chrome and titlebar if needed
					// use our own title if supported.
					// the native title color is determined by the application appearance,
					// which will lead to grey text on a black background if the appearance
					// is light mode.
						// FlatLaf explicitly checks this property when checking for custom window decorations on Linux
			// Update config
			// Close sidebar if the config closed state is set
	private init(): void;
	show(): void;
			// Layout frame
			// Create tray icon (needs to be created after frame is packed)
			// Move frame around (needs to be done after frame is packed)
					// Adjust for insets before performing display test
					// Check that the bounds are contained inside a valid display
						// Reset the position, but not the size
					// According to the documentation of JFrame#setExtendedState, if the frame isn't visible, a window
					// state change event isn't guaranteed to be fired. Since RuneLite's custom chrome borders rely on a
					// state change listener, borders need to be applied manually when maximizing prior to setVisible
			// Show frame
			// On macos setResizable needs to be called after setVisible
			// this must run after the native window border is installed on the window
		// Show out of date dialog if needed
	private dispatchWindowKeyEvent(ev: KeyEvent): boolean;
	private logGraphicsEnvironment(): void;
	private findDisplayFromBounds(bounds: Rectangle): GraphicsConfiguration;
	private showWarningOnExit(): boolean;
	private shutdownClient(): void;
				// The client can call System.exit when it's done shutting down
				// if it doesn't though, we want to exit anyway, so race it
					// it will continue rendering for about 4 seconds before attempting shutdown if its vanilla
	/**
	 * Paint this component to target graphics
	 *
	 * @param graphics the graphics
	 */
	paint(graphics: Graphics): void;
	/**
	 * Gets component width.
	 *
	 * @return the width
	 */
	getWidth(): number;
	/**
	 * Gets component height.
	 *
	 * @return the height
	 */
	getHeight(): number;
	/**
	 * Returns true if this component has focus.
	 *
	 * @return true if component has focus
	 */
	isFocused(): boolean;
	/**
	 * Request focus on this component and then on client component
	 */
	requestFocus(): void;
				// On OSX Component::requestFocus has no visible effect, so we use our OSX-specific
				// requestUserAttention()
	/**
	 * Attempt to forcibly bring the client frame to front
	 */
	forceFocus(): void;
	/**
	 * Request user attention to the window (flash the taskbar)
	 */
	flashTaskbar(): void;
	/**
	 * Returns current cursor set on game container
	 * @return awt cursor
	 */
	getCurrentCursor(): Cursor;
	/**
	 * Returns current custom cursor or default system cursor if cursor is not set
	 * @return awt cursor
	 */
	getDefaultCursor(): Cursor;
	/**
	 * Changes cursor for client window. Requires ${@link ClientUI#init()} to be called first.
	 * FIXME: This is working properly only on Windows, Linux and Mac are displaying cursor incorrectly
	 * @param image cursor image
	 * @param name  cursor name
	 */
	setCursor(image: BufferedImage, name: string): void;
	/**
	 * Changes cursor for client window. Requires ${@link ClientUI#init()} to be called first.
	 * @param cursor awt cursor
	 */
	setCursor(cursor: Cursor): void;
	/**
	 * Resets client window cursor to default one.
	 * @see ClientUI#setCursor(BufferedImage, String)
	 */
	resetCursor(): void;
	/**
	 * Get offset of game canvas in game window
	 *
	 * @return game canvas offset
	 */
	getCanvasOffset(): Point;
	getInsets(): Insets;
	/**
	 * Paint UI related overlays to target graphics
	 * @param graphics target graphics
	 */
	paintOverlays(graphics: Graphics2D): void;
		// Offset sidebar button if resizable mode logout is visible
		// Update button dimensions
	getGraphicsConfiguration(): GraphicsConfiguration;
	openPanel(navBtn: NavigationButton, showSidebar: boolean): void;
	private toggleSidebar(): void;
	private toggleSidebar(open: boolean, pushHistory: boolean): void;
	private togglePluginPanel(): void;
	private pushHistory(): void;
		// we keep multiple history entries so you can open a panel, close it, open another, *remove* it, then resume the first open panel
			// Try to always keep a panel in the history
	private giveClientFocus(): void;
	private updateFrameConfig(updateResizable: boolean): void;
	private applyGameSize(force: boolean): void;
		// The upper bounds are defined by the applet's max size
		// The lower bounds are defined by the client's fixed size
	private windowBoundsChanged(): void;
		// Sometimes when maximizing windowMoved can be delivered before extendedState is updated, so defer
		// actually saving for some ms to reduce the likelyhood of this
	private setLastNormalBounds(): void;
	private saveClientBoundsConfig(): void;
			// leave the previous bounds there, so when the client starts maximized it
			// can restore to the restored size from the previous run
	private restoreClientBoundsConfig(): boolean;
				// null mode means legacy exact frame bounds
	private static setupDefaults(): void;
		// Force heavy-weight popups/tooltips.
		// Prevents them from being obscured by the game applet.
		// Do not fill in background on repaint. Reduces flickering when
		// the applet is resized.
	private static createTrayIcon(icon: Image, title: string, frame: Frame): TrayIcon | null;
		// Bring to front when tray icon is clicked
					// On macOS, frame.setVisible(true) only restores focus when the visibility was previously false.
					// The frame's visibility is not set to false when the window loses focus, so we set it manually.
					// Additionally, in order to bring the window to the foreground,
					// frame.setVisible(true) calls CPlatformWindow::nativePushNSWindowToFront.
					// However, this native method is not called with activateIgnoringOtherApps:YES,
					// so any other active window will prevent our window from being brought to the front.
					// To work around this, we use our macOS-specific requestForeground().
export class Layout implements LayoutManager2
						// the sidebar always is given it's pref width exactly
			// must adjust content height since the client height is derived from the content height
			// adjust sidebar height first, as changing it's height can make it's min width change too
				// adjust client for window resizes
				// fit client to window
			// fit window to client
						// synchronously layout the frame and it's root pane so we don't get re-layouted
						// with the root pane's old size before it gets layouted automatically. This can
						// call us recursively if we calculate size wrong, so don't do that.
}
}