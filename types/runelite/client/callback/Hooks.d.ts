/// <reference path="../../java/index.d.ts" />
/// <reference path="../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="File> valueType().d.ts" />
/// <reference path="hooks/Callbacks.d.ts" />
/// <reference path="AbstractModule.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="annotations/Component.d.ts" />
/// <reference path="annotations/Interface.d.ts" />
/// <reference path="annotations/VarCInt.d.ts" />
/// <reference path="annotations/VarCStr.d.ts" />
/// <reference path="annotations/Varbit.d.ts" />
/// <reference path="annotations/Varp.d.ts" />
/// <reference path="annotations/VisibleForDevtools.d.ts" />
/// <reference path="clan/ClanChannel.d.ts" />
/// <reference path="clan/ClanID.d.ts" />
/// <reference path="clan/ClanSettings.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="dbtable/DBRowConfig.d.ts" />
/// <reference path="hooks/DrawCallbacks.d.ts" />
/// <reference path="vars/AccountType.d.ts" />
/// <reference path="widgets/ItemQuantityMode.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetConfig.d.ts" />
/// <reference path="widgets/WidgetInfo.d.ts" />
/// <reference path="widgets/WidgetModalMode.d.ts" />
/// <reference path="worldmap/MapElementConfig.d.ts" />
/// <reference path="worldmap/WorldMap.d.ts" />
/// <reference path="GameEngine.d.ts" />
/// <reference path="MainBufferProvider.d.ts" />
/// <reference path="Renderable.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="events/BeforeRender.d.ts" />
/// <reference path="events/FakeXpDrop.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/PostClientTick.d.ts" />
/// <reference path="events/ScriptCallbackEvent.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/WidgetItem.d.ts" />
/// <reference path="worldmap/WorldMapRenderer.d.ts" />
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
	/**
	 * Get the Graphics2D for the MainBufferProvider image
	 * This caches the Graphics2D instance so it can be reused
	 * @param mainBufferProvider
	 * @return
	 */
			// tick pending scheduled tasks
			// cull infoboxes
	/**
	 * When the world map opens it loads about ~100mb of data into memory, which
	 * represents about half of the total memory allocated by the client.
	 * This gets cached and never released, which causes GC pressure which can affect
	 * performance. This method reinitializes the world map cache, which allows the
	 * data to be garbage collected, and causes the map data from disk each time
	 * is it opened.
	 */
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
		// scale source image to the size of the client ui
},},},},},},},},},},},},},},},},}