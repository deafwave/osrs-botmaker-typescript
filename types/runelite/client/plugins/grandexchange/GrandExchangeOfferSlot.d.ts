/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="GrandExchangeOffer.d.ts" />
/// <reference path="GrandExchangeOfferState/BOUGHT.d.ts" />
/// <reference path="GrandExchangeOfferState/BUYING.d.ts" />
/// <reference path="GrandExchangeOfferState/CANCELLED_BUY.d.ts" />
/// <reference path="GrandExchangeOfferState/CANCELLED_SELL.d.ts" />
/// <reference path="GrandExchangeOfferState/EMPTY.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/// <reference path="Color.d.ts" />
/*
 * Copyright (c) 2018, SomeoneWithAnInternetConnection
 * Copyright (c) 2018, Psikoi <https://github.com/psikoi>
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
declare namespace net.runelite.client.plugins.grandexchange {
export class GrandExchangeOfferSlot extends JPanel
{
ImageIcon RIGHT_ARROW_ICON;
ImageIcon LEFT_ARROW_ICON;
GrandExchangePlugin grandExchangePlugin;
	/**
	 * This (sub)panel is used for each GE slot displayed
	 * in the sidebar
	 */
GrandExchangeOfferSlot(GrandExchangePlugin grandExchangePlugin) 
	updateOffer(offerItem: ItemComposition, itemImage: BufferedImage, newOffer: GrandExchangeOffer): void;
			/* Couldn't set the tooltip for the container panel as the children override it, so I'm setting
			 * the tooltips on the children instead. */
	private htmlTooltip(value: string): string;
	private htmlLabel(key: string, value: string): string;
	private switchPanel(): void;
	private getProgressColor(offer: GrandExchangeOffer): Color;
}
}