import * as Tone from "tone";
import type { InstrumentDefinition } from "../domain/InstrumentDefinition";

export function createInstrument(
  definition: InstrumentDefinition
) {
  switch (definition.type) {
    case "pad":
      return new Tone.PolySynth(
        Tone.Synth
      ).toDestination();

    case "drone":
      return new Tone.Synth().toDestination();

    case "bells":
      return new Tone.FMSynth().toDestination();

    default:
      return new Tone.Synth().toDestination();
  }
}