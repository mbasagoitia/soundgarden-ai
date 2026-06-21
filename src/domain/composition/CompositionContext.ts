import { type Scene } from "../Scene";
import { type HarmonyTrack } from "./HarmonyTrack"
// import { type MelodyTrack } from "./MelodyTrack";
// import { type TextureTrack } from "./TextureTrack";

export class CompositionContext {
    scene: Scene;

    harmonyTrack: HarmonyTrack | null;
    // melodyTrack: MelodyTrack | null;
    // textureTrack: TextureTrack | null;
    constructor(scene: Scene) {
        this.scene = scene;

        this.harmonyTrack = null;
        // this.melodyTrack = null;
        // this.textureTrack = null;
    }
}