import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
	nodes: {
		me: THREE.Mesh;
	};
	materials: {
		palette: THREE.MeshStandardMaterial;
	};
};

const Character = ({ ...props }: JSX.IntrinsicElements['group']) => {
	const group = useRef<THREE.Group>();
	const { nodes, materials } = useGLTF('/me.glb') as GLTFResult;
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

useGLTF.preload('/me.glb');

export default Character;
