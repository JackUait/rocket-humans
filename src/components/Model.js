import React from 'react'
import { useGLTFLoader } from 'drei'

export const Model = ({ modelPath }) => {
	const gltf = useGLTFLoader(modelPath, true)
	return <primitive object={gltf.scene} dispose={null} />
}
