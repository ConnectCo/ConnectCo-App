import { useState } from "react";
import { ButtonProps, StyleSheet } from "react-native";

import { colors } from "@/src/constants/color";

import Button from "../button";
import Flex from "../flex";
import Icon from "../icon";
import Text from "../text";

import Calendar from ".";

interface ButtonCalendarProps extends ButtonProps {
  title: string;
  date: string;
  onConfirm: (date: Date) => void;
}

export default function ButtonCalendar({
  title,
  date,
  disabled = false,
  onConfirm,
}: ButtonCalendarProps) {
  const [isVisible, setIsVisible] = useState(false);

  const onCancel = () => {
    setIsVisible(false);
  };

  const onOpenCalendar = () => {
    setIsVisible(true);
  };

  const onPressConfirm = (selectedDate: Date) => {
    onConfirm(selectedDate);
    onCancel();
  };

  return (
    <Flex gap={5}>
      <Text size="lg" weight={600}>
        {title}
      </Text>
      <Button style={styles.button} onPress={onOpenCalendar} disabled={disabled}>
        <Flex direction="row" gap={8} justify="center" align="center">
          <Icon.Calendar size={24} />
          <Text style={styles.date} weight={600}>
            {date}
          </Text>
        </Flex>
      </Button>
      <Calendar isVisible={isVisible} onConfirm={onPressConfirm} onCancel={onCancel} />
    </Flex>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primary300,
    paddingVertical: 8,
  },
  date: {
    color: colors.primary300,
  },
});
