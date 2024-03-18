/// <reference path="Actor.d.ts" />
declare namespace net.runelite.api {
class SoundEffectPlayed
{


int soundId;
int delay;

boolean consumed;

	private consume(): void | null;
/** FIXME: MISPLACED, move it up and remove this comment block */
constructor(source:Actor);



}

}