/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Color.d.ts" />
/*
 * Copyright (c) 2018, Jordan Atwood <jordan.atwood423@gmail.com>
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
export class ColorUtil
{
	/**
	 * Creates a color tag from the given color.
	 *
	 * @param color The Color to create a tag from.
	 * @return      A string of the color tag for the given color.
	 */
	private static colorTag(color: Color): string;
	/**
	 * Prepends the given str with an opening color tag of the given color.
	 *
	 * @param str   The string to be colorized.
	 * @param color The color to be used in the color tag.
	 * @return      The passed str with a prepended color tag.
	 */
	static prependColorTag(str: string, color: Color): string;
	/**
	 * Wraps the given str with a color tag of the given color.
	 *
	 * @param str   The string to be colorized.
	 * @param color The color to be used in the color tag.
	 * @return      The passed str wrapped with opening and closing color tags.
	 */
	static wrapWithColorTag(str: string, color: Color): string;
	/**
	 * Converts a given color to it's hexadecimal equivalent.
	 *
	 * @param color Color to get hexadecimal string from.
	 * @return      Hexadecimal string representing the given color, in the form "#abcdef".
	 */
	static toHexColor(color: Color): string;
	/**
	 * Linearly interpolates between colors a and b by t.
	 *
	 * @param a first color
	 * @param b second color
	 * @param t factor
	 * @return  interpolated color
	 */
	static colorLerp(a: Color, b: Color, t: number): Color;
	/**
	 * Gets the RGB hex color code of the passed color.
	 *
	 * @param color The color to get a hex code from.
	 * @return      A lower-cased string of the RGB hex code of color.
	 */
	static colorToHexCode(color: Color): string;
	/**
	 * Gets the ARGB hex color code of the passed color.
	 *
	 * @param color The color to get a hex code from.
	 * @return      A lower-cased string of the ARGB hex code of color.
	 */
	static colorToAlphaHexCode(color: Color): string;
	/**
	 * Gets the same RGB color with the specified alpha value.
	 *
	 * @param color The RGB color to use.
	 * @param alpha The alpha value to use (0-255).
	 * @return      A Color with the given RGB and alpha.
	 */
	static colorWithAlpha(color: Color, alpha: number): Color;
	/**
	 * Determines if the passed hex string is an alpha hex color.
	 *
	 * @param hex The hex to test.
	 * @return    boolean
	 */
	static isAlphaHex(hex: string): boolean;
	/**
	 * Determines if the passed hex string is a hex color.
	 *
	 * @param hex The hex to test.
	 * @return    boolean
	 */
	static isHex(hex: string): boolean;
	/**
	 * Limits an int to the rgba value range (0-255)
	 *
	 * @param value The value for the r, g, b, or a.
	 * @return      An int between 0 - 255.
	 */
	static constrainValue(value: number): number;
	/**
	 * Gets the Color from the passed int string.
	 *
	 * @param string The int to get a Color object from.
	 * @return       A Color of the int of color.
	 */
	static fromString(string: string): Color;
	/**
	 * Gets the Color from the passed hex string.
	 *
	 * @param hex The hex to get a Color object from.
	 * @return    A Color of the hex code of color.
	 */
	static fromHex(hex: string): Color;
	/**
	 * Creates color from passed object hash code
	 * @param object object with hashCode
	 * @return color
	 */
	static fromObject(object: Record<string, any>): Color;
}
}