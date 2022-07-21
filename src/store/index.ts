import { createStore } from 'redux';
import { State, Action } from '../utils/interface';
import {
  SET_ERROR,
} from './actions';

const initialState: State = {
  error: '',
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payLoad,
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);
