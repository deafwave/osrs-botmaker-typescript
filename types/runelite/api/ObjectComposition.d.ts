/// <reference path="ParamHolder.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Information about a specific {@link ObjectID}
	 */
	export interface ObjectComposition extends ParamHolder {
		/**
		 * Gets ID for the object.
		 *
		 * @see ObjectID
		 */
		getId(): number;

		/**
		 * Gets the name of the object.
		 */
		getName(): string;

		/**
		 * The 5 menuops this object has when in world. Index 0 corresponds to
		 * {@link MenuAction#GAME_OBJECT_FIRST_OPTION}, Index 2 to
		 * {@link MenuAction#GAME_OBJECT_SECOND_OPTION} and so on.
		 */
		getActions(): string[];

		/**
		 * Gets the index of this object in the {@link Client#getMapScene()}
		 * array, or -1 if it has no map scene icon
		 */
		getMapSceneId(): number;

		/**
		 * Set the map scene index into the {@link Client#getMapScene()}
		 * array, or -1 if it has no map scene icon
		 * @param mapSceneId
		 */
		setMapSceneId(mapSceneId: number): void;

		/**
		 * Gets the index of this object in the {@link Client#getMapIcons()}
		 * array, or -1 if it has no full map icon
		 */
		getMapIconId(): number;

		/**
		 * Set the index of the object in the {@link Client#getMapIcons()}
		 * array, or -1 if it has no map icon
		 * @param mapIconId
		 */
		setMapIconId(mapIconId: number): void;

		/**
		 * Get the {@link ObjectID}s of objects this can transform into, depending
		 * on a {@link Varbits} or {@link VarPlayer}
		 */
		getImpostorIds(): number[];

		/**
		 * Get the object composition the player's state says this object should
		 * transmogrify into.
		 *
		 * @throws NullPointerException if {@link #getImpostorIds()} is null
		 */
		getImpostor(): ObjectComposition;

		/**
		 * Gets the {@link Varbits} used to switch this multiloc, or {@code -1} if this is not switched by a Varbit
		 *
		 * @see #getImpostor()
		 * @see #getImpostorIds()
		 */

		getVarbitId(): number;

		/**
		 * Gets the {@link VarPlayer} used to switch this multiloc, or {@code -1} if this is not switched by a VarPlayer
		 *
		 * @see #getImpostor()
		 * @see #getImpostorIds()
		 */
		getVarPlayerId(): number;

		/**
		 * Get the size of the object on the X-axis in tiles
		 * @return
		 */
		getSizeX(): number;

		/**
		 * Get the size of the object on the Y-axis in tiles
		 * @return
		 */
		getSizeY(): number;
	}
}
