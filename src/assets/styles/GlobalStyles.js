import styleVariables from '../StyleVariables';

const {
  lightDescriptionTextColor,
} = styleVariables;

const globalStyles = {
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },
  flexColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  errorTextStyle: {
    color: 'red',
  },
  lightDescriptionText: {
    color: lightDescriptionTextColor,
  },
  defaultInputContainerStyle: {
    width: '100%',
    marginBottom: 20,
  },
  defaultSubmitContainerStyle: {
    marginTop: 15,
    width: '100%',
  },
};

export default globalStyles;
