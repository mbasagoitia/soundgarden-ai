// A sequence of HarmonyEvents put together

import type { HarmonyEvent } from "./HarmonyEvent";

export class HarmonyTrack {
  events: HarmonyEvent[];
  constructor(events: HarmonyEvent[]) {
    this.events = events;
  }
}