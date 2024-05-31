/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Texture.d.ts" />
/// <reference path="TextureProvider.d.ts" />
/*
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.plugins.gpu {
export class TextureManager
{
	private static initTextureArray(textureProvider: TextureProvider): number;
		// Set brightness to 1.0d to upload unmodified textures to GPU
	setAnisotropicFilteringLevel(textureArrayId: number, level: number): void;
		//level = 0 means no mipmaps and no anisotropic filtering
		//level = 1 means with mipmaps but without anisotropic filtering GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT defaults to 1.0 which is off
		//level > 1 enables anisotropic filtering. It's up to the vendor what the values mean
		//Even if anisotropic filtering isn't supported, mipmaps will be enabled with any level >= 1
			// Set on GL_NEAREST_MIPMAP_LINEAR (bilinear filtering with mipmaps) since the pixel nature of the game means that nearest filtering
			// looks best for objects up close but allows linear filtering to resolve possible aliasing and noise with mipmaps from far away objects.
			//Clamp from 1 to max GL says it supports.
	freeTextureArray(textureArrayId: number): void;
	/**
	 * Check if all textures have been loaded and cached yet.
	 *
	 * @param textureProvider
	 * @return
	 */
	private allTexturesLoaded(textureProvider: TextureProvider): boolean;
	private updateTextures(textureProvider: TextureProvider, textureArrayId: number): void;
					// The texture storage is 128x128 bytes, and will only work correctly with the
					// 128x128 textures from high detail mode
	private static convertPixels(srcPixels: number[], width: number, height: number, textureWidth: number, textureHeight: number): number[];
	computeTextureAnimations(textureProvider: TextureProvider): number[];
}
}