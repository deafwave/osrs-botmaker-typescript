/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="EquipmentInventorySlot.d.ts" />
/// <reference path="Item.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="TileObject.d.ts" />
/// <reference path="ClueScroll implements NpcClueScroll.d.ts" />
/// <reference path="NamedObjectClueScroll.d.ts" />
/// <reference path=""i.d.ts" />
/// <reference path="new.d.ts" />
/// <reference path="PanelComponent.d.ts" />
/// <reference path="ClueScrollPlugin.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/// <reference path="ItemRequirement.d.ts" />
/// <reference path="LineComponent.d.ts" />
/// <reference path="SkillChallengeClue.d.ts" />
/*
 * Copyright (c) 2019 Hydrox6 <ikada@protonmail.ch>
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
export class SkillChallengeClue extends ClueScroll implements NpcClueScroll, NamedObjectClueScroll
{
enum ChallengeType
item(ItemID.BRONZE_PICKAXE), item(ItemID.IRON_PICKAXE), item(ItemID.STEEL_PICKAXE), item(ItemID.BLACK_PICKAXE), item(ItemID.MITHRIL_PICKAXE), item(ItemID.ADAMANT_PICKAXE), item(ItemID.RUNE_PICKAXE), item(ItemID.DRAGON_PICKAXE), item(ItemID.DRAGON_PICKAXE_12797), item(ItemID.DRAGON_PICKAXE_OR), item(ItemID.DRAGON_PICKAXE_OR_25376), item(ItemID.INFERNAL_PICKAXE), item(ItemID.INFERNAL_PICKAXE_OR), item(ItemID.INFERNAL_PICKAXE_UNCHARGED), item(ItemID.INFERNAL_PICKAXE_UNCHARGED_25369), item(ItemID.GILDED_PICKAXE), item(ItemID._3RD_AGE_PICKAXE), item(ItemID.CRYSTAL_PICKAXE), item(ItemID.CRYSTAL_PICKAXE_INACTIVE), item(ItemID.TRAILBLAZER_PICKAXE) 
);
item(ItemID.BRONZE_AXE), item(ItemID.BRONZE_FELLING_AXE), item(ItemID.IRON_AXE), item(ItemID.IRON_FELLING_AXE), item(ItemID.STEEL_AXE), item(ItemID.STEEL_FELLING_AXE), item(ItemID.BLACK_AXE), item(ItemID.BLACK_FELLING_AXE), item(ItemID.MITHRIL_AXE), item(ItemID.MITHRIL_FELLING_AXE), item(ItemID.ADAMANT_AXE), item(ItemID.ADAMANT_FELLING_AXE), item(ItemID.RUNE_AXE), item(ItemID.RUNE_FELLING_AXE), item(ItemID.DRAGON_AXE), item(ItemID.DRAGON_AXE_OR), item(ItemID.DRAGON_FELLING_AXE), item(ItemID.INFERNAL_AXE), item(ItemID.INFERNAL_AXE_OR), item(ItemID.INFERNAL_AXE_UNCHARGED), item(ItemID.INFERNAL_AXE_UNCHARGED_25371), item(ItemID.GILDED_AXE), item(ItemID._3RD_AGE_AXE), item(ItemID._3RD_AGE_FELLING_AXE), item(ItemID.CRYSTAL_AXE), item(ItemID.CRYSTAL_AXE_INACTIVE), item(ItemID.CRYSTAL_FELLING_AXE), item(ItemID.CRYSTAL_FELLING_AXE_INACTIVE), item(ItemID.TRAILBLAZER_AXE) 
);
item(ItemID.HARPOON), item(ItemID.BARBTAIL_HARPOON), item(ItemID.DRAGON_HARPOON), item(ItemID.DRAGON_HARPOON_OR), item(ItemID.INFERNAL_HARPOON), item(ItemID.INFERNAL_HARPOON_OR), item(ItemID.INFERNAL_HARPOON_UNCHARGED), item(ItemID.INFERNAL_HARPOON_UNCHARGED_25367), item(ItemID.CRYSTAL_HARPOON), item(ItemID.CRYSTAL_HARPOON_INACTIVE), item(ItemID.TRAILBLAZER_HARPOON) 
);
item(ItemID.HAMMER), item(ItemID.IMCANDO_HAMMER) 
);
any("" /* graceful hood   */, ItemVariationMapping.getVariations(ItemID.GRACEFUL_HOOD).stream().map(ItemRequirements::item).toArray(SingleItemRequirement[]::new)), any("" /* graceful top    */, ItemVariationMapping.getVariations(ItemID.GRACEFUL_TOP).stream().map(ItemRequirements::item).toArray(SingleItemRequirement[]::new)), any("" /* graceful legs   */, ItemVariationMapping.getVariations(ItemID.GRACEFUL_LEGS).stream().map(ItemRequirements::item).toArray(SingleItemRequirement[]::new)), any("" /* graceful gloves */, ItemVariationMapping.getVariations(ItemID.GRACEFUL_GLOVES).stream().map(ItemRequirements::item).toArray(SingleItemRequirement[]::new)), any("" /* graceful boots  */, ItemVariationMapping.getVariations(ItemID.GRACEFUL_BOOTS).stream().map(ItemRequirements::item).toArray(SingleItemRequirement[]::new)), any("" /* graceful cape   */, Stream.of( ItemVariationMapping.getVariations(ItemID.GRACEFUL_CAPE).stream(), ItemVariationMapping.getVariations(ItemID.AGILITY_CAPE).stream(), ItemVariationMapping.getVariations(ItemID.MAX_CAPE).stream()) 
.reduce(Stream::concat) 
.orElseGet(Stream::empty) 
.map(ItemRequirements::item).toArray(SingleItemRequirement[]::new)) 
);
		// Charlie Tasks
		// Elite Sherlock Tasks
	static SkillChallengeClue(ChallengeType.CHARLIE, need: "i,  item(ItemID.PIKE): new;
.reduce(Stream::concat) 
.orElseGet(Stream::empty) 
.map(ItemRequirements::item) 
		// Master Sherlock Tasks
.toArray(SingleItemRequirement[]::new))), new SkillChallengeClue("Catch a black warlock.", any("Butterfly Net", item(ItemID.BUTTERFLY_NET), item(ItemID.MAGIC_BUTTERFLY_NET))), new SkillChallengeClue("Catch a red chinchompa.", item(ItemID.BOX_TRAP)), new SkillChallengeClue("Mine a mithril ore.", ANY_PICKAXE), new SkillChallengeClue("Smith a mithril 2h sword.", ANY_HAMMER, xOfItem(ItemID.MITHRIL_BAR, 3)), new SkillChallengeClue("Catch a raw shark.", ANY_HARPOON), new SkillChallengeClue("Cut a yew log.", ANY_AXE), new SkillChallengeClue("Burn a yew log.", item(ItemID.YEW_LOGS), item(ItemID.TINDERBOX)), new SkillChallengeClue("Cook a swordfish", "cook a swordfish", item(ItemID.RAW_SWORDFISH)), new SkillChallengeClue("Craft multiple cosmic runes from a single essence.", any("Pure essence or Daeyalt essence", item(ItemID.PURE_ESSENCE), item(ItemID.DAEYALT_ESSENCE))), new SkillChallengeClue("Plant a watermelon seed.", item(ItemID.RAKE), item(ItemID.SEED_DIBBER), xOfItem(ItemID.WATERMELON_SEED, 3)), new SkillChallengeClue("Activate the Chivalry prayer."), new SkillChallengeClue("Smith a tier 2 or above Shayzien platebody.", "smith a tier 2 or above shayzien platebody.", ANY_HAMMER, xOfItem(ItemID.LOVAKITE_BAR, 4)), new SkillChallengeClue("Equip an abyssal whip in front of the abyssal demons of the Slayer Tower.", true, any("Abyssal Whip", item(ItemID.ABYSSAL_WHIP), item(ItemID.FROZEN_ABYSSAL_WHIP), item(ItemID.VOLCANIC_ABYSSAL_WHIP), item(ItemID.ABYSSAL_WHIP_OR), item(ItemID.ABYSSAL_TENTACLE), item(ItemID.ABYSSAL_TENTACLE_OR))), new SkillChallengeClue("Smith a runite med helm.", ANY_HAMMER, item(ItemID.RUNITE_BAR)), new SkillChallengeClue("Teleport to a spirit tree you planted yourself."), new SkillChallengeClue("Create a Barrows teleport tablet.", item(ItemID.DARK_ESSENCE_BLOCK), xOfItem(ItemID.BLOOD_RUNE, 1), xOfItem(ItemID.LAW_RUNE, 2), xOfItem(ItemID.SOUL_RUNE, 2)), new SkillChallengeClue("Kill a Nechryael in the Slayer Tower.", "slay a nechryael in the slayer tower."), new SkillChallengeClue("Kill a Spiritual Mage while wearing something from their god.", "kill the spiritual, magic and godly whilst representing their own god."), new SkillChallengeClue("Create an unstrung dragonstone amulet at a furnace.", item(ItemID.GOLD_BAR), item(ItemID.DRAGONSTONE), item(ItemID.AMULET_MOULD)), new SkillChallengeClue("Burn a magic log.", item(ItemID.MAGIC_LOGS), item(ItemID.TINDERBOX)), new SkillChallengeClue("Burn a redwood log.", item(ItemID.REDWOOD_LOGS), item(ItemID.TINDERBOX)), new SkillChallengeClue("Complete a lap of Rellekka's Rooftop Agility Course", "complete a lap of the rellekka rooftop agility course whilst sporting the finest amount of grace.", true, A_FULL_GRACEFUL_SET), new SkillChallengeClue("Mix an anti-venom potion.", item(ItemID.ANTIDOTE4_5952), xOfItem(ItemID.ZULRAHS_SCALES, 20)), new SkillChallengeClue("Mine a piece of Runite ore", "mine a piece of runite ore whilst sporting the finest mining gear.", true, ANY_PICKAXE, all("Prospector kit", any("", item(ItemID.PROSPECTOR_HELMET), item(ItemID.GOLDEN_PROSPECTOR_HELMET)), any("", item(ItemID.PROSPECTOR_JACKET), item(ItemID.VARROCK_ARMOUR_4), item(ItemID.GOLDEN_PROSPECTOR_JACKET)), any("", item(ItemID.PROSPECTOR_LEGS), item(ItemID.GOLDEN_PROSPECTOR_LEGS)), any("", item(ItemID.PROSPECTOR_BOOTS), item(ItemID.GOLDEN_PROSPECTOR_BOOTS)))), new SkillChallengeClue("Steal a gem from the Ardougne market."), new SkillChallengeClue("Pickpocket an elf."), new SkillChallengeClue("Bind a blood rune at the blood altar.", item(ItemID.DARK_ESSENCE_FRAGMENTS)), new SkillChallengeClue("Create a ranging mix potion.", "mix a ranging mix potion.", item(ItemID.RANGING_POTION2), item(ItemID.CAVIAR)), new SkillChallengeClue("Fletch a rune dart.", item(ItemID.RUNE_DART_TIP), item(ItemID.FEATHER)), new SkillChallengeClue("Cremate a set of fiyr remains.", any("Magic or Redwood Pyre Logs", item(ItemID.MAGIC_PYRE_LOGS), item(ItemID.REDWOOD_PYRE_LOGS)), item(ItemID.TINDERBOX), item(ItemID.FIYR_REMAINS)), new SkillChallengeClue("Dissect a sacred eel.", item(ItemID.KNIFE), any("Fishing rod", item(ItemID.FISHING_ROD), item(ItemID.PEARL_FISHING_ROD)), item(ItemID.FISHING_BAIT)), new SkillChallengeClue("Kill a lizardman shaman."), new SkillChallengeClue("Catch an Anglerfish.", "angle for an anglerfish whilst sporting the finest fishing gear.", true, any("Fishing rod", item(ItemID.FISHING_ROD), item(ItemID.PEARL_FISHING_ROD)), item(ItemID.SANDWORMS), all("Angler's outfit", any("", item(ItemID.ANGLER_HAT), item(ItemID.SPIRIT_ANGLER_HEADBAND)), any("", item(ItemID.ANGLER_TOP), item(ItemID.SPIRIT_ANGLER_TOP)), any("", item(ItemID.ANGLER_WADERS), item(ItemID.SPIRIT_ANGLER_WADERS)), any("", item(ItemID.ANGLER_BOOTS), item(ItemID.SPIRIT_ANGLER_BOOTS)))), new SkillChallengeClue("Chop a redwood log.", "chop a redwood log whilst sporting the finest lumberjack gear.", true, ANY_AXE, all("Lumberjack outfit", any("", item(ItemID.LUMBERJACK_HAT), item(ItemID.FORESTRY_HAT)), any("", item(ItemID.LUMBERJACK_TOP), item(ItemID.FORESTRY_TOP)), any("", item(ItemID.LUMBERJACK_LEGS), item(ItemID.FORESTRY_LEGS)), any("", item(ItemID.LUMBERJACK_BOOTS), item(ItemID.FORESTRY_BOOTS)))), new SkillChallengeClue("Craft a light orb in the Dorgesh-Kaan bank.", item(ItemID.CAVE_GOBLIN_WIRE), item(ItemID.EMPTY_LIGHT_ORB)), new SkillChallengeClue("Kill a reanimated Abyssal Demon.", "kill a reanimated abyssal.", xOfItem(ItemID.SOUL_RUNE, 4), xOfItem(ItemID.BLOOD_RUNE, 2), any("Nature Rune x4", xOfItem(ItemID.NATURE_RUNE, 4), item(ItemID.BRYOPHYTAS_STAFF)), range("Ensouled abyssal head", ItemID.ENSOULED_ABYSSAL_HEAD, ItemID.ENSOULED_ABYSSAL_HEAD_13508)), new SkillChallengeClue("Kill a Fiyr shade inside Mort'tons shade catacombs.", any("Any Gold or Silver Shade Key", item(ItemID.GOLD_KEY_RED), item(ItemID.GOLD_KEY_BROWN), item(ItemID.GOLD_KEY_CRIMSON), item(ItemID.GOLD_KEY_BLACK), item(ItemID.GOLD_KEY_PURPLE), item(ItemID.SILVER_KEY_RED), item(ItemID.SILVER_KEY_BROWN), item(ItemID.SILVER_KEY_CRIMSON), item(ItemID.SILVER_KEY_BLACK), item(ItemID.SILVER_KEY_PURPLE))), new SkillChallengeClue("Catch a tecu salamander.", item(ItemID.ROPE), item(ItemID.SMALL_FISHING_NET)) 
);
ChallengeType type;
String challenge;
String rawChallenge;
String returnText;
ItemRequirement[] itemRequirements;
SingleItemRequirement returnItem;
boolean requireEquip;
String[] objectNames;
int[] objectRegions;
boolean challengeCompleted;
	// Charlie Tasks
SkillChallengeClue(ChallengeType challengeType, String clueText, SingleItemRequirement returnItem) 
	// Non-cryptic Sherlock Tasks
SkillChallengeClue(String challenge, ItemRequirement ... itemRequirements) 
	// Non-cryptic Sherlock Tasks
SkillChallengeClue(String challenge, String[] objectNames, int[] objectRegions, ItemRequirement ... itemRequirements) 
	// Non-cryptic Sherlock Tasks
SkillChallengeClue(String challenge, boolean requireEquip, ItemRequirement ... itemRequirements) 
	// Sherlock Tasks
SkillChallengeClue(String challenge, String rawChallenge, ItemRequirement ... itemRequirements) 
	// Sherlock Tasks
SkillChallengeClue(String challenge, String rawChallenge, boolean requireEquip, ItemRequirement ... itemRequirements) 
	// Sherlock Tasks
SkillChallengeClue(String challenge, String rawChallenge, boolean requireEquip, String[] objectNames, int[] objectRegions, ItemRequirement ... itemRequirements) 
	makeOverlayHint(panelComponent: PanelComponent, plugin: ClueScrollPlugin): void;
	makeWorldOverlayHint(graphics: Graphics2D, plugin: ClueScrollPlugin): void;
		// Mark NPC
		// Mark objects
	private static getRequirements(plugin: ClueScrollPlugin, requireEquipped: boolean, ...: ItemRequirement[]): Array<LineComponent>;
		// If equipment is null, the player is wearing nothing
		// If inventory is null, the player has nothing in their inventory
	static forText(text: string, rawText: string): SkillChallengeClue;
	getNpcs(plugin: ClueScrollPlugin): string[];
	getConfigKeys(): number[];
}
}