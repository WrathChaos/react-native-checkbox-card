import {
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
} from "react-native";
const { width: ScreenWidth } = Dimensions.get("window");

interface Style {
  container: ViewStyle;
  rightIconContainer: ViewStyle;
  textContainer: TextStyle;
  sortIconImageStyle: ImageStyle;
  quantityTextStyle: TextStyle;
  checkIconImageStyle: ImageStyle;
}

export const _cardStyle = (
  height: number,
  width: number,
  borderRadius: number,
  backgroundColor: string,
): ViewStyle => ({
  height,
  width,
  borderRadius,
  backgroundColor,
  paddingLeft: 16,
  paddingRight: 16,
  flexDirection: "row",
  alignItems: "center",
});

export const _textStyle = (
  checked: boolean,
  checkedTextColor: string,
  uncheckedTextColor: string,
): TextStyle => ({
  fontSize: 16,
  marginLeft: 16,
  fontWeight: "600",
  textDecorationLine: checked ? "line-through" : "none",
  color: checked ? checkedTextColor : uncheckedTextColor,
});

export const _circleCheckContainer = (
  checked: boolean,
  circleSize: number,
  circleBorderRadius: number,
  circleBackgroundColor: string,
  circleBorderColor: string,
): ViewStyle => ({
  width: circleSize,
  height: circleSize,
  borderRadius: circleBorderRadius,
  borderColor: checked ? "transparent" : circleBorderColor,
  backgroundColor: checked ? circleBackgroundColor : "transparent",
  borderWidth: 2,
  alignItems: "center",
  justifyContent: "center",
});

export default StyleSheet.create<Style>({
  container: {
    width: ScreenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  rightIconContainer: {
    marginLeft: "auto",
  },
  sortIconImageStyle: {
    width: 10,
    height: 30,
  },
  textContainer: {
    width: "80%",
  },
  quantityTextStyle: {
    color: "#ccc",
    marginLeft: 16,
  },
  checkIconImageStyle: {
    width: 15,
    height: 15,
  },
});
