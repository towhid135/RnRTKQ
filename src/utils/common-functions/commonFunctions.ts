import {getData, setData} from 'utils/async-storage';
export const getMode = async (): Promise<Theme | undefined> => {
  try {
    const {mode}: Mode = await getData('mode');
    return mode;
  } catch {
    return undefined;
  }
};

export const setMode = async () => {
  try {
    await setData('mode', {mode: 'dark'});
    console.log('mode set successfully');
  } catch {
    console.log('mode set failed');
  }
};
