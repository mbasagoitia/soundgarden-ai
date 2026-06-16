# SoundGarden AI

SoundGarden AI is an ambient audiovisual generation system that transforms natural-language prompts into evolving musical and visual environments.

Rather than generating a fixed song, SoundGarden aims to create living soundscapes that continuously evolve while maintaining a coherent emotional identity.

## Disclaimer

SoundGarden is not a replacement for composers, musicians, or visual artists. Human creativity and AI-assisted music generation are distinct concepts with different purposes. SoundGarden aims to approximate the emotional intent of the user through sound and visuals, but may lack deep emotional complexity, historical context, and nuance. Use SoundGarden for focused work, ambience, entertainment, and curiosity. Continue to support artists, composers, and musicians whose work requires immense skill, commitment, and creativity that cannot be replicated by artificial intelligence.

## Vision

Users describe a mood, memory, place, or experience in plain language:

> "A sunrise over the Rocky Mountains"

> "A rainy afternoon in a Parisian cafe"

> "An energetic cyberpunk city at night"

SoundGarden interprets that intent and generates an immersive audiovisual scene that combines music, atmosphere, and visual motion.

The long-term goal is to explore the intersection of:

* Artificial Intelligence
* Music Generation
* Audio Synthesis
* Visual Art
* Human Creativity

---

## Architecture Overview

The system follows a scene-centric architecture:

```text
User Input
      ↓
Mood Parsing
      ↓
MoodVector
      ↓
Scene Builder
      ↓
Scene
      ↓
Composition Engine
      ↓
Composition
      ↓
 ┌────┴────┐
 ↓         ↓
Audio     Visual
Renderer  Renderer
```

The Scene serves as the central domain object that all generation and rendering systems operate on. Composition is a nondeterministic interpretation of a Scene.

---

## Technology Stack

### Frontend

* React
* TypeScript
* Vite

### State Management

* Zustand

### Audio

* Tone.js

### Visuals

* Three.js

### AI / Machine Learning

* TensorFlow.js
* Universal Sentence Encoder
* MusicVAE

### Backend

* Node.js

### Persistence

* PostgreSQL

---

## Roadmap

### Phase 1 — MVP

* Prompt input
* Music generation
* Browser playback
* Regeneration

### Phase 2 — Structured Generation

* Chord progression generation
* Motif generation
* Audio effects

### Phase 3 — AI Integration

* Mood embeddings
* Intelligent composition
* Adaptive instrumentation

### Phase 4 — Advanced Features

* User accounts
* Saved scenes
* Presets
* Environmental integrations

### Phase 5 — Production

* Cloud deployment
* Export functionality

---

## Development

This project was bootstrapped with Vite.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## License

MIT License
