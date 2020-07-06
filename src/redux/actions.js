import { speakUtterance, createUtterance } from '../utils/speech';

export const startSession = (commands) => (dispatch) => {
    speakUtterance(createUtterance('Get ready!'));
    dispatch({ type: 'startSession', commands });
};

export const endSession = () => ({
    type: 'endSession',
});

export const sessionCountInCompleted = () => ({
    type: 'sessionCountInCompleted',
});

export const changeCommand = (command) => ({
    type: 'changeCommand',
    command
});
