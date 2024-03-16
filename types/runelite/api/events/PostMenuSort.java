Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

/**
 * Posted after the menu is sorted, but before clicks are processed.
 * This is only fired if the menu isn't open, and shouldn't be used as a general purpose
 * client tick event.
 */
public class PostMenuSort
{
}
