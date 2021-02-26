import {showMessage} from 'react-native-flash-message';
import {Colors} from '../Colors';

export const FlashMessage = (message, desc, type) => {
  showMessage({
    message: message,
    description: desc,
    type: type,
    backgroundColor: type == 'success' ? Colors.primary : Colors.red,
  });
};
