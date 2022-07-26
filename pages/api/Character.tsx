import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
	nodes: {
		me1: THREE.Mesh;
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
				geometry={nodes.me1.geometry}
				material={materials.palette}
				rotation={[Math.PI / 2, 0, 0.35]}
				position={[-1, -3, 0]}
				scale={0.6}
			/>
		</group>
	);
};

export default Character;
