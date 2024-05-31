/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="AnimationID.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="ItemID.d.ts" />
/// <reference path="MenuAction.d.ts" />
/// <reference path="ObjectID.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/GameObjectDespawned.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="events/MenuOptionClicked.d.ts" />
/// <reference path="SkillingEndReason.d.ts" />
/*
 * Copyright (c) 2019, Weird Gloop <admin@weirdgloop.org>
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
declare namespace net.runelite.client.plugins.crowdsourcing.woodcutting {
export class CrowdsourcingWoodcutting
{
add(ObjectID.OAK_TREE_8462 ). add(ObjectID.OAK_TREE_10820). add(ObjectID.OAK_TREE_8467). add(ObjectID.OAK_TREE_9734).  add(ObjectID.YEW_TREE_10822). add(ObjectID.YEW_TREE_8513).  add(ObjectID.TREE). add(ObjectID.TREE_1277). add(ObjectID.TREE_1278). add(ObjectID.TREE_1279). add(ObjectID.TREE_1280). add(ObjectID.DEAD_TREE). add(ObjectID.DEAD_TREE_1283). add(ObjectID.DEAD_TREE_1284). add(ObjectID.DEAD_TREE_1285). add(ObjectID.DEAD_TREE_1286). add(ObjectID.DEAD_TREE_1289). add(ObjectID.DEAD_TREE_1290). add(ObjectID.DEAD_TREE_1291). add(ObjectID.EVERGREEN_TREE). add(ObjectID.EVERGREEN_TREE_1319). add(ObjectID.TREE_1330). add(ObjectID.TREE_1331). add(ObjectID.TREE_1332). add(ObjectID.DEAD_TREE_1365). add(ObjectID.DEAD_TREE_1383). add(ObjectID.DEAD_TREE_1384). add(ObjectID.EVERGREEN_TREE_2091). add(ObjectID.EVERGREEN_TREE_2092). add(ObjectID.TREE_2409). add(ObjectID.TREE_3879). add(ObjectID.TREE_3881). add(ObjectID.TREE_3882). add(ObjectID.TREE_3883). add(ObjectID.DEAD_TREE_5902). add(ObjectID.DEAD_TREE_5903). add(ObjectID.DEAD_TREE_5904). add(ObjectID.TREE_9730). add(ObjectID.TREE_9731). add(ObjectID.TREE_9732). add(ObjectID.TREE_9733). add(ObjectID.TREE_10041). add(ObjectID.TREE_14308). add(ObjectID.TREE_14309). add(ObjectID.TREE_16264). add(ObjectID.TREE_16265). add(ObjectID.EVERGREEN_TREE_27060). add(ObjectID.BURNT_TREE). add(ObjectID.BURNT_TREE_30854).  add(ObjectID.MATURE_JUNIPER_TREE).  add(ObjectID.WILLOW_TREE_10819). add(ObjectID.WILLOW_TREE_10829). add(ObjectID.WILLOW_TREE_10831). add(ObjectID.WILLOW_TREE_10833). add(ObjectID.WILLOW_TREE_8488). add(ObjectID.SCRAPEY_TREE). add(ObjectID.JUNGLE_TREE_15951). add(ObjectID.JUNGLE_TREE_15954). add(ObjectID.JUNGLE_TREE_15948). add(ObjectID.MAPLE_TREE_10832). add(ObjectID.MAPLE_TREE_4674). add(ObjectID.MAPLE_TREE_8444). add(ObjectID.MAHOGANY_TREE_36688). add(ObjectID.TEAK_TREE_15062). add(ObjectID.TEAK_TREE_15062). add(ObjectID.MAGIC_TREE_10834). add(ObjectID.MAGIC_TREE_8409). add(ObjectID.HOLLOW_TREE_10821). add(ObjectID.HOLLOW_TREE_10830). add(ObjectID.ACHEY_TREE). add(ObjectID.REDWOOD_TREE). add(ObjectID.REDWOOD_TREE_29670). add(ObjectID.BRUMA_ROOTS). add(ObjectID.ARCTIC_PINE_TREE). add(ObjectID.SULLIUSCEP). build(); 
put(AnimationID.WOODCUTTING_BRONZE, ItemID.BRONZE_AXE). put(AnimationID.WOODCUTTING_IRON, ItemID.IRON_AXE). put(AnimationID.WOODCUTTING_STEEL, ItemID.STEEL_AXE). put(AnimationID.WOODCUTTING_BLACK, ItemID.BLACK_AXE). put(AnimationID.WOODCUTTING_MITHRIL, ItemID.MITHRIL_AXE). put(AnimationID.WOODCUTTING_ADAMANT, ItemID.ADAMANT_AXE). put(AnimationID.WOODCUTTING_RUNE, ItemID.RUNE_AXE). put(AnimationID.WOODCUTTING_DRAGON, ItemID.DRAGON_AXE). put(AnimationID.WOODCUTTING_DRAGON_OR, ItemID.DRAGON_AXE_OR). put(AnimationID.WOODCUTTING_INFERNAL, ItemID.INFERNAL_AXE). put(AnimationID.WOODCUTTING_3A_AXE, ItemID._3RD_AGE_AXE). put(AnimationID.WOODCUTTING_CRYSTAL, ItemID.CRYSTAL_AXE). put(AnimationID.WOODCUTTING_TRAILBLAZER, ItemID.INFERNAL_AXE_OR).build(); 
add("You get some logs."). add("You get some oak logs."). add("You get some willow logs."). add("You get some teak logs."). add("You get some teak logs and give them to Carpenter Kjallak."). add("You get some maple logs."). add("You get some maple logs and give them to Lumberjack Leif."). add("You get some mahogany logs."). add("You get some mahogany logs and give them to Carpenter Kjallak."). add("You get some yew logs."). add("You get some magic logs."). add("You get some redwood logs."). add("You get some scrapey tree logs."). add("You get some bark."). add("You get a bruma root."). add("You get an arctic pine log"). add("You get some juniper logs."). add("You get some mushrooms."). build(); 
CrowdsourcingManager manager;
Client client;
WorldPoint treeLocation;
int treeId;
int startTick;
int axe;
	private endExperiment(reason: SkillingEndReason): void;
	onChatMessage(event: net.runelite.api.events.ChatMessage): void;
	onGameTick(tick: net.runelite.api.events.GameTick): void;
	onMenuOptionClicked(menuOptionClicked: net.runelite.api.events.MenuOptionClicked): void;
	onGameObjectDespawned(event: net.runelite.api.events.GameObjectDespawned): void;
}
}