declare namespace net.runelite.api {
class VarbitChanged
{
/**
	 * The id of the varp that was changed.
	 * For a varplayer, this is the varplayer id.
	 */

varpId = -1;

/**
	 * The id of the varbit that was changed.
	 * For a varplayer, this is -1.
	 */

varbitId = -1;

/**
	 * The new value of the varp or varbit
	 */
int value;


	private getIndex(): number;



}

}