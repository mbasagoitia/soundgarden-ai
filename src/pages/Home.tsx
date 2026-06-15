import { useAppStore } from '../store/useAppStore';
import { PresetsSelect } from '../components/audio/PresetsSelect/PresetsSelect';
import { PlaybackControls } from '../components/audio/PlaybackControls/PlaybackControls';


export function Home() {

  const selectedPreset =
  useAppStore(
    (state) => state.selectedPreset
  );

  const setSelectedPreset =
  useAppStore(
    (state) => state.setSelectedPreset
  );

  return (
    <>
      <h1>Sound Garden</h1>
      <PresetsSelect
        selectedPreset={selectedPreset}
        onSelect={setSelectedPreset}
      />
      <PlaybackControls />
    </>
  );
}