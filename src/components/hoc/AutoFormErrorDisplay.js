// @flow
/* eslint-disable*/
import React, { Component } from 'react';

// todo update types from redux form
export type autoErrorDisplayProps = {
  value: string,
  meta: any,
  input: any,
  onErrorStateChange?: (hasError) => void,
  clearErrorsWhenActive: boolean,
}
const autoFormErrorDisplay = WrappedComponent => {
  const WrapperComponent = class extends Component<autoErrorDisplayProps> {
    state = {
      previouslyDisplayedError: false,
      shouldDisplayErrorMessage: false,
    };

    // todo grab and display type for redux form
    constructor(props) {
      super(props);
      this.shouldDisplayErrorMessage = this.shouldDisplayErrorMessage.bind(this);
    }

    componentDidMount(): void {
      this.shouldDisplayErrorMessage(false, false);
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState): void {
      this.shouldDisplayErrorMessage(prevState.shouldDisplayErrorMessage, prevProps.input.valid);
    }

    render() {
      const { shouldDisplayErrorMessage } = this.state;
      return <WrappedComponent shouldDisplayErrorMessage={shouldDisplayErrorMessage} {...this.props} />;
    }

    shouldDisplayErrorMessage(previousStateShouldDisplay: boolean, previousPropsValid: boolean): boolean {
      const { meta, input } = this.props;
      const { name } = input;
      const { valid, active, touched } = meta;
      const {
        onErrorStateChange,
        clearErrorsWhenActive,
      } = this.props;
      const {
        previouslyDisplayedError,
      } = this.state;
      const shouldDisplayError =
        (clearErrorsWhenActive)
        ? !valid && touched && !active
        : !valid && touched && ( !active || previouslyDisplayedError );
      const shouldDisplayErrorHasChanged = (previousStateShouldDisplay !== shouldDisplayError);
      const validHasChanged = (previousPropsValid !== valid);
      if (shouldDisplayError && shouldDisplayErrorHasChanged) {
        this.setState({
          shouldDisplayErrorMessage: true,
          previouslyDisplayedError: true,
        });
      } else if (shouldDisplayErrorHasChanged) {
        this.setState({
          shouldDisplayErrorMessage: false,
        });
      }
      if (shouldDisplayErrorHasChanged || validHasChanged) {
        if ( onErrorStateChange ) {
          onErrorStateChange({
            name,
            shouldDisplayError,
            previouslyDisplayedError,
            valid,
          });
        }
      }
      return shouldDisplayError;
    }
  };
  WrapperComponent.defaultProps = {
    clearErrorsWhenActive: true,
    onErrorStateChange: null,
  };
  return WrapperComponent;
};

export default autoFormErrorDisplay;
