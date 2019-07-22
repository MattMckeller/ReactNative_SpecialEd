// @flow
import React, { useEffect } from 'react';
import { Toast, Root } from 'native-base';
import FullScreenWrapper from '../FullScreenWrapper';
import type { ToastInterface } from '../../../redux/reducers/ToastReducer';
import styleVariables from '../../../assets/StyleVariables';

type Props = {
  pendingToasts: ToastInterface[],
  displayedToastAction: (toastId: string) => any,
  children: React.ReactNode,
}

// todo apparently native base toasts only show one at a time...? replace this junk
function ToastWrapper({ pendingToasts, children, displayedToastAction }: Props) {
  useEffect(() => {
    if (pendingToasts.length > 0) {
      const [toast] = pendingToasts;
      const style = {};
      if (toast.type === 'danger') { style.backgroundColor = styleVariables.errorColor; }
      Toast.show({
        text: toast.message,
        buttonText: 'Okay',
        duration: 10000, // todo move to config
        type: toast.type,
        style,
      });
      displayedToastAction(toast.id);
    }
  }, [pendingToasts]);

  return (
    <Root>
      <FullScreenWrapper>
        {children}
      </FullScreenWrapper>
    </Root>
  );
}

ToastWrapper.defaultProps = {};

export default ToastWrapper;
