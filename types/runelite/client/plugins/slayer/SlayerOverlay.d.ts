/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="widgets/WidgetItem.d.ts" />
/// <reference path="WidgetItemOverlay.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/*
 * Copyright (c) 2017, Seth <Sethtroll3@gmail.com>
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
declare namespace net.runelite.client.plugins.slayer {
export class SlayerOverlay extends WidgetItemOverlay
{
ItemVariationMapping.getVariations(ItemID.SLAYER_HELMET).stream(), ItemVariationMapping.getVariations(ItemID.SLAYER_RING_8).stream(), Stream.of(ItemID.ENCHANTED_GEM, ItemID.ETERNAL_GEM)) 
.reduce(Stream::concat) 
.orElseGet(Stream::empty) 
.collect(Collectors.toSet()); 
SlayerConfig config;
SlayerPlugin plugin;
SlayerOverlay(SlayerPlugin plugin, SlayerConfig config) 
	renderItemOverlay(graphics: Graphics2D, itemId: number, widgetItem: net.runelite.api.widgets.WidgetItem): void;
		// Draw the counter in the bottom left for equipment, and top left for jewelry
}
}