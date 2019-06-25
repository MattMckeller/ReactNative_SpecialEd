// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  KeyboardAvoidingView, Keyboard, View, ScrollView,
} from 'react-native';
import {
  FormProps, reduxForm, formValueSelector,
} from 'redux-form';
import styleVariables from '../../assets/StyleVariables';
import SubmitButtonHelper from '../../utility/helpers/SubmitButtonHelper';
import type { SubmitButtonErrorDisplayData } from '../../utility/helpers/SubmitButtonHelper';
import type { StudentInterface } from '../../data-models/student/Student.interface';
import { doAddStudent } from '../../redux/actions';
import FirstNameInput from './fields/FirstNameInput';
import LastNameInput from './fields/LastNameInput';
import GenderInput from './fields/GenderInput';
import GradeInput from './fields/GradeInput';
import SchoolInput from './fields/SchoolInput';
import defaultSubmitContainer from './hoc/DefaultSubmitContainer';
import CenteredWrapper from '../containers/layouts/wrappers/CenteredWrapper';
import BirthDateInput from './fields/BirthDateInput';
import defaultInputContainer from './hoc/DefaultInputContainer';
import AddStudentSubmit from './buttons/AddStudentSubmit';
import formHelper from './hoc/FormHelper';

const FORM_NAME = 'addStudentForm';
const FIRST_NAME_INPUT_NAME = 'firstName';
const LAST_NAME_INPUT_NAME = 'lastName';
const BIRTH_DATE_INPUT_NAME = 'birthDate';
const GENDER_INPUT_NAME = 'gender';
const GRADE_INPUT_NAME = 'grade';
const SCHOOL_INPUT_NAME = 'school';

const FirstNameField = defaultInputContainer(FirstNameInput);
const LastNameField = defaultInputContainer(LastNameInput);
const BirthDateField = defaultInputContainer(BirthDateInput);
const GenderField = defaultInputContainer(GenderInput);
const GradeField = defaultInputContainer(GradeInput);
const SchoolField = defaultInputContainer(SchoolInput);
const SubmitButton = defaultSubmitContainer(AddStudentSubmit);

const AllInputFieldNames = [
  FIRST_NAME_INPUT_NAME,
  LAST_NAME_INPUT_NAME,
  BIRTH_DATE_INPUT_NAME,
  GENDER_INPUT_NAME,
  GRADE_INPUT_NAME,
  SCHOOL_INPUT_NAME,
];

type Props = {
  doAddStudentAction: (student: StudentInterface) => {},
  error: string,
  firstName: string,
  lastName: string,
  birthDate: string,
  gender: string,
  grade: string,
  school: string,
  loading: boolean,
  onErrorStateChange: (errorData: SubmitButtonErrorDisplayData) => void,
  onSubmitErrorChecker: (callback: ()=> any) => void,
  disableSubmitButton: false,
  forceErrorDisplays: false,
  // shouldOpenErrorToast: boolean, // todo remove this from form component
} & FormProps

class AddStudentForm extends Component<Props> {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.showErrorToast = this.showErrorToast.bind(this);
    this.attemptSubmit = this.attemptSubmit.bind(this);
  }

  componentDidUpdate(prevProps: Props): void {
    // todo remove toast handling
    // const { shouldOpenErrorToast, loading } = this.props;
    const { loading } = this.props;
    // if (shouldOpenErrorToast === true) {
    //   this.showErrorToast();
    // }
    if (loading !== prevProps.loading) {
      // this.checkSubmitButtonStatus();
    }
  }

  showErrorToast() {
    // todo Make into HOC or something
    // didShowErrorToastAction();
  }

  render() {
    const {
      forceErrorDisplays,
      disableSubmitButton,
      onErrorStateChange,
    } = this.props;
    return (
      <ScrollView
        style={{
          backgroundColor: 'pink',
          height: 1100,
        }}
        contentContainerStyle={{
          backgroundColor: 'teal',
          marginTop: 50,
          height: 1100,
        }}
        keyboardShouldPersistTaps="always"
      >
        <FirstNameField
          formName={FIRST_NAME_INPUT_NAME}
          onErrorStateChange={onErrorStateChange}
          forceErrorDisplay={forceErrorDisplays}
        />
        <LastNameField
          formName={LAST_NAME_INPUT_NAME}
          onErrorStateChange={onErrorStateChange}
          forceErrorDisplay={forceErrorDisplays}
        />
        <BirthDateField
          formName={BIRTH_DATE_INPUT_NAME}
          onErrorStateChange={onErrorStateChange}
          forceErrorDisplay={forceErrorDisplays}
        />
        <GenderField
          formName={GENDER_INPUT_NAME}
          onErrorStateChange={onErrorStateChange}
          forceErrorDisplay={forceErrorDisplays}
        />
        <GradeField
          formName={GRADE_INPUT_NAME}
          onErrorStateChange={onErrorStateChange}
          forceErrorDisplay={forceErrorDisplays}
        />
        <SchoolField
          formName={SCHOOL_INPUT_NAME}
          onErrorStateChange={onErrorStateChange}
          forceErrorDisplay={forceErrorDisplays}
        />
        <SubmitButton
          onPress={this.attemptSubmit}
          disabled={disableSubmitButton}
        />
        {/* // todo why do i have spinner here? move it out */}
        {/*{this.renderSpinner()}*/}
      </ScrollView>
    );
  }

  attemptSubmit() {
    const {
      onSubmitErrorChecker,
    } = this.props;
    onSubmitErrorChecker(this.onSubmit);
  }

  onSubmit() {
    console.log('submit');
    const {
      firstName,
      lastName,
      birthDate,
      gender,
      grade,
      school,
      valid,
      doAddStudentAction,
    } = this.props;
    Keyboard.dismiss();
    console.log({ valid });
    if (valid) {
      console.log('student');
      console.log({
        firstName,
        lastName,
        birthDate,
        gender,
        grade: {
          value: grade,
        },
        school: {
          name: school,
        },
      });
      doAddStudentAction({
        firstName,
        lastName,
        birthDate,
        gender,
        grade: {
          value: grade,
        },
        school: {
          name: school,
        },
      });
    }
  }
}

const selector = formValueSelector(FORM_NAME);
const mapStateToProps = (state) => {
  const {
    loadingState: { loading },
    studentState: { addStudentError },
  } = state;
  return {
    firstName: selector(state, FIRST_NAME_INPUT_NAME),
    lastName: selector(state, LAST_NAME_INPUT_NAME),
    birthDate: selector(state, BIRTH_DATE_INPUT_NAME),
    gender: selector(state, GENDER_INPUT_NAME),
    grade: selector(state, GRADE_INPUT_NAME),
    school: selector(state, SCHOOL_INPUT_NAME),
    error: addStudentError,
    loading,
    // todo handle toast
    // shouldOpenErrorToast: createAccount.shouldOpenErrorToast,
  };
};

AddStudentForm = formHelper(AddStudentForm, AllInputFieldNames);
AddStudentForm = reduxForm({
  form: FORM_NAME,
})(AddStudentForm);

export default connect(mapStateToProps, {
  doAddStudentAction: doAddStudent,
  // todo handle toasts
  // didShowErrorToastAction: didShowErrorToast,
})(AddStudentForm);
