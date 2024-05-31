/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Certificate> certificates = certificateFactory.generateCertificates(in);.d.ts" />
/// <reference path="RuntimeException.d.ts" />
/*
 * Copyright (c) 2016-2017, Adam <Adam@sigterm.info>
 * Copyright (c) 2018, Tomas Slusny <slusnucky@gmail.com>
 * Copyright (c) 2019 Abex
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
declare namespace net.runelite.client.rs {
export class ClientLoader implements Supplier<Applet>
					// try again with the fallback config and gamepack
				// create the classloader for the jar while we hold the lock, and eagerly load and link all classes
				// in the jar. Otherwise the jar can change on disk and can break future classloads.
		// Randomize the codebase
		// Update the world applet parameter
		// Get the mtime of the first thing in the vanilla cache
		// we check this against what the server gives us to let us skip downloading and patching the whole thing
			// Start downloading the vanilla client
				// If we are using the backup config, use our own gamepack and ignore the codebase
					// Its important to not close the response manually - this should be the only close or
					// try-with-resources on this stream or it's children
							// The zip trailer filetab can be missing and the ZipInputStream will not notice
					// Save the bytes from the mtime test so we can write it to disk
					// if the test fails, or the cache doesn't verify
					// Get the mtime from the first entry so check it against the cache
					// the mtime matches so the cache is probably up to date, but just make sure its fully
					// intact before closing the server connection
							// as with the request stream, its important to not early close vanilla too
						// the cache is not up to date, commit our peek to the file and write the rest of it, while verifying
					// With fallback config do 1 attempt (there are no additional urls to try)
			// load all of the classes in this jar; after the jar is closed the classloader
			// will no longer be able to look up classes
			// You can't sign the signing files
		// Jar entry must match one of the trusted certificate chains
}