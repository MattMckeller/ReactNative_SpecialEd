const INITIAL_STATE = {
  processingAsyncRequestCount: 0,
  loading: false,
  errorOccurred: false,
};
const LoadingReducer = (state = INITIAL_STATE, action) => {
  const {
    processingAsyncRequestCount,
  } = state;
  if (action.meta && action.meta.beginAsyncRequest) {
    return {
      ...state,
      loading: true,
      processingAsyncRequestCount: processingAsyncRequestCount + 1,
    };
  }
  if (action.meta && action.meta.finishAsyncRequest) {
    const initiallyGreaterThanZero = processingAsyncRequestCount > 0;
    const newCount = initiallyGreaterThanZero ? processingAsyncRequestCount - 1 : 0;
    // todo keep log but move to centralized logging
    if (!initiallyGreaterThanZero) {
      console.log('error with loading - finishing async request even though current count is 0');
    }

    return {
      ...state,
      processingAsyncRequestCount: newCount,
      loading: newCount !== 0,
      errorOccurred: initiallyGreaterThanZero !== true ? true : state.errorOccurred,
    };
  }
  return state;
};

export default LoadingReducer;
