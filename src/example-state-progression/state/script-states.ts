export enum ScriptStates {
	IDLE = 'IDLE',
	RUNNING = 'RUNNING',
	COMPLETED = 'COMPLETED',
	ERROR = 'ERROR',
}

export const scriptStateManager = {
	currentState: ScriptStates.IDLE,
	getState: () => {
		return scriptStateManager.currentState;
	},
	setState: (state: ScriptStates) => {
		scriptStateManager.currentState = state;
	},
};
