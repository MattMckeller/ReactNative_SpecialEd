// @flow
/* eslint-disable*/
import React, { Component } from 'react';
import type { Validator } from '../../../utility/validation/Validate';
import Required from '../../../utility/validation/Required';
import { AppValidator } from '../config/AppValidator';

// todo update types from redux form
type Props = {
  name: string;
  onErrorStateChange: () => any;
  required?: boolean;
  fieldName?: string;
  label?: string;
}
// Handles rule setup & updates for form fields
const validationRuleHandler = (WrappedComponent,
  {
    defaultRequired = true,
    defaultFieldName = 'Field Name',
    defaultValidationRules = [],
  }: {
    defaultValidationRules?: Validator[],
    defaultFieldName?: string,
    defaultRequired?: boolean,
  }) => {
  const WrapperComponent = class extends Component<Props> { // todo PureComponent?
    validationRules: Validator[] = defaultValidationRules;
    requiredRule: Validator = null;
    state = {
      validationRules: defaultValidationRules,
      fieldName: defaultFieldName,
      required: defaultRequired,
    };

    componentDidMount(): void {
      const {
        fieldName,
        required,
      } = this.state;
      this.updateValidationRules({
        required,
        fieldName,
      });
    }

    componentDidUpdate(prevProps: Props, prevState): void {
      const {
        required: previouslyRequired,
        fieldName: previousFieldName,
      } = prevState;
      const {
        required,
        fieldName,
      } = this.state;
      if (required !== previouslyRequired || fieldName !== previousFieldName) {
        this.updateValidationRules({ required, fieldName });
      }
    }

    render() {
      const {
        validationRules,
      } = this.state;
      return <WrappedComponent validationRules={validationRules} {...this.props} />;
    }

    updateValidationRules({ required, fieldName }) {
      console.log('update validation rules', fieldName, required);
      this.validationRules = this.validationRules.filter(rule => rule !== this.requiredRule);
      this.requiredRule = Required({ fieldName });
      if (required) {
        this.validationRules.push(this.requiredRule);
      }
      this.setState({
        validationRules: [AppValidator(this.validationRules)],
        fieldName,
        required,
      });
    }
  };
  WrapperComponent.defaultProps = {};
  return WrapperComponent;
};

export default validationRuleHandler;
