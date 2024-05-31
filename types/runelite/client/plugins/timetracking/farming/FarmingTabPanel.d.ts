/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="TabContentPanel.d.ts" />
/// <reference path="CompostState.d.ts" />
/// <reference path="AsyncBufferedImage.d.ts" />
/*
 * Copyright (c) 2018 Abex
 * Copyright (c) 2018, Psikoi <https://github.com/psikoi>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *     list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 *  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 *  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 *  ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 *  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 *  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.plugins.timetracking.farming {
export class FarmingTabPanel extends TabContentPanel
{
FarmingTracker farmingTracker;
CompostTracker compostTracker;
PaymentTracker paymentTracker;
ItemManager itemManager;
ConfigManager configManager;
TimeTrackingConfig config;
List<TimeablePanel<FarmingPatch>> patchPanels;
FarmingContractManager farmingContractManager;
FarmingTabPanel( FarmingTracker farmingTracker, CompostTracker compostTracker, PaymentTracker paymentTracker, ItemManager itemManager, ConfigManager configManager, TimeTrackingConfig config, Set<FarmingPatch> patches, FarmingContractManager farmingContractManager ) 
			/* Show labels to subdivide tabs into sections */
			// Set toggle state of notification menu on icon click;
			/* This is a weird hack to remove the top border on the first tracker of every tab */
	getUpdateInterval(): number;
	update(): void;
				/* Hide any fully grown weeds' progress bar. */
	private getPatchImage(compostState: CompostState, protected_: boolean): AsyncBufferedImage;
	private getPatchTooltip(compostState: CompostState, protected_: boolean): string;
}
}