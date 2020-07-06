import React, { useEffect, useState } from 'react';
import { useInterval } from '../../utils/useInterval';
import { TimerComponent } from './timer.component';

export const TimerContainer = ({ seconds, onCompleted, text }) => {
    const [timeRemaining, setTimeRemaining] = useState();

    useEffect(() => {
        setTimeRemaining(seconds);
    }, [seconds]);

    useInterval(() => {
        if (timeRemaining <= 1) {
            return onCompleted();
        }

        setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return (
        <TimerComponent
            seconds={seconds}
            text={text}
        />
    );
};