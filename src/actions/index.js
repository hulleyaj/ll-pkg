import { DEC_COUNT, INC_COUNT } from '../constants';

export const decrementAction = () => ({
  type: DEC_COUNT
});

export const incrementAction = () => ({
  type: INC_COUNT
});