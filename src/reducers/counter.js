import {
  INC_COUNT,
  DEC_COUNT,
} from '../constants';

export const countSelector = (state) => state.counter.count;

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case DEC_COUNT:
      return { count: state.count - 1 };
    case INC_COUNT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export default counter;