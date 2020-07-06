import React from 'react';

export const TimerComponent = ({ seconds, text }) => (
    <>
        <div className="countdown">
            <div className="countdown-timer">
                <div className="l-half">
                    <div className="l-half-time" style={{ animationDuration: `${seconds}s` }}></div>
                </div>
                <div className="r-half">
                    <div className="r-half-time" style={{ animationDuration: `${seconds}s` }}></div>
                </div>
            </div>
            <div className="countdown-inner-content">
                <div className="vertical-center">
                    <div className="text-center">
                        {text}
                    </div>
                </div>
            </div>
        </div>
    </>
);