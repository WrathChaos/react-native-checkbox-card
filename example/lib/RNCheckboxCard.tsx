import React, { Component } from "react";
import { Image, Text, View, Dimensions } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, { _cardStyle, _textStyle } from "./RNCheckboxCard.style";
import { ThemeColors, DARK, LIGHT } from "./theme";

const { width: ScreenWidth } = Dimensions.get("window");

const defaultCheckIcon = require("./local-assets/check-icon-dark.png");
const defaultSortIcon = require("./local-assets/sort-icon.png");

export interface ISource {
  source: string | { uri: string };
}

export interface ICheckboxCardProps {
  text: string;
  width?: number;
  height?: number;
  quantity?: string;
  darkMode?: boolean;
  isChecked?: boolean;
  ImageComponent?: any;
  borderRadius?: number;
  backgroundColor?: string;
  checkedTextColor?: string;
  uncheckedTextColor?: string;
  disableQuantityText?: boolean;
  checkImageSource?: ISource;
  sortIconImageSource?: ISource;
  quantityTextStyle?: any;
  rightIconComponent?: React.ReactElement;
  checkIconComponent?: React.ReactElement;
  onPress: (checked: boolean) => void;
}

interface IState {
  theme: string;
  checked: boolean;
}

export default class RNCheckboxCard extends Component<
  ICheckboxCardProps,
  IState
> {
  constructor(props: ICheckboxCardProps) {
    super(props);
    this.state = {
      theme: props.darkMode ? DARK : LIGHT,
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
    const { theme, checked } = this.state;
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
          borderColor: checked ? "transparent" : ThemeColors[theme].borderColor,
        }}
      >
        {checked && this.renderCheckIcon()}
      </View>
    );
  };

  renderTextContainer = () => {
    const { checked, theme } = this.state;
    const {
      text,
      quantity,
      quantityTextStyle,
      checkedTextColor = ThemeColors[theme].checkedTextColor,
      uncheckedTextColor = ThemeColors[theme].uncheckedTextColor,
      disableQuantityText = true,
    } = this.props;
    return (
      <View>
        <Text
          numberOfLines={2}
          style={_textStyle(checked, checkedTextColor, uncheckedTextColor)}
        >
          {text}
        </Text>
        {!disableQuantityText && (
          <Text style={[styles.quantityTextStyle, quantityTextStyle]}>
            {quantity}
          </Text>
        )}
      </View>
    );
  };

  renderSortButton = () => {
    const {
      rightIconComponent,
      sortIconImageSource = defaultSortIcon,
      ImageComponent = Image,
    } = this.props;
    return (
      <View style={styles.rightIconContainer}>
        {rightIconComponent || (
          <ImageComponent
            resizeMode="contain"
            source={sortIconImageSource}
            style={styles.sortIconImageStyle}
          />
        )}
      </View>
    );
  };

  render() {
    const { theme } = this.state;
    const {
      height = 60,
      borderRadius = 10,
      width = ScreenWidth * 0.9,
      backgroundColor = ThemeColors[theme].backgroundColor,
    } = this.props;
    return (
      <RNBounceable
        bounceEffect={0.97}
        bounceFriction={3}
        style={styles.container}
        onPress={this.handleOnPress}
      >
        <View style={_cardStyle(height, width, borderRadius, backgroundColor)}>
          {this.renderCircleCheck()}
          {this.renderTextContainer()}
          {this.renderSortButton()}
        </View>
      </RNBounceable>
    );
  }
}
