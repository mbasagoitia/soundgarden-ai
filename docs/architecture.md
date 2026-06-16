# SoundGarden AI Architecture

## Overview

SoundGarden is an AI-assisted ambient audiovisual system that transforms natural language prompts into continuously evolving musical and visual environments.

Users describe a mood, environment, experience, or idea in plain language. The system interprets the user's intent, constructs a semantic representation of the desired atmosphere, and generates a living audiovisual world that evolves over time.

Unlike traditional music generators that produce a fixed song, SoundGarden generates a continuous soundscape that adapts, transforms (naturally or based on user input), and develops while maintaining a coherent identity.

The architecture follows a **Scene-Centric Design**.

All generation systems exist to create or modify a Scene, and all rendering systems exist to render a Scene.

Machine learning models, procedural systems, audio engines, and visual engines are implementation details that can evolve independently while preserving the Scene contract.

---

# Core Design Principles

## Scene-Centric Architecture

Scene is the central domain object of the entire application.

Every subsystem either:

* Creates a Scene
* Modifies a Scene
* Renders a Scene

This provides a stable contract between generation systems and rendering systems.

---

## Mood First

Everything begins with emotional intent rather than explicit musical commands.

Users describe experiences and scenes, not specific musical terms.

Example:

```text
"Parisian cafe in the rain"
```

instead of:

```text
"D minor at 80 BPM"
```

---

## Continuous Evolution

SoundGarden should feel alive, reactive, and accurate to the desired mood.

Generated content gradually evolves rather than abruptly restarting or producing unrelated material.

---

## Modular Architecture

Subsystems should be replaceable.

Examples:

* Universal Sentence Encoder → LLM
* MusicVAE → Transformer Model
* Rule-Based Visuals → Generative Visual Models

without affecting downstream systems.

---

## Hybrid Intelligence

Machine learning where randomness and creative generation is valuable

Procedural systems are used where deterministic control is desirable.

---

## Explainable Generation

Mood mappings should remain understandable, debuggable, and tunable.

---

# Technologies

| Layer             | Technology                                 |
| ----------------- | ------------------------------------------ |
| Frontend          | React + TypeScript                         |
| State Management  | Zustand                                    |
| Mood Parsing      | TensorFlow.js + Universal Sentence Encoder |
| Melody Generation | MusicVAE (Magenta)                         |
| Audio Rendering   | Tone.js                                    |
| Visualization     | Three.js                                   |
| Backend           | Node.js                                    |
| Persistence       | PostgreSQL                                 |

---

# High-Level Architecture

```text
User Input
      ↓
Mood Parsing Engine
      ↓
MoodVector
      ↓
Scene Builder
      ↓
Scene
 ┌────┴────┐
 ↓         ↓
Audio     Visual
Renderer  Renderer
 ↓         ↓
Audio     Visual
Output    Output
```

---

# Core Domain Model

The Scene is the primary domain object.

```typescript
interface Scene {
  mood: MoodVector;
  harmony: HarmonyProfile;
  melody: MelodyProfile;
  texture: TextureProfile;
  visuals: VisualProfile;
}
```

Every generation system contributes to some portion of the Scene.

Every rendering system consumes the Scene.

---

# Application State

Global application state is managed through Zustand.

```typescript
interface AppState {
  userInput: UserInput;
  currentMood: MoodVector;
  activeScene: Scene;
  playbackState: PlaybackState;
}
```

The Composition should not be kept in AppState because it is a long, evolving sequence rather than a static object. A unique Scene can generate a variety of Compositions, so Composition is not deterministic.

The Scene acts as the primary source of truth.

---

# User Input Layer

## Purpose

Capture creative intent.

---

## Inputs

### Text Prompts

Examples:

* A peaceful sunrise in the mountains
* A lonely walk through autumn rain
* An energetic futuristic city
* Parisian cafe in the rain

---

### User Controls

* Energy
* Density
* Brightness
* Warmth
* Tension
* Motion
* Openness
* Saturation

---

### Presets

Examples:

* Sunrise
* Midnight Forest
* Ocean Storm
* Winter Snowfall

---

### Environmental Inputs

Future possibilities:

* Time of day
* Weather
* Location

For example, "snowy morning in New York City" or "warm California sunset"

---

## Output

```typescript
interface UserInput {
  prompt: string;

  preferences: {
    energy?: number;
    density?: number;
    brightness?: number;
    warmth?: number;
    tension?: number;
    motion?: number;
    openness?: number;
    saturation?: number;
  };
}
```

---

# Mood Parsing Layer

## Purpose

Convert user intent into structured emotional data.

This layer bridges language and generation systems.

---

## Processing Pipeline

```text
User Input
    ↓
Sentence Embedding
    ↓
Semantic Vector
    ↓
Mood Clustering
    ↓
MoodVector
```

---

## Technologies

### Initial

* TensorFlow.js
* Universal Sentence Encoder

### Future

* LLM-based interpretation
* Fine-tuned embedding models

---

## Output

```typescript
interface MoodVector {
  energy: number;
  brightness: number;
  density: number;
  warmth: number;
  tension: number;
  motion: number;
  openness: number;
  saturation: number;
}
```

---

## Mood Mappings

| Attribute  | Audio Mapping     | Visual Mapping    |
| ---------- | ----------------- | ----------------- |
| Energy     | Tempo, activity   | Motion speed      |
| Brightness | Harmonic color    | Lighting          |
| Density    | Note density      | Particle count    |
| Warmth     | Timbre softness   | Color temperature |
| Tension    | Dissonance        | Angularity        |
| Motion     | Modulation rate   | Camera drift      |
| Openness   | Chord spacing     | Scene scale       |
| Saturation | Harmonic richness | Color richness    |

---

# Scene Builder

## Purpose

Convert MoodVector into a well-defined Scene.

The Scene Builder coordinates multiple generation services.

```text
MoodVector
     ↓
 ┌───┼────┬────┬────┬────┐
 ↓   ↓    ↓    ↓    ↓
Harmony
Melody
Texture
Visual
 Services
     ↓
   Scene
```

---

# Harmony Service

## Purpose

Generate harmonic foundations procedurally.

---

## Input

```typescript
MoodVector
```

---

## Output

```typescript
interface HarmonyProfile {
  key: string;

  mode: string;

  chordPalette: string[];

  tensionLevel: number;

  harmonicDensity: number;
}
```

---

## Responsibilities

* Key selection
* Mode selection
* Harmonic palette generation
* Chord spacing
* Tension

---

# Melody Service

## Purpose

Generate melodic identity.

---

## Technology

* MusicVAE from Magenta.js

---

## Output

```typescript
interface MelodyProfile {
  motifs: Note[][];

  phraseLength: number;

  sparsity: number;

  melodicContour: string;
}
```

---

## Responsibilities

* Motif generation
* Phrase generation
* Variation generation
* Melodic interpolation
* Identity preservation

---

## Melody Strategy

1. Generate motif
2. Reuse motif
3. Mutate gradually
4. Blend variations
5. Preserve recognizability

The goal is evolution rather than constant novelty.

---

# Texture Service

## Purpose

Generate atmosphere and orchestration.

---

## Output

```typescript
interface TextureProfile {
  // Each instrument will define what role it plays...melody, harmony, etc.
  instruments: InstrumentDefinition[];
  soundEffects: SoundEffect[];
}
```

---

## Responsibilities

* Instrument selection
* Drone generation
* Ambient layers
* Environmental textures
* Sound effects
* Instrument-level effects

---

# Visual Service

## Purpose

Generate visual characteristics for the Scene.

---

## Output

```typescript
interface VisualProfile {
  colorPalette: string[];

  motionIntensity: number;

  particleDensity: number;

  shapeLanguage: string;

  cameraMotion: number;

  lightingProfile: string;
}
```

---

## Responsibilities

* Color palette generation
* Shape generation
* Motion rules
* Camera behavior
* Scene lighting

---

# Composition Layer

## Purpose

Translate musical, textural, and visual ideas described by the Scene into concrete musical directives.

## Responsibilities

* Variation scheduling
* Chord progression ordering
* Harmonic evolution
* Melodic interpolation
* Texture drift
* Visual evolution
* Transitions

## Building Blocks

The composition will be made up of a sequence of events in different layers: melody, harmony, and texture:

```typescript
interface HarmonyEvent {
  chord: Chord;
  startBeat: number;
  // Number of beats, bars, etc....TBD
  duration: number;
  volume: number;
}

interface MelodyEvent {
  // Note will describe a specific pitch/scale degree and duration
  sequence: Note[];
  // Duration of the entire sequence
  duration: number;
  startBeat: number;
  volume: number;
}

interface TextureEvent {
  soundEffect: SoundEffect;
  duration: number;
  startBeat: number;
  volume: number;
}
```

---

## Output

```typescript
interface Composition {
  harmonyTimeline: HarmonyEvent[];

  // Stack 2+ melody events at a time for a polyphonic effect
  melodyTimeline: MelodyEvent[];

  textureTimeline: TextureEvent[];
}
```

---

# Audio Rendering Layer

## Purpose

Render a Composition into sound with Tone.js

---

## Internal Components

### Harmony Renderer

Generates:

* Pads
* Drones
* Sustained textures

Consumes:

```typescript
HarmonyProfile
```

---

### Melody Renderer

Generates:

* Motifs
* Musical phrases

Consumes:

```typescript
MelodyProfile
```

---

### Texture Renderer

Generates:

* Environmental sounds
* Ambient layers
* Noise textures

Consumes:

```typescript
TextureProfile
```

---

### Mix Renderer

Responsible for:

* Routing
* Master bus
* Spatialization
* Final mixing

---

# Audio Engine

## Technology

Tone.js

---

## Responsibilities

* AudioContext lifecycle
* Transport management
* Scheduling
* Routing
* Bus management
* Effect chains

---

## Routing Architecture

```text
Instrument
     ↓
Instrument Effects
     ↓
Bus
     ↓
Bus Effects
     ↓
Master Bus
     ↓
Master Effects
     ↓
Destination
```

---

## Master Effects

Examples:

* Reverb
* Delay
* EQ
* Compression
* Stereo Width
* Filtering

---

# Visual Rendering Layer

## Purpose

Render a Scene into visuals.

---

## Visual Renderer

```typescript
interface VisualRenderer {
  render(scene: Scene): VisualScene;
}
```

---

## Technology

Three.js

---

## Responsibilities

* Scene creation
* Geometry generation
* Particle systems
* Camera motion
* Lighting
* Animation

---

## Future Inputs

Visuals may eventually react to:

* Harmonic tension
* Melody density
* Audio spectrum analysis
* Instrument activity
* Evolution state

---

# Musical Mappings

## Scale Examples

| Mood     | Scale      |
| -------- | ---------- |
| Calm     | Lydian     |
| Dreamy   | Dorian     |
| Hopeful  | Ionian     |
| Dark     | Aeolian    |
| Open     | Pentatonic |
| Ethereal | Whole Tone |

---

## Texture Examples

## Texture Mapping Examples

| Example Prompt | Example Texture |
|----------------|------------------|
| Old jazz club at midnight | Vinyl Crackle |
| Watching storms through a window | Rain |
| Open grasslands beneath a wide sky | Wind |
| Watching stars on the beach | Distant Chimes |
| The vastness of space | Drones |
| Walking through a pine forest | Field Recording (Nature) |
| Wandering through an old European city | Field Recording (Urban) |

---

## Example Texture Palettes

| Example Prompt | Texture Palette |
|----------------|----------------|
| Sunrise on a mountain | Wind, Distant Birds, Soft Drone, Filtered Noise, Sparse Chimes |
| Parisian Cafe in the Rain | Rain, Vinyl Crackle, Cafe Ambience, Warm Drone, Soft Piano Resonance |
| Ancient Temple at Dawn | Distant Chimes, Soft Drone, Wind, Temple Ambience, Long Reverb |
| Deep Space Meditation | Evolving Drone, Filtered Noise, Sparse Harmonic Tones, Slow Modulation, Vast Reverb |
| Snowfall in a Quiet Forest | Filtered Noise, Wind, Distant Birds, Soft Drone, Occasional Chimes |

---

## Audio Effect Examples

### Reverb

* Dreamy → Long decay
* Dark → Long decay
* Energetic → Short decay

### Delay

* Motion-driven

### Filtering

* Warmth-driven

### Stereo Width

* Openness-driven

---

## Audio-Visual Mappings

| Musical Characteristic | Visual Characteristic |
| ---------------------- | --------------------- |
| Brightness             | Color temperature     |
| Density                | Particle density      |
| Energy                 | Motion speed          |
| Reverb                 | Glow intensity        |
| Bass Activity          | Camera drift          |
| Tension                | Geometric sharpness   |

---

# Future Extensions

* User accounts
* Saved scenes
* Weather/time of day integration
* AI-generated visuals
* Cloud integration
* Scene export/import system

---

# Architectural Summary

SoundGarden is fundamentally a Scene generation system.

```text
User Intent
      ↓
MoodVector
      ↓
Scene
      ↓
Renderers
      ↓
Audiovisual Experience
```
