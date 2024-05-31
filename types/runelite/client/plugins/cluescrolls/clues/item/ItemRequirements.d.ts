/// <reference path="../../../../../../java/index.d.ts" />
/// <reference path="../../../../../../jagex/index.d.ts" />
/// <reference path="EquipmentInventorySlot.d.ts" />
/// <reference path="SingleItemRequirement.d.ts" />
/// <reference path="RangeItemRequirement.d.ts" />
/// <reference path="ItemRequirement....d.ts" />
/// <reference path="AnyRequirementCollection.d.ts" />
/// <reference path="AllRequirementsCollection.d.ts" />
/// <reference path="EquipmentInventorySlot....d.ts" />
/// <reference path="SlotLimitationRequirement.d.ts" />
/// <reference path="MultipleOfItemRequirement.d.ts" />
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
declare namespace net.runelite.client.plugins.cluescrolls.clues.item {
export class ItemRequirements
{
	static item(itemId: number): SingleItemRequirement;
	static range(startItemId: number, endItemId: number): RangeItemRequirement;
	static range(name: string, startItemId: number, endItemId: number): RangeItemRequirement;
	static any(name: string, requirements: ItemRequirement...): AnyRequirementCollection;
	static all(requirements: ItemRequirement...): AllRequirementsCollection;
	static all(name: string, requirements: ItemRequirement...): AllRequirementsCollection;
	static emptySlot(description: string, slots: EquipmentInventorySlot...): SlotLimitationRequirement;
	static xOfItem(itemId: number, quantity: number): MultipleOfItemRequirement;
}
}