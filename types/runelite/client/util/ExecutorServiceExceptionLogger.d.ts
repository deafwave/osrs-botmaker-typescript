/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Runnable.d.ts" />
/// <reference path="Callable.d.ts" />
/// <reference path="V.d.ts" />
/// <reference path=".d.ts" />
/// <reference path="V> Callable<V.d.ts" />
/// <reference path="T.d.ts" />
/// <reference path="T> Future<T.d.ts" />
/// <reference path="Callable<T>> tasks) throws InterruptedException.d.ts" />
/// <reference path="Callable<T>> tasks.d.ts" />
/// <reference path="long timeout.d.ts" />
/// <reference path="TimeUnit unit) throws InterruptedException.d.ts" />
/// <reference path="ExecutionException.d.ts" />
/// <reference path="TimeoutException.d.ts" />
/// <reference path="TimeUnit.d.ts" />
/// <reference path="V> ScheduledFuture<V.d.ts" />
/*
 * Copyright (c) 2018, Tomas Slusny <slusnucky@gmail.com>
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
 * Wrapper for ${@link ScheduledExecutorService} that will log all uncaught exceptions as warning to console
 */
export class ExecutorServiceExceptionLogger implements ScheduledExecutorService
{
ScheduledExecutorService service;
	private static monitor(command: Runnable): Runnable;
	private static monitor(command: Callable<V>): <V> Callable<V>;
	submit(task: Callable<T>): <T> Future<T>;
	submit(task: Runnable, result: T): <T> Future<T>;
Future<?> submit(Runnable task) 
	execute(command: Runnable): void;
	// Everything below is direct proxy to provided executor service
	shutdown(): void;
	shutdownNow(): Array<Runnable>;
	isShutdown(): boolean;
	isTerminated(): boolean;
	awaitTermination(timeout: number, unit: TimeUnit): boolean;
	schedule(callable: Callable<V>, delay: number, unit: TimeUnit): <V> ScheduledFuture<V>;
ScheduledFuture<?> scheduleAtFixedRate(Runnable command, long initialDelay, long period, TimeUnit unit) 
ScheduledFuture<?> scheduleWithFixedDelay(Runnable command, long initialDelay, long delay, TimeUnit unit) 
}
}