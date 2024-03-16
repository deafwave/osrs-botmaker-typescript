/**
 * Represents an event in TypeScript where the client's game state has changed.
 */
declare class GameStateChanged {
	private readonly gameState: GameState;

	constructor(gameState: GameState);
}
