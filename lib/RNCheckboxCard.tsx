import * as React from "react";
import { Image, Text, View, Dimensions } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles, {
  _cardStyle,
  _textStyle,
  _circleCheckContainer,
} from "./RNCheckboxCard.style";
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
  circleSize?: number;
  ImageComponent?: any;
  borderRadius?: number;
  backgroundColor?: string;
  checkedTextColor?: string;
  circleBorderColor?: string;
  circleBorderRadius?: number;
  uncheckedTextColor?: string;
  enableQuantityText?: boolean;
  circleBackgroundColor?: string;
  checkImageSource?: ISource;
  sortIconImageSource?: ISource;
  textStyle?: any;
  quantityTextStyle?: any;
  rightIconComponent?: React.ReactElement;
  checkIconComponent?: React.ReactElement;
  disableSortIcon?: boolean;
  onPress: (checked: boolean) => void;
}

interface IState {
  theme: string;
  checked: boolean;
}

export default class RNCheckboxCard extends React.Component<
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
          style={styles.checkIconImageStyle}
        />
      )
    );
  };

  renderCircleCheck = () => {
    const { theme, checked } = this.state;
    const {
      circleSize = 25,
      circleBorderRadius = 25,
      circleBackgroundColor = "#f9d749",
      circleBorderColor = ThemeColors[theme].borderColor,
    } = this.props;
    return (
      <View
        style={_circleCheckContainer(
          checked,
          circleSize,
          circleBorderRadius,
          circleBackgroundColor,
          circleBorderColor,
        )}
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
      textStyle,
      quantityTextStyle,
      checkedTextColor = ThemeColors[theme].checkedTextColor,
      uncheckedTextColor = ThemeColors[theme].uncheckedTextColor,
      enableQuantityText = false,
    } = this.props;
    return (
      <View style={styles.textContainer}>
        <Text
          numberOfLines={2}
          style={[
            _textStyle(checked, checkedTextColor, uncheckedTextColor),
            textStyle,
          ]}
        >
          {text}
        </Text>
        {enableQuantityText && (
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
      disableSortIcon = false,
    } = this.props;
    return (
      <View style={styles.rightIconContainer}>
        {rightIconComponent ||
          (!disableSortIcon && (
            <ImageComponent
              resizeMode="contain"
              source={sortIconImageSource}
              style={styles.sortIconImageStyle}
            />
          ))}
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
        {...this.props}
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
