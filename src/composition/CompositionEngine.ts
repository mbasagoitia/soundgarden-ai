export function compose(
    scene: Scene
): Composition {

    return {
        // scene.harmony.chordPalette

        // Next step is uncomment chordPalette in HarmonyProfile and the presets so we can use it
        // Loop through the chord palette (for now in a predetermined order) and create a HarmonyEvent and eventually HarmonyTrack (maybe just repeat a few chord progressions)
        // Then use Tone scheduler to play them
        harmony: [

            {
                chord: "Gmaj7",
                startBar: 0,
                durationBars: 4
            },

            {
                chord: "Em7",
                startBar: 4,
                durationBars: 4
            }

        ]

    };

}