import {} from '@deafwave/osrs-botmaker-types'; // Loads the types from the package

/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Available bindings:
 *
 * api
 * client
 * net
 *
 */

export function onStart() {
	api.printGameMessage('Executed JS onStart Method');
}

export function onGameTick() {
	//api.printGameMessage('Executed JS onGameTick Method');
}

export function onNpcAnimationChanged(npc: net.runelite.api.Actor) {
	//api.printGameMessage('Executed JS onNpcAnimationChanged Method ' + npc.getId());
}

export function onActorDeath(actor: net.runelite.api.Actor) {
	//api.printGameMessage('Executed JS onActorDeath Method');
}

export function onHitsplatApplied(
	actor: net.runelite.api.Actor,
	hitsplat: net.runelite.api.Hitsplat,
) {
	//api.printGameMessage('Executed JS onHitsplatApplied Method');
}

export function onInteractingChanged(
	sourceActor: net.runelite.api.Actor,
	targetActor: net.runelite.api.Actor,
) {
	//api.printGameMessage('Executed JS onInteractingChanged Method');
}

export function onChatMessage(
	type: net.runelite.api.ChatMessageType,
	name: string,
	message: string,
) {
	//api.printGameMessage('Executed JS onChatMessage Method: ' + name);
}
