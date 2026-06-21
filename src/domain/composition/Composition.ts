// Stacked layers of a MelodyTrack, HarmonyTrack, and TextureTrack

import type { HarmonyTrack } from "./HarmonyTrack";

export class Composition {
    harmonyTrack: HarmonyTrack | null;
    // melodyTrack: MelodyTrack | null;
    // textureTrack: TextureTrack | null;
    constructor({
        harmonyTrack,
        // melodyTrack,
        // textureTrack
    }: {
        harmonyTrack: HarmonyTrack | null;
        // melodyTrack: MelodyTrack | null;
        // textureTrack: TextureTrack | null;
    }) {
        this.harmonyTrack = harmonyTrack;
        // this.melodyTrack = melodyTrack;
        // this.textureTrack = textureTrack;
    }
}