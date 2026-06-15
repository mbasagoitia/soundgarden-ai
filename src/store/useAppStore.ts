import { create } from "zustand";
import { type AppState } from "../domain/AppState";

export const useAppStore =
  create<AppState>((set) => ({
    selectedPreset: null,

    setSelectedPreset: (preset) =>
      set({ selectedPreset: preset }),
  }));