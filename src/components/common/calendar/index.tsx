import DateTimePickerModal from "react-native-modal-datetime-picker";

interface CalendarProps {
  isVisible: boolean;
  mode?: "date" | "time";
  onConfirm: (date: Date) => void;
  onCancel: () => void;
}

export default function Calendar({ isVisible, mode = "date", onConfirm, onCancel }: CalendarProps) {
  return (
    <DateTimePickerModal
      isVisible={isVisible}
      mode={mode}
      minimumDate={mode === "date" ? new Date() : undefined}
      locale="ko"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}
