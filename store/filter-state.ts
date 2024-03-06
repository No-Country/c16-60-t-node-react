import { create } from "zustand";

interface isFilterState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useFilterState = create<isFilterState>((set, get) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
