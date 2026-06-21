// A single chord and its start beat/bar and duration

export interface HarmonyEvent {
  chord: string[];
  startBeat: number;
  durationBeats: number;
}