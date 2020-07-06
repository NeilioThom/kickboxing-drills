import React, { useEffect } from 'react';
import { startSession, endSession, sessionCountInCompleted, changeCommand } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { AppComponent } from './app.component';
import { speakUtterance } from '../../utils/speech';
import useSound from 'use-sound';
import collectSound from '../../sound/collect.wav';

export const AppContainer = () => {
    const dispatch = useDispatch();

    const sessionStatus = useSelector(state => state.reducer.sessionStatus);
    const commands = useSelector(state => state.reducer.commands);
    const activeCommand = useSelector(state => state.reducer.activeCommand);
    const commandCount = useSelector(state => state.reducer.commandCount);

    const [isLoading, setIsLoading] = React.useState(true);
    const [playCollectSound] = useSound(collectSound, { volume: 0.2 });

    useEffect(() => setTimeout(() => setIsLoading(false), 2000), []);

    useEffect(() => {
        if (!!activeCommand) {
            speakUtterance(activeCommand.utterance);
        }
    }, [activeCommand]);

    const handleSessionStart = (e) => {
        dispatch(startSession(commands));
    };

    const handleSessionEnd = (e) => {
        console.log(endSession());
        dispatch(endSession());
    };
    
    const handleCountInCompleted = () => {
        dispatch(sessionCountInCompleted());
    };

    const handleCommandCompleted = () => {
        const commandIndex = Math.round(Math.random() * (commands.length - 1));
        dispatch(changeCommand(commands[commandIndex]));
        playCollectSound();
    };

    return (
        <AppComponent
            activeCommand={activeCommand}
            onSessionStart={handleSessionStart}
            onSessionEnd={handleSessionEnd}
            sessionStatus={sessionStatus}
            onCountInCompleted={handleCountInCompleted}
            onCommandCompleted={handleCommandCompleted}
            commandCount={commandCount}
            isLoading={isLoading}
        />
    );
};
