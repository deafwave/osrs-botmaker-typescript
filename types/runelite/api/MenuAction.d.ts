interface MenuAction {
  /**
  * Menu action for using an item in your inventory on a tile object (GameObject or GroundObject).
  * @Deprecated
	*/
  ITEM_USE_ON_GAME_OBJECT: 'ITEM_USE_ON_GAME_OBJECT';
  /**
  * Menu action for using a widget on a tile object (GameObject or GroundObject).
  */
  WIDGET_TARGET_ON_GAME_OBJECT: 'WIDGET_TARGET_ON_GAME_OBJECT';
  /**
  * First menu action for a game object.
  */
  GAME_OBJECT_FIRST_OPTION: 'GAME_OBJECT_FIRST_OPTION';
  /**
  * Second menu action for a game object.
  */
  GAME_OBJECT_SECOND_OPTION: 'GAME_OBJECT_SECOND_OPTION';
  /**
  * Third menu action for a game object.
  */
  GAME_OBJECT_THIRD_OPTION: 'GAME_OBJECT_THIRD_OPTION';
  /**
  * Fourth menu action for a game object.
  */
  GAME_OBJECT_FOURTH_OPTION: 'GAME_OBJECT_FOURTH_OPTION';
  /**
  * Fifth menu action for a game object.
  */
  GAME_OBJECT_FIFTH_OPTION: 'GAME_OBJECT_FIFTH_OPTION';
  /**
  * Menu action for using an item in your inventory on an NPC.
  * @Deprecated
	*/
  ITEM_USE_ON_NPC: 'ITEM_USE_ON_NPC';
  /**
  * Menu action for using a widget on an NPC.
  */
  WIDGET_TARGET_ON_NPC: 'WIDGET_TARGET_ON_NPC';
  /**
  * First menu action for an NPC.
  */
  NPC_FIRST_OPTION: 'NPC_FIRST_OPTION';
  /**
  * Second menu action for an NPC.
  */
  NPC_SECOND_OPTION: 'NPC_SECOND_OPTION';
  /**
  * Third menu action for an NPC.
  */
  NPC_THIRD_OPTION: 'NPC_THIRD_OPTION';
  /**
  * Fourth menu action for an NPC.
  */
  NPC_FOURTH_OPTION: 'NPC_FOURTH_OPTION';
  /**
  * Fifth menu action for an NPC.
  */
  NPC_FIFTH_OPTION: 'NPC_FIFTH_OPTION';
  /**
  * Menu action for using an item on a player.
  * @Deprecated
	*/
  ITEM_USE_ON_PLAYER: 'ITEM_USE_ON_PLAYER';
  /**
  * Menu action for using a widget on a player.
  */
  WIDGET_TARGET_ON_PLAYER: 'WIDGET_TARGET_ON_PLAYER';
  /**
  * Menu action for using an item on an item on the ground.
  * @Deprecated
	*/
  ITEM_USE_ON_GROUND_ITEM: 'ITEM_USE_ON_GROUND_ITEM';
  /**
  * Menu action for using a widget on an item on the ground.
  */
  WIDGET_TARGET_ON_GROUND_ITEM: 'WIDGET_TARGET_ON_GROUND_ITEM';
  /**
  * First menu action for an item on the ground.
  */
  GROUND_ITEM_FIRST_OPTION: 'GROUND_ITEM_FIRST_OPTION';
  /**
  * Second menu action for an item on the ground.
  */
  GROUND_ITEM_SECOND_OPTION: 'GROUND_ITEM_SECOND_OPTION';
  /**
  * Third menu action for an item on the ground.
  */
  GROUND_ITEM_THIRD_OPTION: 'GROUND_ITEM_THIRD_OPTION';
  /**
  * Fourth menu action for an item on the ground.
  */
  GROUND_ITEM_FOURTH_OPTION: 'GROUND_ITEM_FOURTH_OPTION';
  /**
  * Fifth menu action for an item on the ground.
  */
  GROUND_ITEM_FIFTH_OPTION: 'GROUND_ITEM_FIFTH_OPTION';
  /**
  * Menu action for walking.
  */
  WALK: 'WALK';
  /**
  * Interaction with widget (type 1).
  */
  WIDGET_TYPE_1: 'WIDGET_TYPE_1';
  /**
  * Select the widget for targeting other widgets/entites etc.
  * @see Client#getSelectedWidget()
  */
  WIDGET_TARGET: 'WIDGET_TARGET';
  /**
  * Performs an ifclose.
  */
  WIDGET_CLOSE: 'WIDGET_CLOSE';
  /**
  * Interaction with widget (type 4).
  */
  WIDGET_TYPE_4: 'WIDGET_TYPE_4';
  /**
  * Interaction with widget (type 5).
  */
  WIDGET_TYPE_5: 'WIDGET_TYPE_5';
  /**
  * Performs a Continue
  */
  WIDGET_CONTINUE: 'WIDGET_CONTINUE';
  /**
  * Menu action when using an item on another item
  * @Deprecated
	*/
  ITEM_USE_ON_ITEM: 'ITEM_USE_ON_ITEM';
  /**
  * Menu action when using a component on an item
  * @Deprecated
	*/
  WIDGET_USE_ON_ITEM: 'WIDGET_USE_ON_ITEM';
  /**
  * First menu action for an item.
  * @Deprecated
	*/
  ITEM_FIRST_OPTION: 'ITEM_FIRST_OPTION';
  /**
  * Second menu action for an item.
  * @Deprecated
	*/
  ITEM_SECOND_OPTION: 'ITEM_SECOND_OPTION';
  /**
  * Third menu action for an item.
  * @Deprecated
	*/
  ITEM_THIRD_OPTION: 'ITEM_THIRD_OPTION';
  /**
  * Fourth menu action for an item.
  * @Deprecated
	*/
  ITEM_FOURTH_OPTION: 'ITEM_FOURTH_OPTION';
  /**
  * Fifth menu action for an item.
  * @Deprecated
	*/
  ITEM_FIFTH_OPTION: 'ITEM_FIFTH_OPTION';
  /**
  * Menu action to use an item.
  * @Deprecated
	*/
  ITEM_USE: 'ITEM_USE';
  /**
  * First menu action for a widget.
  */
  WIDGET_FIRST_OPTION: 'WIDGET_FIRST_OPTION';
  /**
  * Second menu action for a widget.
  */
  WIDGET_SECOND_OPTION: 'WIDGET_SECOND_OPTION';
  /**
  * Third menu action for a widget.
  */
  WIDGET_THIRD_OPTION: 'WIDGET_THIRD_OPTION';
  /**
  * Fourth menu action for a widget.
  */
  WIDGET_FOURTH_OPTION: 'WIDGET_FOURTH_OPTION';
  /**
  * Fifth menu action for a widget.
  */
  WIDGET_FIFTH_OPTION: 'WIDGET_FIFTH_OPTION';
  PLAYER_FIRST_OPTION: 'PLAYER_FIRST_OPTION';
  PLAYER_SECOND_OPTION: 'PLAYER_SECOND_OPTION';
  PLAYER_THIRD_OPTION: 'PLAYER_THIRD_OPTION';
  PLAYER_FOURTH_OPTION: 'PLAYER_FOURTH_OPTION';
  PLAYER_FIFTH_OPTION: 'PLAYER_FIFTH_OPTION';
  PLAYER_SIXTH_OPTION: 'PLAYER_SIXTH_OPTION';
  PLAYER_SEVENTH_OPTION: 'PLAYER_SEVENTH_OPTION';
  PLAYER_EIGHTH_OPTION: 'PLAYER_EIGHTH_OPTION';
  /**
  * Menu action for normal priority child component actions.
  */
  CC_OP: 'CC_OP';
  /**
  * Using a widget on another widget
  */
  WIDGET_TARGET_ON_WIDGET: 'WIDGET_TARGET_ON_WIDGET';
  /**
  * Menu action for high priority runelite options
  */
  RUNELITE_HIGH_PRIORITY: 'RUNELITE_HIGH_PRIORITY';
  /**
  * Menu action triggered by examining an object.
  */
  EXAMINE_OBJECT: 'EXAMINE_OBJECT';
  /**
  * Menu action triggered by examining an NPC.
  */
  EXAMINE_NPC: 'EXAMINE_NPC';
  /**
  * Menu action triggered by examining item on ground.
  */
  EXAMINE_ITEM_GROUND: 'EXAMINE_ITEM_GROUND';
  /**
  * Menu action triggered by examining item in inventory.
  * @Deprecated
	*/
  EXAMINE_ITEM: 'EXAMINE_ITEM';
  /**
  * Menu action triggered by canceling a menu.
  */
  CANCEL: 'CANCEL';
  /**
  * Menu action for low priority child component actions.
  */
  CC_OP_LOW_PRIORITY: 'CC_OP_LOW_PRIORITY';
  /**
  * Menu action injected by runelite for its menu items.
  */
  RUNELITE: 'RUNELITE';
  /**
  * Menu action injected by runelite for overlay menu items.
  */
  RUNELITE_OVERLAY: 'RUNELITE_OVERLAY';
  /**
  * Menu action for configuring runelite overlays.
  */
  RUNELITE_OVERLAY_CONFIG: 'RUNELITE_OVERLAY_CONFIG';
  /**
  * Menu action injected by runelite for menu items which target
  * a player and have its identifier set to a player index.
  */
  RUNELITE_PLAYER: 'RUNELITE_PLAYER';
  /**
  * Menu action for InfoBox menu entries
  */
  RUNELITE_INFOBOX: 'RUNELITE_INFOBOX';
  /**
  * Parent menu of submenus
  */
  RUNELITE_SUBMENU: 'RUNELITE_SUBMENU';
  /**
  * Menu action triggered when the id is not defined in this class.
  */
  UNKNOWN: 'UNKNOWN';
}