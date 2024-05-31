/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="annotations/Component.d.ts" />
/// <reference path="annotations/Interface.d.ts" />
/// <reference path="widgets/WidgetInfo.d.ts" />
/// <reference path="OverlayPriority.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="Rectangle.d.ts" />
/// <reference path="OverlayPosition.d.ts" />
/// <reference path="OverlayMenuEntry.d.ts" />
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
declare namespace net.runelite.client.ui.overlay {
abstract class Overlay implements LayoutableRenderableEntity
{
Plugin plugin;
Point preferredLocation;
Dimension preferredSize;
OverlayPosition preferredPosition;
	/**
	 * The overlay priority, which determines the order the overlay renders in relative
	 * to other overlays.
	 */
boolean resizable;
	/**
	 * Whether this overlay can be dragged onto other overlays &amp; have
	 * other overlays dragged onto it.
	 */
boolean dragTargetable;
	/**
	 * Whether this overlay can be moved with alt
	 */
	/**
	 * Whether this overlay can be moved to a snap corner
	 * and have its preferredPosition changed
	 */
Overlay() 
Overlay(Plugin plugin) 
	setPriority(priority: number): void;
	setPriority(overlayPriority: OverlayPriority): void;
	/**
	 * Overlay name, used for saving the overlay, needs to be unique
	 *
	 * @return overlay name
	 */
	getName(): string;
	/**
	 * Configure to draw this overlay after the given interface is drawn. Except
	 * in rare circumstances, you probably also want to {@link #setLayer(OverlayLayer)} to
	 * {@link OverlayLayer#MANUAL} to avoid the overlay being drawn a 2nd time during the
	 * default {@link OverlayLayer#UNDER_WIDGETS} pass.
	 * @param interfaceId The interface id
	 * @see net.runelite.api.widgets.WidgetID
	 */
	private drawAfterInterface(interfaceId: number): void;
	/**
	 * Configure to draw this overlay after the given layer is drawn. Except
	 * in rare circumstances, you probably also want to {@link #setLayer(OverlayLayer)} to
	 * {@link OverlayLayer#MANUAL} to avoid the overlay being drawn a 2nd time during the
	 * default {@link OverlayLayer#UNDER_WIDGETS} pass.
	 *
	 * The layer must be a widget of {@link net.runelite.api.widgets.WidgetType} {@link net.runelite.api.widgets.WidgetType#LAYER}
	 * @param groupId The widget group id
	 * @param childId The widget child id
	 * @see net.runelite.api.widgets.WidgetID
	 */
	private drawAfterLayer(groupId: number, childId: number): void;
	/**
	 * Configure to draw this overlay after the given layer is drawn. Except
	 * in rare circumstances, you probably also want to {@link #setLayer(OverlayLayer)} to
	 * {@link OverlayLayer#MANUAL} to avoid the overlay being drawn a 2nd time during the
	 * default {@link OverlayLayer#UNDER_WIDGETS} pass.
	 *
	 * The layer must be a widget of {@link net.runelite.api.widgets.WidgetType} {@link net.runelite.api.widgets.WidgetType#LAYER}
	 * @param layer The layer
	 * @see WidgetInfo
	 */
/** @deprecated */
	private drawAfterLayer(layer: net.runelite.api.widgets.WidgetInfo): void;
	/**
	 * Configure to draw this overlay after the given layer is drawn. Except
	 * in rare circumstances, you probably also want to {@link #setLayer(OverlayLayer)} to
	 * {@link OverlayLayer#MANUAL} to avoid the overlay being drawn a 2nd time during the
	 * default {@link OverlayLayer#UNDER_WIDGETS} pass.
	 *
	 * The layer must be a widget of {@link net.runelite.api.widgets.WidgetType} {@link net.runelite.api.widgets.WidgetType#LAYER}
	 * @param component The layer
	 * @see WidgetInfo
	 */
	private drawAfterLayer(component: number): void;
	onMouseOver(): void;
	/**
	 * Called when an overlay is dragged onto this, if dragTargetable is true.
	 * Return true to consume the mouse event and prevent the other
	 * overlay from being moved
	 *
	 * @param other the overlay being dragged
	 * @return
	 */
	onDrag(other: Overlay): boolean;
	/**
	 * Get the parent bounds for overlay dragging. The overlay will
	 * not be allowed to be moved outside of the parent bounds.
	 * @return
	 */
	getParentBounds(): Rectangle | null;
	revalidate(): void;
	setPosition(position: OverlayPosition): void;
	addMenuEntry(action: MenuAction, option: string, target: string): OverlayMenuEntry;
	addMenuEntry(action: MenuAction, option: string, target: string, callback: Consumer<MenuEntry>): OverlayMenuEntry;
	removeMenuEntry(action: MenuAction, option: string, target: string): void;
}
}