import React, { Component } from "react";
import { Image, Text, View, Dimensions } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./RNCheckboxCard.style.ts";

const { width: ScreenWidth } = Dimensions.get("window");

const defaultCheckIcon = require("./local-assets/check-icon-dark.png");
const defaultSortIcon = require("./local-assets/sort-icon.png");

export interface ISource {
  source: string | { uri: string };
}

export interface ICheckboxCardProps {
  isChecked?: boolean;
  rightIconComponent?: React.ReactElement;
  checkIconComponent?: React.ReactElement;
  checkImageSource?: ISource;
  sortIconImageSource?: ISource;
  ImageComponent?: any;
  onPress: (checked: boolean) => void;
}

interface IState {
  checked: boolean;
}

export default class RNCheckboxCard extends Component<
  ICheckboxCardProps,
  IState
> {
  constructor(props: ICheckboxCardProps) {
    super(props);
    this.state = {
      checked: props.isChecked || false,
    };
  }

  handleOnPress = () => {
    this.setState({ checked: !this.state.checked }, () => {
      // ? Outside onPress Callback
      this.props.onPress && this.props.onPress(this.state.checked);
    });
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  renderCheckIcon = () => {
    const {
      checkIconComponent,
      ImageComponent = Image,
      checkImageSource = defaultCheckIcon,
    } = this.props;
    return (
      checkIconComponent || (
        <ImageComponent
          resizeMode="contain"
          source={checkImageSource}
          style={{ height: 15, width: 15 }}
        />
      )
    );
  };

  renderCircleCheck = () => {
    const { checked } = this.state;
    return (
      <View
        style={{
          height: 25,
          width: 25,
          borderWidth: 2,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: checked ? "#f9d749" : "transparent",
          borderColor: checked ? "transparent" : "#e5e5e5",
        }}
      >
        {checked && this.renderCheckIcon()}
      </View>
    );
  };

  renderTextContainer = () => {
    const { checked } = this.state;
    return (
      <Text
        style={{
          fontSize: 16,
          marginLeft: 16,
          fontWeight: "600",
          color: checked ? "#797979" : "#e5e5e5",
          textDecorationLine: checked ? "line-through" : "none",
        }}
      >
        Brown rice
      </Text>
    );
  };

  renderSortButton = () => {
    const {
      rightIconComponent,
      sortIconImageSource = defaultSortIcon,
      ImageComponent = Image,
    } = this.props;
    return (
      <View style={{ marginLeft: "auto" }}>
        {rightIconComponent || (
          <ImageComponent
            resizeMode="contain"
            source={sortIconImageSource}
            style={{ height: 30, width: 10 }}
          />
        )}
      </View>
    );
  };

  render() {
    const { onPress } = this.props;
    return (
      <RNBounceable
        bounceEffect={0.97}
        bounceFriction={3}
        style={{
          height: 55,
          paddingLeft: 16,
          paddingRight: 16,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          width: ScreenWidth * 0.9,
          backgroundColor: "#2b2b2c",
        }}
        onPress={this.handleOnPress}
      >
        {this.renderCircleCheck()}
        {this.renderTextContainer()}
        {this.renderSortButton()}
      </RNBounceable>
    );
  }
}
