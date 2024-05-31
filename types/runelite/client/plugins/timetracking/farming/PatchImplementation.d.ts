/// <reference path="../../../../../java/index.d.ts" />
/// <reference path="../../../../../jagex/index.d.ts" />
/// <reference path="abstract PatchState.d.ts" />
/*
 * Copyright (c) 2019 Abex
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *     list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 *  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 *  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 *  ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 *  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 *  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.plugins.timetracking.farming {
enum PatchImplementation
{
BELLADONNA(Tab.SPECIAL, "", false) 
					// Belladonna patch[Rake,Inspect,Guide] 7560,7559,7558,7557
					// Belladonna[Inspect,Guide] 7561,7562,7563,7564
					// Belladonna[Pick,Inspect,Guide] 7565
					// Diseased Belladonna[Cure,Inspect,Guide] 7566,7567,7568
					// Dead Belladonna[Clear,Inspect,Guide] 7569,7570,7571
					// Belladonna patch[Rake,Inspect,Guide] 7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560,7560
MUSHROOM(Tab.SPECIAL, "", false) 
					// Mushroom patch[Rake,Inspect,Guide] 8314,8313,8312,8311
					// Bittercap Mushrooms[Inspect,Guide] 8315,8316,8317,8318,8319,8320
					// Bittercap Mushrooms[Pick,Inspect,Guide] 8321,8322,8323,8324,8325,8326
					// Diseased Bittercap Mushrooms[Cure,Inspect,Guide] 8327,8328,8329,8330,8331
					// Dead Bittercap Mushrooms[Clear,Inspect,Guide] 8332,8333,8334,8335,8336
					// Mushroom patch[Rake,Inspect,Guide] 8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314,8314
HESPORI(Tab.SPECIAL, "", true) 
					// Hespori patch[Rake,Inspect,Guide] 33722,33723,33724,33725
					// Hespori[Inspect,Guide] 33726,33727,33728
					// Hespori[Harvest,Inspect,Guide,Clear] 33729,33730
					// Hespori patch[Rake,Inspect,Guide] 33722
ALLOTMENT(Tab.ALLOTMENT, "", false) 
					// Allotment[Rake,Inspect,Guide] 8576,8575,8574,8573
					// Allotment[Rake,Inspect,Guide] 8576,8576
					// Potato seed,Potato plant[Inspect,Guide] 8558,8559,8560,8561
					// Potato[Harvest,Inspect,Guide] 8562,8562,8562
					// Onion seeds,Onion plant[Inspect,Guide] 8580,8581,8582,8583
					// Onion[Harvest,Inspect,Guide] 8584,8584,8584
					// Cabbages[Inspect,Guide] 8535,8536,8537,8538
					// Cabbages[Harvest,Inspect,Guide] 8539,8539,8539
					// Tomato plant[Inspect,Guide] 8641,8642,8643,8644
					// Tomato[Harvest,Inspect,Guide] 8645,8645,8645
					// Sweetcorn seed,Sweetcorn plant[Inspect,Guide] 8618,8619,8620,8621,8622,8623
					// Sweetcorn[Harvest,Inspect,Guide] 8624,8624,8624
					// Strawberry seed,Strawberry plant[Inspect,Guide] 8595,8596,8597,8598,8599,8600
					// Strawberry[Harvest,Inspect,Guide] 8601,8601,8601
					// Watermelon seed,Watermelons[Inspect,Guide] 8656,8657,8658,8659,8660,8661,8662,8663
					// Watermelon[Harvest,Inspect,Guide] 8664,8664,8664
					// Snape grass seedling,Snape grass plant[Inspect,Guide] 33674,33675,33676,33677,33678,33679,33680
					// Potato seed,Potato plant[Inspect,Guide] 8563,8564,8565,8566
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576
					// Onion seeds,Onion plant[Inspect,Guide] 8585,8586,8587,8588
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576
					// Cabbages[Inspect,Guide] 8540,8541,8542,8543
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576
					// Tomato plant[Inspect,Guide] 8646,8647,8648,8649
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576
					// Sweetcorn seed,Sweetcorn plant[Inspect,Guide] 8625,8626,8627,8628,8629,8630
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576
					// Strawberry seed,Strawberry plant[Inspect,Guide] 8602,8603,8604,8605,8606,8607
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576
					// Watermelon seed,Watermelons[Inspect,Guide] 8665,8666,8667,8668,8669,8670,8671,8672
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576,8576
					// Snape grass seedling,Snape grass plant[Inspect,Guide] 33666,33667,33668,33669,33670,33671,33672
					// Diseased potatoes[Cure,Inspect,Guide] 8567,8568,8569
					// Snape grass plant[Harvest,Inspect,Guide] 33673,33673,33673
					// Allotment[Rake,Inspect,Guide] 8576
					// Diseased onions[Cure,Inspect,Guide] 8589,8590,8591
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576,8576
					// Diseased cabbages[Cure,Inspect,Guide] 8544,8545,8546
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576,8576
					// Diseased tomato plant[Cure,Inspect,Guide] 8650,8651,8652
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576,8576
					// Diseased sweetcorn plant[Cure,Inspect,Guide] 8631,8632,8633,8634,8635
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576,8576
					// Diseased strawberry plant[Cure,Inspect,Guide] 8608,8609,8610,8611,8612
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576,8576
					// Diseased watermelons[Cure,Inspect,Guide] 8673,8674,8675,8676,8677,8678,8679
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576,8576,8576
					// Dead Snape grass[Clear,Inspect,Guide] 33687,33688,33689
					// Diseased Snape grass[Cure,Inspect,Guide] 33681,33682,33683
					// Dead potatoes[Clear,Inspect,Guide] 8570,8571,8572
					// Diseased Snape grass[Cure,Inspect,Guide] 33684,33685,33686
					// Allotment[Rake,Inspect,Guide] 8576
					// Dead onions[Clear,Inspect,Guide] 8592,8593,8594
					// Dead Snape grass[Clear,Inspect,Guide] 33690,33691,33692
					// Allotment[Rake,Inspect,Guide] 8576
					// Dead cabbages[Clear,Inspect,Guide] 8547,8548,8549
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576,8576
					// Dead tomato plant[Clear,Inspect,Guide] 8653,8654,8655
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576,8576
					// Dead sweetcorn plant[Clear,Inspect,Guide] 8636,8637,8638,8639,8640
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576,8576
					// Dead strawberry plant[Clear,Inspect,Guide] 8613,8614,8615,8616,8617
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576,8576
					// Dead watermelons[Clear,Inspect,Guide] 8680,8681,8682,8683,8684,8685,8686
					// Allotment[Rake,Inspect,Guide] 8576,8576,8576,8576
HERB(Tab.HERB, "", false) 
					// Herb patch[Rake,Inspect,Guide] 8135,8134,8133,8132
					// Herbs[Inspect,Guide] 8139,8140,8141,8142
					// Herbs[Pick,Inspect,Guide] 8143,8143,8143
					// Herbs[Inspect,Guide] 8139,8140,8141,8142
					// Herbs[Pick,Inspect,Guide] 8143,8143,8143
					// Herbs[Inspect,Guide] 8139,8140,8141,8142
					// Herbs[Pick,Inspect,Guide] 8143,8143,8143
					// Herbs[Inspect,Guide] 8139,8140,8141,8142
					// Herbs[Pick,Inspect,Guide] 8143,8143,8143
					// Herbs[Inspect,Guide] 8139,8140,8141,8142
					// Herbs[Pick,Inspect,Guide] 8143,8143,8143
					// Herbs[Inspect,Guide] 8139,8140,8141,8142
					// Herbs[Pick,Inspect,Guide] 8143,8143,8143
					// Herbs[Inspect,Guide] 8139,8140,8141,8142
					// Herbs[Pick,Inspect,Guide] 8143,8143,8143
					// Herbs[Inspect,Guide] 8139,8140,8141,8142
					// Herbs[Pick,Inspect,Guide] 8143,8143,8143
					// Herb patch[Rake,Inspect,Guide] 8135,8135,8135,8135,8135,8135,8135,8135
					// Herbs[Inspect,Guide] 8139,8140,8141,8142
					// Herbs[Pick,Inspect,Guide] 8143,8143,8143
					// Herbs[Inspect,Guide] 8139,8140,8141,8142
					// Herbs[Pick,Inspect,Guide] 8143,8143,8143
					// Herbs[Inspect,Guide] 8139,8140,8141,8142
					// Herbs[Pick,Inspect,Guide] 8143,8143,8143
					// Herbs[Inspect,Guide] 8139,8140,8141,8142
					// Herbs[Pick,Inspect,Guide] 8143,8143,8143
					// Herbs[Inspect,Guide] 8139,8140,8141,8142
					// Herbs[Pick,Inspect,Guide] 8143,8143,8143
					// Herbs[Inspect,Guide] 8139,8140,8141,8142
					// Herbs[Pick,Inspect,Guide] 8143,8143,8143
					// Diseased herbs[Cure,Inspect,Guide] 8144,8145,8146
					// Diseased herbs[Cure,Inspect,Guide] 8144,8145,8146
					// Diseased herbs[Cure,Inspect,Guide] 8144,8145,8146
					// Diseased herbs[Cure,Inspect,Guide] 8144,8145,8146
					// Diseased herbs[Cure,Inspect,Guide] 8144,8145,8146
					// Diseased herbs[Cure,Inspect,Guide] 8144,8145,8146
					// Diseased herbs[Cure,Inspect,Guide] 8144,8145,8146
					// Diseased herbs[Cure,Inspect,Guide] 8144,8145,8146
					// Diseased herbs[Cure,Inspect,Guide] 8144,8145,8146
					// Diseased herbs[Cure,Inspect,Guide] 8144,8145,8146
					// Diseased herbs[Cure,Inspect,Guide] 8144,8145,8146
					// Diseased herbs[Cure,Inspect,Guide] 8144,8145,8146
					// Diseased herbs[Cure,Inspect,Guide] 8144,8145,8146
					// Diseased herbs[Cure,Inspect,Guide] 8144,8145,8146
					// Dead herbs[Clear,Inspect,Guide] 8147,8148,8149
					// Herb patch[Rake,Inspect,Guide] 8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135
					// Goutweed[Inspect,Guide] 9044,9045,9046,9047
					// Goutweed[Pick,Inspect,Guide] 9048,9048
					// Diseased goutweed[Cure,Inspect,Guide] 9049,9050,9051
					// Dead goutweed[Clear,Inspect,Guide] 9052,9053,9054
					// Herb patch[Rake,Inspect,Guide] 8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135
					// Herb patch[Rake,Inspect,Guide] 8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135,8135
FLOWER(Tab.FLOWER, "", false) 
					// Flower Patch[Rake,Inspect,Guide] 7843,7842,7841,7840
					// Flower Patch[Rake,Inspect,Guide] 7843,7843,7843,7843
					// Marigold[Inspect,Guide] 7867,7868,7869,7870
					// Marigold[Pick,Inspect,Guide] 7871
					// Rosemary[Inspect,Guide] 7899,7900,7901,7902
					// Rosemary[Pick,Inspect,Guide] 7903
					// Nasturtium[Inspect,Guide] 7883,7884,7885,7886
					// Nasturtium[Pick,Inspect,Guide] 7887
					// Woad plant[Inspect,Guide] 7919,7920,7921,7922
					// Woad plant[Pick,Inspect,Guide] 7923
					// Limpwurt plant[Inspect,Guide] 7851,7852,7853,7854
					// Limpwurt plant[Pick,Inspect,Guide] 7855
					// Scarecrow[Rake,Inspect,Guide,Remove] 7918,7917,7916
					// Scarecrow[Remove,Inspect,Guide] 7915
					// White lily[Inspect,Guide] 33650,33651,33652,33653
					// White lily[Pick,Inspect,Guide] 33654
					// Flower Patch[Rake,Inspect,Guide] 7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843
					// Marigold[Inspect,Guide] 7872,7873,7874,7875
					// Flower Patch[Rake,Inspect,Guide] 7843
					// Rosemary[Inspect,Guide] 7904,7905,7906,7907
					// Flower Patch[Rake,Inspect,Guide] 7843
					// Nasturtium[Inspect,Guide] 7888,7889,7890,7891
					// Flower Patch[Rake,Inspect,Guide] 7843
					// Woad plant[Inspect,Guide] 7924,7925,7926,7927
					// Flower Patch[Rake,Inspect,Guide] 7843
					// Limpwurt plant[Inspect,Guide] 7856,7857,7858,7859
					// Flower Patch[Rake,Inspect,Guide] 7843,7843,7843,7843,7843
					// White lily[Inspect,Guide] 33655,33656,33657,33658
					// Flower Patch[Rake,Inspect,Guide] 7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843
					// Diseased marigold[Cure,Inspect,Guide] 7876,7877,7878
					// Flower Patch[Rake,Inspect,Guide] 7843,7843
					// Diseased rosemary[Cure,Inspect,Guide] 7908,7909,7910
					// Flower Patch[Rake,Inspect,Guide] 7843,7843
					// Diseased nasturtium[Cure,Inspect,Guide] 7892,7893,7894
					// Flower Patch[Rake,Inspect,Guide] 7843,7843
					// Diseased woad plant[Cure,Inspect,Guide] 7928,7929,7930
					// Flower Patch[Rake,Inspect,Guide] 7843,7843
					// Diseased limpwurt plant[Cure,Inspect,Guide] 7860,7861,7862
					// Flower Patch[Rake,Inspect,Guide] 7843,7843,7843,7843,7843,7843
					// Diseased White lily[Cure,Inspect,Guide] 33659,33660,33661
					// Flower Patch[Rake,Inspect,Guide] 7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843
					// Dead marigold[Clear,Inspect,Guide] 7879,7880,7881,7882
					// Flower Patch[Rake,Inspect,Guide] 7843
					// Dead rosemary[Clear,Inspect,Guide] 7911,7912,7913,7914
					// Flower Patch[Rake,Inspect,Guide] 7843
					// Dead nasturtium[Clear,Inspect,Guide] 7895,7896,7897,7898
					// Flower Patch[Rake,Inspect,Guide] 7843
					// Dead woad plant[Clear,Inspect,Guide] 7931,7932,7933,7934
					// Flower Patch[Rake,Inspect,Guide] 7843
					// Dead limpwurt plant[Clear,Inspect,Guide] 7863,7864,7865,7866
					// Flower Patch[Rake,Inspect,Guide] 7843,7843,7843,7843,7843
					// Dead White lily[Clear,Inspect,Guide] 33662,33663,33664,33665
					// Flower Patch[Rake,Inspect,Guide] 7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843,7843
BUSH(Tab.BUSH, "", true) 
					// Bush Patch[Rake,Inspect,Guide] 7576,7575,7574,7573
					// Bush Patch[Rake,Inspect,Guide] 7576
					// Redberry bush[Inspect,Guide] 7692,7693,7694,7695,7696
					// Redberry bush[Clear,Inspect,Guide,Pick-from] 7697,7701,7701,7701,7701
					// Cadavaberry bush[Inspect,Guide] 7581,7582,7583,7584,7585,7586
					// Cadavaberry bush[Clear,Inspect,Guide,Pick-from] 7587,7591,7591,7591,7591
					// Dwellberry bush[Inspect,Guide] 7605,7606,7607,7608,7609,7610,7611
					// Dwellberry bush[Clear,Inspect,Guide,Pick-from] 7612,7616,7616,7616,7616
					// Jangerberry bush[Inspect,Guide] 7632,7633,7634,7635,7636,7637,7638,7639
					// Jangerberry bush[Clear,Inspect,Guide,Pick-from] 7640,7644,7644,7644,7644
					// Whiteberry bush[Inspect,Guide] 7713,7714,7715,7716,7717,7718,7719,7720
					// Whiteberry bush[Clear,Inspect,Guide,Pick-from] 7721,7725,7725,7725,7725
					// Bush Patch[Rake,Inspect,Guide] 7576,7576,7576,7576,7576,7576
					// Diseased redberry bush[Prune,Inspect,Guide] 7703,7704,7705,7706,7707
					// Bush Patch[Rake,Inspect,Guide] 7576,7576,7576,7576,7576
					// Diseased cadavaberry bush[Prune,Inspect,Guide] 7593,7594,7595,7596,7597,7598
					// Bush Patch[Rake,Inspect,Guide] 7576,7576,7576,7576,7576
					// Diseased dwellberry bush[Prune,Inspect,Guide] 7618,7619,7620,7621,7622,7623,7624
					// Bush Patch[Rake,Inspect,Guide] 7576,7576,7576,7576,7576
					// Diseased jangerberry bush[Prune,Inspect,Guide] 7646,7647,7648,7649,7650,7651,7652,7653
					// Bush Patch[Rake,Inspect,Guide] 7576,7576,7576,7576,7576
					// Diseased whiteberry bush[Prune,Inspect,Guide] 7727,7728,7729,7730,7731,7732,7733,7734
					// Bush Patch[Rake,Inspect,Guide] 7576,7576,7576,7576,7576,7576,7576,7576,7576,7576
					// Dead redberry bush[Clear,Inspect,Guide] 7708,7709,7710,7711,7712
					// Bush Patch[Rake,Inspect,Guide] 7576,7576,7576,7576,7576
					// Dead cadavaberry bush[Clear,Inspect,Guide] 7599,7600,7601,7602,7603,7604
					// Bush Patch[Rake,Inspect,Guide] 7576,7576,7576,7576,7576
					// Dead dwellberry bush[Clear,Inspect,Guide] 7625,7626,7627,7628,7629,7630,7631
					// Bush Patch[Rake,Inspect,Guide] 7576,7576,7576,7576,7576
					// Dead jangerberry bush[Clear,Inspect,Guide] 7654,7655,7656,7657,7658,7659,7660,7661
					// Bush Patch[Rake,Inspect,Guide] 7576,7576,7576,7576,7576
					// Dead whiteberry bush[Clear,Inspect,Guide] 7735,7736,7737,7738,7739,7740,7741,7742
					// Bush Patch[Rake,Inspect,Guide] 7576,7576,7576,7576,7576,7576,7576,7576,7576
					// Poison Ivy bush[Inspect,Guide] 7662,7663,7664,7665,7666,7667,7668,7669
					// Poison Ivy bush[Clear,Inspect,Guide,Pick-from] 7670,7674,7674,7674,7674
					// Diseased Poison Ivy bush[Prune,Inspect,Guide] 7676,7677,7678,7679,7680,7681,7682
					// Dead Poison Ivy bush[Clear,Inspect,Guide] 7684,7685,7686,7687,7688,7689,7690,7691
					// Diseased Poison Ivy bush[Prune,Inspect,Guide] 7683
					// Bush Patch[Rake,Inspect,Guide] 7576,7576,7576,7576,7576,7576,7576,7576,7576,7576,7576,7576,7576,7576,7576,7576,7576,7576,7576,7576,7576,7576,7576,7576
					// Redberry bush[Check-health,Inspect,Guide] 7702
					// Cadavaberry bush[Check-health,Inspect,Guide] 7592
					// Dwellberry bush[Check-health,Inspect,Guide] 7617
					// Jangerberry bush[Check-health,Inspect,Guide] 7645
					// Whiteberry bush[Check-health,Inspect,Guide] 7726
					// Poison Ivy bush[Check-health,Inspect,Guide] 7675
FRUIT_TREE(Tab.FRUIT_TREE, "", true) 
					// Fruit Tree Patch[Rake,Inspect,Guide] 8050,8049,8048,8047
					// Fruit Tree Patch[Rake,Inspect,Guide] 8050,8050,8050,8050
					// Apple tree[Inspect,Guide] 7935,7936,7937,7938,7939,7940
					// Apple tree[Chop-down,Inspect,Guide,Pick-apple] 7941,7942,7943,7944,7945,7946,7947
					// Diseased apple tree[Prune,Inspect,Guide] 7949,7950,7951,7952,7953,7954
					// Dead apple tree[Clear,Inspect,Guide] 7955,7956,7957,7958,7959,7960
					// Apple tree stump[Clear,Inspect,Guide] 7961
					// Apple tree[Check-health,Inspect,Guide] 7948
					// Banana tree[Inspect,Guide] 7993,7994,7995,7996,7997,7998
					// Banana tree[Chop-down,Inspect,Guide,Pick-banana] 8000,8001,8002,8003,8004,8005,8006
					// Diseased banana tree[Prune,Inspect,Guide] 8007,8008,8009,8010,8011,8012
					// Dead banana tree[Clear,Inspect,Guide] 8013,8014,8015,8016,8017,8018
					// Banana tree stump[Clear,Inspect,Guide] 8019
					// Banana tree[Check-health,Inspect,Guide] 7999
					// Fruit Tree Patch[Rake,Inspect,Guide] 8050,8050,8050,8050,8050,8050,8050,8050,8050,8050
					// Orange tree[Inspect,Guide] 8051,8052,8053,8054,8055,8056
					// Orange tree[Chop-down,Inspect,Guide,Pick-orange] 8057,8058,8059,8060,8061,8062,8063
					// Diseased orange tree[Prune,Inspect,Guide] 8065,8066,8067,8068,8069
					// Diseased orange tree[Chop-down,Inspect,Guide] 8070
					// Dead orange tree[Clear,Inspect,Guide] 8071,8072,8073,8074,8075,8076
					// Orange tree stump[Clear,Inspect,Guide] 8077
					// Orange tree[Check-health,Inspect,Guide] 8064
					// Curry tree[Inspect,Guide] 8020,8021,8022,8023,8024,8025
					// Curry tree[Chop-down,Inspect,Guide,Pick-leaf] 8026,8027,8028,8029,8030,8031,8032
					// Diseased curry tree[Prune,Inspect,Guide] 8034,8035,8036,8037,8038,8039
					// Dead curry tree[Clear,Inspect,Guide] 8040,8041,8042,8043,8044,8045
					// Curry tree stump[Clear,Inspect,Guide] 8046
					// Curry tree[Check-health,Inspect,Guide] 8033
					// Fruit Tree Patch[Rake,Inspect,Guide] 8050,8050,8050,8050,8050,8050,8050,8050,8050,8050
					// Pineapple plant[Inspect,Guide] 7966,7967,7968,7969,7970,7971
					// Pineapple plant[Chop down,Inspect,Guide,Pick-pineapple] 7972,7973,7974,7975,7976,7977,7978
					// Diseased pineapple plant[Prune,Inspect,Guide] 7980,7981,7982,7983,7984,7985
					// Dead pineapple plant[Clear,Inspect,Guide] 7986,7987,7988,7989,7990,7991
					// Pineapple plant stump[Clear,Inspect,Guide] 7992
					// Pineapple plant[Check-health,Inspect,Guide] 7979
					// Papaya tree[Inspect,Guide] 8105,8106,8107,8108,8109,8110
					// Papaya tree[Chop-down,Inspect,Guide,Pick-fruit] 8111,8112,8113,8114,8115,8116,8117
					// Diseased papaya tree[Prune,Inspect,Guide] 8119,8120,8121,8122,8123,8124
					// Dead papaya tree[Clear,Inspect,Guide] 8125,8126,8127,8128,8129,8130
					// Papaya tree stump[Clear,Inspect,Guide] 8131
					// Papaya tree[Check-health,Inspect,Guide] 8118
					// Fruit Tree Patch[Rake,Inspect,Guide] 8050,8050,8050,8050,8050,8050,8050,8050,8050,8050
					// Palm tree[Inspect,Guide] 8078,8079,8080,8081,8082,8083
					// Palm tree[Chop-down,Inspect,Guide,Pick-coconut] 8084,8085,8086,8087,8088,8089,8090
					// Diseased palm tree[Prune,Inspect,Guide] 8092,8093,8094,8095,8096,8097
					// Dead palm tree[Clear,Inspect,Guide] 8098,8099,8100,8101,8102,8103
					// Palm tree stump[Clear,Inspect,Guide] 8104
					// Palm tree[Check-health,Inspect,Guide] 8091
					// Dragonfruit tree[Inspect,Guide] 34008,34009,34010,34011,34012,34013
					// Dragonfruit tree[Chop down,Inspect,Guide,Pick-dragonfruit] 34014,34015,34016,34017,34018,34019,34020
					// Diseased dragonfruit plant[Prune,Inspect,Guide] 34022,34023,34024,34025,34026,34027
					// Dead dragonfruit plant[Clear,Inspect,Guide] 34028,34029,34030,34031,34032,34033
					// Dragonfruit tree stump[Clear,Inspect,Guide] 34034
					// Dragonfruit tree[Check-health,Inspect,Guide] 34021
					// Fruit Tree Patch[Rake,Inspect,Guide] 8050,8050
HOPS(Tab.HOPS, "", false) 
					// Hops Patch[Rake,Inspect,Guide] 8210,8209,8208,8207
					// Hammerstone Hops[Inspect,Guide] 8177,8178,8179,8180
					// Hammerstone Hops[Harvest,Inspect,Guide] 8181,8181,8181
					// Asgarnian Hops[Inspect,Guide] 8154,8155,8156,8157,8158
					// Asgarnian Hops[Harvest,Inspect,Guide] 8159,8159,8159
					// Yanillian Hops[Inspect,Guide] 8288,8289,8290,8291,8292,8293
					// Yanillian Hops[Harvest,Inspect,Guide] 8294,8294,8294
					// Krandorian Hops[Inspect,Guide] 8211,8212,8213,8214,8215,8216,8217
					// Krandorian Hops[Harvest,Inspect,Guide] 8218,8218,8218
					// Wildblood Hops[Inspect,Guide] 8257,8258,8259,8260,8261,8262,8263,8264
					// Wildblood Hops[Harvest,Inspect,Guide] 8265,8265,8265
					// Barley[Inspect,Guide] 8192,8193,8194,8195
					// Barley[Harvest,Inspect,Guide] 8196,8196,8196
					// Jute[Inspect,Guide] 8238,8239,8240,8241,8242
					// Jute[Harvest,Inspect,Guide] 8243,8243,8243
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210,8210
					// Hammerstone Hops[Inspect,Guide] 8182,8183,8184,8185
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210
					// Asgarnian Hops[Inspect,Guide] 8160,8161,8162,8163,8164
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210
					// Yanillian Hops[Inspect,Guide] 8295,8296,8297,8298,8299,8300
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210
					// Krandorian Hops[Inspect,Guide] 8219,8220,8221,8222,8223,8224,8225
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210
					// Wildblood Hops[Inspect,Guide] 8266,8267,8268,8269,8270,8271,8272,8273
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210
					// Barley[Inspect,Guide] 8197,8198,8199,8200
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210
					// Jute[Inspect,Guide] 8244,8245,8246,8247,8248
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210,8210,8210,8210,8210,8210
					// Diseased Hammerstone Hops[Cure,Inspect,Guide] 8186,8187,8188
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210,8210
					// Diseased Asgarnian Hops[Cure,Inspect,Guide] 8165,8166,8167,8168
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210,8210
					// Diseased Yanillian Hops[Cure,Inspect,Guide] 8301,8302,8303,8304,8305
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210,8210
					// Diseased Krandorian Hops[Cure,Inspect,Guide] 8226,8227,8228,8229,8230,8231
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210,8210
					// Diseased Wildblood Hops[Cure,Inspect,Guide] 8274,8275,8276,8277,8278,8279,8280
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210,8210
					// Diseased Barley[Cure,Inspect,Guide] 8201,8202,8203
					// Hops Patch[Rake,Inspect,Guide] 8210
					// Hops Patch[Rake,Inspect,Guide] 8210,8210
					// Diseased Jute[Cure,Inspect,Guide] 8249,8250,8251,8252
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210,8210,8210,8210,8210,8210
					// Dead Hammerstone Hops[Clear,Inspect,Guide] 8189,8190,8191
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210,8210
					// Dead Asgarnian Hops[Clear,Inspect,Guide] 8169,8170,8171,8172
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210,8210
					// Dead Yanillian Hops[Clear,Inspect,Guide] 8306,8307,8308,8309,8310
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210,8210
					// Dead Krandorian Hops[Clear,Inspect,Guide] 8232,8233,8234,8235,8236,8237
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210,8210
					// Dead Wildblood Hops[Clear,Inspect,Guide] 8281,8282,8283,8284,8285,8286,8287
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210,8210
					// Dead Barley[Clear,Inspect,Guide] 8204,8205,8206
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210,8210
					// Dead Jute[Clear,Inspect,Guide] 8253,8254,8255,8256
					// Hops Patch[Rake,Inspect,Guide] 8210,8210,8210
TREE(Tab.TREE, "", true) 
					// Tree patch[Rake,Inspect,Guide] 8395,8394,8393,8392
					// Tree patch[Rake,Inspect,Guide] 8395,8395,8395,8395
					// Oak[Inspect,Guide] 8462,8463,8464,8465
					// Oak[Check-health,Inspect,Guide] 8466
					// Oak[Chop down,Inspect,Guide] 8467
					// Oak tree stump[Clear,Inspect,Guide] 8468
					// Willow Tree[Inspect,Guide] 8481,8482,8483,8484,8485,8486
					// Willow Tree[Check-health,Inspect,Guide] 8487
					// Willow Tree[Chop down,Inspect,Guide] 8488
					// Willow tree stump[Clear,Inspect,Guide] 8489
					// Maple Tree[Inspect,Guide] 8435,8436,8437,8438,8439,8440,8441,8442
					// Maple Tree[Check-health,Inspect,Guide] 8443
					// Maple Tree[Chop down,Inspect,Guide] 8444
					// Tree stump[Clear,Inspect,Guide] 8445
					// Yew sapling,Yew tree[Inspect,Guide] 8502,8503,8504,8505,8506,8507,8508,8509,8510,8511
					// Yew tree[Check-health,Inspect,Guide] 8512
					// Yew tree[Chop down,Inspect,Guide] 8513
					// Yew tree stump[Clear,Inspect,Guide] 8514
					// Magic Tree[Inspect,Guide] 8396,8397,8398,8399,8400,8401,8402,8403,8404,8405,8406,8407
					// Magic Tree[Check-health,Inspect,Guide] 8408
					// Magic Tree[Chop down,Inspect,Guide] 8409
					// Magic Tree Stump[Clear,Inspect,Guide] 8410
					// Tree patch[Rake,Inspect,Guide] 8395,8395,8395,8395,8395,8395,8395,8395,8395,8395
					// Diseased Oak[Prune,Inspect,Guide] 8473,8474,8475
					// Diseased Oak[Prune,Inspect,Guide] 8476
					// Tree patch[Rake,Inspect,Guide] 8395,8395
					// Diseased Willow[Prune,Inspect,Guide] 8490,8491,8492,8493,8494
					// Diseased Willow[Prune,Inspect,Guide] 8495
					// Tree patch[Rake,Inspect,Guide] 8395,8395
					// Diseased Maple[Prune,Inspect,Guide] 8446,8447,8448,8449,8450,8451,8452
					// Diseased Maple[Prune,Inspect,Guide] 8453
					// Tree patch[Rake,Inspect,Guide] 8395,8395
					// Diseased Yew[Prune,Inspect,Guide] 8515,8516,8517,8518,8519,8520,8521,8522,8523
					// Diseased Yew[Prune,Inspect,Guide] 8524
					// Tree patch[Rake,Inspect,Guide] 8395,8395
					// Diseased Magic Tree[Prune,Inspect,Guide] 8411,8412,8413,8414,8415,8416,8417,8418,8419,8420,8421
					// Diseased Magic Tree[Prune,Inspect,Guide] 8422
					// Tree patch[Rake,Inspect,Guide] 8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395
					// Dead Oak[Clear,Inspect,Guide] 8477,8478,8479
					// Dead Oak[Clear,Inspect,Guide] 8480
					// Tree patch[Rake,Inspect,Guide] 8395,8395
					// Dead Willow[Clear,Inspect,Guide] 8496,8497,8498,8499,8500
					// Dead Willow[Clear,Inspect,Guide] 8501
					// Tree patch[Rake,Inspect,Guide] 8395,8395
					// Dead Maple[Clear,Inspect,Guide] 8454,8455,8456,8457,8458,8459,8460
					// Dead Maple[Clear,Inspect,Guide] 8461
					// Tree patch[Rake,Inspect,Guide] 8395,8395
					// Dead Yew[Clear,Inspect,Guide] 8525,8526,8527,8528,8529,8530,8531,8532,8533
					// Dead Yew[Clear,Inspect,Guide] 8534
					// Tree patch[Rake,Inspect,Guide] 8395,8395
					// Dead Magic Tree[Clear,Inspect,Guide] 8423,8424,8425,8426,8427,8428,8429,8430,8431,8432,8433
					// Dead Magic Tree[Clear,Inspect,Guide] 8434
					// Tree patch[Rake,Inspect,Guide] 8395,8395
					// Willow Tree[Chop down,Inspect,Guide] 8488,8488,8488,8488,8488,8488
					// Tree patch[Rake,Inspect,Guide] 8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395,8395
HARDWOOD_TREE(Tab.TREE, "Hardwood Trees", true) 
					// Tree patch[Rake,Inspect,Guide] 30479,30478,30477,30476
					// Tree patch[Rake,Inspect,Guide] 30479,30479,30479,30479
					// Teak Tree[Inspect,Guide] 30437,30438,30439,30440,30441,30442,30443
					// Teak Tree[Check-health,Inspect,Guide] 30444
					// Teak Tree[Chop down,Inspect,Guide] 30445
					// Tree stump[Clear,Inspect,Guide] 30446
					// Diseased Teak[Prune,Inspect,Guide] 30447,30448,30449,30450,30451,30452
					// Dead Teak[Clear,Inspect,Guide] 30453,30454,30455,30456,30457,30458
					// Mahogany sapling,Mahogany tree[Inspect,Guide] 30406,30407,30408,30409,30410,30411,30412,30413
					// Mahogany tree[Check-health,Inspect,Guide] 30416
					// Mahogany tree[Chop down,Inspect,Guide] 30417
					// Mahogany tree stump[Clear,Inspect,Guide] 30418
					// Diseased Mahogany[Prune,Inspect,Guide] 30419,30420,30421,30422,30423,30424,30425
					// Dead Mahogany[Clear,Inspect,Guide] 30428,30429,30430,30431,30432,30433,30434
					// Tree patch[Rake,Inspect,Guide] 30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479,30479
REDWOOD(Tab.TREE, "Redwood Trees", true) 
					// Redwood tree patch[Rake,Inspect,Guide] 34050,34049,34048,34047
					// Redwood tree patch[Rake,Inspect,Guide] 34050,34050,34050,34050
					// Redwood tree[Inspect,Guide] 34205,34206,34207,34208,34209,34210,34215,34224,34242,34260
					// Redwood tree[Clear,Inspect,Guide] 34278
					// Diseased Redwood tree[Prune,Inspect,Guide] 34130,34131,34132,34133,34134,34139,34148,34166,34184
					// Dead Redwood tree[Clear,Inspect,Guide] 34061,34062,34063,34064,34065,34070,34079,34097,34115
					// Redwood tree[Check-health,Inspect,Guide] 34297
					// Redwood tree[Clear,Inspect,Guide] 34278,34278,34278,34278,34278,34278,34278,34278,34278,34278,34278,34278,34278,34278,34278
SPIRIT_TREE(Tab.TREE, "Spirit Trees", true) 
					// Spirit Tree Patch[Rake,Inspect,Guide] 8342,8341,8340,8339
					// Spirit Tree Patch[Rake,Inspect,Guide] 8342,8342,8342,8342
					// Spirit Tree[Inspect,Guide] 8343,8344,8345,8346,8347,8348,8349,8350,8351,8352,8353,8354
					// Spirit Tree[Travel,Talk-to,Inspect,Guide,Clear] 8355
					// Diseased Spirit Tree[Prune,Inspect,Guide] 8358,8359,8360,8361,8362,8363,8364,8365,8366,8367,8368
					// Dead Spirit Tree[Clear,Inspect,Guide] 8370,8371,8372,8373,8374,8375,8376,8377,8378,8379,8380,8381
					// Spirit Tree[Check-health,Inspect,Guide] 8356
					// Spirit Tree Patch[Rake,Inspect,Guide] 8342,8342,8342,8342,8342,8342,8342,8342,8342,8342,8342,8342,8342,8342,8342,8342,8342,8342,8342
ANIMA(Tab.SPECIAL, "", false) 
					// Anima patch[Rake,Inspect,Guide] 33983,33982,33981,33980
					// Anima patch[Rake,Inspect,Guide] 33983,33983,33983,33983
					// Attas plant[Inspect,Guide] 33991,33992,33993,33994,33995
					// Attas plant[Inspect,Guide] 33995,33995
					// Withering Attas plant[Inspect,Guide] 33996
					// Dead Attas plant[Clear,Inspect,Guide] 33997
					// Iasor plant[Inspect,Guide] 33984,33985,33986,33987,33988
					// Iasor plant[Inspect,Guide] 33988,33988
					// Withering Iasor plant[Inspect,Guide] 33989
					// Dead Iasor plant[Clear,Inspect,Guide] 33990
					// Kronos plant[Inspect,Guide] 33999,34000,34001,34002,34003
					// Kronos plant[Inspect,Guide] 34003,34003
					// Withering Kronos plant[Inspect,Guide] 34004
					// Dead Kronos plant[Clear,Inspect,Guide] 34005
					// Anima patch[Rake,Inspect,Guide] 33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983,33983
CACTUS(Tab.SPECIAL, "Cactus", true) 
					// Cactus patch[Rake,Inspect,Guide] 7746,7745,7744,7743
					// Cactus patch[Rake,Inspect,Guide] 7746,7746,7746,7746
					// Cactus[Inspect,Guide] 7747,7748,7749,7750,7751,7752,7753
					// Cactus[Clear,Inspect,Guide,Pick-spine] 7754,7757,7757,7757
					// Diseased cactus[Cure,Inspect,Guide] 7759,7760,7761,7762,7763,7764
					// Dead cactus[Clear,Inspect,Guide] 7765,7766,7767,7768,7769,7770
					// Cactus[Check-health,Inspect,Guide] 7758
					// Potato cactus[Inspect,Guide] 33734,33735,33736,33737,33738,33739,33740
					// Potato cactus[Clear,Inspect,Guide,Pick] 33741,33742,33743,33744,33745,33746,33747
					// Diseased Potato cactus[Cure,Inspect,Guide] 33749,33750,33751,33752,33753,33754
					// Dead Potato cactus[Clear,Inspect,Guide] 33755,33756,33757,33758,33759,33760
					// Potato cactus[Check-health,Inspect,Guide] 33748
					// Cactus patch[Rake,Inspect,Guide] 7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746,7746
SEAWEED(Tab.SPECIAL, "Seaweed", false) 
					// Seaweed patch[Rake,Inspect,Guide] 30486,30485,30484,30483
					// Seaweed[Inspect,Guide] 30487,30488,30489,30490
					// Seaweed[Pick,Inspect,Guide] 30491,30492,30493
					// Diseased seaweed[Cure,Inspect,Guide] 30494,30495,30496
					// Dead seaweed[Clear,Inspect,Guide] 30497,30498,30499
					// Seaweed patch[Rake,Inspect,Guide] 30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486,30486
CALQUAT(Tab.FRUIT_TREE, "Calquat", true) 
					// Calquat patch[Rake,Inspect,Guide] 7775,7774,7773,7772
					// Calquat Tree[Inspect,Guide] 7776,7777,7778,7779,7780,7781,7782,7783
					// Calquat Tree[Clear,Inspect,Guide,Pick-fruit] 7784,7785,7786,7787,7788,7789,7790
					// Diseased Calquat[Prune,Inspect,Guide] 7792,7793,7794,7795,7796,7797,7798
					// Dead Calquat[Clear,Inspect,Guide] 7799,7800,7801,7802,7803,7804,7805,7806
					// Calquat Tree[Check-health,Inspect,Guide] 7791
					// Calquat patch[Rake,Inspect,Guide] 7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775,7775
CELASTRUS(Tab.FRUIT_TREE, "Celastrus", true) 
					// Celastrus patch[Rake,Inspect,Guide] 33698,33697,33696,33695
					// Celastrus patch[Rake,Inspect,Guide] 33698,33698,33698,33698
					// Celastrus tree[Inspect,Guide] 33699,33700,33701,33702,33703
					// Celastrus tree[Check-health,Inspect,Guide] 33704
					// Celastrus tree[Harvest,Inspect,Guide] 33719,33718,33717
					// Harvested Celastrus tree[Chop,Inspect,Guide] 33720
					// Diseased celastrus tree[Prune,Inspect,Guide] 33705,33706,33707,33708,33709
					// Dead celastrus tree[Clear,Inspect,Guide] 33711,33712,33713,33714,33715
					// Celastrus tree stump[Clear,Inspect,Guide] 33721
					// Celastrus patch[Rake,Inspect,Guide] 33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698,33698
GRAPES(Tab.GRAPE, "", true) 
					// Empty, empty+fertilizer
CRYSTAL_TREE(Tab.FRUIT_TREE, "Crystal Tree", true) 
					// Crystal tree patch[Rake,Inspect,Guide] 34910,34909,34908,34907
					// Crystal tree[Inspect,Guide] 34911,34912,34913,34914,34915,34916
					// Crystal tree[Check-health,Inspect,Guide] 34917
					// Crystal tree[Chop-down,Inspect,Guide] 34918
COMPOST(Tab.SPECIAL, "Compost Bin", true) 
					// Compost bin[Examine] 7808
					// Compost bin[Examine,Dump] 3830
					// Compost bin[Take,Examine,Dump] 19050,19051,19052,19053,19054,19055,19056,19057,19058,19059,19060,19061,19062,19063,19064
					// Compost bin[Open,Examine,Dump] 3849,3849
					// Compost bin[Examine,Dump] 19066,19067,19068,19069,19070,19071,19072,19073,19074,19075,19076,19077,19078,19079,19080
					// Compost bin[Take,Examine,Dump] 19097
					// Compost bin[Open,Examine,Dump] 3850
					// Compost bin[Open,Examine,Dump] 19082,19082
					// Compost bin[Open,Examine,Dump] 19082
					// Giant compost bin[Close,Examine,Dump] 19098..19111,20099
					// Giant compost bin[Take,Examine,Dump] 20102..20116
					// Giant compost bin[Open,Examine,Dump] 20100
					// Compost bin[Take,Examine,Dump] 30502,30503,30504,30505,30506,30507,30508,30509,30510,30511,30512,30513,30514,30515,30516
BIG_COMPOST(Tab.SPECIAL, "Big Compost Bin", true) 
					// Big compost bin[Examine] 33762
					// Big compost bin[Examine,Dump] 33763..33777
					// Big compost bin[Take,Examine,Dump] 33795..33809
					// Big compost bin[Examine,Dump] 33825..33839
					// Big compost bin[Take,Examine,Dump] 33857..33871
					// Big compost bin[Examine,Dump] 33778..33792
					// Giant compost bin[Take,Examine,Dump] 33810..33824
					// Giant compost bin[Open,Examine,Dump] 33794
					// Giant compost bin[Open,Examin,Dump] 33855,33855
					// Giant compost bin[Take,Examine,Dump] 33872..33886
					// Giant compost bin[Open,Examine,Dump] 33793,33793
					// Giant compost bin[Close,Examine,Dump] 33887..33901
					// Giant compost bin[Take,Examine,Dump] 33919..33933
					// Giant compost bin[Open,Examine,Dump] 33917,33917
					// Giant compost bin[Examine,Dump] 33840..33854
					// Giant compost bin[Take,Examine,Dump] 33957..33986
					// Giant compost bin[Take,Examine,Dump] 33934..33948
					// Giant compost bin[Open,Examine,Dump] 33918
					// Giant compost bin[Close,Examine,Dump] 33902..33916
	forVarbitValue(value: number): abstract PatchState | null;
Tab tab;
String name;
boolean healthCheckRequired;
}
}