import { create } from 'zustand';

// TODO Replace `any`
interface PreviewModalStore {
  isOpen: boolean;
  data?: any;
  onOpen: (data: any) => void;
  onClose: () => void;
}

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: any) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
