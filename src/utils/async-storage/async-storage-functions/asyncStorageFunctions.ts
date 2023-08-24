import AsyncStorage from '@react-native-async-storage/async-storage';

//storing object
export const setData = async (storageKey: Keys, value: Values) => {
  try {
    const jsonFormatObject = JSON.stringify(value);
    await AsyncStorage.setItem(`@${storageKey}`, jsonFormatObject);
  } catch (err) {
    console.log('Async storage storeData error: ', err);
    throw err;
  }
};

//get object
export const getData = async (storageKey: Keys) => {
  try {
    const jsonFormatObject = await AsyncStorage.getItem(`@${storageKey}`);
    return jsonFormatObject != null ? JSON.parse(jsonFormatObject) : null;
  } catch (err) {
    return null;
  }
};

//remove item
export const removeData = async (storageKey: Keys) => {
  try {
    await AsyncStorage.removeItem(`@${storageKey}`);
  } catch (err) {
    console.log('Async storage removeValue error: ', err);
    throw err;
  }
  console.log('value removed done');
};

//get all keys
export const getAllKeys = async () => {
  let keys: readonly string[] = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (err) {
    console.log('Async storage getAllKeys error: ', err);
    throw err;
  }

  console.log(keys);
};
