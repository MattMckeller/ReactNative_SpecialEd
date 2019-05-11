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
};

export default globalStyles;
