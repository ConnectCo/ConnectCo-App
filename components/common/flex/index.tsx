import { View, ViewProps } from "react-native";

type JustifyType = "start" | "end" | "between" | "around" | "evenly" | "center";
type AlignType = "start" | "end" | "center" | "baseline" | "stretch";

interface FlexProps extends ViewProps {
  children: React.ReactNode;
  direction?: "column" | "column-reverse" | "row" | "row-reverse";
  gap?: number;
  justify?: JustifyType;
  align?: AlignType;
}

const convertJustifyStyle = (style: JustifyType) => {
  if (style === "start") return "flex-start";
  if (style === "end") return "flex-end";
  if (style === "between") return "space-between";
  if (style === "around") return "space-around";
  if (style === "evenly") return "space-evenly";
  return style;
};

const convertAlignStyle = (style: AlignType) => {
  if (style === "start") return "flex-start";
  if (style === "end") return "flex-end";
  return style; // "center", "baseline", "stretch" 그대로 반환
};

export default function Flex({
  children,
  direction = "column",
  gap,
  justify,
  align,
  ...restProps
}: FlexProps) {
  const { style, ...props } = restProps;
  return (
    <View
      style={[
        {
          flexDirection: direction,
          gap: gap ? gap : undefined,
          justifyContent: justify ? convertJustifyStyle(justify) : undefined,
          alignItems: align ? convertAlignStyle(align) : undefined,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
