/// <reference path="../../../java/index.d.ts" />
/*
 * Copyright (c) 2018, Joshua Filby <joshua@filby.me>
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
	/**
	 * A set of utilities to use when dealing with text.
	 */
	export class Text {
		/**
		 * Splits comma separated values to list of strings
		 *
		 * @param input input
		 * @return list of values
		 */
		private static fromCSV(input: string): Array<string>;
		/**
		 * Joins collection of strings as comma separated values
		 *
		 * @param input collection
		 * @return comma separated value string
		 */
		static toCSV(input: Collection<String>): string;
		/**
		 * Removes all tags from the given string.
		 *
		 * @param str The string to remove tags from.
		 * @return The given string with all tags removed from it.
		 */
		static removeTags(str: string): string;
		/**
		 * Remove tags from the given string, except for &lt;lt&gt; and &lt;gt&gt;
		 *
		 * @param str The string to remove formatting tags from.
		 * @return The given string with all formatting tags removed from it.
		 */
		static removeFormattingTags(str: string): string;
		/**
		 * In addition to removing all tags, replaces nbsp with space, trims string and lowercases it
		 * @param str The string to standardize
		 *
		 * @return The given `str` that is standardized
		 */
		static standardize(str: string): string;
		/**
		 * Convert a string into Jagex username format
		 * Remove all non-ascii characters, replace nbsp with space, replace _- with spaces, and trim
		 *
		 * @param str The string to standardize
		 * @return The given `str` that is in Jagex name format
		 */
		static toJagexName(str: string): string;
		/**
		 * In addition to removing all tags, replaces all &lt;br&gt; delimited text with spaces and all multiple continuous
		 * spaces with single space
		 *
		 * @param str The string to sanitize
		 * @return sanitized string
		 */
		static sanitizeMultilineText(str: string): string;
		/**
		 * Escapes a string for widgets, replacing &lt; and &gt; with their escaped counterparts
		 */
		static escapeJagex(str: string): string;
		/**
		 * Cleans the ironman status icon from playername string if present and
		 * corrects spaces.
		 *
		 * @param name Playername to lookup.
		 * @return Cleaned playername.
		 */
		static sanitize(name: string): string;
		/**
		 * If passed in enum doesn't implement its own toString,
		 * converts enum name format from THIS_FORMAT to This Format.
		 *
		 * @param o an enum
		 * @return  the enum's name in title case,
		 *          or if it overrides toString,
		 *          the value returned by toString
		 */
		static titleCase(o: Enum): string;
		// .toString() returns the value of .name() if not overridden
		/**
		 * Checks if all the search terms in the given list matches at least one keyword.
		 *
		 * @return true if all search terms matches at least one keyword, or false if otherwise.
		 */
		static matchesSearchTerms(
			searchTerms: Iterable<String>,
			keywords: Collection<String>,
		): boolean;
	}
}
