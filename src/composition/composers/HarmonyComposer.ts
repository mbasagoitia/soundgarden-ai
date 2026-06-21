// Should this inherit from a more general TrackComposer class that also MelodyComposer and TextureComposer inherit from?

import type { CompositionContext } from "../../domain/composition/CompositionContext";
import { HarmonyTrack } from "../../domain/composition/HarmonyTrack";
import { type HarmonyEvent } from "../../domain/composition/HarmonyEvent";
import { SCALES } from "../utilities/scales";
import { type Key } from "../../domain/composition/Key";
import { CHORD_FORMULAS, type Chord } from "../utilities/chordFormulas";
import type { Pitch } from "../../domain/composition/Pitch";

export class HarmonyComposer {

    compose(context: CompositionContext) {
        const chordPalette = context.scene.harmony.chordPalette;
        const events = this.createHarmonyEvents(context.scene.harmony.key, chordPalette);
        context.harmonyTrack = new HarmonyTrack(events);
    }

    createHarmonyEvents(key: Key, chordPalette: Chord[]) {
        // For now, just loop through the chord palette and create a HarmonyEvent for each chord
        const events: HarmonyEvent[] = [];
        const duration = 4; // 4 beats per chord for now

        for (let i = 0; i < chordPalette.length; i++) {
            const chord = this.getChordMembers(key, chordPalette[i]);
            const startBeat = i * duration;
            events.push({
                chord,
                startBeat,
                duration
            });
        }

        return events;
    }

    getChordMembers(key: Key, chord: Chord): Pitch[] {
        const scale = SCALES[key];
        const { degree, seventh } = CHORD_FORMULAS[chord];

        const chordDegrees = seventh
            ? [degree, degree + 2, degree + 4, degree + 6]
            : [degree, degree + 2, degree + 4];

        return chordDegrees.map(d => scale[d % 7]);
    }
}