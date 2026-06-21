// import { type Mode } from "./Mode";
import { type Chord } from "../composition/utilities/chordFormulas";
import { type Key } from "../domain/composition/Key";
/**
 * Future:
 * Harmony will be generated dynamically by a
 * probabilistic/state-based harmony engine rather
 * than fixed chord progressions.
 * 

So the future architecture may be: current chord + harmony profile + scene state -> next chord

Using:
- Probabilities
- Transition rules
- Tension curves
- AI guidance
- State machines
 */

export interface HarmonyProfile {
  key: Key;
  // mode: Mode;
  chordPalette: Chord[];
  // tensionLevel: number;
  // harmonicDensity: number;
  // harmonicRhythm: number;
}