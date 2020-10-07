type ThemeColorsType = {
  [key: string]: {
    borderColor: string;
    backgroundColor: string;
    checkedTextColor: string;
    uncheckedTextColor: string;
  };
};
export const ThemeColors: ThemeColorsType = {
  light: {
    borderColor: "#797979",
    backgroundColor: "#fff",
    checkedTextColor: "#8b8ca5",
    uncheckedTextColor: "#2b2b2c",
  },
  dark: {
    borderColor: "#e5e5e5",
    backgroundColor: "#2b2b2c",
    checkedTextColor: "#797979",
    uncheckedTextColor: "#e5e5e5",
  },
};

export const DARK = "dark";
export const LIGHT = "light";
