import { type MoodVector } from "./MoodVector";
import { type HarmonyProfile } from "./HarmonyProfile";
import { type TextureProfile } from "./TextureProfile";

export interface Scene {
  mood: MoodVector;
  // Should tempo actually live here? I think maybe derive in composition layer
  tempo: number;
// Also melody eventually
  harmony: HarmonyProfile;
  texture: TextureProfile;
}