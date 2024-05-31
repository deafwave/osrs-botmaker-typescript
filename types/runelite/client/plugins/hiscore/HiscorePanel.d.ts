/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Experience.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="PluginPanel.d.ts" />
/// <reference path="HiscoreSkill.d.ts" />
/// <reference path="JPanel.d.ts" />
/// <reference path="HiscoreEndpoint.d.ts" />
/// <reference path="HiscoreResult.d.ts" />
/// <reference path="KeyListener.d.ts" />
/// <reference path="Builds a html string to display on tooltip.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="HiscoreSkillType.d.ts" />
/*
 * Copyright (c) 2017, Adam <Adam@sigterm.info>
 * Copyright (c) 2018, Psikoi <https://github.com/psikoi>
 * Copyright (c) 2019, Bram91 <https://github.com/bram91>
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
declare namespace net.runelite.client.plugins.hiscore {
export class HiscorePanel extends PluginPanel
{
	/* The maximum allowed username length in RuneScape accounts */
	/**
	 * Real skills, ordered in the way they should be displayed in the panel.
	 */
ATTACK, HITPOINTS, MINING,
STRENGTH, AGILITY, SMITHING,
DEFENCE, HERBLORE, FISHING,
RANGED, THIEVING, COOKING,
PRAYER, CRAFTING, FIREMAKING,
MAGIC, FLETCHING, WOODCUTTING,
RUNECRAFT, SLAYER, FARMING,
CONSTRUCTION, HUNTER
);
	/**
	 * Bosses, ordered in the way they should be displayed in the panel.
	 */
ABYSSAL_SIRE, ALCHEMICAL_HYDRA, ARTIO,
BARROWS_CHESTS, BRYOPHYTA, CALLISTO,
CALVARION, CERBERUS, CHAMBERS_OF_XERIC,
CHAMBERS_OF_XERIC_CHALLENGE_MODE, CHAOS_ELEMENTAL, CHAOS_FANATIC,
COMMANDER_ZILYANA, CORPOREAL_BEAST, CRAZY_ARCHAEOLOGIST,
DAGANNOTH_PRIME, DAGANNOTH_REX, DAGANNOTH_SUPREME,
DERANGED_ARCHAEOLOGIST, DUKE_SUCELLUS, GENERAL_GRAARDOR,
GIANT_MOLE, GROTESQUE_GUARDIANS, HESPORI,
KALPHITE_QUEEN, KING_BLACK_DRAGON, KRAKEN,
KREEARRA, KRIL_TSUTSAROTH, LUNAR_CHESTS,
MIMIC, NEX, NIGHTMARE,
PHOSANIS_NIGHTMARE, OBOR, PHANTOM_MUSPAH,
SARACHNIS, SCORPIA, SCURRIUS,
SKOTIZO, SOL_HEREDIT, SPINDEL,
TEMPOROSS, THE_GAUNTLET, THE_CORRUPTED_GAUNTLET,
THE_LEVIATHAN, THE_WHISPERER, THEATRE_OF_BLOOD,
THEATRE_OF_BLOOD_HARD_MODE, THERMONUCLEAR_SMOKE_DEVIL, TOMBS_OF_AMASCUT,
TOMBS_OF_AMASCUT_EXPERT, TZKAL_ZUK, TZTOK_JAD,
VARDORVIS, VENENATIS, VETION,
VORKATH, WINTERTODT, ZALCANO,
ZULRAH
);
HiscorePlugin plugin;
HiscoreConfig config;
NameAutocompleter nameAutocompleter;
HiscoreClient hiscoreClient;
IconTextField searchBar;
	// Not an enummap because we need null keys for combat
	/* Container of all the selectable endpoints (ironman, deadman, etc) */
MaterialTabGroup tabGroup;
	/* The currently selected endpoint */
HiscoreEndpoint selectedEndPoint;
	/* Used to prevent users from switching endpoint tabs while the results are loading */
HiscorePanel(Client client, HiscorePlugin plugin, HiscoreConfig config, NameAutocompleter nameAutocompleter, HiscoreClient hiscoreClient) 
		// Expand sub items to fit width of panel, align to top of panel
			// Adding the lookup method to a mouseListener instead of the above onSelectedEvent
			// Because sometimes you might want to switch the tab, without calling for lookup
			// Ex: selecting the normal hiscores as default
		// Default selected tab is normal hiscores
		// Panel that holds skill icons
		// For each skill on the ingame skill panel, create a Label and add it to the UI
		// These aren't all on one row because when there's a label with four or more digits it causes the details
		// panel to change its size for some reason...
		// For each boss on the hi-scores, create a Label and add it to the UI
	shutdown(): void;
	onActivate(): void;
	/* Builds a JPanel displaying an icon and level/number associated with it */
	private makeHiscorePanel(skill: HiscoreSkill): JPanel;
	lookup(username: string, endpoint: HiscoreEndpoint): void;
	private lookup(): void;
		/* RuneScape usernames can't be longer than 12 characters long */
		// if for some reason no endpoint was selected, default to normal
					// search has changed in the meantime
				//successful player search
	private applyHiscoreResult(result: HiscoreResult): void;
					// for skills, level is only valid if exp is not -1
					// otherwise level is always valid
	addInputKeyListener(l: KeyListener): void;
	removeInputKeyListener(l: KeyListener): void;
	/*
	 */
	private detailsHtml(result: HiscoreResult, skill: HiscoreSkill): Builds a html string to display on tooltip;
		// Add a html progress bar to the hover information
				// had to wrap the bar with an empty div, if i added the margin directly to the bar, it would mess up
	private static buildMinigameTooltip(s: Skill, hiscoreSkill: HiscoreSkill): string;
	private static buildClueLine(result: HiscoreResult, name: string, skill: HiscoreSkill): string;
	private static sanitize(lookup: string): string;
	private resetEndpoints(): void;
		// Select the correct tab based on the world type.
	static formatLevel(level: number): string;
	private static pad(str: string, type: HiscoreSkillType): string;
		// Left pad label text to keep labels aligned
}
}