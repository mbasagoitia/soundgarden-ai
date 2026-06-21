import { type HarmonyProfile } from "../domain/HarmonyProfile";

// Eventually, I will remove the chordPalette and generate chords dynamically

export const harmonyPresets: Record<string, HarmonyProfile> = {
  sunrise: {
    key: "C",
    // mode: "lydian",
    chordPalette: [
      "Cmaj7",
      "D",
      "Em7",
      "G",
      "Fmaj7(#11)",
      "Am7",
    ],
    // tensionLevel: 0.2,
    // harmonicDensity: 0.4,
    // harmonicRhythm: 2,
  },

  storm: {
    key: "D",
    // mode: "phrygian",
    chordPalette: [
      "Dm",
      "Eb",
      "Bb",
      "C",
      "Ab",
      "F",
      "Dm(add9)",
    ],
    // tensionLevel: 0.9,
    // harmonicDensity: 0.8,
    // harmonicRhythm: 1,
  },

  forest: {
    key: "G",
    // mode: "dorian",
    chordPalette: [
      "Gm7",
      "Am7",
      "Bbmaj7",
      "C",
      "Dm7",
      "F",
    ],
    // tensionLevel: 0.35,
    // harmonicDensity: 0.5,
    // harmonicRhythm: 4,
  },

  space: {
    key: "A",
    // mode: "wholeTone",
    chordPalette: [
      "Amaj7",
      "Bmaj7",
      "Dmaj7",
      "Emaj7",
      "F#maj7",
    ],
    // tensionLevel: 0.6,
    // harmonicDensity: 0.25,
    // harmonicRhythm: 8,
  },

  ocean: {
    key: "E",
    // mode: "mixolydian",
    chordPalette: [
      "E",
      "D",
      "A",
      "Bm",
      "F#m",
      "Eadd9",
    ],
    // tensionLevel: 0.3,
    // harmonicDensity: 0.45,
    // harmonicRhythm: 4,
  },

  twilight: {
    key: "Bb",
    // mode: "aeolian",
    chordPalette: [
      "Bbm",
      "Gb",
      "Db",
      "Abm",
      "Ebm",
      "Bbm(add9)",
    ],
    // tensionLevel: 0.5,
    // harmonicDensity: 0.55,
    // harmonicRhythm: 4,
  },

  dream: {
    key: "F",
    // mode: "lydian",
    chordPalette: [
      "Fmaj7",
      "G",
      "Am7",
      "Cmaj7",
      "Dm9",
      "Em7",
    ],
    // tensionLevel: 0.25,
    // harmonicDensity: 0.35,
    // harmonicRhythm: 4,
  },

  rain: {
    key: "D",
    // mode: "dorian",
    chordPalette: [
      "Dm9",
      "G",
      "Cmaj7",
      "Am7",
      "Fmaj7",
    ],
    // tensionLevel: 0.4,
    // harmonicDensity: 0.5,
    // harmonicRhythm: 2,
  },

  night: {
    key: "E",
    // mode: "aeolian",
    chordPalette: [
      "i",
      "C",
      "G",
      "Bm",
      "Am",
      "Em(add9)",
    ],
    // tensionLevel: 0.45,
    // harmonicDensity: 0.3,
    // harmonicRhythm: 4,
  },

  meadow: {
    key: "D",
  //   mode: "ionian",
    chordPalette: [
      "I",
      "IV",
      "V",
      "vi",
      "ii",
      "V7",
    ],
  //   tensionLevel: 0.15,
  //   harmonicDensity: 0.4,
  //   harmonicRhythm: 2,
  },
};