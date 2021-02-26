const initialStateAuth = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

export const authReducer = (state = initialStateAuth, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password,
    };
  }

  return state;
};
