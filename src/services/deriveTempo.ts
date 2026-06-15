import { type MoodVector } from "../domain/MoodVector";
// Should this live in services or somewhere else?

export function deriveTempo(mood: MoodVector): number {
  const {
    energy,
    motion,
    tension,
    density,
    openness,
  } = mood;

// Weighted tempo score based upon different dimensions of the mood vector
// Could be improved; experiment with weighting later or some random variation

  const score =
    energy * 0.45 +
    motion * 0.30 +
    tension * 0.15 +
    density * 0.10 -
    openness * 0.10;

    const MIN_BPM = 50;
    const MAX_BPM = 140;

  const normalized = Math.max(0, Math.min(1, score));

return Math.round(
  MIN_BPM +
  normalized * (MAX_BPM - MIN_BPM)
);
}