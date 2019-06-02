import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Animated, Easing } from 'react-native';
import LoginScene from './scenes/LoginScene';
import CreateAccountScene from './scenes/CreateAccountScene';
import ForgotPasswordScene from './scenes/ForgotPasswordScene';
import StudentListScene from './scenes/StudentListScene';
import StudentProfileNotesScene from './scenes/StudentProfileNotesScene';
import StudentProfileGoalsScene from './scenes/StudentProfileGoalsScene';
import StudentProfileAttendanceScreen from './scenes/StudentProfileAttendanceScreen';
import { RouteKeys } from './route-keys';

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

const TransitionConfiguration = (sceneProps) => {
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

const AppNavigator = createStackNavigator({
  [RouteKeys.login]: {
    screen: LoginScene,
  },
  [RouteKeys.createAccount]: {
    screen: CreateAccountScene,
  },
  [RouteKeys.forgotPassword]: {
    screen: ForgotPasswordScene,
  },
  [RouteKeys.studentList]: {
    screen: StudentListScene,
  },
  [RouteKeys.studentProfileNotes]: {
    screen: StudentProfileNotesScene,
  },
  [RouteKeys.studentProfileGoals]: {
    screen: StudentProfileGoalsScene,
  },
  [RouteKeys.studentProfileAttendance]: {
    screen: StudentProfileAttendanceScreen,
  },
},
{
  initialRouteName: RouteKeys.studentList,
  transitionConfig: TransitionConfiguration,
  headerMode: 'none',
});
export default createAppContainer(AppNavigator);
