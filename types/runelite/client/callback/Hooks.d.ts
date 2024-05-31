/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="MainBufferProvider.d.ts" />
/// <reference path="Renderable.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="events/BeforeRender.d.ts" />
/// <reference path="events/FakeXpDrop.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/PostClientTick.d.ts" />
/// <reference path="events/ScriptCallbackEvent.d.ts" />
/// <reference path="hooks/Callbacks.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetItem.d.ts" />
/// <reference path="worldmap/WorldMap.d.ts" />
/// <reference path="worldmap/WorldMapRenderer.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="MouseEvent.d.ts" />
/// <reference path="MouseWheelEvent.d.ts" />
/// <reference path="KeyEvent.d.ts" />
/// <reference path="Graphics.d.ts" />
/// <reference path="Image.d.ts" />
/// <reference path="RenderableDrawListener.d.ts" />
/// <reference path="Throwable.d.ts" />
/*
 * Copyright (c) 2017, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.callback {
/**
 * This class contains field required for mixins and runelite hooks to work.
 * All remaining method hooks in this class are performance-critical or contain client-specific logic and so they
 * can't just be placed in mixins or sent through event bus.
 */
export class Hooks implements Callbacks
{
Client client;
OverlayRenderer renderer;
EventBus eventBus;
DeferredEventBus deferredEventBus;
Scheduler scheduler;
InfoBoxManager infoBoxManager;
ChatMessageManager chatMessageManager;
MouseManager mouseManager;
KeyManager keyManager;
ClientThread clientThread;
DrawManager drawManager;
Notifier notifier;
ClientUI clientUi;
TelemetryClient telemetryClient;
RuntimeConfig runtimeConfig;
boolean developerMode;
Dimension lastStretchedDimensions;
VolatileImage stretchedImage;
Graphics2D stretchedGraphics;
long lastCheck;
boolean shouldProcessGameTick;
MainBufferProvider lastMainBufferProvider;
Graphics2D lastGraphics;
long nextError;
boolean rateLimitedError;
export interface RenderableDrawListener
	/**
	 * Get the Graphics2D for the MainBufferProvider image
	 * This caches the Graphics2D instance so it can be reused
	 * @param mainBufferProvider
	 * @return
	 */
	private static getGraphics(mainBufferProvider: MainBufferProvider): Graphics2D | null;
Hooks( Client client, OverlayRenderer renderer, EventBus eventBus, DeferredEventBus deferredEventBus, Scheduler scheduler, InfoBoxManager infoBoxManager, ChatMessageManager chatMessageManager, MouseManager mouseManager, KeyManager keyManager, ClientThread clientThread, DrawManager drawManager, Notifier notifier, ClientUI clientUi, TelemetryClient telemetryClient, RuntimeConfig runtimeConfig,  boolean developerMode ) 
	post(event: Record<string, any>): void;
	postDeferred(event: Record<string, any>): void;
	tick(): void;
			// tick pending scheduled tasks
			// cull infoboxes
	tickEnd(): void;
	frame(): void;
	/**
	 * When the world map opens it loads about ~100mb of data into memory, which
	 * represents about half of the total memory allocated by the client.
	 * This gets cached and never released, which causes GC pressure which can affect
	 * performance. This method reinitializes the world map cache, which allows the
	 * data to be garbage collected, and causes the map data from disk each time
	 * is it opened.
	 */
	private checkWorldMap(): void;
	mousePressed(mouseEvent: MouseEvent): MouseEvent;
	mouseReleased(mouseEvent: MouseEvent): MouseEvent;
	mouseClicked(mouseEvent: MouseEvent): MouseEvent;
	mouseEntered(mouseEvent: MouseEvent): MouseEvent;
	mouseExited(mouseEvent: MouseEvent): MouseEvent;
	mouseDragged(mouseEvent: MouseEvent): MouseEvent;
	mouseMoved(mouseEvent: MouseEvent): MouseEvent;
	mouseWheelMoved(event: MouseWheelEvent): MouseWheelEvent;
	keyPressed(keyEvent: KeyEvent): void;
	keyReleased(keyEvent: KeyEvent): void;
	keyTyped(keyEvent: KeyEvent): void;
	draw(mainBufferProvider: MainBufferProvider, graphics: Graphics, x: number, y: number): void;
		// Draw clientUI overlays
			// processDrawComplete gets called on GPU by the gpu plugin at the end of its
			// drawing cycle, which is later on.
		// Stretch the game image if the user has that enabled
				// if IMAGE_INCOMPATIBLE the image and g2d need to be rebuilt, otherwise
				// if IMAGE_RESTORED only the g2d needs to be rebuilt
						// VolatileImage javadocs says this proactively releases the resources used by the VolatileImage
		// Draw the image onto the game canvas
		// finalImage is backed by the client buffer which will change soon. make a copy
		// so that callbacks can safely use it later from threads.
	private screenshot(src: Image): Image;
		// scale source image to the size of the client ui
	drawScene(): void;
	drawAboveOverheads(): void;
	serverTick(): void;
	drawInterface(interfaceId: number, widgetItems: Array<net.runelite.api.widgets.WidgetItem>): void;
	drawLayer(layer: net.runelite.api.widgets.Widget, widgetItems: Array<net.runelite.api.widgets.WidgetItem>): void;
	onScriptCallbackEvent(scriptCallbackEvent: net.runelite.api.events.ScriptCallbackEvent): void;
	registerRenderableDrawListener(listener: RenderableDrawListener): void;
	unregisterRenderableDrawListener(listener: RenderableDrawListener): void;
	draw(renderable: Renderable, drawingUi: boolean): boolean;
	error(message: string, reason: Throwable): void;
	openUrl(url: string): void;
	isRuneLiteClientOutdated(): boolean;
}
}