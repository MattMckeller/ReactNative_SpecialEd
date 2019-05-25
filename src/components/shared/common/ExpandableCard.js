// @flow
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import ExpandOrCollapseButton from './ExpandOrCollapseButton';

type Props = {
  header?: React.Element;
  bodyText?: string;
  expandedBodyTextStyle?: {};
  collapsedBodyTextStyle?: {};
  footer?: React.Element;
  actionButtons?: Button[]; // todo determine type
}

class ExpandableCard extends Component<Props> {
  state = {
    isExpanded: false,
  };

  constructor() {
    super();
    this.renderHeader = this.renderHeader.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.renderActionPanel = this.renderActionPanel.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.renderExpansionToggle = this.renderExpansionToggle.bind(this);
    this.toggleExpansion = this.toggleExpansion.bind(this);
  }

  toggleExpansion() {
    const { isExpanded } = this.state;
    this.setState({ isExpanded: !isExpanded });
  }

  renderHeader() {
    const { header } = this.props;
    const { headerContainerStyle } = styles;
    return header
      ? <View style={headerContainerStyle}>{header}</View>
      : null;
  }

  renderBody() {
    const {
      bodyText,
      expandedBodyTextStyle,
      collapsedBodyTextStyle,
    } = this.props;
    const { isExpanded } = this.state;
    const {
      collapsedBodyContainerStyle,
      expandedBodyContainerStyle,
    } = styles;
    const bodyContainerStyle = isExpanded
      ? expandedBodyContainerStyle
      : collapsedBodyContainerStyle;
    const textStyle = isExpanded
      ? expandedBodyTextStyle
      : collapsedBodyTextStyle;

    return (
      <View style={{ ...bodyContainerStyle, maxWith: '100%', overflow: 'hidden' }}>
        <Text
          style={textStyle}
          ellipsizeMode="tail"
          numberOfLines={!isExpanded ? 2 : undefined}
        >
          {bodyText}
        </Text>
      </View>
    );
  }

  renderActionPanel() {
    const { actionButtons } = this.props;
    const { actionPanelContainerStyle } = styles;
    return actionButtons.length > 0
      ? (
        <View style={actionPanelContainerStyle}>
          {actionButtons.forEach(button => button)}
        </View>
      )
      : null;
  }

  renderFooter() {
    const { footer } = this.props;
    const { footerContainerStyle } = styles;
    return footer
      ? <View style={footerContainerStyle}>{footer}</View>
      : null;
  }

  renderExpansionToggle() {
    const { expansionButtonContainerStyle } = styles;
    const { isExpanded } = this.state;
    return (
      <View style={expansionButtonContainerStyle}>
        <ExpandOrCollapseButton isExpanded={isExpanded} onPress={this.toggleExpansion}/>
      </View>
    );
  }

  render() {
    const {
      cardContainerStyle,
    } = styles;
    return (
      <View style={cardContainerStyle}>
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderActionPanel()}
        {this.renderFooter()}
        {this.renderExpansionToggle()}
      </View>
    );
  }
}

ExpandableCard.defaultProps = {
  header: null,
  bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed lacus purus. Suspendisse quis justo eget velit commodo aliquet ullamcorper vitae eros. Praesent vulputate lorem vel nisl egestas, quis volutpat nisi efficitur. Fusce sit amet tellus a lectus tincidunt feugiat. Maecenas dapibus interdum orci, id hendrerit mi varius bibendum. Donec facilisis tellus id neque pretium, sed tempor augue vestibulum. Nulla dapibus, sapien vel congue faucibus, nisi eros convallis dolor, semper tempor risus odio a est. Integer pellentesque orci massa, at egestas enim posuere vitae.',
  expandedBodyTextStyle: {},
  collapsedBodyTextStyle: {},
  footer: null,
  actionButtons: [],
};

const styles = {
  cardContainerStyle: {
    minHeight: 20,
    width: '100%',
    minWidth: '100%',
    borderWidth: 1,
    borderColor: 'black',
  },
  headerContainerStyle: {
    width: '100%',
    paddingRight: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  collapsedBodyContainerStyle: {
    width: '100%',
    minHeight: 50,
    height: 50,
  },
  expandedBodyContainerStyle: {
    width: '100%',
    minHeight: 50,
  },
  footerContainerStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionPanelContainerStyle: {
    width: '100%',
    minHeight: 50,
    borderTop: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  expansionButtonContainerStyle: {
    position: 'absolute',
    right: 0,
    width: 100,
    height: 50, // todo calculate based off height of header component
  },
};

export default ExpandableCard;
