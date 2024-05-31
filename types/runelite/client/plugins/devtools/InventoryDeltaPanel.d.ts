/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="JPanel implements Scrollable.d.ts" />
/// <reference path="InventoryItem.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="JLabel.d.ts" />
/// <reference path="Rectangle.d.ts" />
/*
 * Copyright (c) 2020, TheStonedTurtle <https://github.com/TheStonedTurtle>
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
declare namespace net.runelite.client.plugins.devtools {
export class InventoryDeltaPanel extends JPanel implements Scrollable
{
ItemManager itemManager;
InventoryDeltaPanel(ItemManager itemManager) 
		// Listen for resize events
				// Account for container and slot padding
	clear(): void;
	displayItems(items: InventoryItem[], added: InventoryItem[], removed: InventoryItem[]): void;
			// Add hover effect
	private addItemToPanel(inventoryItem: InventoryItem, panel: JPanel): JLabel;
	getPreferredScrollableViewportSize(): Dimension;
	getScrollableUnitIncrement(visibleRect: Rectangle, orientation: number, direction: number): number;
	getScrollableBlockIncrement(visibleRect: Rectangle, orientation: number, direction: number): number;
	getScrollableTracksViewportWidth(): boolean;
	getScrollableTracksViewportHeight(): boolean;
}
}