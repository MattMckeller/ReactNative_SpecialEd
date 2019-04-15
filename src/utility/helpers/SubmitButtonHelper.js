// @flow

type InputFieldData = {
  valid: boolean;
  shouldDisplayError: boolean;
  previouslyDisplayedError: boolean;
};
export type SubmitButtonErrorDisplayData = {
  name: string;
} & InputFieldData;

class SubmitButtonHelper {
  inputFields = {};

  constructor(inputFieldNames: string[]) {
    inputFieldNames.forEach((name) => {
      this.inputFields[name] = {
        previouslyDisplayedError: false,
        shouldDisplayError: false,
        valid: null,
      };
    });
    this.onErrorStateChange = this.onErrorStateChange.bind(this);
    this.shouldDisableSubmitButton = this.shouldDisableSubmitButton.bind(this);
  }

  onErrorStateChange(errorDisplayData: SubmitButtonErrorDisplayData) {
    const {
      name, shouldDisplayError, previouslyDisplayedError, valid,
    } = errorDisplayData;

    this.inputFields[name] = {
      shouldDisplayError,
      previouslyDisplayedError,
      valid,
    };
  }

  /**
   * Determine if there are any displayed errors, or if a field is invalid and previously had
   * an error message dispayed
   * @returns {boolean}
   */
  shouldDisableSubmitButton() {
    const keys = Object.keys(this.inputFields);
    let shouldDisable = false;
    keys.forEach((inputFieldName: string) => {
      const inputField: InputFieldData = this.inputFields[inputFieldName];
      shouldDisable = shouldDisable || inputField.shouldDisplayError;
    });
    keys.forEach((inputFieldName: string) => {
      const inputField: InputFieldData = this.inputFields[inputFieldName];
      shouldDisable = shouldDisable || (inputField.previouslyDisplayedError && !inputField.valid);
    });
    return shouldDisable;
  }
}


export default SubmitButtonHelper;
