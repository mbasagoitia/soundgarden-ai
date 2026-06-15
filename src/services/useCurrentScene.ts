import { useAppStore } from '../store/useAppStore';
import { buildScene } from './sceneBuilder';

export function useCurrentScene() {
  const selectedPreset =
    useAppStore(
      (state) => state.selectedPreset
    );

  if (selectedPreset === null) {
    return null;
  }

  return buildScene(selectedPreset);
}