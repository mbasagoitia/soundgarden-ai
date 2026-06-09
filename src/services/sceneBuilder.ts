import { type PresetType } from "../components/audio/PresetsSelect/PresetsSelect";
import { Scene } from "../domain/Scene";
import { harmonyPresets } from "../data/harmonyPresets";
import { moodPresets } from "../data/moodPresets";
import { texturePresets } from "../data/texturePresets";

export function buildScene(
  preset: PresetType
): Scene {
  return {
    mood: moodPresets[preset],

    harmony: harmonyPresets[preset],

    texture: texturePresets[preset],
  };
}