/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { onGameTick } from './on-game-tick';

describe('onGameTick function', () => {
	it('should return 0', () => {
		const result = onGameTick();
		expect(result).toBe(0);
	});
});
