/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="ItemID/*.d.ts" />
/// <reference path="ClueScroll implements NpcClueScroll.d.ts" />
/// <reference path=""A.d.ts" />
/// <reference path="a.d.ts" />
/// <reference path="found.d.ts" />
/// <reference path="any("Dragon.d.ts" />
/// <reference path="new.d.ts" />
/// <reference path="SingleItemRequirement.d.ts" />
/// <reference path="ItemRequirement....d.ts" />
/// <reference path="AnyRequirementCollection.d.ts" />
/// <reference path="RangeItemRequirement.d.ts" />
/// <reference path="PanelComponent.d.ts" />
/// <reference path="ClueScrollPlugin.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="FaloTheBardClue.d.ts" />
/*
 * Copyright (c) 2019, Twiglet1022 <https://github.com/Twiglet1022>
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
declare namespace net.runelite.client.plugins.cluescrolls.clues {
export class FaloTheBardClue extends ClueScroll implements NpcClueScroll
{
	static FaloTheBardClue(blood: "A, strong: a, on: found, scimitar": any("Dragon,  item(DRAGON_SCIMITAR): new;
);
	private static item(itemId: number): SingleItemRequirement;
	private static any(name: string, requirements: ItemRequirement...): AnyRequirementCollection;
	private static range(startItemId: number, endItemId: number): RangeItemRequirement;
	private static range(name: string, startItemId: number, endItemId: number): RangeItemRequirement;
String text;
ItemRequirement[] itemRequirements;
FaloTheBardClue(String text, ItemRequirement... itemRequirements) 
	makeOverlayHint(panelComponent: PanelComponent, plugin: ClueScrollPlugin): void;
		// If inventory is null, the player has nothing in their inventory
	makeWorldOverlayHint(graphics: Graphics2D, plugin: ClueScrollPlugin): void;
	getNpcs(plugin: ClueScrollPlugin): string[];
	getConfigKeys(): number[];
	static forText(text: string): FaloTheBardClue;
}
}