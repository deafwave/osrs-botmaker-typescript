/// <reference path="./api/Client.d.ts" />

declare namespace net.runelite {
	export let client: any;
}

declare const client: net.runelite.api.Client;

import client = net.runelite.api.Client;
