// Think about how to deal with enharmonics

export type Pitch =
  // Natural notes
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "A"
  | "B"

  // Sharps
  | "C#"
  | "D#"
  | "E#"
  | "F#"
  | "G#"
  | "A#"
  | "B#"

  // Flats
  | "Cb"
  | "Db"
  | "Eb"
  | "Fb"
  | "Gb"
  | "Ab"
  | "Bb";