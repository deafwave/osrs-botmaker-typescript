/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ItemID/AIR_RUNE.d.ts" />
/// <reference path="ItemID/BLOOD_RUNE.d.ts" />
/// <reference path="ItemID/BODY_RUNE.d.ts" />
/// <reference path="ItemID/CHAOS_RUNE.d.ts" />
/// <reference path="ItemID/COSMIC_RUNE.d.ts" />
/// <reference path="ItemID/DEATH_RUNE.d.ts" />
/// <reference path="ItemID/EARTH_RUNE.d.ts" />
/// <reference path="ItemID/FIRE_RUNE.d.ts" />
/// <reference path="ItemID/LAW_RUNE.d.ts" />
/// <reference path="ItemID/MIND_RUNE.d.ts" />
/// <reference path="ItemID/NATURE_RUNE.d.ts" />
/// <reference path="ItemID/SOUL_RUNE.d.ts" />
/// <reference path="ItemID/WATER_RUNE.d.ts" />
/// <reference path="NullObjectID.d.ts" />
/// <reference path="ObjectID.d.ts" />
/// <reference path="AbyssRifts.d.ts" />
/*
 * Copyright (c) 2016-2018, Seth <Sethtroll3@gmail.com>
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
declare namespace net.runelite.client.plugins.runecraft {
enum AbyssRifts
{
AIR_RIFT(ObjectID.AIR_RIFT, AIR_RUNE, RunecraftConfig::showAir), BLOOD_RIFT(NullObjectID.NULL_43848, BLOOD_RUNE, RunecraftConfig::showBlood), BODY_RIFT(ObjectID.BODY_RIFT, BODY_RUNE, RunecraftConfig::showBody), CHAOS_RIFT(ObjectID.CHAOS_RIFT, CHAOS_RUNE, RunecraftConfig::showChaos), COSMIC_RIFT(ObjectID.COSMIC_RIFT, COSMIC_RUNE, RunecraftConfig::showCosmic), DEATH_RIFT(ObjectID.DEATH_RIFT, DEATH_RUNE, RunecraftConfig::showDeath), EARTH_RIFT(ObjectID.EARTH_RIFT, EARTH_RUNE, RunecraftConfig::showEarth), FIRE_RIFT(ObjectID.FIRE_RIFT, FIRE_RUNE, RunecraftConfig::showFire), LAW_RIFT(ObjectID.LAW_RIFT, LAW_RUNE, RunecraftConfig::showLaw), MIND_RIFT(ObjectID.MIND_RIFT, MIND_RUNE, RunecraftConfig::showMind), NATURE_RIFT(ObjectID.NATURE_RIFT, NATURE_RUNE, RunecraftConfig::showNature), SOUL_RIFT(ObjectID.SOUL_RIFT, SOUL_RUNE, RunecraftConfig::showSoul), WATER_RIFT(ObjectID.WATER_RIFT, WATER_RUNE, RunecraftConfig::showWater); 
int objectId;
int itemId;
Predicate<RunecraftConfig> configEnabled;
Map<Integer, AbyssRifts> rifts;
	private static getRift(id: number): AbyssRifts;
}
}