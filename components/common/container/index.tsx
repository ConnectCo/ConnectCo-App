import { ScrollView, ScrollViewProps, StyleSheet, View, ViewProps } from "react-native";

type ContainerProps<T extends "View" | "ScrollView"> = {
  as: T;
} & (T extends "View" ? ViewProps : ScrollViewProps);

export default function Container<T extends "View" | "ScrollView">({
  children,
  as,
  ...restProps
}: ContainerProps<T>) {
  const Component = as === "View" ? View : ScrollView;
  const { style, ...props } = restProps;

  return (
    <Component style={[styles.container, style]} {...(props as any)}>
      {children}
    </Component>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
});
