/// <reference path="Player.d.ts" />
/// <reference path="Actor.d.ts" />
declare namespace net.runelite.api {
class PlayerDespawned
{
/**
	 * The despawned player.
	 */


	getActor(): Actor;
/** FIXME: MISPLACED, move it up and remove this comment block */
constructor(player:Player);



}

}