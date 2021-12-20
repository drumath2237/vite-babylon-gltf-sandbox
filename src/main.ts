import * as BABYLON from '@babylonjs/core';

import './style.scss';

const renderCanvas = <HTMLCanvasElement>document.getElementById('renderCanvas');

const main = (canvas: HTMLCanvasElement) => {
  const engine = new BABYLON.Engine(canvas, true);
  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.UniversalCamera('camera', new BABYLON.Vector3(2, 2, 2), scene);
  camera.target = new BABYLON.Vector3(0, 0.5, 0);
  camera.attachControl(true);

  const light = new BABYLON.DirectionalLight('light', new BABYLON.Vector3(-1, -3, -1.5), scene);
  light.intensity = 1.0;

  scene.createDefaultEnvironment();
  const cube = BABYLON.MeshBuilder.CreateBox('box', {}, scene);
  cube.position = new BABYLON.Vector3(0, 0.5, 0);

  engine.runRenderLoop(() => {
    scene.render();
  });
};

main(renderCanvas);
