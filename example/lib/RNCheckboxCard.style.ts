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
  sortIconImageStyle: ImageStyle;
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
});
