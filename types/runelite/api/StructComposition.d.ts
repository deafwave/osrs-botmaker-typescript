/// <reference path="ParamHolder.d.ts" />

/**
 * A config type dedicated to holding params.
 *
 * Historically items were often used for this before structs were made
 * available, and there are many of these still around.
 *
 * @see ParamHolder
 */
interface StructComposition extends ParamHolder {
	getId(): number;
}
