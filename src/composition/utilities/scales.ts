import { type Pitch } from "../../domain/composition/Pitch";
import { type Key } from "../../domain/composition/Key";

export const CHROMATIC_SCALE = [
  "C","C#","D","D#","E","F",
  "F#","G","G#","A","A#","B"
] as const;

export const SCALES: Record<Key, Pitch[]> = {
  C:  ["C","D","E","F","G","A","B"],
  G:  ["G","A","B","C","D","E","F#"],
  D:  ["D","E","F#","G","A","B","C#"],
  A:  ["A","B","C#","D","E","F#","G#"],
  E:  ["E","F#","G#","A","B","C#","D#"],
  B:  ["B","C#","D#","E","F#","G#","A#"],
  "F#": ["F#","G#","A#","B","C#","D#","E#"],
  "C#": ["C#","D#","E#","F#","G#","A#","B#"],

  F:  ["F","G","A","Bb","C","D","E"],
  Bb: ["Bb","C","D","Eb","F","G","A"],
  Eb: ["Eb","F","G","Ab","Bb","C","D"],
  Ab: ["Ab","Bb","C","Db","Eb","F","G"],
  Db: ["Db","Eb","F","Gb","Ab","Bb","C"],
  Gb: ["Gb","Ab","Bb","Cb","Db","Eb","F"],
  Cb: ["Cb","Db","Eb","Fb","Gb","Ab","Bb"],

  a: ["A","B","C","D","E","F","G"],
  e: ["E","F#","G","A","B","C","D"],
  b: ["B","C#","D","E","F#","G","A"],
  "f#": ["F#","G#","A","B","C#","D","E"],
  "c#": ["C#","D#","E","F#","G#","A","B"],
  "g#": ["G#","A#","B","C#","D#","E","F#"],
  "d#": ["D#","E#","F#","G#","A#","B","C#"],
  "a#": ["A#","B#","C#","D#","E#","F#","G#"],

  d: ["D","E","F","G","A","Bb","C"],
  g: ["G","A","Bb","C","D","Eb","F"],
  c: ["C","D","Eb","F","G","Ab","Bb"],
  f: ["F","G","Ab","Bb","C","Db","Eb"],
  bb: ["Bb","C","Db","Eb","F","Gb","Ab"],
  eb: ["Eb","F","Gb","Ab","Bb","Cb","Db"],
  ab: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"]
};