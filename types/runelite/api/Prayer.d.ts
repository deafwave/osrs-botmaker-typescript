interface Prayer {
  /**
  * Thick Skin (Level 1, Defence).
  */
  THICK_SKIN: 'THICK_SKIN';
  /**
  * Burst of Strength (Level 4, Strength).
  */
  BURST_OF_STRENGTH: 'BURST_OF_STRENGTH';
  /**
  * Clarity of Thought (Level 7, Attack).
  */
  CLARITY_OF_THOUGHT: 'CLARITY_OF_THOUGHT';
  /**
  * Sharp Eye (Level 8, Ranging).
  */
  SHARP_EYE: 'SHARP_EYE';
  /**
  * Mystic Will (Level 9, Magic).
  */
  MYSTIC_WILL: 'MYSTIC_WILL';
  /**
  * Rock Skin (Level 10, Defence).
  */
  ROCK_SKIN: 'ROCK_SKIN';
  /**
  * Superhuman Strength (Level 13, Strength).
  */
  SUPERHUMAN_STRENGTH: 'SUPERHUMAN_STRENGTH';
  /**
  * Improved Reflexes (Level 16, Attack).
  */
  IMPROVED_REFLEXES: 'IMPROVED_REFLEXES';
  /**
  * Rapid Restore (Level 19, Stats).
  */
  RAPID_RESTORE: 'RAPID_RESTORE';
  /**
  * Rapid Heal (Level 22, Hitpoints).
  */
  RAPID_HEAL: 'RAPID_HEAL';
  /**
  * Protect Item (Level 25).
  */
  PROTECT_ITEM: 'PROTECT_ITEM';
  /**
  * Hawk Eye (Level 26, Ranging).
  */
  HAWK_EYE: 'HAWK_EYE';
  /**
  * Mystic Lore (Level 27, Magic).
  */
  MYSTIC_LORE: 'MYSTIC_LORE';
  /**
  * Steel Skin (Level 28, Defence).
  */
  STEEL_SKIN: 'STEEL_SKIN';
  /**
  * Ultimate Strength (Level 31, Strength).
  */
  ULTIMATE_STRENGTH: 'ULTIMATE_STRENGTH';
  /**
  * Incredible Reflexes (Level 34, Attack).
  */
  INCREDIBLE_REFLEXES: 'INCREDIBLE_REFLEXES';
  /**
  * Protect from Magic (Level 37).
  */
  PROTECT_FROM_MAGIC: 'PROTECT_FROM_MAGIC';
  /**
  * Protect from Missiles (Level 40).
  */
  PROTECT_FROM_MISSILES: 'PROTECT_FROM_MISSILES';
  /**
  * Protect from Melee (Level 43).
  */
  PROTECT_FROM_MELEE: 'PROTECT_FROM_MELEE';
  /**
  * Eagle Eye (Level 44, Ranging).
  */
  EAGLE_EYE: 'EAGLE_EYE';
  /**
  * Mystic Might (Level 45, Magic).
  */
  MYSTIC_MIGHT: 'MYSTIC_MIGHT';
  /**
  * Retribution (Level 46).
  */
  RETRIBUTION: 'RETRIBUTION';
  /**
  * Redemption (Level 49).
  */
  REDEMPTION: 'REDEMPTION';
  /**
  * Smite (Level 52).
  */
  SMITE: 'SMITE';
  /**
  * Chivalry (Level 60, Defence/Strength/Attack).
  */
  CHIVALRY: 'CHIVALRY';
  /**
  * Piety (Level 70, Defence/Strength/Attack).
  */
  PIETY: 'PIETY';
  /**
  * Preserve (Level 55).
  */
  PRESERVE: 'PRESERVE';
  /**
  * Rigour (Level 74, Ranging/Damage/Defence).
  */
  RIGOUR: 'RIGOUR';
  /**
  * Augury (Level 77, Magic/Magic Def./Defence).
  */
  AUGURY: 'AUGURY';
  /**
  * Ruinous Powers Rejuvenation (Level 60).
  */
  RP_REJUVENATION: 'RP_REJUVENATION';
  /**
  * Ruinous Powers Ancient Strength (Level 61).
  */
  RP_ANCIENT_STRENGTH: 'RP_ANCIENT_STRENGTH';
  /**
  * Ruinous Powers Ancient Sight (Level 62).
  */
  RP_ANCIENT_SIGHT: 'RP_ANCIENT_SIGHT';
  /**
  * Ruinous Powers Ancient Will (Level 63).
  */
  RP_ANCIENT_WILL: 'RP_ANCIENT_WILL';
  /**
  * Ruinous Powers Protect Item (Level 65).
  */
  RP_PROTECT_ITEM: 'RP_PROTECT_ITEM';
  /**
  * Ruinous Powers Ruinous Grace (Level 66).
  */
  RP_RUINOUS_GRACE: 'RP_RUINOUS_GRACE';
  /**
  * Ruinous Powers Dampen Magic (Level 67).
  */
  RP_DAMPEN_MAGIC: 'RP_DAMPEN_MAGIC';
  /**
  * Ruinous Powers Dampen Ranged (Level 69).
  */
  RP_DAMPEN_RANGED: 'RP_DAMPEN_RANGED';
  /**
  * Ruinous Powers Dampen Melee (Level 71).
  */
  RP_DAMPEN_MELEE: 'RP_DAMPEN_MELEE';
  /**
  * Ruinous Powers Trinitas (Level 72).
  */
  RP_TRINITAS: 'RP_TRINITAS';
  /**
  * Ruinous Powers Berserker (Level 74).
  */
  RP_BERSERKER: 'RP_BERSERKER';
  /**
  * Ruinous Powers Purge (Level 75).
  */
  RP_PURGE: 'RP_PURGE';
  /**
  * Ruinous Powers Metabolise (Level 77).
  */
  RP_METABOLISE: 'RP_METABOLISE';
  /**
  * Ruinous Powers Rebuke (Level 78).
  */
  RP_REBUKE: 'RP_REBUKE';
  /**
  * Ruinous Powers Vindication (Level 80).
  */
  RP_VINDICATION: 'RP_VINDICATION';
  /**
  * Ruinous Powers Decimate (Level 82).
  */
  RP_DECIMATE: 'RP_DECIMATE';
  /**
  * Ruinous Powers Annihilate (Level 84).
  */
  RP_ANNIHILATE: 'RP_ANNIHILATE';
  /**
  * Ruinous Powers Vaporise (Level 86).
  */
  RP_VAPORISE: 'RP_VAPORISE';
  /**
  * Ruinous Powers Fumus' Vow (Level 87).
  */
  RP_FUMUS_VOW: 'RP_FUMUS_VOW';
  /**
  * Ruinous Powers Umbra's Vow (Level 88).
  */
  RP_UMBRA_VOW: 'RP_UMBRA_VOW';
  /**
  * Ruinous Powers Cruor's Vow (Level 89).
  */
  RP_CRUORS_VOW: 'RP_CRUORS_VOW';
  /**
  * Ruinous Powers Glacies' Vow (Level 90).
  */
  RP_GLACIES_VOW: 'RP_GLACIES_VOW';
  /**
  * Ruinous Powers Wrath (Level 91).
  */
  RP_WRATH: 'RP_WRATH';
  /**
  * Ruinous Powers Intensify (Level 92).
  */
  RP_INTENSIFY: 'RP_INTENSIFY';
}