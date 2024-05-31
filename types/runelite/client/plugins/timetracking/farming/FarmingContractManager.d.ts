/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="NpcID.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="widgets/ComponentID.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="Produce.d.ts" />
/// <reference path="Tab.d.ts" />
/// <reference path="FarmingPatch.d.ts" />
/*
 * Copyright (c) 2019, Koekkruimels <https://github.com/koekkruimels>
 * Copyright (c) 2020, melky <https://github.com/melkypie>
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
declare namespace net.runelite.client.plugins.timetracking.farming {
export class FarmingContractManager
{
CropState contractCropState;
Client client;
ItemManager itemManager;
TimeTrackingConfig config;
TimeTrackingPlugin plugin;
FarmingWorld farmingWorld;
FarmingTracker farmingTracker;
InfoBoxManager infoBoxManager;
ConfigManager configManager;
FarmingContractInfoBox infoBox;
long completionTime;
	private static setContract(contract: Produce): void;
	hasContract(): boolean;
	getContractTab(): Tab | null;
	getContractName(): string | null;
	shouldHighlightFarmingTabPanel(patch: FarmingPatch): boolean;
	loadContractFromConfig(): void;
	updateData(loc: net.runelite.api.coords.WorldPoint): boolean;
	private handleInfoBox(): void;
	private handleGuildmasterJaneWidgetDialog(): void;
	private handleContractState(): void;
					// Don't report the empty state if there's a dead or diseased one
					// Don't let this run into the "Completed" section!
			// Herbs always turn into ANYHERB when dead, so let them through.
				// Ignore if crop is dead but there's another one in progress (either normal or diseased)
				// Ignore if crop is diseased but there's another patch in progress
	private getStoredContract(): Produce | null;
	private setStoredContract(contract: Produce): void;
}
}