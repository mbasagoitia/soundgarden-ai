import { useCurrentScene } from "../../../services/useCurrentScene";

export function PlaybackControls() {

  const scene = useCurrentScene();

  const handlePlay = () => {
    console.log("Playing scene:", scene);
  };

  return (
    <>
      <button onClick={handlePlay}>Play</button>
      <button>Pause</button>
      <button>Stop</button>
    </>
  );
}