import React from "react";
import { SESSION_STATUSES } from "../../constants";
import { TimerContainer } from '../timer';

export const AppComponent = ({
  onSessionStart,
  onSessionEnd,
  sessionStatus,
  onCountInCompleted,
  onCommandCompleted,
  commandHistory,
  activeCommand,
  commandCount,
  commandCompletedTime,
  isLoading,
}) => (
    <div className="wrapper">
      {isLoading && (
        <div className="vertical-center">
          <div className="primary-circle centered">
            <div className="circle-loading-border"></div>
            <img src="glove.png" alt="Boxing Gloves Icon"></img>
          </div>
        </div>
      )}

      {!isLoading && (
        <>
          {sessionStatus === SESSION_STATUSES.IN_PROGRESS && (
            <div className="layout">
              <div className="content">
                <TimerContainer
                  seconds={activeCommand.delay}
                  onCompleted={onCommandCompleted}
                  text={activeCommand.command}
                  key={`timer${commandCount}`}
                />
              </div>
              <div className="footer">
                <button type="button" className="button align-end" onClick={onSessionEnd}>
                  End Session
                </button>
              </div>
            </div>
          )}

          {sessionStatus === SESSION_STATUSES.COUNTING_IN && (
            <div className="layout">
              <div className="content">
                <TimerContainer
                  seconds={5}
                  onCompleted={onCountInCompleted}
                  text="Get ready"
                />
              </div>
            </div>
          )}

          {sessionStatus === SESSION_STATUSES.NOT_STARTED && (
            <div className="layout">
              <div className="header">
                <header>
                  <h1 className="page-title">Start a session</h1>
                </header>
              </div>
              <div className="content">
                <label>
                  Routine Preset:
                </label>
                <select>
                  <option>Kickboxing Drills</option>
                </select>
              </div>
              <div className="footer">
                <button type="button" className="button align-end" onClick={onSessionStart}>
                  Start Session
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div >
  );
