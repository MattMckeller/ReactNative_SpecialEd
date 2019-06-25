import { Animated, Easing } from 'react-native';

// Route links
export const RouterHelpers = {
  login: 'login',
  createAccount: 'createAccount',
  forgotPassword: 'forgotPassword',
  studentList: 'studentList',
  studentProfileNotes: 'studentProfileNotes',
  studentProfileGoals: 'studentProfileGoals',
  studentProfileAttendance: 'studentProfileAttendance',
  addStudent: 'addStudent',
};

// Animations for transitions between scenes/when navigating
const slideFromRight = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0],
  });
  return { transform: [{ translateX }] };
};

const collapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1]),
  });

  return {
    opacity,
    transform: [
      { scaleY },
    ],
  };
};

const noAnimation = () => ({ transform: [] });

const getTransitionSpecForTransition = (transition: string) => {
  switch (transition) {
    case 'none':
      return {
        duration: 0,
      };
    default:
      return {
        duration: 750,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      };
  }
};
const getSceneInterpolaterForTransition = (transition, index, position, width) => ({
  collapseExpand: collapseExpand(index, position),
  none: noAnimation(),
  default: slideFromRight(index, position, width),
}[transition]);

export const TransitionConfiguration = (sceneProps) => {
  const { layout, position, scene } = sceneProps;
  const width = layout.initWidth;
  const { index, route } = scene;
  const params = route.params || {};
  const transition = params.transition || 'default';
  return {
    transitionSpec: getTransitionSpecForTransition(transition),
    screenInterpolator: () => getSceneInterpolaterForTransition(transition, index, position, width),
  };
};
