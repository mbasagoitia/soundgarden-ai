import { type PresetType } from "../components/audio/PresetsSelect/PresetsSelect";

export interface AppState {
  selectedPreset: PresetType | null;

  setSelectedPreset: (
    preset: PresetType
  ) => void;
}