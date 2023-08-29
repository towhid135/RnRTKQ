import {SharedTransition, withTiming} from 'react-native-reanimated';
const duration = 500;
export const screenTransition = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withTiming(values.targetHeight, {duration}),
    width: withTiming(values.targetWidth, {duration}),
    originX: withTiming(values.targetOriginX, {duration}),
    originY: withTiming(values.targetOriginY, {duration}),
  };
});
