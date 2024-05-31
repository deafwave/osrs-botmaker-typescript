/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="synchronized String.d.ts" />
/// <reference path="synchronized long.d.ts" />
/*
 * Copyright (c) 2018, arlyon <https://github.com/arlyon>
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
declare namespace net.runelite.client.util {
/**
 * A set of utility functions to use when formatting quantities
 */
export class QuantityFormatter
{
	/**
	 * A list of suffixes to use when formatting stack sizes.
	 */
	/**
	 * A pattern to match a value suffix (K, M etc) in a string.
	 */
"#,###.#",
DecimalFormatSymbols.getInstance(Locale.ENGLISH) 
);
"#,###.###",
DecimalFormatSymbols.getInstance(Locale.ENGLISH) 
);
	/**
	 * Convert a quantity to a short, comma separated, SI-prefix style string
	 *
	 * example: {@code 9,450}, {@code 2.14B}, {@code 100K}
	 *
	 * @param quantity The quantity to convert.
	 * @return a 6 or less character string, possibly with a decimal point, commas or K/M/B suffix
	 */
	static quantityToStackSize(quantity: number): synchronized String;
			// Long.MIN_VALUE = -1 * Long.MIN_VALUE so we need to correct for it.
		// determine correct suffix by iterating backward through the list
		// of suffixes until the suffix results in a value >= 1
		// get locale formatted string
		// strip down any digits past the 4 first
		// make sure the last character is not a "."
	/**
	 * Convert a quantity to a short SI-prefix style string, possibly with a decimal,
	 * with K after 100,000 and M after 10,000,000
	 * 
	 * example: {@code 9,450}, {@code 2.1B}, {@code 100K}
	 * 
	 * @see #quantityToRSDecimalStack(int, boolean) 
	 */
	static quantityToRSDecimalStack(quantity: number): string;
	/**
	 * Convert a quantity to a short SI-prefix style string, possibly with decimals,
	 * with K after 100,000 and M after 10,000,000
	 *
	 * example without {@code precise}: {@code 9,450}, {@code 2.1B}, {@code 8.4M}
	 * example with {@code precise}: {@code 9,450}, {@code 2.147B}, {@code 8.32M}
	 *
	 * @param precise If true, allow thousandths precision if {@code quantity} is larger than 1 million.
	 *                Otherwise have at most a single decimal
	 */
	static quantityToRSDecimalStack(quantity: number, precise: boolean): synchronized String;
		// Output thousandths for values above a million
	/**
	 * Converts a string representation of a stack
	 * back to (close to) it's original value.
	 *
	 * @param string The string to convert.
	 * @return A long representation of it.
	 */
	/**
	 * Formats a number to be comma delimited. No suffixes are given
	 *
	 * example: {@code 10,123,351}, {@code 5}
	 */
	static parseQuantity(string: string): synchronized long;
	/**
	 * Formats a number to be comma delimited. No suffixes are given. Has at
	 * most 3 decimal places
	 *
	 * example: {@code 10,123,351}, {@code 5.612}
	 */
	static formatNumber(number: number): synchronized String;
	/**
	 * Calculates, given a string with a value denominator (for example, 20K)
	 * the multiplier that the denominator represents (in this case 1000).
	 *
	 * @param string The string to check.
	 * @return The value of the value denominator.
	 * @throws ParseException When the denominator does not match a known value.
	 */
}