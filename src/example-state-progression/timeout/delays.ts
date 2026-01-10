// Simply add additional delays here, and include the same delay format as shown in stateManager() to handle scope specific delays
export const allDelays = {
	stateManagerDelay: 0,
	globalDelay: 0,
};

/**
 * This function will manage the delays for the script. If no value is provided, the delay will be decremented by 1.
 * @param delay - The delay to manage.
 * @param value - The value to set the delay to. If no value is provided, the delay will be decremented by 1.
 * @returns The current value of the delay.
 */
export const delayManager = (
	delay: keyof typeof allDelays,
	value?: number,
): number => {
	if (value) {
		allDelays[delay] = value;
	}
	for (const delay of Object.keys(allDelays)) {
		if (allDelays[delay as keyof typeof allDelays] > 0) {
			allDelays[delay as keyof typeof allDelays]--;
		}
	}
	return allDelays[delay];
};
