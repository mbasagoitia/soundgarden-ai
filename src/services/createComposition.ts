import { type Scene } from "../domain/Scene";
import { CompositionEngine } from "../composition/CompositionEngine";

export function createComposition(scene: Scene){

    const compositionEngine = new CompositionEngine();
    if (scene) {
        const composition = compositionEngine.compose(scene);
        return composition;
    }
    return null;

}

// Next step: The texture layer should decide what instruments to play (see TextureProfile and InstrumentDefinition) and then the composition engine should assign the chords in the harmony track to those instruments.
// For now just use synths
// Decide on how octave assignments should work--definitely related to mood/texture
// Play the composition
// Add start/stop/pause funcionality

// const synth = new Tone.PolySynth().toDestination();

// composition.harmonyTrack.events.forEach(event => {
//     Tone.Transport.schedule(time => {
//         synth.triggerAttackRelease(
//             event.chord,
//             event.durationBeats + "n",
//             time
//         );
//     }, event.startBeat + "n");
// });

// track.events.forEach(event => {
//   Tone.Transport.schedule(time => {
//     synth.triggerAttackRelease(
//       event.chord.map(note => note + "4"), // temporary octave assignment
//       event.durationBeats,
//       time
//     );
//   }, event.startBeat);
// });