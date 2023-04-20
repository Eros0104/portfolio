import { useState, useEffect, useRef } from 'react';
import { Box, Spinner, useColorMode } from '@chakra-ui/react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadOBJModel, loadLGTFModel } from '../lib/model';

const easeOutCirc = (x: number) => Math.sqrt(1 - (x - 1) ** 4);

const VoxelGate = () => {
  const refContainer = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [_renderer, setRenderer] = useState<THREE.WebGLRenderer>();
  const [_camera, setCamera] = useState<THREE.OrthographicCamera>();
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));

  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      200 * Math.sin(0.2 * Math.PI),
      100,
      200 * Math.cos(0.2 * Math.PI),
    ),
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState<OrbitControls>();

  useEffect(() => {
    const { current } = refContainer;
    const container = current as any;
    if (container && !_renderer) {
      const screenWidth = container.clientWidth;
      const screenHeight = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(screenWidth, screenHeight);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scale = screenHeight * 0.005 + 120;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000,
      );
      camera.position.copy(initialCameraPosition);

      camera.lookAt(target);

      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      controls.enableZoom = false;
      setControls(controls);

      loadLGTFModel(scene, '/torii-gate.glb').then(() => {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        animate();
        setIsLoading(false);
      });

      const req: any = null;
      const frame = 0;

      const animate = () => {
        req = requestAnimationFrame(animate);
        // frame = frame <= 100 ? frame + 1 : frame;

        // if (frame <= 100) {
        //   const p = initialCameraPosition;
        //   const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
        //   camera.position.y = p.y;
        //   camera.position.x =
        //     p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
        //   camera.position.z =
        //     p.x * Math.cos(rotSpeed) - p.z * Math.sin(rotSpeed);
        //   camera.lookAt(target);
        // } else {
        //   controls.update();
        // }

        controls.update();
        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  return (
    <Box
      ref={refContainer}
      className="voxel-gate"
      m="auto"
      mb={['-120px', '-180px', '-275px']}
      pt="50px"
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {isLoading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size) / 2)"
          mt="calc(0px - var(--spinner-size))"
        />
      )}
    </Box>
  );
};

export default VoxelGate;
