/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="Client.d.ts" />
/// <reference path="MenuAction/RUNELITE_OVERLAY_CONFIG.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NPCComposition.d.ts" />
/// <reference path="ParamID.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="VarPlayer.d.ts" />
/// <reference path="Varbits.d.ts" />
/// <reference path="OverlayPanel.d.ts" />
/// <reference path="Graphics2D.d.ts" />
/*
 * Copyright (c) 2016-2018, Adam <Adam@sigterm.info>
 * Copyright (c) 2018, Jordan Atwood <jordan.atwood423@gmail.com>
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
declare namespace net.runelite.client.plugins.opponentinfo {
export class OpponentInfoOverlay extends OverlayPanel
{
Client client;
OpponentInfoPlugin opponentInfoPlugin;
OpponentInfoConfig opponentInfoConfig;
HiscoreManager hiscoreManager;
NPCManager npcManager;
Integer lastMaxHealth;
String opponentName;
OpponentInfoOverlay( Client client, OpponentInfoPlugin opponentInfoPlugin, OpponentInfoConfig opponentInfoConfig, HiscoreManager hiscoreManager, NPCManager npcManager) 
	render(graphics: Graphics2D): Dimension;
		// The in-game hp hud is more accurate than our overlay and duplicates all of the information on it,
		// so hide ours if it is visible, or if our overlay is toggled off.
		// Opponent name
		// Health bar
				// This is the reverse of the calculation of healthRatio done by the server
				// which is: healthRatio = 1 + (healthScale - 1) * health / maxHealth (if health > 0, 0 otherwise)
				// It's able to recover the exact health if maxHealth <= healthScale.
							// This doesn't apply if healthRatio = 1, because of the special case in the server calculation that
							// health = 0 forces healthRatio = 0 instead of the expected healthRatio = 1
						// If healthScale is 1, healthRatio will always be 1 unless health = 0
						// so we know nothing about the upper limit except that it can't be higher than maxHealth
					// Take the average of min and max possible healths
				// Show both the hitpoint and percentage values if enabled in the config
	/**
	 * Check if the hp hud is active for an opponent
	 * @param opponent
	 * @return
	 */
	private hasHpHud(opponent: Actor): boolean;
}
}