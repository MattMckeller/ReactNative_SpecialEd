import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScene from './scenes/LoginScene';
import CreateAccountScene from './scenes/CreateAccountScene';
import ForgotPasswordScene from './scenes/ForgotPasswordScene';
import StudentListScene from './scenes/StudentListScene';
import StudentProfileNotesScene from './scenes/StudentProfileNotesScene';
import StudentProfileGoalsScene from './scenes/StudentProfileGoalsScene';
import StudentProfileAttendanceScreen from './scenes/StudentProfileAttendanceScreen';
import { RouterHelpers, TransitionConfiguration } from './router-helpers';

const AppNavigator = createStackNavigator({
  [RouterHelpers.login]: {
    screen: LoginScene,
  },
  [RouterHelpers.createAccount]: {
    screen: CreateAccountScene,
  },
  [RouterHelpers.forgotPassword]: {
    screen: ForgotPasswordScene,
  },
  [RouterHelpers.studentList]: {
    screen: StudentListScene,
  },
  [RouterHelpers.studentProfileNotes]: {
    screen: StudentProfileNotesScene,
  },
  [RouterHelpers.studentProfileGoals]: {
    screen: StudentProfileGoalsScene,
  },
  [RouterHelpers.studentProfileAttendance]: {
    screen: StudentProfileAttendanceScreen,
  },
},
{
  initialRouteName: RouterHelpers.studentList,
  transitionConfig: TransitionConfiguration,
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});
export default createAppContainer(AppNavigator);
