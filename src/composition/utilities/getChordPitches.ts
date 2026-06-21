import { SCALES } from "./scales";
import { type Key } from "../../domain/composition/Key";
import { type Chord, CHORD_FORMULAS } from "./chordFormulas";
import { buildChordPitches } from "./buildchordPitches";

export function getChordPitches(
  key: Key,
  chord: Chord
): string[] {

  const scale = SCALES[key];

  const formula = CHORD_FORMULAS[chord];

  const root = scale[formula.degree];

  return buildChordPitches(
    root,
    formula.quality,
    formula.seventh
  );
}