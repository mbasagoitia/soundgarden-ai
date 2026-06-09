import { type MoodVector } from '../domain/MoodVector';

export const moodPresets: Record<string, MoodVector> = {
  sunrise: {
    energy: 0.3,
    brightness: 0.9,
    density: 0.2,
    warmth: 0.8,
    tension: 0.1,
    motion: 0.3,
    openness: 0.9,
    saturation: 0.4,
  },

  storm: {
    energy: 0.8,
    brightness: 0.2,
    density: 0.8,
    warmth: 0.2,
    tension: 0.9,
    motion: 0.9,
    openness: 0.3,
    saturation: 0.8,
  },

  forest: {
    energy: 0.4,
    brightness: 0.5,
    density: 0.6,
    warmth: 0.6,
    tension: 0.2,
    motion: 0.4,
    openness: 0.7,
    saturation: 0.5,
  },

  space: {
    energy: 0.2,
    brightness: 0.4,
    density: 0.2,
    warmth: 0.1,
    tension: 0.3,
    motion: 0.1,
    openness: 1.0,
    saturation: 0.3,
  },

  ocean: {
    energy: 0.4,
    brightness: 0.6,
    density: 0.4,
    warmth: 0.4,
    tension: 0.2,
    motion: 0.7,
    openness: 0.8,
    saturation: 0.5,
  },
};