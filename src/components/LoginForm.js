// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';
import RoundedTextInput from './common/RoundedTextInput';
import RoundedButton from './common/RoundedButton';
import styleVariables from '../assets/StyleVariables';

type Props = {
}
class LoginForm extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    const {
      wrapperStyle,
      containerStyle,
      inputContainerStyle,
      submitButtonContainerStyle,
    } = styles;
    const { flexRow, flexColumn } = globalStyles;
    return (
      <View style={flexRow}>
        <View style={{ ...flexColumn, ...containerStyle }}>
          <View style={wrapperStyle}>
            <View style={inputContainerStyle}>
              <RoundedTextInput label="Username" labelIcon="person" />
            </View>
            <View style={inputContainerStyle}>
              <RoundedTextInput label="Password" labelIcon="lock" secureTextEntry />
            </View>
            <View style={submitButtonContainerStyle}>
              <RoundedButton
                onPress={this.onSubmit}
                title="Sign In"
                height={60}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  onSubmit() {
    console.log('submit form');
  }
}

const styles = {
  containerStyle: {
    backgroundColor: styleVariables.primaryColor,
  },
  wrapperStyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerStyle: {
    width: '95%',
    marginBottom: 20,
  },
  submitButtonContainerStyle: {
    marginTop: 15,
    width: '95%',
  },
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(LoginForm);
