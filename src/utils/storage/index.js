import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlashMessage} from '../FlashMessage';

export const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    // saving error
    FlashMessage('Oops!', 'Gagal menyimpan');
  }
};

export const getData = async (storageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    FlashMessage('Oops!', 'Gagal mengambil data');
  }
};
