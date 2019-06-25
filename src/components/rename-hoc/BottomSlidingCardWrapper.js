// @flow
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import BottomSlidingCard from '../containers/layouts/cards/BottomSlidingCard';

type Props = {
  showingBottomSlidingCard: boolean,
  bottomSlidingCardNode: React.ReactNode,
}
// Todo figure out typing with HOC
const bottomSlidingCardWrapper = WrappedComponent => (props: Props) => {
  const {
    showingBottomSlidingCard,
    bottomSlidingCardNode,
  } = props;
  console.log({ bottomSlidingCardNode });
  return (
    <View>
      <WrappedComponent {...props} />
      <BottomSlidingCard
        showing={showingBottomSlidingCard}
      >
        {bottomSlidingCardNode}
      </BottomSlidingCard>
    </View>
  );
};


const mapStateToProps = (state) => {
  const {
    bottomSlidingCardState: {
      showing,
      node,
    },
  } = state;
  return {
    showingBottomSlidingCard: showing,
    bottomSlidingCardNode: node,
  };
};

export default connect(mapStateToProps)(bottomSlidingCardWrapper);
