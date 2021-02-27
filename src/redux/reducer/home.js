const initialStateHome = {
  product: [],
  atk: [],
  rumah_tangga: [],
  elektronik: [],
  masak: [],
};

export const homeReducer = (state = initialStateHome, action) => {
  if (action.type === 'SET_PRODUCT') {
    return {
      ...state,
      product: action.value,
    };
  }
  if (action.type === 'SET_PRODUCT_ATK') {
    return {
      ...state,
      atk: action.value,
    };
  }
  if (action.type === 'SET_PRODUCT_RUMAH_TANGGA') {
    return {
      ...state,
      rumah_tangga: action.value,
    };
  }
  if (action.type === 'SET_PRODUCT_ELEKTRONIK') {
    return {
      ...state,
      elektronik: action.value,
    };
  }
  if (action.type === 'SET_PRODUCT_MASAK') {
    return {
      ...state,
      masak: action.value,
    };
  }
  return state;
};
