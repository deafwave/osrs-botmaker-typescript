/// <reference types="@deafwave/osrs-botmaker-types" />

/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Available bindings:
 *
 * bot
 * client
 * net
 *
 */

export function onStart() {
	bot.printGameMessage('Executed JS onStart Method');
}

export function onGameTick() {
	//bot.printGameMessage('Executed JS onGameTick Method');
}

export function onNpcAnimationChanged(npc: net.runelite.api.Actor) {
	//bot.printGameMessage('Executed JS onNpcAnimationChanged Method ' + npc.getId());
}

export function onActorDeath(actor: net.runelite.api.Actor) {
	//bot.printGameMessage('Executed JS onActorDeath Method');
}

export function onHitsplatApplied(
	actor: net.runelite.api.Actor,
	hitsplat: net.runelite.api.Hitsplat,
) {
	//bot.printGameMessage('Executed JS onHitsplatApplied Method');
}

export function onInteractingChanged(
	sourceActor: net.runelite.api.Actor,
	targetActor: net.runelite.api.Actor,
) {
	//bot.printGameMessage('Executed JS onInteractingChanged Method');
}

export function onChatMessage(
	type: net.runelite.api.ChatMessageType,
	name: string,
	message: string,
) {
	//bot.printGameMessage('Executed JS onChatMessage Method: ' + name);
}
