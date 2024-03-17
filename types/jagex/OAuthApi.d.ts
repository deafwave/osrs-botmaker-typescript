interface OAuthApi {
	/**
	 * Gets a unique per-RuneScape-Account identifier or {@code -1} if the client has not logged in yet
	 */
	getAccountHash(): number;
}
