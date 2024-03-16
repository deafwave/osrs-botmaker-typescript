Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.events;

import net.runelite.api.Client;

/**
 * Posted when the game world the client wants to connect to has changed.
 * This is posted after the world ID and type have updated, but before a new
 * connection is established
 *
 * @see Client#getWorld()
 * @see Client#getWorldType()
 */
public class WorldChanged
{
}
