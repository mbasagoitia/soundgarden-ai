import {
  type ChordQuality,
  type SeventhQuality
} from "./chordFormulas";

import { type Pitch } from "../../domain/composition/Pitch";

import { NOTE_TO_INDEX } from "./noteToIndex";
import { CHROMATIC_SCALE } from "./scales";
import { TRIAD_INTERVALS, SEVENTH_INTERVALS } from "./intervals";

export function buildChordPitches(
  root: Pitch,
  quality: ChordQuality,
  seventh?: SeventhQuality
): string[] {

  const rootIndex = NOTE_TO_INDEX[root];

  const pitches = TRIAD_INTERVALS[quality]
    .map(interval =>
      CHROMATIC_SCALE[(rootIndex + interval) % 12]
    );

  if (seventh) {
    pitches.push(
      CHROMATIC_SCALE[
        (rootIndex + SEVENTH_INTERVALS[seventh]) % 12
      ]
    );
  }

  return pitches;
}