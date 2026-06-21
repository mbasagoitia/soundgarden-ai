import { type ChordQuality, type SeventhQuality } from "../../composition/utilities/chordFormulas";

export type ChordFormula = {
  degree: number;
  quality: ChordQuality;
  seventh?: SeventhQuality;
};