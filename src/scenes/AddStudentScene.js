// @flow
import React from 'react';
import CenteredWrapper from '../components/containers/layouts/wrappers/CenteredWrapper';
import AddStudentForm from '../components/forms/AddStudentForm';

const AddStudentScene = () => {
  return (
    <CenteredWrapper>
      <AddStudentForm/>
    </CenteredWrapper>
  );
};

AddStudentScene.navigationOptions = {
  header: null,
};

export default AddStudentScene;
