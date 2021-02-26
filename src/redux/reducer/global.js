const initialStateGlobal = {
  isError: false,
  isLoading: false,
  message: 'Error',
  invoice: '',
};

export const globalReducer = (state = initialStateGlobal, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.message,
    };
  }
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  if (action.type === 'SET_INVOICE') {
    return {
      ...state,
      invoice: action.value.invoice,
    };
  }

  return state;
};
