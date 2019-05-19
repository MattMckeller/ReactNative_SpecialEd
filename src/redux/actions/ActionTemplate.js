
export const retrievalMethod = () => (dispatch) => {
  dispatch({ type: START, payload: null });

  // todo implement backend calls
  setTimeout(() => {
    success(dispatch, DATA);
  }, 10);

  // setTimeout(() => {
  //   fail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

const success = (dispatch, results) => {
  dispatch({ type: SUCCESS, payload: results });
};

const fail = (dispatch) => {
  dispatch({
    type: FAIL,
    payload: { error: 'Error from backend.' },
  });
};
