/// <reference path="IterableHashTable.d.ts" />
/// <reference path="RuneliteNode.d.ts" />
/**
 * A composition that can hold `param` keys. This lets Jagex attach arbitrary constant
 * data to certain items, objects, npcs, or structs for use in cs2
 *
 * @see ParamID
 */
interface ParamHolder {
	getParams(): IterableHashTable<RuneliteNode>;
	setParams(params: IterableHashTable<RuneliteNode>): void;

	/**
	 * Gets the value of a given {@link ParamID}, or its default if it is unset
	 */
	getIntValue(paramID: number): number;

	/**
	 * Sets the value of a given {@link ParamID}
	 */
	setValue(paramID: number, value: number): void;

	/**
	 * Gets the value of a given {@link ParamID}, or its default if it is unset
	 */
	getStringValue(paramID: number): string;

	/**
	 * Sets the value of a given {@link ParamID}
	 */
	setValue(paramID: number, value: string): void;
}
