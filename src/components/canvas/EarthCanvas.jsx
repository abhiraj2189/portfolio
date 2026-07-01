import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Earth() {
  return (
    <mesh rotation={[0.4, 0.6, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color="#2563eb"
        metalness={0.6}
        roughness={0.3}
      />
    </mesh>
  );
}

export default function EarthCanvas() {
  return (
    <div className="w-[380px] h-[380px]">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 2, 2]} intensity={3} />
        <Earth />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
}