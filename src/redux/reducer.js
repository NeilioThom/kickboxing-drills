import { SESSION_STATUSES } from '../constants';
import { createUtterance } from '../utils/speech';
import commands from '../commands.json';

const initialState = {
    activeCommand: null,
    commands: commands.map((command) => ({
        ...command,
        utterance: createUtterance(command.command),
    })),
    commandCount: 0,
    commandCompletedTime: null,
    commandHistory: [],
    sessionStatus: SESSION_STATUSES.NOT_STARTED
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'startSession':
            return {
                ...state,
                sessionStatus: SESSION_STATUSES.COUNTING_IN,
                commands: action.commands,
            };
        case 'endSession':
            return {
                ...state,
                sessionStatus: SESSION_STATUSES.NOT_STARTED,
                commandHistory: [],
                commandCount: 0,
                activeCommand: null,
            };
        case 'sessionCountInCompleted':
            return {
                ...state,
                sessionStatus: SESSION_STATUSES.IN_PROGRESS,
                activeCommand: state.commands[0],
                commandCount: 1,
            };
        case 'changeCommand':
            return {
                ...state,
                activeCommand: action.command,
                commandCount: state.commandCount + 1,
                commandHistory: [
                    state.activeCommand.command,
                    ...state.commandHistory,
                ].slice(0, 4),
            };
        default:
            return state;
    }
};
