/// <reference path="Player.d.ts" />
/// <reference path="Actor.d.ts" />
declare namespace net.runelite.api {
class PlayerSpawned
{
/**
	 * The spawned player.
	 */


	getActor(): Actor;
/** FIXME: MISPLACED, move it up and remove this comment block */
constructor(player:Player);



}

}