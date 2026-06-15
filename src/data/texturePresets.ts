import { type TextureProfile } from "../domain/TextureProfile";

export const texturePresets: Record<string, TextureProfile> = {
  sunrise: {
    instruments: [
      {
        id: "warm-pad",
        name: "Warm Pad",
        type: "pad",
        volume: 0.6,
        role: "texture",
      },
      {
        id: "soft-piano",
        name: "Soft Piano",
        type: "piano",
        volume: 0.8,
        role: "harmony",
      },
    ],
  },

  storm: {
    instruments: [
      {
        id: "dark-drone",
        name: "Dark Drone",
        type: "drone",
        volume: 0.8,
        role: "texture",
      },
      {
        id: "low-strings",
        name: "Low Strings",
        type: "strings",
        volume: 0.7,
        role: "harmony",
      },
      {
        id: "storm-percussion",
        name: "Storm Percussion",
        type: "percussion",
        volume: 0.6,
        role: "rhythm",
      },
    ],
  },

  forest: {
    instruments: [
      {
        id: "wood-pad",
        name: "Wood Pad",
        type: "pad",
        volume: 0.5,
        role: "texture",
      },
      {
        id: "acoustic-guitar",
        name: "Acoustic Guitar",
        type: "guitar",
        volume: 0.7,
        role: "harmony",
      },
      {
        id: "woodwinds",
        name: "Woodwinds",
        type: "winds",
        volume: 0.5,
        role: "melody",
      },
    ],
  },

  space: {
    instruments: [
      {
        id: "ambient-drone",
        name: "Ambient Drone",
        type: "drone",
        volume: 0.7,
        role: "texture",
      },
      {
        id: "glass-pad",
        name: "Glass Pad",
        type: "pad",
        volume: 0.5,
        role: "texture",
      },
    ],
  },

  ocean: {
    instruments: [
      {
        id: "wave-pad",
        name: "Wave Pad",
        type: "pad",
        volume: 0.6,
        role: "texture",
      },
      {
        id: "electric-piano",
        name: "Electric Piano",
        type: "piano",
        volume: 0.5,
        role: "harmony",
      },
      {
        id: "soft-choir",
        name: "Soft Choir",
        type: "choir",
        volume: 0.4,
        role: "texture",
      },
    ],
  },

  twilight: {
    instruments: [
      {
        id: "velvet-pad",
        name: "Velvet Pad",
        type: "pad",
        volume: 0.6,
        role: "texture",
      },
      {
        id: "felt-piano",
        name: "Felt Piano",
        type: "piano",
        volume: 0.7,
        role: "harmony",
      },
      {
        id: "soft-strings",
        name: "Soft Strings",
        type: "strings",
        volume: 0.5,
        role: "melody",
      },
    ],
  },

  dream: {
    instruments: [
      {
        id: "dream-pad",
        name: "Dream Pad",
        type: "pad",
        volume: 0.7,
        role: "texture",
      },
      {
        id: "music-box",
        name: "Music Box",
        type: "bells",
        volume: 0.4,
        role: "melody",
      },
      {
        id: "soft-piano",
        name: "Soft Piano",
        type: "piano",
        volume: 0.5,
        role: "harmony",
      },
    ],
  },

  rain: {
    instruments: [
      {
        id: "rain-pad",
        name: "Rain Pad",
        type: "pad",
        volume: 0.5,
        role: "texture",
      },
      {
        id: "felt-piano",
        name: "Felt Piano",
        type: "piano",
        volume: 0.6,
        role: "harmony",
      },
      {
        id: "soft-strings",
        name: "Soft Strings",
        type: "strings",
        volume: 0.4,
        role: "texture",
      },
    ],
  },

  night: {
    instruments: [
      {
        id: "dark-pad",
        name: "Dark Pad",
        type: "pad",
        volume: 0.6,
        role: "texture",
      },
      {
        id: "bass-drone",
        name: "Bass Drone",
        type: "drone",
        volume: 0.5,
        role: "texture",
      },
      {
        id: "electric-piano",
        name: "Electric Piano",
        type: "piano",
        volume: 0.5,
        role: "harmony",
      },
    ],
  },

  meadow: {
    instruments: [
      {
        id: "bright-pad",
        name: "Bright Pad",
        type: "pad",
        volume: 0.5,
        role: "texture",
      },
      {
        id: "acoustic-guitar",
        name: "Acoustic Guitar",
        type: "guitar",
        volume: 0.7,
        role: "harmony",
      },
      {
        id: "flute",
        name: "Flute",
        type: "winds",
        volume: 0.4,
        role: "melody",
      },
    ],
  },
};