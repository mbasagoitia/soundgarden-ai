export type ChordQuality =
  | "major"
  | "minor"
  | "diminished"
  | "augmented";

export type SeventhQuality =
  | "major"
  | "minor"
  | "diminished";

export type ChordFormula = {
  degree: number;
  quality: ChordQuality;
  seventh?: SeventhQuality;
};

export const CHORD_FORMULAS: Record<string, ChordFormula> = {

  // ===== Major-key diatonic =====

  I: {
    degree: 0,
    quality: "major"
  },

  ii: {
    degree: 1,
    quality: "minor"
  },

  iii: {
    degree: 2,
    quality: "minor"
  },

  IV: {
    degree: 3,
    quality: "major"
  },

  V: {
    degree: 4,
    quality: "major"
  },

  vi: {
    degree: 5,
    quality: "minor"
  },

  viio: {
    degree: 6,
    quality: "diminished"
  },


  // ===== Major-key sevenths =====

  I7: {
    degree: 0,
    quality: "major",
    seventh: "major"
  },

  ii7: {
    degree: 1,
    quality: "minor",
    seventh: "minor"
  },

  iii7: {
    degree: 2,
    quality: "minor",
    seventh: "minor"
  },

  IV7: {
    degree: 3,
    quality: "major",
    seventh: "major"
  },

  V7: {
    degree: 4,
    quality: "major",
    seventh: "minor"
  },

  vi7: {
    degree: 5,
    quality: "minor",
    seventh: "minor"
  },

  viio7: {
    degree: 6,
    quality: "diminished",
    seventh: "diminished"
  },


  // ===== Natural minor =====

  i: {
    degree: 0,
    quality: "minor"
  },

  iio: {
    degree: 1,
    quality: "diminished"
  },

  III: {
    degree: 2,
    quality: "major"
  },

  iv: {
    degree: 3,
    quality: "minor"
  },

  v: {
    degree: 4,
    quality: "minor"
  },

  VI: {
    degree: 5,
    quality: "major"
  },

  VII: {
    degree: 6,
    quality: "major"
  },


  // ===== Natural minor sevenths =====

  i7: {
    degree: 0,
    quality: "minor",
    seventh: "minor"
  },

  iio7: {
    degree: 1,
    quality: "diminished",
    seventh: "minor"
  },

  III7: {
    degree: 2,
    quality: "major",
    seventh: "major"
  },

  iv7: {
    degree: 3,
    quality: "minor",
    seventh: "minor"
  },

  v7: {
    degree: 4,
    quality: "minor",
    seventh: "minor"
  },

  VI7: {
    degree: 5,
    quality: "major",
    seventh: "major"
  },

  VII7: {
    degree: 6,
    quality: "major",
    seventh: "minor"
  }

} as const;

export type Chord = keyof typeof CHORD_FORMULAS;