/**
 * An enumeration of game states the client is in.
 */
declare enum GameState {
	/**
	 * Unknown game state.
	 */
	UNKNOWN = -1,
	/**
	 * The client is starting.
	 */
	STARTING = 0,
	/**
	 * The client is at the login screen.
	 */
	LOGIN_SCREEN = 10,
	/**
	 * The client is at the login screen entering an authenticator code.
	 */
	LOGIN_SCREEN_AUTHENTICATOR = 11,
	/**
	 * There is a player logging in.
	 */
	LOGGING_IN = 20,
	/**
	 * The game is being loaded.
	 */
	LOADING = 25,
	/**
	 * The user has successfully logged in.
	 */
	LOGGED_IN = 30,
	/**
	 * Connection to the server was lost.
	 */
	CONNECTION_LOST = 40,
	/**
	 * A world hop is taking place.
	 */
	HOPPING = 45,

	// /**
	//  * The raw state value.
	//  */
	// private readonly state: number;

	// constructor(state: number) {
	//     this.state = state;
	// }

	// /**
	//  * Utility method that maps the rank value to its respective
	//  * {@link GameState} value.
	//  *
	//  * @param state the raw state value
	//  * @return the gamestate
	//  */
	// static of(state: number): GameState {
	//     for (const gs of Object.values(GameState)) {
	//         if (gs.state === state) {
	//             return gs;
	//         }
	//     }
	//     return GameState.UNKNOWN;
	// }
}
