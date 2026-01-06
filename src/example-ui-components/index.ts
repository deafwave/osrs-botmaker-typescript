/// <reference types="@deafwave/osrs-botmaker-types" />
import { globalScriptVariables } from './global-script-variables/global-script-variables.js';
import { createUi } from './ui/create-ui.js';
import { exampleJavaScriptFunction } from './without-typescript.js';

/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Available bindings:
 *
 * bot
 * client
 * net
 *
 */

export function onStart(): void {
	bot.printGameMessage('Executed JS onStart Method');
	exampleJavaScriptFunction();
	createUi();
}

export function onGameTick(): void {
	if (!globalScriptVariables.uiCompleted) {
		return;
	}
	bot.printGameMessage(
		`UI Completed! We are now executing within the game tick loop`,
	);
	//bot.printGameMessage('Executed JS onGameTick Method');
}

export function onNpcAnimationChanged(npc: net.runelite.api.Actor): void {
	//bot.printGameMessage('Executed JS onNpcAnimationChanged Method ' + npc.getId());
}

export function onActorDeath(actor: net.runelite.api.Actor): void {
	//bot.printGameMessage('Executed JS onActorDeath Method');
}

export function onHitsplatApplied(
	actor: net.runelite.api.Actor,
	hitsplat: net.runelite.api.Hitsplat,
): void {
	//bot.printGameMessage('Executed JS onHitsplatApplied Method');
}

export function onInteractingChanged(
	sourceActor: net.runelite.api.Actor,
	targetActor: net.runelite.api.Actor,
): void {
	//bot.printGameMessage('Executed JS onInteractingChanged Method');
}

export function onChatMessage(
	type: net.runelite.api.ChatMessageType,
	name: string,
	message: string,
): void {
	//bot.printGameMessage('Executed JS onChatMessage Method: ' + name);
}
