import { Composition } from "../domain/composition/Composition";
import { type Scene } from "../domain/Scene";
import { CompositionContext } from "../domain/composition/CompositionContext";
import { HarmonyComposer } from "./composers/HarmonyComposer";

// Now, try to create and view a Composition from a preset, and then play it with Tone.js

export class CompositionEngine {
    private harmonyComposer: HarmonyComposer;

    constructor() {
        this.harmonyComposer = new HarmonyComposer();
    }

    compose(scene: Scene): Composition {
        if (!scene) {
            throw new Error("No scene provided");
        }

        const context = new CompositionContext(scene);

        this.harmonyComposer.compose(context);

        return new Composition({
            harmonyTrack: context.harmonyTrack,
            // melodyTrack: context.melodyTrack,
            // textureTrack: context.textureTrack
        });
    }
}