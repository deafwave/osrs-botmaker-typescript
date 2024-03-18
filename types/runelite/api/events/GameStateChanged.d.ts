/// <reference path="../GameState.d.ts" />
declare namespace net.runelite.api.events {
	export class GameStateChanged {
		/**
		 * The new game state.
		 */
		getGameState(): GameState;
		setGameState(gameState: GameState): void;
	}
}
