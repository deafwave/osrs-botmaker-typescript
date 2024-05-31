/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="ItemManager.d.ts" />
/// <reference path="default int.d.ts" />
/// <reference path="SkillBonus.d.ts" />
/// <reference path="default boolean.d.ts" />
/// <reference path="SkillBonus> getExcludedSkillBonuses().d.ts" />
/// <reference path="default.d.ts" />
/*
 * Copyright (c) 2021, Jordan Atwood <nightfirecat@protonmail.com>
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
declare namespace net.runelite.client.plugins.skillcalculator.skills {
/**
 * An object representing a single skill action which grants some xp.
 */
export interface SkillAction
{
	/**
	 * Gets the name of this skill action, usually the item or object created, or the spell cast. This name may be
	 * fetched via {@link ItemComposition#getMembersName()} from some defined item ID or explicitly defined.
	 *
	 * @param itemManager An {@link ItemManager item manager} instance.
	 * @return The name of this skill action.
	 */
	getName(itemManager: ItemManager): string;
	/**
	 * Gets the level required to perform this skill action.
	 *
	 * @return The level required to perform this skill action.
	 */
	getLevel(): number;
	/**
	 * Gets the amount of xp granted for performing this skill action.
	 *
	 * @return The amount of xp granted for performing this skill action.
	 */
	getXp(): number;
	/**
	 * Gets the item icon ID for this skill action, if applicable.
	 * <p>
	 * Note: Either this method or {@link #getSprite()} will always return {@code -1}, and the other will return some
	 * value {@code 0} or greater.
	 *
	 * @return The item icon ID of this skill action, or {@code -1} if its icon should be represented using a sprite.
	 * @see net.runelite.api.ItemID
	 * @see #getSprite()
	 */
	getIcon(): default int;
	/**
	 * Gets the sprite ID for this skill action, if applicable.
	 * <p>
	 * Note: Either this method or {@link #getIcon()} will always return {@code -1}, and the other will return some
	 * value {@code 0} or greater.
	 *
	 * @return The sprite ID of this skill action, or {@code -1} if its icon should be represented using an item icon.
	 * @see net.runelite.api.SpriteID
	 * @see #getIcon()
	 */
	getSprite(): default int;
	/**
	 * Returns {@code true} if this skill action is affected by the specified {@link SkillBonus skill bonus}, {@code false} otherwise.
	 *
	 * @return {@code true} if this skill action is affected by the specified skill bonus, {@code false} otherwise.
	 */
	isBonusApplicable(bonus: SkillBonus): default boolean;
	isMembers(itemManager: ItemManager): boolean;
	getExcludedSkillBonuses(): default;
}
}