/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Class.d.ts" />
/// <reference path="?.d.ts" />
/// <reference path="MethodHandles.Lookup.d.ts" />
/// <reference path="PrivateLookupableClassLoader.d.ts" />
/// <reference path="Injector.d.ts" />
/// <reference path="synchronized static void.d.ts" />
/// <reference path="Annotation>.d.ts" />
/// <reference path="Annotation> m = (Map) declaredAnnotations.get(object);.d.ts" />
/// <reference path="Annotation>emptyMap()).d.ts" />
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
declare namespace net.runelite.client.util {
export class ReflectUtil
{
	private static privateLookupIn(clazz: Class<?>): MethodHandles.Lookup;
export interface PrivateLookupableClassLoader
		// define class is protected final so this needs a different name to become public
	/**
	 * Allows private Lookups to be created for classes in this ClassLoader
	 * <p>
	 * Due to JDK-8173978 it is impossible to create get a lookup with module scoped permissions when teleporting
	 * between modules. Since external plugins are loaded in a separate classloader to us they are contained in unique
	 * unnamed modules. Since we (via LambdaMetafactory) are creating a hidden class in that module, we require module
	 * scoped access to it, and since the methods can be private, we also require private access. The only way to get
	 * MODULE|PRIVATE is to either 1) invokedynamic in that class, 2) call MethodHandles.lookup() from that class, or
	 * 3) call privateLookupIn with an existing lookup with PRIVATE|MODULE created from a class in the same module.
	 * Our solution is to make classloaders call this method which will define a class in the classloader's unnamed
	 * module that calls MethodHandles.lookup() and stores it in the classloader for later use.
	 */
	static installLookupHelper(cl: PrivateLookupableClassLoader): void;
			// force <clinit> to run
export class PrivateLookupHelper
	static queueInjectorAnnotationCacheInvalidation(injector: Injector): synchronized static void;
	invalidateAnnotationCaches(): synchronized static void;
			// this fails on newer Java versions which don't allow reflect into java.base
	/**
	 * Java caches parsed annotations on AccessibleObjects in a LinkedHashMap for performance reasons.
	 * Since we don't use annotations much after startup, we can invalidate these caches.
	 *
	 * @param object
	 * @param declaredAnnotationsClazz
	 * @throws Exception
	 */
			// AnnotationParser returns the shared empty map for methods with no runtime annotations,
			// so we can avoid nulling it in that case.
		// JDK11 shares the annotation map between the object and its root, so clear both;
		// JDK8 just has the annotations on object.
}