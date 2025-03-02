import { create } from "zustand";

interface EventSuggestionsProps {
  name: string;
  duration: string;
  description: string;
  priorityTarget: string;
}

interface EventSuggestionStoreProps {
  suggestion: EventSuggestionsProps;
  setSuggestions: (suggestion: EventSuggestionsProps) => void;
}

export const useEventSuggestionStore = create<EventSuggestionStoreProps>((set) => ({
  suggestion: {
    name: "",
    duration: "",
    description: "",
    priorityTarget: "",
  },
  setSuggestions: (suggestion) => set((prev) => ({ suggestion })),
}));

interface CouponSuggestionsProps {
  name: string;
  description: string;
  priorityTarget: string;
}

interface CouponSuggestionStoreProps {
  suggestion: CouponSuggestionsProps;
  setSuggestions: (suggestion: CouponSuggestionsProps) => void;
}

export const useCouponSuggestionStore = create<CouponSuggestionStoreProps>((set) => ({
  suggestion: {
    name: "",
    description: "",
    priorityTarget: "",
  },
  setSuggestions: (suggestion) => set((prev) => ({ suggestion })),
}));
