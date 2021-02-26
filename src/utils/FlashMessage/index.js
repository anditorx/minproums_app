import {showMessage} from 'react-native-flash-message';

export const FlashMessage = (message, desc, type) => {
  showMessage({
    message: message,
    description: desc,
    type: type,
  });
};
