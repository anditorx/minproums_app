const initialStateGlobal = {
  isError: false,
  message: 'Error',
};

export const globalReducer = (state = initialStateGlobal, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.message,
    };
  }

  return state;
};
