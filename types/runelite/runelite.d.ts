/// <reference path="./api/index.d.ts" />

declare const net: {
	runelite: {
		api: RuneliteApi;
		client: any;
	};
};

declare const client: RuneliteApi['Client'];
