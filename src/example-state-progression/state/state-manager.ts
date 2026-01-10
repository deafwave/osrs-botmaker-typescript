import { delayManager } from '../timeout/delays.js';
import { scriptStateManager, ScriptStates } from './script-states.js';

export const stateManager = (): void => {
	//This will return early if the state manager delay is greater than 0, preventing the state manager from being called.
	if (delayManager('stateManagerDelay') > 0) {
		return;
	}
	try {
		switch (scriptStateManager.currentState) {
			case ScriptStates.IDLE: {
				bot.printLogMessage(`Current State: ${ScriptStates.IDLE}`);
				bot.printLogMessage(`Setting State to ${ScriptStates.RUNNING}`);
				scriptStateManager.setState(ScriptStates.RUNNING); // Can also just do soemthing like scriptStateManager.currentState = ScriptStates.RUNNING;
				delayManager('stateManagerDelay', 5); // This will set the state manager delay to 10, preventing the state manager from being called for 10 game ticks.
				break;
			}
			case ScriptStates.RUNNING: {
				bot.printLogMessage(`Current State: ${ScriptStates.RUNNING}`);
				bot.printLogMessage(
					`Setting State to ${ScriptStates.COMPLETED}`,
				);
				scriptStateManager.setState(ScriptStates.COMPLETED); // Can also just do soemthing like scriptStateManager.currentState = ScriptStates.COMPLETED;
				delayManager('globalDelay', 5); //This will set the global delay to 10, preventing all other operations from being executed on gameTick.
				break;
			}
			case ScriptStates.COMPLETED: {
				bot.printLogMessage(`Current State: ${ScriptStates.COMPLETED}`);
				bot.printLogMessage(`Setting State to ${ScriptStates.IDLE}`);
				delayManager('stateManagerDelay', 5); // This will set the state manager delay to 10, preventing the state manager from being called for 10 game ticks.
				delayManager('globalDelay', 5); //This will set the global delay to 10, preventing all other operations from being executed on gameTick.
				scriptStateManager.setState(ScriptStates.ERROR);
				break;
			}
			default: {
				bot.printLogMessage(
					`Unknown State: ${scriptStateManager.currentState}`,
				);
				bot.terminate();
				break;
			}
		}
	} catch (error) {
		bot.printLogMessage(`Error: ${error as string}`);
		scriptStateManager.setState(ScriptStates.ERROR);
		return;
	}
};
