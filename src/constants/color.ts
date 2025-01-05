export const colors = {
  primary100: "#E8F5FF",
  primary200: "#C3DEF1",
  primary300: "#179EFF",
  gray100: "#F5F5FA",
  gray200: "#E6E6E6",
  gray300: "#BFBFBF",
  gray400: "#ACACAC",
  gray500: "#666666",
  black: "#1D1D1D",
  white: "#FFFFFF",
  google: "#4285F4",
  kakao: "#FEE500",
  naver: "#03C75A",
} as const;

type ColorType = typeof colors;
type ColorKeyType = keyof ColorType;
export type ColorValueType = ColorType[ColorKeyType];
