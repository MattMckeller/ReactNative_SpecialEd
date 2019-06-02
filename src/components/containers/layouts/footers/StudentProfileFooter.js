// @flow
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import NavigationTab from '../../../shared/common/NavigationTab';
import NotesNavigationButton from '../../../buttons/navigation-buttons/NotesNavigationButton';
import GoalsNavigationButton from '../../../buttons/navigation-buttons/GoalsNavigationButton';
import AttendanceNavigationButton
  from '../../../buttons/navigation-buttons/AttendanceNavigationButton';
import styleVariables from '../../../../assets/StyleVariables';
import { RouteKeys } from '../../../../route-keys';

type Props = {
  navigation: NavigationScreenProp<NavigationRoute<Params>, Params>,
  currentRoute: string,
}

function StudentProfileFooter(props: Props) {
  const { navigation, currentRoute } = props;
  const onNotesButtonPress = () => {
    navigation.navigate(RouteKeys.studentProfileNotes, { transition: 'none' });
  };
  const onGoalsButtonPress = () => {
    navigation.navigate(RouteKeys.studentProfileGoals, { transition: 'none' });
  };
  const onAttendanceButtonPress = () => {
    navigation.navigate(RouteKeys.studentProfileAttendance, { transition: 'none' });
  };

  const {
    containerStyle,
    tabContainerStyle,
  } = styles;

  const {
    defaultNavigationTabContentColor,
    activeNavigationTabContentColor,
  } = styleVariables;


  // Determine active scene
  const notesPageActive = currentRoute === RouteKeys.studentProfileNotes;
  const goalsPageActive = currentRoute === RouteKeys.studentProfileGoals;
  const attendancePageActive = currentRoute === RouteKeys.studentProfileAttendance;

  return (
    <View style={containerStyle}>
      <View style={tabContainerStyle}>
        <NavigationTab isActive={notesPageActive}>
          <NotesNavigationButton
            onPress={onNotesButtonPress}
            color={
              (notesPageActive
                  ? activeNavigationTabContentColor
                  : defaultNavigationTabContentColor
              )}
          />
        </NavigationTab>
      </View>
      <View style={tabContainerStyle}>
        <NavigationTab isActive={goalsPageActive}>
          <GoalsNavigationButton
            onPress={onGoalsButtonPress}
            color={
              (goalsPageActive
                  ? activeNavigationTabContentColor
                  : defaultNavigationTabContentColor
              )}
          />
        </NavigationTab>
      </View>
      <View style={tabContainerStyle}>
        <NavigationTab isActive={attendancePageActive}>
          <AttendanceNavigationButton
            onPress={onAttendanceButtonPress}
            color={
              (attendancePageActive
                  ? activeNavigationTabContentColor
                  : defaultNavigationTabContentColor
              )}
          />
        </NavigationTab>
      </View>
    </View>
  );
}

StudentProfileFooter.defaultProps = {};

const styles = {
  containerStyle: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainerStyle: {
    flex: 1,
    height: 50,
  },
};

const mapStateToProps = (state) => {
  const { routeState: { currentRoute } } = state;
  return {
    currentRoute,
  };
};

export default connect(mapStateToProps, {})(StudentProfileFooter);
