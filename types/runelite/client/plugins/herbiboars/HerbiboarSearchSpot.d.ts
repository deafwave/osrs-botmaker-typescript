/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="NullObjectID/*.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="Group.d.ts" />
/*
 * Copyright (c) 2020, dekvall <https://github.com/dekvall>
 * Copyright (c) 2020, Jordan <nightfirecat@protonmail.com>
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
declare namespace net.runelite.client.plugins.herbiboars {
enum HerbiboarSearchSpot
{
	// Wiki A location
	// Wiki B location
	// Wiki C location
	// Wiki D location
	// Wiki E location
	// Wiki F location
	// Wiki G location
	// Wiki H location
	// Wiki I location
	// Wiki J location
	// Wiki K location
A_MUSHROOM(Group.A, new WorldPoint(3670, 3889, 0), new TrailToSpot(Varbits.HB_TRAIL_31318, 1, NULL_31318), new TrailToSpot(Varbits.HB_TRAIL_31321, 1, NULL_31321)), A_PATCH(Group.A, new WorldPoint(3672, 3890, 0), new TrailToSpot(Varbits.HB_TRAIL_31306, 2, NULL_31306)),  B_SEAWEED(Group.B, new WorldPoint(3728, 3893, 0), new TrailToSpot(Varbits.HB_TRAIL_31315, 2, NULL_31315), new TrailToSpot(Varbits.HB_TRAIL_31318, 2, NULL_31318), new TrailToSpot(Varbits.HB_TRAIL_31336, 1, NULL_31336), new TrailToSpot(Varbits.HB_TRAIL_31339, 1, NULL_31339)),  C_MUSHROOM(Group.C, new WorldPoint(3697, 3875, 0), new TrailToSpot(Varbits.HB_TRAIL_31303, 2, NULL_31303)), C_PATCH(Group.C, new WorldPoint(3699, 3875, 0), new TrailToSpot(Varbits.HB_TRAIL_31312, 1, NULL_31312), new TrailToSpot(Varbits.HB_TRAIL_31315, 1, NULL_31315)),  D_PATCH(Group.D, new WorldPoint(3708, 3876, 0), new TrailToSpot(Varbits.HB_TRAIL_31330, 1, NULL_31330), new TrailToSpot(Varbits.HB_TRAIL_31333, 1, NULL_31333)), D_SEAWEED(Group.D, new WorldPoint(3710, 3877, 0), new TrailToSpot(Varbits.HB_TRAIL_31312, 2, NULL_31312), new TrailToSpot(Varbits.HB_TRAIL_31339, 2, NULL_31339)),  E_MUSHROOM(Group.E, new WorldPoint(3668, 3865, 0), new TrailToSpot(Varbits.HB_TRAIL_31342, 1, NULL_31342), new TrailToSpot(Varbits.HB_TRAIL_31345, 1, NULL_31345)), E_PATCH(Group.E, new WorldPoint(3667, 3862, 0), new TrailToSpot(Varbits.HB_TRAIL_31321, 2, NULL_31321)),  F_MUSHROOM(Group.F, new WorldPoint(3681, 3860, 0), new TrailToSpot(Varbits.HB_TRAIL_31324, 1, NULL_31324), new TrailToSpot(Varbits.HB_TRAIL_31327, 1, NULL_31327), new TrailToSpot(Varbits.HB_TRAIL_31342, 2, NULL_31342)), F_PATCH(Group.F, new WorldPoint(3681, 3859, 0), new TrailToSpot(Varbits.HB_TRAIL_31309, 2, NULL_31309)),  G_MUSHROOM(Group.G, new WorldPoint(3694, 3847, 0), new TrailToSpot(Varbits.HB_TRAIL_31333, 2, NULL_31333), new TrailToSpot(Varbits.HB_TRAIL_31354, 1, NULL_31354)), G_PATCH(Group.G, new WorldPoint(3698, 3847, 0), new TrailToSpot(Varbits.HB_TRAIL_31327, 2, NULL_31327)),  H_SEAWEED_EAST(Group.H, new WorldPoint(3715, 3851, 0), new TrailToSpot(Varbits.HB_TRAIL_31357, 1, NULL_31357), new TrailToSpot(Varbits.HB_TRAIL_31360, 1, NULL_31360)), H_SEAWEED_WEST(Group.H, new WorldPoint(3713, 3850, 0), new TrailToSpot(Varbits.HB_TRAIL_31330, 2, NULL_31330), new TrailToSpot(Varbits.HB_TRAIL_31363, 1, NULL_31363)),  I_MUSHROOM(Group.I, new WorldPoint(3680, 3838, 0), new TrailToSpot(Varbits.HB_TRAIL_31348, 1, NULL_31348), new TrailToSpot(Varbits.HB_TRAIL_31351, 1, NULL_31351)), I_PATCH(Group.I, new WorldPoint(3680, 3836, 0), new TrailToSpot(Varbits.HB_TRAIL_31324, 2, NULL_31324), new TrailToSpot(Varbits.HB_TRAIL_31345, 2, NULL_31345)),  J_PATCH(Group.J, new WorldPoint(3713, 3840, 0), new TrailToSpot(Varbits.HB_TRAIL_31357, 2, NULL_31357), new TrailToSpot(Varbits.HB_TRAIL_31372, 1, NULL_31372)),  K_PATCH(Group.K, new WorldPoint(3706, 3811, 0), new TrailToSpot(Varbits.HB_TRAIL_31348, 2, NULL_31348), new TrailToSpot(Varbits.HB_TRAIL_31366, 1, NULL_31366), new TrailToSpot(Varbits.HB_TRAIL_31369, 1, NULL_31369)), ;  ImmutableMultimap<Group, HerbiboarSearchSpot> GROUPS; Set<WorldPoint> SPOTS; Set<Integer> TRAILS;    Group group; WorldPoint location; List<TrailToSpot> trails;  HerbiboarSearchSpot(Group group, WorldPoint location, TrailToSpot... trails) 
	/**
	 * Spots are placed in groups of two
	 */
enum Group
	static isTrail(id: number): boolean;
	static isSearchSpot(location: net.runelite.api.coords.WorldPoint): boolean;
	static getGroupLocations(group: Group): Array<net.runelite.api.coords.WorldPonumber>;
}
}