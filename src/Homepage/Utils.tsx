import { useEffect, useState } from 'react';
import { EventEmitter } from 'events';

// ***********************Types Declaration*************************

type IObject = { [key: string]: any };
type IDisplayMode = 'display' | 'pdf' | 'ready-download';
type IGlobalState = {
  isResumeDialog: boolean;
  displayMode: IDisplayMode;
};
// ************************************************
const observable = new EventEmitter();
let globalState: IGlobalState = {
  isResumeDialog: false,
  displayMode: 'pdf',
};

const eventName = Symbol('Global');

const dispatcher = (value: IObject) => {
  observable.emit(eventName, value);
};
/**
 * TODO:
 * 1. multiple global state
 *
 */
export const useStateListner = (): [typeof globalState, Function] => {
  const [state, setLocalState] = useState(globalState);
  const listner = (e: IObject) => {
    setLocalState(() => {
      globalState = { ...globalState, ...e };
      return globalState;
    });
  };

  useEffect(() => {
    observable.addListener(eventName, listner);
    return () => {
      observable.removeListener(eventName, listner);
    };
  }, []);

  return [state, dispatcher];
};
