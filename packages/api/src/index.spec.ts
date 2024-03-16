/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { apiVariables } from './index';

describe('apiVariables', () => {
	it('should have a test variable initialized to 0', () => {
		expect(apiVariables.test).toBe(0);
	});
});
