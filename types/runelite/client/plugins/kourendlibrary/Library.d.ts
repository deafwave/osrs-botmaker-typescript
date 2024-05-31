/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="synchronized List.d.ts" />
/// <reference path="Bookcase.d.ts" />
/// <reference path="Book.d.ts" />
/// <reference path="synchronized void.d.ts" />
/// <reference path="List<Book>.d.ts" />
/*
 * Copyright (c) 2018 Abex
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
declare namespace net.runelite.client.plugins.kourendlibrary {
/**
 * Library represents a instance of the Kourend/Arceuus House library.
 * <p>
 * The library changes the locations of it's books every 60-90 minutes.
 * Of the 554 bookcases in the library, only 346 of them can ever have books.
 * 6 of the bookcases in the south-west corner of the top floor are duplicated.
 * These 6 bookcases are not handled 100% correctly due to their low chance
 * of being used to train the predictor.
 * <p>
 * Each of the 352 bookcase slots "Bookcase"s has an index which is used to
 * place the book inside of them. The game chooses one of the 5 sequences and a
 * bookcase starting index, then places a book from the sequence into every 13th
 * bookcase, by index. Each sequence contains 16 Books.
 */
export class Library
{
int step;
SolvedState state;
Book customerBook;
int customerId;
Library() 
	getBookcasesOnLevel(z: number): synchronized List<Bookcase>;
	getBookcases(): synchronized List<Bookcase>;
	setCustomer(customerId: number, book: Book): void;
	reset(): synchronized void;
	mark(loc: net.runelite.api.coords.WorldPoint, book: Book): void;
	mark(bookcaseIndex: number, book: Book): void;
	mark(bookcase: Bookcase, book: Book): synchronized void;
			// Bookcase is set from a previous mark
			// Check for a mismatch, unless it is now null and has Varlamore Envoy
			// Reset if the book we found isn't what we expected
			// Reset if we found nothing when we expected something that wasn't Varlamore Envoy
			// since the layout has changed
				// Everything is known, nothing to do
			// Basing the sequences on null is not supported, though possible
			// This is one of the 6 bookcases with 2 ids. Not fully supported.
			// Map each sequence to the number of bookcases that match the sequence
			// return 0 if it is a mismatch.
						// Only bail if this isn't a double bookcase
			// Write the most likely sequences onto the bookcases
			// We have books set, but 0 sequences match, Something is wrong, reset.
	/**
	 * Find the bookcase index that is index zero in the sequence, identifying by the book in bookcase
	 */
	private getBookcaseZeroIndexForSequenceWithBook(sequences: Array<Book>, bookcaseIndex: number, book: Book): number;
	private populateSequences(): Array<List<Book>>;
	private add(x: number, y: number, z: number, i: number): void;
		// 'i' is added as a parameter for readability
	private populateBooks(): void;
}
}