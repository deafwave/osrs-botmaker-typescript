/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="ObjectID.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="coords/Angle.d.ts" />
/// <reference path="coords/Direction.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="events/GameObjectSpawned.d.ts" />
/// <reference path="events/GameTick.d.ts" />
/// <reference path="Plugin.d.ts" />
/*
 * Copyright (c) 2017, Robin Weymans <Robin.weymans@gmail.com>
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
declare namespace net.runelite.client.plugins.hunter {
( ) 
export class HunterPlugin extends Plugin
			/*
			 * ------------------------------------------------------------------------------
			 * Placing traps
			 * ------------------------------------------------------------------------------
			 */
				// If player is right next to "object" trap assume that player placed the trap
				// If the player is on that tile, assume he is the one that placed the trap
				// Note that a player can move and set up a trap in the same tick, and this
				// event runs after the player movement has been updated, so we need to
				// compare to the trap location to the last location of the player.
					// Net traps facing to the north and east must have their tile translated.
					// As otherwise, the wrong tile is stored.
			/*
			 * ------------------------------------------------------------------------------
			 * Catching stuff
			 * ------------------------------------------------------------------------------
			 */
			/*
			 * ------------------------------------------------------------------------------
			 * Failed catch
			 * ------------------------------------------------------------------------------
			 */
			/*
			 * ------------------------------------------------------------------------------
			 * Transitions
			 * ------------------------------------------------------------------------------
			 */
			// Imp entering box
			// Black chin shaking box
			// Red chin shaking box
			// Grey chin shaking box
			// Ferret shaking box
			// Embertailed Jerboa box
			// Bird traps
			// Deadfall trap
			// Net trap
			// Maniacal monkey boulder trap
	/**
	 * Iterates over all the traps that were placed by the local player and
	 * checks if the trap is still there. If the trap is gone, it removes
	 * the trap from the local players trap collection.
	 */
		// Check if all traps are still there, and remove the ones that are not.
			// Not within the client's viewport
				// Cull very old traps
					// Check for young trees (used while catching salamanders) in the tile.
					// Otherwise, hunter timers will never disappear after a trap is dismantled
				// Case we have notifications enabled and the action was not manual, throw notification
}