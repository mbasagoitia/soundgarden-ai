import { createComposition } from "../../../services/createComposition";
import { useCurrentScene } from "../../../services/useCurrentScene";

export function PlaybackControls() {

  const scene = useCurrentScene();


  const handlePlay = () => {
    console.log("Playing composition...");
    if (scene) {
    console.log(createComposition(scene));
    }

  };

  return (
    <>
      <button onClick={handlePlay}>Play</button>
      <button>Pause</button>
      <button>Stop</button>
    </>
  );
}