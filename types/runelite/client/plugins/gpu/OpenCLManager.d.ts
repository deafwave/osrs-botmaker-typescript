/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="Scene.d.ts" />
/// <reference path="AWTContext.d.ts" />
/// <reference path="MemoryStack.d.ts" />
/// <reference path="GLBuffer.d.ts" />
/// <reference path="IntBuffer.d.ts" />
/*
 * Copyright (c) 2021, Adam <Adam@sigterm.info>
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
export class OpenCLManager
{
	//  struct shared_data {
	//      int totalNum[12];
	//      int totalDistance[12];
	//      int totalMappedNum[18];
	//      int min10;
	//      int renderPris[0];
	//  };
boolean initialized;
	// The number of faces each worker processes in the two kernels
int largeFaceCount;
int smallFaceCount;
long device;
long context;
long commandQueue;
long programUnordered;
long programSmall;
long programLarge;
long kernelUnordered;
long kernelSmall;
long kernelLarge;
long tileHeightImage;
	private static init(awtContext: AWTContext): void;
	cleanup(): void;
	private initContext(awtContext: AWTContext, stack: MemoryStack): void;
	private initContextMacOS(awtContext: AWTContext, stack: MemoryStack): void;
	private ensureMinWorkGroupSize(): void;
		// Largest power of 2 less than or equal to maxWorkGroupSize
	private initQueue(): void;
	private compileProgram(stack: MemoryStack, programSource: string): number;
	private getKernel(stack: MemoryStack, program: number, kernelName: string): number;
	private compilePrograms(stack: MemoryStack): void;
	uploadTileHeights(scene: Scene): void;
	compute(unorderedModels: number, smallModels: number, largeModels: number, sceneVertexBuffer: GLBuffer, sceneUvBuffer: GLBuffer, vertexBuffer: GLBuffer, uvBuffer: GLBuffer, unorderedBuffer: GLBuffer, smallBuffer: GLBuffer, largeBuffer: GLBuffer, outVertexBuffer: GLBuffer, outUvBuffer: GLBuffer, uniformBuffer: GLBuffer): void;
				// queue compute call after acquireGLBuffers
	finish(): void;
	private static getPlatformInfoStringUTF8(cl_platform_id: number, param_name: number): string;
	private static getDeviceInfoLong(cl_device_id: number, param_name: number): number;
	private static getDeviceInfoInt(cl_device_id: number, param_name: number): number;
	private static getDeviceInfoPointer(cl_device_id: number, param_name: number): number;
	private static getDeviceInfoStringUTF8(cl_device_id: number, param_name: number): string;
	private static getProgramBuildInfoInt(cl_program_id: number, cl_device_id: number, param_name: number): number;
	private static getProgramBuildInfoStringASCII(cl_program_id: number, cl_device_id: number, param_name: number): string;
	private static checkCLError(errcode: IntBuffer): void;
	private static checkCLError(errcode: number): void;
}
}