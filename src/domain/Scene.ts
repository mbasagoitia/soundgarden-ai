import { type MoodVector } from "./MoodVector";
import { type HarmonyProfile } from "./HarmonyProfile";
import { type TextureProfile } from "./TextureProfile";

export interface Scene {
  mood: MoodVector;

  tempo: number;

  harmony: HarmonyProfile;
  texture: TextureProfile;
}