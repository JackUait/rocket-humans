import React, { useEffect, useRef } from 'react'
import { Html } from 'drei'
import { Section } from './section'
import { Model } from './Model'
import { useFrame } from 'react-three-fiber'
import { useInView } from 'react-intersection-observer'

export const HTMLContent = ({
	domContent,
	modelPath,
	position,
	title,
	bgColor,
}) => {
	const mesh = useRef(null)
	useFrame(() => (mesh.current.rotation.y -= 0.01))

	const [refItem, inView] = useInView({ threshold: 0 })
	useEffect(() => {
		inView && (document.body.style.background = bgColor)
	}, [inView])

	return (
		<Section factor={1.5} offset={1}>
			<group position={[0, position, 0]}>
				<mesh ref={mesh} position={[0, -35, 0]}>
					<Model modelPath={modelPath} />
				</mesh>
				<Html portal={domContent} fullscreen>
					<div className="container" ref={refItem}>
						<h1 className="title">{title}</h1>
					</div>
				</Html>
			</group>
		</Section>
	)
}
