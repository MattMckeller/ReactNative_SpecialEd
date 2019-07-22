// @flow
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated, Dimensions, Easing, PanResponder, View,
} from 'react-native';

import styleVariables from '../../../../assets/StyleVariables';
import SlidingCardDraggableTop from './SlidingCardDraggableTop';
import SlidingCardBody from './SlidingCardBody';
import FullScreenWrapper from '../../FullScreenWrapper';

// todo rename for easier readability
const { height, width } = Dimensions.get('window');

type Props = {
  showingBottomSlidingCard: boolean,
  bottomSlidingCardNode: React.ReactNode,
  children: React.ReactNode,
  backgroundColor?: string,
  slidingCardTopGap?: number,
  onClose: () => any,
  slideInAnimationTime?: number,
  slideOutAnimationTime?: number,
  slideOutMinPixelRequirement?: number,
  resetPositionAnimationTime?: number,
}
const BottomSlidingCardWrapper = ({
  showingBottomSlidingCard,
  bottomSlidingCardNode,
  children,
  backgroundColor,
  slidingCardTopGap,
  onClose,
  slideInAnimationTime,
  slideOutAnimationTime,
  resetPositionAnimationTime,
  slideOutMinPixelRequirement,
}: Props) => { // todo move redux dependency out of this class
  const TOTAL_CARD_HEIGHT = height - slidingCardTopGap;
  const [panResponder, setPanResponder] = useState(null);
  const topValue = useRef(new Animated.Value(TOTAL_CARD_HEIGHT)).current; // maybe switch to useRef
  const onCloseRef = useRef(() => {
    onClose();
  }).current;
  useEffect(() => {
    // Initial card slide in
    Animated.timing( // todo move to animation functions file
      topValue,
      {
        toValue: 0,
        duration: slideInAnimationTime,
      },
    ).start();
    setPanResponder( // todo remove from this component
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => false,
        onPanResponderMove: (event, { dy }) => {
          const toValue = dy >= 0 ? dy : 0;
          Animated.timing(
            topValue,
            {
              toValue,
              duration: 0,
            },
          ).start();
        },
        onPanResponderRelease: (e, { dy }) => {
          if (dy < slideOutMinPixelRequirement) {
            // Slide back to top
            Animated.timing(
              topValue,
              {
                toValue: 0,
                duration: resetPositionAnimationTime,
              },
            ).start();
          } else {
            // Slide out bottom
            Animated.timing(
              topValue,
              {
                toValue: TOTAL_CARD_HEIGHT,
                duration: slideOutAnimationTime,
                easing: Easing.linear,
              },
            ).start(() => {
              console.log('finished exit animation');
              onCloseRef(); // todo !important this is not being updated when the onClose(input
              // props) method changes
              // todo clear component & showing state
            });
          }
        },
      }),
    );
  }, []);
  const panHandlers = panResponder && panResponder.panHandlers ? panResponder.panHandlers : {};
  const { cardWrapperStyle } = styles;
  const animatedCardViewHeight = height - slidingCardTopGap;
  const animatedViewStyle = [{ top: topValue }, { height: animatedCardViewHeight }];
  return (
    <FullScreenWrapper>
      {children}
      {showingBottomSlidingCard === true
      && (
        <View style={cardWrapperStyle}>
          <View style={{ height: slidingCardTopGap, width: '100%' }}/>
          <Animated.View
            style={animatedViewStyle}
          >
            <SlidingCardDraggableTop
              handlers={{ ...panHandlers }}
              backgroundColor={backgroundColor}
            />
            <SlidingCardBody backgroundColor={backgroundColor}>
              {bottomSlidingCardNode}
            </SlidingCardBody>
          </Animated.View>
        </View>
      )}
    </FullScreenWrapper>
  );
};

const { offWhiteColor } = styleVariables;
BottomSlidingCardWrapper.defaultProps = {
  backgroundColor: offWhiteColor,
  slidingCardTopGap: 115,
  slideInAnimationTime: 200,
  slideOutAnimationTime: 200,
  slideOutMinPixelRequirement: 200,
  resetPositionAnimationTime: 200,
};

const styles = {
  cardWrapperStyle: {
    width, position: 'absolute',
  },
};

export default BottomSlidingCardWrapper;
