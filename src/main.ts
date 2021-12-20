import * as BABYLON from '@babylonjs/core';

import './style.css';

const renderCanvas = <HTMLCanvasElement>document.getElementById('renderCanvas');

const main = (canvas: HTMLCanvasElement) => {
  const engine = new BABYLON.Engine(canvas, true);
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, true, true);
  scene.createDefaultEnvironment();
  BABYLON.MeshBuilder.CreateBox('box', {}, scene);

  engine.runRenderLoop(() => {
    scene.render();
  });
};

main(renderCanvas);
