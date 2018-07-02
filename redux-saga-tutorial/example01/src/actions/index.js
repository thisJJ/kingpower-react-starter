export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const DECREMENT_COUNTER_SUCCESS = 'DECREMENT_COUNTER_SUCCESS';

export const increment = () => ({
  type: INCREMENT_COUNTER,
});

export const decrement = () => ({
  type: DECREMENT_COUNTER,
});

export const decrementSuccess = (count) => ({
  type: DECREMENT_COUNTER_SUCCESS,
  count
});

export const incrementAsync = (delay = 1000) => dispatch => {
  setTimeout(() => {
    dispatch(increment());
  }, delay);
};
