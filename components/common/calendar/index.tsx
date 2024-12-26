import DateTimePickerModal from "react-native-modal-datetime-picker";

interface CalendarProps {
  isVisible: boolean;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
}

export default function Calendar({ isVisible, onConfirm, onCancel }: CalendarProps) {
  return (
    <DateTimePickerModal
      isVisible={isVisible}
      mode="date"
      minimumDate={new Date()}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}
