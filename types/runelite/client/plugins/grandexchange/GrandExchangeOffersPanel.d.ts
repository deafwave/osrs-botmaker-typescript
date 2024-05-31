/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="GrandExchangeOffer.d.ts" />
/// <reference path="GrandExchangeOfferState.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="BufferedImage.d.ts" />
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
export class GrandExchangeOffersPanel extends JPanel
{
GrandExchangePlugin grandExchangePlugin;
	/*  The offers container, this will hold all the individual ge offers panels */
	/*  The center panel, this holds either the error panel or the offers container */
GrandExchangeOffersPanel(GrandExchangePlugin grandExchangePlugin) 
		/* This panel wraps the offers panel and limits its height */
		/* This panel wraps the error panel and limits its height */
		/*  The error panel, this displays an error message */
	resetOffers(): void;
	updateOffer(item: ItemComposition, itemImage: BufferedImage, newOffer: GrandExchangeOffer, slot: number): void;
		/* If slot was previously filled, and is now empty, remove it from the list */
		/* If slot was empty, and is now filled, add it to the list */
	/**
	 * Reset the border for the first offer slot.
	 */
	private removeTopMargin(): void;
	/**
	 * This method calculates the amount of empty ge offer slots, if all slots are empty,
	 * it shows the error panel.
	 */
	private updateEmptyOffersPanel(): void;
}
}