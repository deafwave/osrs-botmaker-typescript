/**
 * Represents an event posted every client tick (20ms) in TypeScript.
 * Client ticks are broken down into several stages including packet processing,
 * interface tick, client tick, clientscript execution, menu sorting,
 * menu click detection and drag handling, followed by a PostClientTick event.
 */
declare class ClientTick {}
