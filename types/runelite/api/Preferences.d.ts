declare namespace net.runelite.api {
	/**
	 * Stores the clients persisting preferences.
	 */
	export interface Preferences {
		/**
		 * Gets the remembered login username.
		 *
		 * @return the remembered username
		 */
		getRememberedUsername(): string;

		/**
		 * Sets the remembered login username.
		 *
		 * @param username the new remembered username
		 */
		setRememberedUsername(username: string): void;

		/**
		 * Gets the sound effect volume
		 * @return volume 0-127 inclusive
		 */
		getSoundEffectVolume(): number;

		/**
		 * Sets the sound effect volume
		 * @param volume 0-127 inclusive
		 */
		setSoundEffectVolume(volume: number): void;

		/**
		 * Gets the area sound effect volume
		 * @return volume 0-127 inclusive
		 */
		getAreaSoundEffectVolume(): number;

		/**
		 * Sets the area sound effect volume
		 * @param volume 0-127 inclusive
		 */
		setAreaSoundEffectVolume(volume: number): void;

		/**
		 * Gets if the login name should be replaced with asterisks
		 */
		getHideUsername(): boolean;
	}
}
