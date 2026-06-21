import { type HarmonyProfile } from "../domain/HarmonyProfile";

// Eventually, I will remove the chordPalette and generate chords dynamically

export const harmonyPresets: Record<string, HarmonyProfile> = {
  sunrise: {
    key: "C",
    // mode: "lydian",
    chordPalette: [
      "I7",
      "ii",
      "iii7",
      "V",
      "IV7",
      "vi7",
    ],
    // tensionLevel: 0.2,
    // harmonicDensity: 0.4,
    // harmonicRhythm: 2,
  },

  storm: {
    key: "D",
    // mode: "phrygian",
    chordPalette: [
      "i",
      "iio",
      "VI",
      "VII",
      "IV",
      "III",
      "i7",
    ],
    // tensionLevel: 0.9,
    // harmonicDensity: 0.8,
    // harmonicRhythm: 1,
  },

  forest: {
    key: "G",
    // mode: "dorian",
    chordPalette: [
      "i7",
      "ii7",
      "III7",
      "IV",
      "v7",
      "VII",
    ],
    // tensionLevel: 0.35,
    // harmonicDensity: 0.5,
    // harmonicRhythm: 4,
  },

  space: {
    key: "A",
    // mode: "wholeTone",
    chordPalette: [
      "I7",
      "ii7",
      "IV7",
      "V7",
      "vi7",
    ],
    // tensionLevel: 0.6,
    // harmonicDensity: 0.25,
    // harmonicRhythm: 8,
  },

  ocean: {
    key: "E",
    // mode: "mixolydian",
    chordPalette: [
      "I",
      "VII",
      "IV",
      "v",
      "ii",
      "I",
    ],
    // tensionLevel: 0.3,
    // harmonicDensity: 0.45,
    // harmonicRhythm: 4,
  },

  twilight: {
    key: "Bb",
    // mode: "aeolian",
    chordPalette: [
      "i",
      "VI",
      "III",
      "v",
      "iv",
      "i",
    ],
    // tensionLevel: 0.5,
    // harmonicDensity: 0.55,
    // harmonicRhythm: 4,
  },

  dream: {
    key: "F",
    // mode: "lydian",
    chordPalette: [
      "I7",
      "ii",
      "iii7",
      "V7",
      "vi7",
      "vii7",
    ],
    // tensionLevel: 0.25,
    // harmonicDensity: 0.35,
    // harmonicRhythm: 4,
  },

  rain: {
    key: "D",
    // mode: "dorian",
    chordPalette: [
      "i7",
      "IV",
      "VII7",
      "v7",
      "III7",
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
      "VI",
      "III",
      "v",
      "iv",
      "iio",
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