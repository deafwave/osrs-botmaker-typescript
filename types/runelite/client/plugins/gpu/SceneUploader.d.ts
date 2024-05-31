/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="DecorativeObject.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="GroundObject.d.ts" />
/// <reference path="Model.d.ts" />
/// <reference path="Perspective.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="Projection.d.ts" />
/// <reference path="Renderable.d.ts" />
/// <reference path="Scene.d.ts" />
/// <reference path="SceneTileModel.d.ts" />
/// <reference path="SceneTilePaint.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="WallObject.d.ts" />
/// <reference path="GpuIntBuffer.d.ts" />
/// <reference path="GpuFloatBuffer.d.ts" />
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
export class SceneUploader
{
Client client;
GpuPluginConfig gpuConfig;
Regions regions;
int offset;
int uvoffset;
int uniqueModels;
SceneUploader( Client client, GpuPluginConfig config ) 
	upload(scene: Scene, vertexBuffer: GpuIntBuffer, uvBuffer: GpuFloatBuffer): void;
	private upload(scene: Scene, tile: Tile, vertexBuffer: GpuIntBuffer, uvBuffer: GpuFloatBuffer): void;
	upload(scene: Scene, tile: SceneTilePaint, tileZ: number, tileX: number, tileY: number, vertexBuffer: GpuIntBuffer, uvBuffer: GpuFloatBuffer, lx: number, lz: number, stream: boolean): number;
		// 0,0
		// 1,0
		// 1,1
		// 0,1
	upload(sceneTileModel: SceneTileModel, lx: number, lz: number, vertexBuffer: GpuIntBuffer, uvBuffer: GpuFloatBuffer, stream: boolean): number;
			// vertexes are stored in scene local, convert to tile local
	private uploadSceneModel(model: Model, vertexBuffer: GpuIntBuffer, uvBuffer: GpuFloatBuffer): void;
		// deduplicate hillskewed models
	pushModel(model: Model, vertexBuffer: GpuIntBuffer, uvBuffer: GpuFloatBuffer): number;
			// HSL override is not applied to textured faces
int[] distances;
char[] distanceFaceCount;
char[][] distanceToFaces;
float[] modelCanvasX;
float[] modelCanvasY;
int[] modelLocalX;
int[] modelLocalY;
int[] modelLocalZ;
int[] numOfPriority;
int[] eq10;
int[] eq11;
int[] lt10;
int[][] orderedFaces;
	private static initSortingBuffers(): void;
	releaseSortingBuffers(): void;
	pushSortedModel(proj: Projection, model: Model, orientation: number, x: number, y: number, z: number, vertexBuffer: GpuIntBuffer, uvBuffer: GpuFloatBuffer): number;
			// move to local position
	private pushFace(model: Model, face: number, vertexBuffer: GpuIntBuffer, uvBuffer: GpuFloatBuffer): number;
		// HSL override is not applied to textured faces
	private static packAlphaPriority(faceTextures: number[], faceTransparencies: number[], facePriorities: number[], face: number): number;
	private static interpolateHSL(hsl: number, hue2: number, sat2: number, lum2: number, lerp: number): number;
	// remove tiles from the scene that are outside the current region
	private prepare(scene: Scene): void;
	private static removeChunk(scene: Scene, cx: number, cy: number): void;
}
}