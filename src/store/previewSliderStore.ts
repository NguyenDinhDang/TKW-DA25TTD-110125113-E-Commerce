import { create } from "zustand";

interface PreviewSliderState {
  isOpen: boolean;
  openPreviewModal: () => void;
  closePreviewModal: () => void;
}

export const usePreviewSliderStore = create<PreviewSliderState>((set) => ({
  isOpen: false,
  openPreviewModal: () => set({ isOpen: true }),
  closePreviewModal: () => set({ isOpen: false }),
}));
