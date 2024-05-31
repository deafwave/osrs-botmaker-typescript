/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="ItemPrice.d.ts" />
/*
 * Copyright (c) 2018, Seth <https://github.com/sethtroll>
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
/**
 * This panel holds the search section of the Grand Exchange Plugin.
 * It should display a search bar and either item results or a error panel.
 */
export class GrandExchangeSearchPanel extends JPanel
{
ClientThread clientThread;
ItemManager itemManager;
ScheduledExecutorService executor;
RuneLiteConfig runeLiteConfig;
GrandExchangePlugin grandExchangePlugin;
	/*  The results container, this will hold all the individual ge item panels */
	/*  The center panel, this holds either the error panel or the results container */
	/*  The error panel, this displays an error message */
GrandExchangeSearchPanel(ClientThread clientThread, ItemManager itemManager, ScheduledExecutorService executor, RuneLiteConfig runeLiteConfig, GrandExchangePlugin grandExchangePlugin) 
		/*  The main container, this holds the search bar and the center panel */
		/* This panel wraps the results panel and guarantees the scrolling behaviour */
		/*  The results wrapper, this scrolling panel wraps the results container */
		/* This panel wraps the error panel and limits its height */
	priceLookup(item: string): void;
	private updateSearch(): boolean;
		// Input is not empty, add searching label
	private priceLookup(exactMatch: boolean): void;
		// move to client thread to lookup item composition
	private processResult(result: Array<ItemPrice>, lookup: string, exactMatch: boolean): void;
				// Cap search
			// If using hotkey to lookup item, stop after finding match.
				/*
				 */
			// if exactMatch was set, then it came from the applet, so don't lose focus
			// Remove searching label after search is complete
}
}