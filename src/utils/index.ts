import {showMessage} from 'react-native-flash-message';

const flashMessage = (title, message, type) => {
  showMessage({
    message: title,
    position: 'top',
    icon: type,
    description: message,
    type: type,
  });
};

export {flashMessage};
