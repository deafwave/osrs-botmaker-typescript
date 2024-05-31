/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="EquipmentInventorySlot/AMMO.d.ts" />
/// <reference path="EquipmentInventorySlot/AMULET.d.ts" />
/// <reference path="EquipmentInventorySlot/BODY.d.ts" />
/// <reference path="EquipmentInventorySlot/BOOTS.d.ts" />
/// <reference path="EquipmentInventorySlot/CAPE.d.ts" />
/// <reference path="EquipmentInventorySlot/GLOVES.d.ts" />
/// <reference path="EquipmentInventorySlot/HEAD.d.ts" />
/// <reference path="EquipmentInventorySlot/LEGS.d.ts" />
/// <reference path="EquipmentInventorySlot/RING.d.ts" />
/// <reference path="EquipmentInventorySlot/SHIELD.d.ts" />
/// <reference path="EquipmentInventorySlot/WEAPON.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="ItemID/*.d.ts" />
/// <reference path="Perspective.d.ts" />
/// <reference path="ScriptID.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="annotations/Varbit.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="ClueScroll implements LocationClueScroll.d.ts" />
/// <reference path=""Beckon.d.ts" />
/// <reference path=""Kharazi.d.ts" />
/// <reference path="new.d.ts" />
/// <reference path="ClueScrollPlugin.d.ts" />
/// <reference path="PanelComponent.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="EmoteClue.d.ts" />
/*
 * Copyright (c) 2018, Lotto <https://github.com/devLotto>
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
export class EmoteClue extends ClueScroll implements LocationClueScroll
{
ItemVariationMapping.getVariations(SLAYER_HELMET).stream() 
.map(ItemRequirements::item) 
.toArray(SingleItemRequirement[]::new)); 
ItemVariationMapping.getVariations(RING_OF_WEALTH).stream() 
.map(ItemRequirements::item) 
.toArray(SingleItemRequirement[]::new)); 
ItemVariationMapping.getVariations(PHARAOHS_SCEPTRE).stream() 
.map(ItemRequirements::item) 
.toArray(SingleItemRequirement[]::new)); 
Stream.of( ItemVariationMapping.getVariations(TEAM1_CAPE).stream(), Stream.of(TEAM_CAPE_I, TEAM_CAPE_X, TEAM_CAPE_ZERO)) 
.reduce(Stream::concat) 
.orElseGet(Stream::empty) 
.map(ItemRequirements::item) 
.toArray(SingleItemRequirement[]::new)); 
Stream.of( ItemVariationMapping.getVariations(BOW_OF_FAERDHINEN_INACTIVE).stream(), Stream.of(CRYSTAL_BOW, CRYSTAL_BOW_24123)) 
.reduce(Stream::concat) 
.orElseGet(Stream::empty) 
.filter(itemId -> itemId != BOW_OF_FAERDHINEN_INACTIVE) 
.map(ItemRequirements::item) 
.toArray(SingleItemRequirement[]::new)); 
	static EmoteClue(on: "Beckon, Jungle": "Kharazi,  NORTHEAST_CORNER_OF_THE_KHARAZI_JUNGLE, WorldPoint(2954: new,  2933,  0): new;
String text;
String locationName;
STASHUnit stashUnit;
WorldPoint location;
Emote firstEmote;
Emote secondEmote;
ItemRequirement[] itemRequirements;
EmoteClue(String text, String locationName, STASHUnit stashUnit, WorldPoint location, Emote firstEmote, ItemRequirement... itemRequirements) 
EmoteClue(String text, String locationName, STASHUnit stashUnit, WorldPoint location, Enemy enemy, Emote firstEmote, ItemRequirement... itemRequirements) 
EmoteClue(String text, String locationName, STASHUnit stashUnit, WorldPoint location, Emote firstEmote, Emote secondEmote, ItemRequirement... itemRequirements) 
EmoteClue(String text, String locationName, STASHUnit stashUnit, WorldPoint location, Emote firstEmote, Emote secondEmote, int firePitVarbitId, ItemRequirement... itemRequirements) 
	getLocation(plugin: ClueScrollPlugin): net.runelite.api.coords.WorldPoint;
	makeOverlayHint(panelComponent: PanelComponent, plugin: ClueScrollPlugin): void;
			// If equipment is null, the player is wearing nothing
			// If inventory is null, the player has nothing in their inventory
	makeWorldOverlayHint(graphics: Graphics2D, plugin: ClueScrollPlugin): void;
	getConfigKeys(): number[];
	makeSTASHOverlay(graphics: Graphics2D, plugin: ClueScrollPlugin): void;
	static forText(text: string): EmoteClue;
}
}