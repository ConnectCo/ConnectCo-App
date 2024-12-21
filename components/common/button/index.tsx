import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export default function Button({ children, ...restProps }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.6} {...restProps}>
      {children}
    </TouchableOpacity>
  );
}
