import { Image } from "expo-image";
import Button from "../button";
import Flex from "../flex";
import Text from "../text";
import { Dimensions, StyleSheet } from "react-native";
import { colors } from "@/constants/color";

const { width } = Dimensions.get("screen");

interface CardProps {
  title: string;
  college: string;
  duration: string;
}

export default function Card({ title, college, duration }: CardProps) {
  return (
    <Button style={styles.container}>
      <Flex direction="row" align="center" gap={24}>
        <Image source={require("../../../assets/images/hanyang.png")} style={styles.image} />
        <Flex>
          <Text size="sm" style={styles.college}>
            {college}
          </Text>
          <Text size="lg" style={styles.title}>
            {title}
          </Text>
          <Text size="sm" numberOfLines={1} style={styles.duration}>
            이벤트 기간 - {duration}
          </Text>
        </Flex>
      </Flex>
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    boxShadow: "0 0 10 0.1 rgba(0, 0, 0, 0.26)",
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
  },
  college: {
    fontWeight: 700,
    color: colors.gray500,
  },
  title: {
    fontWeight: 600,
    marginTop: 4,
    marginBottom: 8,
  },
  duration: {
    width: width - 148,
  },
});
