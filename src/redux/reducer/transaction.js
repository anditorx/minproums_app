const initialCart = {
  dataCart: [],
  totalPrice: 0,
};

export const itemCartReducer = (state = initialCart, action) => {
  if (action.type === 'SET_DATA_CART') {
    return {
      ...state,
      dataCart: action.value,
    };
  }

  return state;
};

const initialTotalPrice = {
  totalPrice: 0,
};

export const totalPriceReducer = (state = initialTotalPrice, action) => {
  if (action.type === 'SET_TOTAL_PRICE') {
    return {
      ...state,
      totalPrice: action.value,
    };
  }

  return state;
};
