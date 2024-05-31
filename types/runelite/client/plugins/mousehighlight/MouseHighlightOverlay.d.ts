/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="VarClientInt.d.ts" />
/// <reference path="widgets/InterfaceID.d.ts" />
/// <reference path="widgets/WidgetUtil.d.ts" />
/// <reference path="Overlay.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/*
 * Copyright (c) 2017, Aria <aria@ar1as.space>
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
declare namespace net.runelite.client.plugins.mousehighlight {
export class MouseHighlightOverlay extends Overlay
{
	/**
	 * Menu types which are on widgets.
	 */
MenuAction.WIDGET_TYPE_1,
MenuAction.WIDGET_TARGET,
MenuAction.WIDGET_CLOSE,
MenuAction.WIDGET_TYPE_4,
MenuAction.WIDGET_TYPE_5,
MenuAction.WIDGET_CONTINUE,
MenuAction.ITEM_USE_ON_ITEM,
MenuAction.WIDGET_USE_ON_ITEM,
MenuAction.ITEM_FIRST_OPTION,
MenuAction.ITEM_SECOND_OPTION,
MenuAction.ITEM_THIRD_OPTION,
MenuAction.ITEM_FOURTH_OPTION,
MenuAction.ITEM_FIFTH_OPTION,
MenuAction.ITEM_USE,
MenuAction.WIDGET_FIRST_OPTION,
MenuAction.WIDGET_SECOND_OPTION,
MenuAction.WIDGET_THIRD_OPTION,
MenuAction.WIDGET_FOURTH_OPTION,
MenuAction.WIDGET_FIFTH_OPTION,
MenuAction.EXAMINE_ITEM,
MenuAction.WIDGET_TARGET_ON_WIDGET,
MenuAction.CC_OP_LOW_PRIORITY,
MenuAction.CC_OP
);
TooltipManager tooltipManager;
Client client;
MouseHighlightConfig config;
MouseHighlightOverlay(Client client, TooltipManager tooltipManager, MouseHighlightConfig config) 
		// additionally allow tooltips above the full screen world map and welcome screen
	render(graphics: Graphics2D): Dimension;
			// These are always right click only
		// Trivial options that don't need to be highlighted, add more as they appear.
				// Hide overlay on sliding puzzle boxes
		// If this varc is set, a tooltip will be displayed soon
		// If this varc is set, a tooltip is already being displayed
}
}