/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="ChunkMapper.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/*
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
declare namespace net.runelite.client.plugins.skybox {
export class Skybox
{
export interface ChunkMapper
		/**
		 * Gets the instance template chunk data for the specified point
		 *
		 * @see Client#getInstanceTemplateChunks
		 */
	// How many stddev per direction we need to stay visibly continuous
	// 511/512 accuracy
	// This has a worst case complexity of O((BLEND_RADUS*2)^2)
	// BLEND_RADIUS is in chunks (8 tiles)
	// The maximum number of tiles that can be blended before becoming visibly discontinuous
"//.*$|" + // //comment
"m[ \\t]*(?<mrx>[0-9]+)[ \\t]+(?<mry>[0-9]+)|" + // m <rx> <ry> "r[ \\t]*(?<rx>[0-9]+)[ \\t]+(?<ry>[0-9]+)|" + // r <rx> <ry> "R[ \\t]*(?<rx1>[0-9]+)[ \\t]+(?<ry1>[0-9]+)[ \\t]+(?<rx2>[0-9]+)[ \\t]+(?<ry2>[0-9]+)|" + // R <rx1> <ry1> <rx2> <ry2> "c[ \\t]*(?<cx>[0-9-]+)[ \\t]+(?<cy>[0-9-]+)|" + // c <cx> <cy> "C[ \\t]*(?<cx1>[0-9-]+)[ \\t]+(?<cy1>[0-9-]+)[ \\t]+(?<cx2>[0-9-]+)[ \\t]+(?<cy2>[0-9-]+)|" + // C <cx1> <cy1> <cx2> <cy2> "p[ \\t]*(?<plane>all|0?[ \\t]*1?[ \\t]*2?[ \\t]*3?)|" + // p all or p<1><2><3><4> "b[ \\t]*(?<blend>[0-9]+)|" + // b <blend> "bounds[ \\t]+(?<bx1>[0-9]+)[ \\t]+(?<by1>[0-9]+)[ \\t]+(?<bx2>[0-9]+)[ \\t]+(?<by2>[0-9]+)" + // bounds <x0> <y0> <x1> <y1> ")[ \\t]*"); 
int[] chunks;
int[] planeOverrides;
int x1;
int y1;
int x2;
int y2;
int stride;
								// Expand #RGB to #RRGGBB
							// Convert to YCoCg24 because it produces less blending artifacts due
							// to mismatched skew rates
							// See: https://stackoverflow.com/questions/10566668/lossless-rgb-to-ycbcr-transformation
							// fallthrough
										// We are not setting all planes in this chunk, so allocate a plane override section
										// and add a pointer to it in the normal chunk's space. We do this because most chunks
										// do not have plane-specific data
											// Existing plane override
Skybox(InputStream is, String filename) throws IOException  Skybox(Reader reader, String filename) throws IOException  int chunkData(int cx, int cy, int plane, ChunkMapper chunkMapper) 
	/**
	 * Calculates the RGB color for a specific world coordinate. Arguments are floats for sub-tile accuracy.
	 *
	 * @param x           Sample X coordinate in tiles
	 * @param y           Samlpe Y coordinate in tiles
	 * @param x           Player X coordinate in tiles
	 * @param y           Player Y coordinate in tiles
	 * @param chunkMapper maps chunks to their instance templates, or null if not in an instance
	 */
	getColorForPoint(x: number, y: number, px: number, py: number, plane: number, brightness: number, chunkMapper: ChunkMapper): number;
			// No data in the center chunk?
				// Get the blend value, add 1/8 tile to make sure we don't div/0, convert to chunks
				// Calculate how far we have to be away before we can discard this value without
				// becoming visibly discontinuous
				// Try to fast-fail
				// Calculate integrate a gaussian distribution in each dimension for
				// this chunk relative to the requested point
				// Load our YCoCg24 values into floats
				// And multiply by the weight
		// Convert back to int range values, and bounds check while we are at it
		// convert back to rgb from YCoCg24
		// increase brightness with HSB
	/**
	 * Approximation of erf 'Gauss error function' which is used to calculate
	 * the cumulative distribution of a gaussian distribution.
	 * This is used to simulate a large kernel gaussian blur without having
	 * to sample the same chunk multiple times.
	 */
	private erf(x: number): number;
	/**
	 * Draws the skybox map to an image
	 *
	 * @param resolution The number of pixels per tile
	 * @param line       How many tiles to put a line
	 * @param plane      the plane (0-4) to render
	 */
	render(resolution: number, line: number, plane: number, chunkMapper: ChunkMapper): BufferedImage;
}
}