export type InstrumentType =
  | "pad"
  | "piano"
  | "drone"
  | "strings"
  | "synth"
  | "bells"
  | "guitar"
  | "winds"
  | "choir"
  | "percussion";

export type InstrumentRole =
  | "texture"
  | "harmony"
  | "melody"
  | "rhythm";

export interface InstrumentDefinition {
    id: string;
    name: string;
    type: InstrumentType;
    volume: number;
    role: InstrumentRole;
}