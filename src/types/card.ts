import { SCREEN } from "../constants/screen";

export interface CardContentProps {
  id: number;
  title: string;
  name: string;
  thumbnail: string;
  expiredAt: string;
}

export interface CardProps extends CardContentProps {
  type?: SCREEN;
  children?: React.ReactNode;
  status?: "new" | "completed" | "none";
  onPress: () => void;
}
