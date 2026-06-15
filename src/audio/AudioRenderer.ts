import { type Scene } from "../domain/Scene";
import { createInstrument } from "./instrumentFactory";

export function render(scene: Scene) {
  const synths = scene.texture.instruments.map(
    createInstrument
  );

  return synths;
}