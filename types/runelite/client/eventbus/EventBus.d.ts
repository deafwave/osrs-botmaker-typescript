/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="synchronized void.d.ts" />
/// <reference path="Class.d.ts" />
/// <reference path="T.d.ts" />
/// <reference path="synchronized.d.ts" />
/// <reference path="Subscriber.d.ts" />
/*
 * Copyright (c) 2018, Tomas Slusny <slusnucky@gmail.com>
 * Copyright (c) 2018, Abex
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
declare namespace net.runelite.client.eventbus {
export class EventBus
{
export class Subscriber
Consumer<Throwable> exceptionHandler;
	/**
	 * Instantiates EventBus with default exception handler
	 */
EventBus() 
	/**
	 * Registers subscriber to EventBus. All methods in subscriber and it's parent classes are checked for
	 * {@link Subscribe} annotation and then added to map of subscriptions.
	 *
	 * @param object subscriber to register
	 * @throws IllegalArgumentException in case subscriber method name is wrong (correct format is 'on' + EventName
	 */
	register(object: Record<string, any>): synchronized void;
	register(clazz: Class<T>, subFn: Consumer<T>, priority: number): synchronized <T> Subscriber;
	/**
	 * Unregisters all subscribed methods from provided subscriber object.
	 *
	 * @param object object to unsubscribe from
	 */
	unregister(object: Record<string, any>): synchronized void;
	unregister(sub: Subscriber): synchronized void;
	/**
	 * Posts provided event to all registered subscribers. Subscriber calls are invoked immediately,
	 * ordered by priority then their declaring class' name.
	 *
	 * @param event event to post
	 */
	post(event: Record<string, any>): void;
}
}