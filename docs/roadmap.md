# SoundGarden AI Roadmap

## Current Stage

Prototype

The first goal is to validate the basic process from text prompt to generated music playback.

---

# Phase 1 - MVP

## Goals

Create a complete working system that:

1. Accepts a text prompt
2. Generates a deterministic composition
3. Plays audio in the browser
4. Allows regeneration

## Features

### Frontend

- Prompt input
- Generate button
- Playback controls

### Backend

- Prompt processing endpoint
- Composition generation service

### Audio

- Tone.js playback
- Basic instrument support

## Success Criteria

A user can:

- Enter a prompt
- Hear generated music
- Generate multiple unique compositions

---

# Phase 2 - Structured Generation

## Goals

Improve musical quality.

### Features

- Chord progression generation
- Motif generation
- Addition of tasteful audio effects

---

# Phase 3 - AI Integration

## Goals

Introduce machine learning components.

### Features

- Prompt embedding analysis
- AI-assisted composition
- Intelligent instrumentation

Technologies:

Music generation: 

- MusicVAE from Magenta.js

Mood parsing:

- Tensorflow.js
- Universal Sentence Encoder

---

# Phase 4 - Persistence and Advanced Features

## Features

- User accounts
- Saved compositions
- Presets based on time of day, weather, etc.

---

# Phase 5 - Production

## Features

- Cloud deployment
- Export functionality
- Mobile support