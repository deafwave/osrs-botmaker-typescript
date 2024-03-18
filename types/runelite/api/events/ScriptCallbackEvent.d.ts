declare namespace net.runelite.api {
class ScriptCallbackEvent
{
/**
	 * The script that is currently being executed
	 */
Script script;

/**
	 * The name passed to runelite_callback
	 */
String eventName;
}

}