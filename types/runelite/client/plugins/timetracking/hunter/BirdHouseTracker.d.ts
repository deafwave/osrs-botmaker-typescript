/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="BirdHouseTabPanel.d.ts" />
/// <reference path="BirdHouseData>.d.ts" />
/*
 * Copyright (c) 2018 Abex
 * Copyright (c) 2018, Daniel Teo <https://github.com/takuyakanbr>
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
declare namespace net.runelite.client.plugins.timetracking.hunter {
export class BirdHouseTracker
{
	// average time taken to harvest 10 birds, in seconds
Client client;
ItemManager itemManager;
ConfigManager configManager;
TimeTrackingConfig config;
Notifier notifier;
	/**
	 * The time at which all the bird houses will be ready to be dismantled,
	 * or {@code -1} if we have no data about any of the bird house spaces.
	 */
BirdHouseTracker(Client client, ItemManager itemManager, ConfigManager configManager, TimeTrackingConfig config, Notifier notifier) 
	createBirdHouseTabPanel(): BirdHouseTabPanel;
	loadFromConfig(): void;
						// ignored
	/**
	 * Updates tracker data if player is within range of any bird house. Returns true if any data was changed.
	 */
	updateData(location: net.runelite.api.coords.WorldPoint): boolean;
				// update data if there isn't one, or if the varp doesn't match
			// Prevent the resetting of bird house data that could occur if the varps have not been updated yet
			// after the player enters the region. We assume that players would generally have 3 or 4 bird houses
			// built at any time, and that dropping from 3/4 to 0 built bird houses is not normally possible.
	/**
	 * Checks if the bird houses have become ready to be dismantled,
	 * and sends a notification if required.
	 */
	checkCompletion(): boolean;
	/**
	 * Updates the overall completion time of the bird houses.
	 * @see #completionTime
	 */
	private updateCompletionTime(): void;
	private saveToConfig(Map<BirdHouseSpace, updatedData: BirdHouseData>): void;
}
}