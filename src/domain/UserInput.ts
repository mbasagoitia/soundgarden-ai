export interface UserInput {
  prompt: string;

  preferences: {
    energy?: number;
    brightness?: number;
    warmth?: number;
  };
}