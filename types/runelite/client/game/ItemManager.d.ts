/// <reference path="../../../java/index.d.ts" />
/// <reference path="../../../jagex/index.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="Constants.d.ts" />
/// <reference path="Constants/CLIENT_DEFAULT_ZOOM.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="ItemID/*.d.ts" />
/// <reference path="SpritePixels.d.ts" />
/// <reference path="widgets/ItemQuantityMode.d.ts" />
/// <reference path="ItemPrice.d.ts" />
/// <reference path="ItemStats.d.ts" />
/// <reference path="AsyncBufferedImage.d.ts" />
/// <reference path="Color.d.ts" />
/// <reference path="BufferedImage.d.ts" />
/*
 * Copyright (c) 2017, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.game {
export class ItemManager
{
export class ImageKey
export class OutlineKey
Client client;
ClientThread clientThread;
ItemClient itemClient;
RuneLiteConfig runeLiteConfig;
LoadingCache<ImageKey, AsyncBufferedImage> itemImages;
LoadingCache<OutlineKey, BufferedImage> itemOutlines;
	// Worn items with weight reducing property have a different worn and inventory ItemID
put(BOOTS_OF_LIGHTNESS_89, BOOTS_OF_LIGHTNESS). put(PENANCE_GLOVES_10554, PENANCE_GLOVES).  put(GRACEFUL_HOOD_11851, GRACEFUL_HOOD). put(GRACEFUL_CAPE_11853, GRACEFUL_CAPE). put(GRACEFUL_TOP_11855, GRACEFUL_TOP). put(GRACEFUL_LEGS_11857, GRACEFUL_LEGS). put(GRACEFUL_GLOVES_11859, GRACEFUL_GLOVES). put(GRACEFUL_BOOTS_11861, GRACEFUL_BOOTS). put(GRACEFUL_HOOD_13580, GRACEFUL_HOOD_13579). put(GRACEFUL_CAPE_13582, GRACEFUL_CAPE_13581). put(GRACEFUL_TOP_13584, GRACEFUL_TOP_13583). put(GRACEFUL_LEGS_13586, GRACEFUL_LEGS_13585). put(GRACEFUL_GLOVES_13588, GRACEFUL_GLOVES_13587). put(GRACEFUL_BOOTS_13590, GRACEFUL_BOOTS_13589). put(GRACEFUL_HOOD_13592, GRACEFUL_HOOD_13591). put(GRACEFUL_CAPE_13594, GRACEFUL_CAPE_13593). put(GRACEFUL_TOP_13596, GRACEFUL_TOP_13595). put(GRACEFUL_LEGS_13598, GRACEFUL_LEGS_13597). put(GRACEFUL_GLOVES_13600, GRACEFUL_GLOVES_13599). put(GRACEFUL_BOOTS_13602, GRACEFUL_BOOTS_13601). put(GRACEFUL_HOOD_13604, GRACEFUL_HOOD_13603). put(GRACEFUL_CAPE_13606, GRACEFUL_CAPE_13605). put(GRACEFUL_TOP_13608, GRACEFUL_TOP_13607). put(GRACEFUL_LEGS_13610, GRACEFUL_LEGS_13609). put(GRACEFUL_GLOVES_13612, GRACEFUL_GLOVES_13611). put(GRACEFUL_BOOTS_13614, GRACEFUL_BOOTS_13613). put(GRACEFUL_HOOD_13616, GRACEFUL_HOOD_13615). put(GRACEFUL_CAPE_13618, GRACEFUL_CAPE_13617). put(GRACEFUL_TOP_13620, GRACEFUL_TOP_13619). put(GRACEFUL_LEGS_13622, GRACEFUL_LEGS_13621). put(GRACEFUL_GLOVES_13624, GRACEFUL_GLOVES_13623). put(GRACEFUL_BOOTS_13626, GRACEFUL_BOOTS_13625). put(GRACEFUL_HOOD_13628, GRACEFUL_HOOD_13627). put(GRACEFUL_CAPE_13630, GRACEFUL_CAPE_13629). put(GRACEFUL_TOP_13632, GRACEFUL_TOP_13631). put(GRACEFUL_LEGS_13634, GRACEFUL_LEGS_13633). put(GRACEFUL_GLOVES_13636, GRACEFUL_GLOVES_13635). put(GRACEFUL_BOOTS_13638, GRACEFUL_BOOTS_13637). put(GRACEFUL_HOOD_13668, GRACEFUL_HOOD_13667). put(GRACEFUL_CAPE_13670, GRACEFUL_CAPE_13669). put(GRACEFUL_TOP_13672, GRACEFUL_TOP_13671). put(GRACEFUL_LEGS_13674, GRACEFUL_LEGS_13673). put(GRACEFUL_GLOVES_13676, GRACEFUL_GLOVES_13675). put(GRACEFUL_BOOTS_13678, GRACEFUL_BOOTS_13677). put(GRACEFUL_HOOD_21063, GRACEFUL_HOOD_21061). put(GRACEFUL_CAPE_21066, GRACEFUL_CAPE_21064). put(GRACEFUL_TOP_21069, GRACEFUL_TOP_21067). put(GRACEFUL_LEGS_21072, GRACEFUL_LEGS_21070). put(GRACEFUL_GLOVES_21075, GRACEFUL_GLOVES_21073). put(GRACEFUL_BOOTS_21078, GRACEFUL_BOOTS_21076). put(GRACEFUL_HOOD_24745, GRACEFUL_HOOD_24743). put(GRACEFUL_CAPE_24748, GRACEFUL_CAPE_24746). put(GRACEFUL_TOP_24751, GRACEFUL_TOP_24749). put(GRACEFUL_LEGS_24754, GRACEFUL_LEGS_24752). put(GRACEFUL_GLOVES_24757, GRACEFUL_GLOVES_24755). put(GRACEFUL_BOOTS_24760, GRACEFUL_BOOTS_24758). put(GRACEFUL_HOOD_25071, GRACEFUL_HOOD_25069). put(GRACEFUL_CAPE_25074, GRACEFUL_CAPE_25072). put(GRACEFUL_TOP_25077, GRACEFUL_TOP_25075). put(GRACEFUL_LEGS_25080, GRACEFUL_LEGS_25078). put(GRACEFUL_GLOVES_25083, GRACEFUL_GLOVES_25081). put(GRACEFUL_BOOTS_25086, GRACEFUL_BOOTS_25084). put(GRACEFUL_HOOD_27446, GRACEFUL_HOOD_27444). put(GRACEFUL_CAPE_27449, GRACEFUL_CAPE_27447). put(GRACEFUL_TOP_27452, GRACEFUL_TOP_27450). put(GRACEFUL_LEGS_27455, GRACEFUL_LEGS_27453). put(GRACEFUL_GLOVES_27458, GRACEFUL_GLOVES_27456). put(GRACEFUL_BOOTS_27461, GRACEFUL_BOOTS_27459).  put(MAX_CAPE_13342, MAX_CAPE).  put(SPOTTED_CAPE_10073, SPOTTED_CAPE). put(SPOTTIER_CAPE_10074, SPOTTIER_CAPE).  put(AGILITY_CAPET_13341, AGILITY_CAPET). put(AGILITY_CAPE_13340, AGILITY_CAPE). build(); 
ItemManager(Client client, ScheduledExecutorService scheduledExecutorService, ClientThread clientThread, ItemClient itemClient, RuneLiteConfig runeLiteConfig) 
	private loadPrices(): void;
	private loadStats(): void;
	/**
	 * Look up an item's price
	 *
	 * @param itemID item id
	 * @return item price
	 */
	getItemPrice(itemID: number): number;
	/**
	 * Look up an item's price
	 *
	 * @param itemID item id
	 * @param useWikiPrice use the actively traded/wiki price
	 * @return item price
	 */
	getItemPriceWithSource(itemID: number, useWikiPrice: boolean): number;
	/**
	 * Get the wiki price for an item, with checks to try and avoid excessive price manipulation
	 * @param itemPrice
	 * @return
	 */
	getWikiPrice(itemPrice: ItemPrice): number;
	/**
	 * Look up an item's stats
	 * @param itemId item id
	 * @return item stats
	 */
	getItemStats(itemId: number, allowNote: boolean): ItemStats | null;
	/**
	 * Search for tradeable items based on item name
	 *
	 * @param itemName item name
	 * @return
	 */
	search(itemName: string): Array<ItemPrice>;
	/**
	 * Look up an item's composition
	 *
	 * @param itemId item id
	 * @return item composition
	 */
	getItemComposition(itemId: number): ItemComposition;
	/**
	 * Get an item's un-noted, un-placeholdered ID
	 */
	canonicalize(itemID: number): number;
	/**
	 * Loads item sprite from game, makes transparent, and generates image
	 *
	 * @param itemId
	 * @return
	 */
	private loadImage(itemId: number, quantity: number, stackable: boolean): AsyncBufferedImage;
	/**
	 * Get item sprite image as BufferedImage.
	 * <p>
	 * This method may return immediately with a blank image if not called on the game thread.
	 * The image will be filled in later. If this is used for a UI label/button, it should be added
	 * using AsyncBufferedImage::addTo to ensure it is painted properly
	 *
	 * @param itemId
	 * @return
	 */
	getImage(itemId: number): AsyncBufferedImage;
	/**
	 * Get item sprite image as BufferedImage.
	 * <p>
	 * This method may return immediately with a blank image if not called on the game thread.
	 * The image will be filled in later. If this is used for a UI label/button, it should be added
	 * using AsyncBufferedImage::addTo to ensure it is painted properly
	 *
	 * @param itemId
	 * @param quantity
	 * @return
	 */
	getImage(itemId: number, quantity: number, stackable: boolean): AsyncBufferedImage;
	/**
	 * Create item sprite and applies an outline.
	 *
	 * @param itemId item id
	 * @param itemQuantity item quantity
	 * @param outlineColor outline color
	 * @return image
	 */
	private loadItemOutline(itemId: number, itemQuantity: number, outlineColor: Color): BufferedImage;
	/**
	 * Get item outline with a specific color.
	 *
	 * @param itemId item id
	 * @param itemQuantity item quantity
	 * @param outlineColor outline color
	 * @return image
	 */
	getItemOutline(itemId: number, itemQuantity: number, outlineColor: Color): BufferedImage;
}
}