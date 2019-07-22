// @flow
import React, { Component } from 'react';
import { FormProps } from 'redux-form';
import type { Validator } from '../../../utility/validation/Validate';
import Required from '../../../utility/validation/Required';
import { AppValidator } from '../config/AppValidator';
import SubmitButtonHelper from '../../../utility/helpers/SubmitButtonHelper';
import type { SubmitButtonErrorDisplayData } from '../../../utility/helpers/SubmitButtonHelper';


type Props = {
  loading: boolean,
} & FormProps
const formHelper = (WrappedComponent, AllInputFieldNames: string[]) => {
  const WrapperComponent = class extends Component<Props> {
    state = {
      disableSubmitButton: false,
      forceErrorDisplays: false,
    };

    submitButtonHelper: SubmitButtonHelper = new SubmitButtonHelper(
      AllInputFieldNames,
    );

    constructor() {
      super();
      this.checkSubmitButtonStatus = this.checkSubmitButtonStatus.bind(this);
      this.onSubmitErrorChecker = this.onSubmitErrorChecker.bind(this);
      this.onErrorStateChange = this.onErrorStateChange.bind(this);
    }

    componentDidUpdate({ loading: previouslyLoading }): void {
      const { loading: currentlyLoading } = this.props;
      if (currentlyLoading !== previouslyLoading) {
        this.checkSubmitButtonStatus();
      }
    }

    // todo maybe move these to a HOC and pass properties down?
    // todo see if this can be moved to a centralized component
    onErrorStateChange(errorData: SubmitButtonErrorDisplayData) {
      this.submitButtonHelper.onErrorStateChange(errorData);
      this.checkSubmitButtonStatus();
    }

    checkSubmitButtonStatus() {
      const { loading, valid } = this.props;
      const { disableSubmitButton: currentStatus, forceErrorDisplays } = this.state;
      const disableSubmitButton = this.submitButtonHelper.shouldDisableSubmitButton()
        || loading || (forceErrorDisplays && !valid);
      if (disableSubmitButton !== currentStatus) {
        this.setState({ disableSubmitButton });
      }
    }

    onSubmitErrorChecker(callback: () => any) {
      const { valid } = this.props;
      if (!valid) {
        this.setState({ forceErrorDisplays: true });
      } else {
        callback();
      }
    }

    render() {
      const {
        forceErrorDisplays,
        disableSubmitButton,
      } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          onSubmitErrorChecker={this.onSubmitErrorChecker}
          onErrorStateChange={this.onErrorStateChange}
          disableSubmitButton={disableSubmitButton}
          forceErrorDisplays={forceErrorDisplays}
        />
      );
    }
  };
  WrapperComponent.defaultProps = {};
  return WrapperComponent;
};

export default formHelper;
