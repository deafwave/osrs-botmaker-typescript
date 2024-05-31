/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="WorldRegion.d.ts" />
/// <reference path="ImageIcon.d.ts" />
/*
 * Copyright (c) 2018, Psikoi <https://github.com/Psikoi>
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
declare namespace net.runelite.client.plugins.worldhopper {
export class WorldTableRow extends JPanel
{
ImageIcon FLAG_AUS;
ImageIcon FLAG_UK;
ImageIcon FLAG_US;
ImageIcon FLAG_US_EAST;
ImageIcon FLAG_US_WEST;
ImageIcon FLAG_GER;
World world;
BiConsumer<World, Boolean> onFavorite;
int playerCount;
int worldLocation; // from enum WORLD_LOCATIONS
JLabel worldField;
JLabel playerCountField;
JLabel activityField;
JLabel pingField;
int ping;
Color lastBackground;
WorldTableRow(World world, boolean current, boolean favorite, Integer ping, Consumer<World> onSelect, BiConsumer<World, Boolean> onFavorite, int worldLocation) 
	setFavoriteMenu(favorite: boolean): void;
	updatePlayerCount(playerCount: number): void;
	private static playerCountString(playerCount: number): string;
	setPing(ping: number): void;
	hidePing(): void;
	showPing(): void;
	getPing(): number;
	recolour(current: boolean): void;
	/**
	 * Builds the players list field (containing the amount of players logged in that world).
	 */
	private buildPlayersField(): JPanel;
	private buildPingField(ping: number): JPanel;
	/**
	 * Builds the activity list field (containing that world's activity/theme).
	 */
	private buildActivityField(): JPanel;
			// Pass up events - https://stackoverflow.com/a/14932443
	/**
	 * Builds the world list field (containing the country's flag and the world index).
	 */
	private buildWorldField(): JPanel;
	private static getFlag(region: WorldRegion, worldLocation: number): ImageIcon;
}
}