// @flow
import React from 'react';
import FullScreenWrapper from '../FullScreenWrapper';
import CenteredSpinner from '../../shared/common/CenteredSpinner';

type Props = {
  children: any;
  loading: boolean;
}
function LoadingWrapper({ children, loading }: Props) {
  console.log('loading', loading);
  return (
    <FullScreenWrapper>
      {children}
      {loading && <CenteredSpinner/>}
    </FullScreenWrapper>
  );
}

LoadingWrapper.defaultProps = {};

export default LoadingWrapper;
