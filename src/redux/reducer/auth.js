const initialStateRegister = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  address: '',
  gender: '',
  phone_number: '',
  city: '',
};

export const registerReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password,
    };
  }
  if (action.type === 'SET_ADDRESS') {
    return {
      ...state,
      address: action.value.address,
      gender: action.value.gender,
      phone_number: action.value.phone_number,
      city: action.value.city,
    };
  }

  return state;
};
