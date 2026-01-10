/* eslint-disable @typescript-eslint/no-unused-vars */

import { stateManager } from './state/state-manager.js';
import { delayManager } from './timeout/delays.js';

/**
 * Available bindings:
 *
 * bot
 * client
 * clientThread
 * configManager
 *
 * InterfaceID
 * ItemID
 * ObjectID
 * NpcID
 *
 */

//Default hook provided by the botmaker api

export function onStart(): void {
	bot.printGameMessage('Executed JS onStart Method');
}
//Default hook provided by the botmaker api

export function onEnd(): void {
	bot.printGameMessage('Executed JS onEnd Method');
}

//Default hook provided by the botmaker api
export function onGameTick() {
	//This will return early if the global delay is greater than 0, preventing the state manager from being called.
	if (delayManager('globalDelay') > 0) {
		bot.printLogMessage('Global delay is greater than 0, returning early');
		return;
	}
	//This will call the state manager, which will set the state and execute the appropriate actions.
	stateManager();
}

//Default hook provided by the botmaker api
function onNpcAnimationChanged(npc: net.runelite.api.NPC): void {
	//bot.printGameMessage('Executed JS onNpcAnimationChanged Method ' + npc.getId());
}

//Default hook provided by the botmaker api
function onActorDeath(actor: net.runelite.api.Actor): void {
	//bot.printGameMessage('Executed JS onActorDeath Method');
}

//Default hook provided by the botmaker api
function onHitsplatApplied(
	actor: net.runelite.api.Actor,
	hitsplat: net.runelite.api.Hitsplat,
): void {
	//bot.printGameMessage('Executed JS onHitsplatApplied Method');
}

//Default hook provided by the botmaker api
function onInteractingChanged(
	sourceActor: net.runelite.api.Actor,
	targetActor: net.runelite.api.Actor,
): void {
	//bot.printGameMessage('Executed JS onInteractingChanged Method');
}

//Default hook provided by the botmaker api
function onChatMessage(
	type: net.runelite.api.ChatMessageType,
	name: string,
	message: string,
): void {
	//bot.printGameMessage('onChatMessage: ' + name);
}

//Default hook provided by the botmaker api
function onNetworkMessage(sender: string, message: string) {
	//bot.printGameMessage('onNetworkMessage: ' + sender + ': ' + message);
}
