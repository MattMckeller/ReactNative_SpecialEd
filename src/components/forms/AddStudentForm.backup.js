// // @flow
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {
//   KeyboardAvoidingView, Keyboard, View, ScrollView,
// } from 'react-native';
// import {
//   FormProps, reduxForm, formValueSelector,
// } from 'redux-form';
// import styleVariables from '../../assets/StyleVariables';
// import SubmitButtonHelper from '../../utility/helpers/SubmitButtonHelper';
// import type { SubmitButtonErrorDisplayData } from '../../utility/helpers/SubmitButtonHelper';
// import type { StudentInterface } from '../../data-models/student/Student.interface';
// import { doAddStudent } from '../../redux/actions';
// import FirstNameInput from './fields/FirstNameInput';
// import LastNameInput from './fields/LastNameInput';
// import GenderInput from './fields/GenderInput';
// import GradeInput from './fields/GradeInput';
// import SchoolInput from './fields/SchoolInput';
// import defaultSubmitContainer from './hoc/DefaultSubmitContainer';
// import CenteredWrapper from '../containers/CenteredWrapper';
// import BirthDateInput from './fields/BirthDateInput';
// import defaultInputContainer from './hoc/DefaultInputContainer';
// import AddStudentSubmit from './buttons/AddStudentSubmit';
//
// const FORM_NAME = 'addStudentForm';
// const FIRST_NAME_INPUT_NAME = 'firstName';
// const LAST_NAME_INPUT_NAME = 'lastName';
// const BIRTH_DATE_INPUT_NAME = 'birthDate';
// const GENDER_INPUT_NAME = 'gender';
// const GRADE_INPUT_NAME = 'grade';
// const SCHOOL_INPUT_NAME = 'school';
//
// const FirstNameField = defaultInputContainer(FirstNameInput);
// const LastNameField = defaultInputContainer(LastNameInput);
// const BirthDateField = defaultInputContainer(BirthDateInput);
// const GenderField = defaultInputContainer(GenderInput);
// const GradeField = defaultInputContainer(GradeInput);
// const SchoolField = defaultInputContainer(SchoolInput);
// const SubmitButton = defaultSubmitContainer(AddStudentSubmit);
//
// type Props = {
//   doAddStudentAction: (student: StudentInterface) => {},
//   error: string,
//   firstName: string,
//   lastName: string,
//   birthDate: string,
//   gender: string,
//   grade: string,
//   school: string,
//   loading: boolean,
//   // shouldOpenErrorToast: boolean, // todo remove this from form component
// } & FormProps
//
// class AddStudentFormz extends Component<Props> {
//   state = {
//     disableSubmitButton: false,
//     forceErrorDisplays: false,
//   };
//
//   submitButtonHelper: SubmitButtonHelper = new SubmitButtonHelper(
//     [
//       FIRST_NAME_INPUT_NAME,
//       LAST_NAME_INPUT_NAME,
//       BIRTH_DATE_INPUT_NAME,
//       GENDER_INPUT_NAME,
//       GRADE_INPUT_NAME,
//       SCHOOL_INPUT_NAME,
//     ],
//   );
//
//   constructor() {
//     super();
//     this.onSubmit = this.onSubmit.bind(this);
//     this.checkSubmitButtonStatus = this.checkSubmitButtonStatus.bind(this);
//     this.onSubmitErrorChecker = this.onSubmitErrorChecker.bind(this);
//     this.onErrorStateChange = this.onErrorStateChange.bind(this);
//     this.showErrorToast = this.showErrorToast.bind(this);
//   }
//
//   componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void {
//     console.log('next props', { ...nextProps });
//     console.log('this props', { ...this.props });
//     console.log('next state', { ...nextState });
//     console.log('this state', { ...this.state });
//     console.log('eq props', JSON.stringify(this.props) === JSON.stringify(nextProps));
//     console.log('eq state', JSON.stringify(this.state) === JSON.stringify(nextState));
//   }
//
//   componentDidUpdate(prevProps: Props): void {
//     // todo remove toast handling
//     // const { shouldOpenErrorToast, loading } = this.props;
//     const { loading } = this.props;
//     // if (shouldOpenErrorToast === true) {
//     //   this.showErrorToast();
//     // }
//     if (loading !== prevProps.loading) {
//       // this.checkSubmitButtonStatus();
//     }
//   }
//
//   showErrorToast() {
//     // todo Make into HOC or something
//     // didShowErrorToastAction();
//   }
//
//   render() {
//     // todo see if any of these can be moved to a centralized styles file
//     const {
//       forceErrorDisplays,
//       disableSubmitButton,
//     } = this.state;
//     onErrorStateChange
//     forceErrorDisplays
//     onSubmitErrorChecker
//     disableSubmitButton
//     // todo make sure centered wrapper replacement works
//     return (
//       <ScrollView
//         style={{
//           backgroundColor: 'pink',
//           height: 1100,
//         }}
//         contentContainerStyle={{
//           backgroundColor: 'teal',
//           marginTop: 50,
//           height: 1100,
//         }}
//       >
//         <FirstNameField
//           formName={FIRST_NAME_INPUT_NAME}
//           onErrorStateChange={this.onErrorStateChange}
//           forceErrorDisplay={forceErrorDisplays}
//         />
//         <LastNameField
//           formName={LAST_NAME_INPUT_NAME}
//           onErrorStateChange={this.onErrorStateChange}
//           forceErrorDisplay={forceErrorDisplays}
//         />
//         <BirthDateField
//           formName={BIRTH_DATE_INPUT_NAME}
//           onErrorStateChange={this.onErrorStateChange}
//           forceErrorDisplay={forceErrorDisplays}
//         />
//         <GenderField
//           formName={GENDER_INPUT_NAME}
//           onErrorStateChange={this.onErrorStateChange}
//           forceErrorDisplay={forceErrorDisplays}
//         />
//         <GradeField
//           formName={GRADE_INPUT_NAME}
//           onErrorStateChange={this.onErrorStateChange}
//           forceErrorDisplay={forceErrorDisplays}
//         />
//         <SchoolField
//           formName={SCHOOL_INPUT_NAME}
//           onErrorStateChange={this.onErrorStateChange}
//           forceErrorDisplay={forceErrorDisplays}
//         />
//         <SubmitButton
//           onPress={this.onSubmitErrorChecker}
//           disabled={disableSubmitButton}
//         />
//         {/* // todo why do i have spinner here? move it out */}
//         {/*{this.renderSpinner()}*/}
//       </ScrollView>
//     );
//   }
//
//   // todo maybe move these to a HOC and pass properties down?
//   // todo see if this can be moved to a centralized component
//   onErrorStateChange(errorData: SubmitButtonErrorDisplayData) {
//     console.log({ errorData });
//     // this.submitButtonHelper.onErrorStateChange(errorData);
//     // this.checkSubmitButtonStatus();
//   }
//
//   // pass submit button helper through the props from HOC
//   checkSubmitButtonStatus() {
//     const { loading, valid } = this.props;
//     const { disableSubmitButton: currentStatus, forceErrorDisplays } = this.state;
//     const disableSubmitButton = this.submitButtonHelper.shouldDisableSubmitButton()
//       || loading || (forceErrorDisplays && !valid);
//     if (disableSubmitButton !== currentStatus) {
//       // this.setState({ disableSubmitButton });
//     }
//   }
//
//   onSubmitErrorChecker() {
//     const { valid } = this.props;
//     if (!valid) {
//       this.setState({ forceErrorDisplays: true });
//     } else {
//       this.onSubmit();
//     }
//   }
//
//   onSubmit() {
//     const {
//       firstName,
//       lastName,
//       birthDate,
//       gender,
//       grade,
//       school,
//       valid,
//       doAddStudentAction,
//     } = this.props;
//     Keyboard.dismiss();
//     console.log({ valid });
//     if (valid) {
//       console.log('student');
//       console.log({
//         firstName,
//         lastName,
//         birthDate,
//         gender,
//         grade: {
//           value: grade,
//         },
//         school: {
//           name: school,
//         },
//       });
//       doAddStudentAction({
//         firstName,
//         lastName,
//         birthDate,
//         gender,
//         grade: {
//           value: grade,
//         },
//         school: {
//           name: school,
//         },
//       });
//     }
//   }
// }
//
// const selector = formValueSelector(FORM_NAME);
// const mapStateToProps = (state) => {
//   const {
//     loadingState: { loading },
//     studentState: { addStudentError },
//   } = state;
//   return {
//     firstName: selector(state, FIRST_NAME_INPUT_NAME),
//     lastName: selector(state, LAST_NAME_INPUT_NAME),
//     birthDate: selector(state, BIRTH_DATE_INPUT_NAME),
//     gender: selector(state, GENDER_INPUT_NAME),
//     grade: selector(state, GRADE_INPUT_NAME),
//     school: selector(state, SCHOOL_INPUT_NAME),
//     error: addStudentError,
//     loading,
//     // shouldOpenErrorToast: createAccount.shouldOpenErrorToast,
//   };
// };
//
// AddStudentForm = reduxForm({
//   form: FORM_NAME,
// })(AddStudentForm);
//
// export default connect(mapStateToProps, {
//   doAddStudentAction: doAddStudent,
//   // todo handle toasts
//   // didShowErrorToastAction: didShowErrorToast,
// })(AddStudentForm);
