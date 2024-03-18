declare namespace net.runelite.api {
	export interface GameState {
		/**
		 * Unknown game state.
		 */
		UNKNOWN: 'UNKNOWN';
		/**
		 * The client is starting.
		 */
		STARTING: 'STARTING';
		/**
		 * The client is at the login screen.
		 */
		LOGIN_SCREEN: 'LOGIN_SCREEN';
		/**
		 * The client is at the login screen entering authenticator code.
		 */
		LOGIN_SCREEN_AUTHENTICATOR: 'LOGIN_SCREEN_AUTHENTICATOR';
		/**
		 * There is a player logging in.
		 */
		LOGGING_IN: 'LOGGING_IN';
		/**
		 * The game is being loaded.
		 */
		LOADING: 'LOADING';
		/**
		 * The user has successfully logged in.
		 */
		LOGGED_IN: 'LOGGED_IN';
		/**
		 * Connection to the server was lost.
		 */
		CONNECTION_LOST: 'CONNECTION_LOST';
		/**
		 * A world hop is taking place.
		 */
		HOPPING: 'HOPPING';
	}
}
