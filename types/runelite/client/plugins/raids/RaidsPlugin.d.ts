/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="InstanceTemplates.d.ts" />
/// <reference path="MessageNode.d.ts" />
/// <reference path="NullObjectID.d.ts" />
/// <reference path="Perspective/SCENE_SIZE.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="SpriteID/TAB_QUESTS_BROWN_RAIDING_PARTY.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/ChatMessage.d.ts" />
/// <reference path="events/GameStateChanged.d.ts" />
/// <reference path="events/VarbitChanged.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2018, Kamiel
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.plugins.raids {
( ) 
export class RaidsPlugin extends Plugin
	// if the player is inside of a raid or not
	/*
	 * if the player is in a raid party or not
	 * This will be set when someone in the friends chat clicks the "make party" button on the raids widget
	 * It will change again when someone from your friends chat enters the raid to generate it
	 * It will be reset when the raid starts but not if they leave the raid while it has not started yet
	 */
		// if the player's party state has changed
				// Party dissolution
		// if the player's raid state has changed
				// if the player is inside of a raid then check the raid
			// solve additional unknown rooms
		// Update rotation whitelist
			// The south-west tile of the lobby room in the scene
		/*
		 * The x position of the starting room relative to other rooms
		 * The west most room will have a value of 0 and the east most will have a value of 3
		 * The rooms have the following x values
		 *     0 1 2 3
		 *     0 1 2 3
		 */
		/*
		 * The y position of the starting room relative to other rooms
		 * The north rooms will have a y value of 0 and the south will have a value of 1
		 * The rooms have the following y values
		 *     0 0 0 0
		 *     1 1 1 1
 		 */
		/*
		 * i is the position of the room in the raid room array, the raid rooms are in order of north to south,
		 * west to east, and plane 3 to plane 2. For example the 0th room is the north-west room on plane 3 and
		 * the 15th room is the south-east room of plane 2
		 *
		 * The indexes of the rooms of plane 3 (the first/lobby floor) will look like
		 *     0  1  2  3
		 *     4  5  6  7
		 *
		 * The indexes of the rooms of plane 2 (the second floor) will look like
		 *     8  9  10 11
		 *     12 13 14 15
		 */
			/*
			 * The x position of the current room relative to other rooms
			 * The west most room will have a value of 0 and the east most will have a value of 3
			 * The rooms have the following x values
			 *     0 1 2 3
			 *     0 1 2 3
			 */
			/*
			 * The y position of the current room relative to other rooms
			 * The north rooms will have a y value of 0 and the south will have a value of 1
			 * The rooms have the following y values
			 *     0 0 0 0
			 *     1 1 1 1
			 */
			/*
			 * The plane of the current room
			 * The rooms on the lobby/first floor will have a plane of 3
			 * The rooms on the second floor will have a plane of 2
			 */
			// The x position of the current room relative to starting room
			// The y position of the current room relative to starting room
			// The x coord (world point) of the south west tile of the current room
			// The y coord (world point) of the south west tile of the current room
			// The x coord (scene) of the south west tile of the current room
			// The y coord (scene) of the south west tile of the current room
			// If the west tile of the current room is not in the scene but the room itself has tiles in the scene
			// then make x a tile of the room that is actually in the scene
			// If the south tile of the current room is not in the scene
			// then make y a tile of the room that is actually in the scene
			// The scene tile of the current room to check for
			// scout the room
	/**
	 * Finds the lobby room index in the room array
	 * There are 8 rooms per floor in a 4 wide (x) and 2 high (y) rectangle
	 * The rooms on plane 3 (the lobby plane) have the following indexes
	 *     0 1 2 3
	 *     4 5 6 7
	 */
		/*
		 * If the room to the right of the starting room can't be seen then return null
		 * This should only happen if the user turns on the raid plugin while already inside of a raid and not in the
		 * starting location
		 *
		 * The player should always be able to see both rows of rooms (on the y axis) so the second check is not needed
		 * but is included to be safe
		 */
		// the lobby will always be on the top/first floor (plane 3)
		/*
		 * if there is no room north the lobby then it is the north most room
		 * The north rooms will have a y value of 0 and the south will have a value of 1
		 * The rooms have the following y values
		 *     0 0 0 0
		 *     1 1 1 1
		 */
		/*
		 * if there is no room east of the lobby then it is the east most room
		 * The west most room will have a value of 0 and the east most will have a value of 3
		 * The rooms have the following x values
		 *     0 1 2 3
		 *     0 1 2 3
		 */
			// determine x based on how many rooms are to the west of it.
		// the room index based on its x and y values
}