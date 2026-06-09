import { useState } from 'react';
import { PresetsSelect, type PresetType } from '../components/audio/PresetsSelect/PresetsSelect';
import { PlaybackControls } from '../components/audio/PlaybackControls/PlaybackControls';

export function Home() {
  const [preset, setPreset] = useState<PresetType>('sunrise');

  return (
    <>
      <h1>Sound Garden</h1>
      <PresetsSelect
        selectedPreset={preset}
        onSelect={setPreset}
      />
      <PlaybackControls />
    </>
  );
}