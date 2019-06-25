// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

export type AuthenticatedComponentProps = {
  isLoggedIn: string,
}
const requireAuthentication = (WrappedComponent) => {
  let WrapperComponent = class AuthenticatedComponent
    extends Component<AuthenticatedComponentProps> {
    render() {
      // todo, figure out how to redirect to login page if not authenticated,
      //  I attempted but was unable to redirect in lifecycle methods? Maybe change routers
      const { isLoggedIn } = this.props;
      return isLoggedIn
        ? <WrappedComponent {...this.props} />
        : null;
    }
  };

  const mapStateToProps = (state) => {
    const { auth } = state;
    return {
      isLoggedIn: auth.isLoggedIn, // todo, do I need to move this to a function & service?
    };
  };

  WrapperComponent = connect(mapStateToProps, {
  })(WrapperComponent);
  return WrapperComponent;
};

export default requireAuthentication;
