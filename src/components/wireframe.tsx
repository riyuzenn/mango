import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import React from 'react';
import { Vector3 } from 'three';

type WireframeSphereProps = {
  className?: string;
};
const Sphere = (props: JSX.IntrinsicElements['mesh'] & { color: string }) => {
  const mesh = React.useRef<any>(null);
  useFrame((_state, _delta) => {
    mesh.current.rotation.x += 0.001;
    mesh.current.rotation.y += 0.001;
  });

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[500, 20, 20]} />
      <meshBasicMaterial color={props.color} wireframeLineWidth={1} wireframe />
    </mesh>
  );
};

export const WireframeSphere = ({ className = '' }: WireframeSphereProps) => {
  const { theme } = useTheme();
  const color = theme === 'dark' ? 'white' : 'black';
  return (
    <React.Fragment>
      <div className={`${className} w-[520px] max-w-full`}>
        <div className="relative w-[520px]  h-[520px] max-w-full max-w-[calc(100vw_-_2_*_20px)] max-h-[calc((100vw_-_2_*_20px))]">
          <Canvas
            gl={{ antialias: true, autoClear: true, autoClearDepth: true }}
            camera={{ position: new Vector3(0, 0, 1700), far: 3000, zoom: 2 }}
          >
            <Sphere color={color} />
          </Canvas>
        </div>
      </div>
    </React.Fragment>
  );
};
