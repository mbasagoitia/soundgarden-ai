import { type PresetType } from "../components/audio/PresetsSelect/PresetsSelect";
import { type Scene } from "../domain/Scene";
import { harmonyPresets } from "../data/harmonyPresets";
import { moodPresets } from "../data/moodPresets";
import { texturePresets } from "../data/texturePresets";
import { deriveTempo } from "./deriveTempo";


export function buildScene(
  preset: PresetType
): Scene {
  return {
    mood: moodPresets[preset],
    tempo: deriveTempo(moodPresets[preset]),
    harmony: harmonyPresets[preset],
    texture: texturePresets[preset],
  };
}