Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:




/**
 * A composition that can hold `param` keys. This lets Jagex attach arbitrary constant
 * data to certain items, objects, npcs, or structs for use in cs2
 *
 * @see ParamID
 */
public interface ParamHolder
{
	IterableHashTable<Node> getParams();
	void setParams(IterableHashTable<Node> params);

	/**
	 * Gets the value of a given {@link ParamID}, or its default if it is unset
	 */
	int getIntValue(int paramID);

	/**
	 * Sets the value of a given {@link ParamID}
	 */
	void setValue(int paramID, int value);

	/**
	 * Gets the value of a given {@link ParamID}, or its default if it is unset
	 */
	String getStringValue(int paramID);

	/**
	 * Sets the value of a given {@link ParamID}
	 */
	void setValue(int paramID, String value);
}
