import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

const loadOBJModel = (
  scene: THREE.Scene,
  path: string,
  options = { receiveShadow: true, castShadow: true },
) => {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const texture = new THREE.TextureLoader().load('japanese-gate.png');
    const loader = new OBJLoader();

    loader.load(
      path,
      // called when resource is loaded
      object => {
        scene.add(object);

        object.traverse(c => {
          const child = <THREE.Mesh>c;

          if (child.isObject3D) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
            if (child.material) {
              // @ts-ignore
              child.material.map = texture;
            }
          }
        });

        resolve(object);
      },
      // called when loading is in progresses
      undefined,
      // called when loading has errors
      error => {
        reject(error);
      },
    );
  });
};

const loadLGTFModel = (
  scene: THREE.Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true },
) => {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene;
        obj.name = 'torii';
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(child => {
          const childAsMesh = child as THREE.Mesh;
          if (childAsMesh.isMesh) {
            childAsMesh.castShadow = castShadow;
            childAsMesh.receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      error => {
        reject(error);
      },
    );
  });
};

export { loadLGTFModel, loadOBJModel };
