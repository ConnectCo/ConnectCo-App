import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface CalendarProps {
  isVisible: boolean;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
}

export default function Calendar({ isVisible, onConfirm, onCancel }: CalendarProps) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    // 추후 setState로 date 저장하는 로직 구현
    hideDatePicker();
  };

  return (
    <DateTimePickerModal
      isVisible={isDatePickerVisible}
      mode="date"
      minimumDate={new Date()}
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
    />
  );
}
