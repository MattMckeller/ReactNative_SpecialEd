// @flow
import React, { Component } from 'react';
import {
  Text, View,
} from 'react-native';
import { Picker } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import globalStyles from '../../../assets/styles/GlobalStyles';

// todo update types from redux form
type Props = {
  label: string,
  options: { label: string, value: string, key: string },
  shouldDisplayErrorMessage: boolean,
  input: any,
  meta: any,
  labelIcon?: string,
  iconType?: string,
  forceErrorDisplay?: boolean,
}

class RoundedPickerInput extends Component<Props> {
  pickerInput: Picker;

  constructor() {
    super();
    this._onChangeText = this._onChangeText.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this.pickerInput = React.createRef();
  }

  renderLabelIcon() {
    const { labelIcon, iconType } = this.props;
    const { labelIconStyle } = styles;
    if (labelIcon && labelIcon.length) {
      return (
        <FontAwesome5
          style={labelIconStyle}
          name={labelIcon}
          // type={iconType}
        />
      );
    }
    return null;
  }

  static renderDropdownIcon() {
    // todo update icon to be arrow
    const { dropdownIconStyle } = styles;
    return (
      <FontAwesome5
        style={dropdownIconStyle}
        name="chevron-circle-down"
        // type="FontAwesome5"
      />
    );
  }

  renderLabel() {
    const {
      containerStyle, textStyle, hasIconTextStyle,
    } = styles.labelStyle;
    const { errorTextStyle } = globalStyles;
    const {
      focusedTextContainerStyle, defaultTextContainerStyle,
      textContainerHasIconStyle, textContainerNoIconStyle,
      labelGroupContainerStyle,
    } = containerStyle;
    const { meta, input } = this.props;
    const { error, active } = meta;
    const { value } = input;
    const {
      label, labelIcon, shouldDisplayErrorMessage, forceErrorDisplay,
    } = this.props;

    const doDisplayErrorMessage = (shouldDisplayErrorMessage || forceErrorDisplay)
      && error;

    let fullTextStyle = (labelIcon && labelIcon.length)
      ? ({ ...textStyle, ...hasIconTextStyle }) : (textStyle);
    fullTextStyle = (doDisplayErrorMessage)
      ? ({ ...fullTextStyle, ...errorTextStyle }) : (fullTextStyle);

    let fullTextContainerStyle = (
      active || (value && value.length) || doDisplayErrorMessage
    ) ? focusedTextContainerStyle : defaultTextContainerStyle;
    fullTextContainerStyle = (labelIcon && labelIcon.length)
      ? ({ ...fullTextContainerStyle, ...textContainerHasIconStyle })
      : ({ ...fullTextContainerStyle, ...textContainerNoIconStyle });

    const displayedText = (doDisplayErrorMessage)
      ? (error) : label;

    return (
      <View style={labelGroupContainerStyle}>
        <View style={fullTextContainerStyle}>
          <Text style={fullTextStyle}>
            {displayedText}
          </Text>
        </View>
        {this.renderLabelIcon()}
      </View>
    );
  }

  renderPickerItems() {
    const items = [];
    const { options } = this.props;
    options.forEach((item) => {
      items.push(<Picker.Item
        label={item.label}
        value={item.value}
        key={item.key ? item.key : item.value}
      />);
    });
    return items;
  }

  render() {
    const {
      labelIcon,
      input: {
        value,
      },
    } = this.props;
    const {
      textInputStyle: {
        standardTextInputStyle,
        withIconStyle,
        pickerTextStyle,
      },
      containerStyle,
      dropdownIconContainerStyle,
    } = styles;
    const fullTextInputStyle = (labelIcon && labelIcon.length)
      ? ({ ...standardTextInputStyle, ...withIconStyle }) : (standardTextInputStyle);
    return (
      <View style={containerStyle}>
        <Picker
          ref={this.pickerInput}
          note
          mode="dropdown"
          style={fullTextInputStyle}
          selectedValue={value}
          onValueChange={this._onChangeText}
          textStyle={pickerTextStyle}
        >
          {this.renderPickerItems()}
        </Picker>
        <View pointerEvents="none" style={{ position: 'absolute', left: 0 }}>
          {this.renderLabel()}
        </View>
        <View pointerEvents="none" style={dropdownIconContainerStyle}>
          {RoundedPickerInput.renderDropdownIcon()}
        </View>
      </View>
    );
  }

  _onFocus() {
    const { input } = this.props;
    const { onFocus } = input;
    if (onFocus) {
      onFocus();
    }
  }

  _onBlur() {
    const { input } = this.props;
    const { onBlur } = input;
    if (onBlur) {
      onBlur();
    }
  }

  _onChangeText(text) {
    const { input } = this.props;
    const { onChange } = input;
    if (onChange) {
      onChange(text);
    }
  }
}

RoundedPickerInput.defaultProps = {
  labelIcon: null,
  iconType: 'FontAwesome5',
  forceErrorDisplay: false,
};

const styles = {
  labelStyle: {
    containerStyle: {
      focusedTextContainerStyle: {
        position: 'absolute',
        top: 2,
        flex: 1,
        flexDirection: 'row',
      },
      defaultTextContainerStyle: {
        position: 'absolute',
        top: 15,
        flex: 1,
        flexDirection: 'row',
      },
      textContainerHasIconStyle: {
        left: 29,
      },
      textContainerNoIconStyle: {
        left: 15,
      },
      labelGroupContainerStyle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
    },
    textStyle: {
      color: 'gray',
    },
    hasIconTextStyle: {
      paddingLeft: 16,
    },
  },
  textInputStyle: {
    standardTextInputStyle: {
      backgroundColor: 'white',
      height: 50,
      borderRadius: 25,
      paddingLeft: 15,
      width: '100%',
    },
    withIconStyle: {
      paddingLeft: 29,
    },
    pickerTextStyle: {
      color: 'black',
    },
  },
  labelIconStyle: {
    fontSize: 20,
    width: 20,
    position: 'absolute',
    top: 13,
    left: 15,
  },
  dropdownIconStyle: {
    fontSize: 20,
    width: 20,
    position: 'absolute',
    top: 13,
    right: 10,
  },
  dropdownIconContainerStyle: {
    position: 'absolute',
    right: 15,
  },
  containerStyle: {
    width: '100%',
  },
};

export default RoundedPickerInput;
