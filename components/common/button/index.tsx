import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export default function Button({ children, ...restProps }: TouchableOpacityProps) {
  return (
    <TouchableOpacity activeOpacity={0.6} {...restProps}>
      {children}
    </TouchableOpacity>
  );
}
