import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

export default function Button({ children, ...restProps }: TouchableOpacityProps) {
  const { disabled, style, ...props } = restProps;
  const buttonStyle = disabled ? [styles.disabled, style] : style;

  return (
    <TouchableOpacity activeOpacity={0.6} style={buttonStyle} {...props}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.5,
  },
});
