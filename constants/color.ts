export const colors = {
  primary100: "#C3DEF1",
  primary200: "#179EFF",
  gray100: "#F5F5FA",
  gray200: "#E6E6E6",
  gray300: "#BFBFBF",
  gray400: "#ACACAC",
  gray500: "#666666",
  black: "#1D1D1D",
  white: "#FFFFFF",
} as const;

type ColorType = typeof colors;
type ColorKeyType = keyof ColorType;
export type ColorValueType = ColorType[ColorKeyType];
