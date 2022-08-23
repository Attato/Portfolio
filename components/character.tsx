import * as THREE from 'three';
import React, { useRef, Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

type GLTFResult = GLTF & {
	nodes: {
		me: THREE.Mesh;
	};
	materials: {
		palette: THREE.MeshStandardMaterial;
	};
};

const Model = ({ ...props }: JSX.IntrinsicElements['group']) => {
	const group = useRef<THREE.Group>();
	const { nodes, materials } = useGLTF('/models/me.glb') as GLTFResult;
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.me.geometry}
				material={materials.palette}
				rotation={[Math.PI / 2, 0, 0.35]}
				position={[-6.4, -8, 3.2]}
				scale={5}
			/>
		</group>
	);
};

const Character = () => {
	return (
		<div className="canvas">
			<Canvas>
				<ambientLight/>
				<pointLight/>
				<OrbitControls enableZoom={false} rotateSpeed={0.7} />
				<Suspense fallback={null}>
					<Model/>
				</Suspense>
			</Canvas>
		</div>
	);
};

export default Character;
