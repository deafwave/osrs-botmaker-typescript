/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/*
 * Copyright (c) 2020, Trevor <https://github.com/TrevorMartz>
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
enum Enemy
{
	//appears in hard clue emote steps in the wilderness
	//appears in hard clue emote steps not in the wilderness
	//appears for master clue emote steps all areas
	//appears for hard clue coordinate steps in the wilderness
	//appears for hard clue coordinate steps not in the wilderness
	//appears for elite clue coordinate steps in most areas
	//appears for elite clue coordinate steps on the west side of the Isle of Souls
	//appears for elite clue coordinate steps on the east side of the Isle of Souls
	//appears for master clue coordinate and hot cold clues when single-way combat
	//appears for master clue coordinate and hot cold clues when multi-way combat
	//There is a master hot cold step that overlaps the border of multi and single according to the wiki.
DOUBLE_AGENT_65("Double Agent level 65"), DOUBLE_AGENT_108("Double Agent level 108"), DOUBLE_AGENT_141("Double Agent level 141"), ZAMORAK_WIZARD("Zamorak Wizard"), SARADOMIN_WIZARD("Saradomin Wizard"), ARMADYLEAN_OR_BANDOSIAN_GUARD("Armadylean OR Bandosian Guard"), ARMADYLEAN_GUARD("Armadylean Guard"), BANDOSIAN_GUARD("Bandosian Guard"), BRASSICAN_MAGE("Brassican Mage"), ANCIENT_WIZARDS("Ancient Wizard Trio"), BRASSICAN_OR_WIZARDS("Brassican Mage OR Ancient Wizards"); 
String text;
}
}