/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="EnumComposition.d.ts" />
/// <reference path="EnumID.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="annotations/Varbit.d.ts" />
/// <reference path="widgets/WidgetItem.d.ts" />
/// <reference path="WidgetItemOverlay.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/*
 * Copyright (c) 2017, Tyler <http://github.com/tylerthardy>
 * Copyright (c) 2022, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.runepouch {
export class RunepouchOverlay extends WidgetItemOverlay
{
Client client;
RunepouchConfig config;
TooltipManager tooltipManager;
ItemManager itemManager;
RunepouchOverlay(Client client, RunepouchConfig config, TooltipManager tooltipManager, ItemManager itemManager) 
	renderItemOverlay(graphics: Graphics2D, itemId: number, widgetItem: net.runelite.api.widgets.WidgetItem): void;
	private renderList(graphics: Graphics2D, widgetItem: net.runelite.api.widgets.WidgetItem, runeIds: number[], amounts: number[]): void;
	private renderGrid(graphics: Graphics2D, widgetItem: net.runelite.api.widgets.WidgetItem, runeIds: number[], amounts: number[], numRunes: number): void;
				// with <1k runes, the bar is shown in red with 100 increments
				// with >=1k runes, the bar is shown in 1000 increments capped at 10k
	private getRuneImage(runeId: number): BufferedImage;
	private static formatNumber(amount: number): string;
}
}