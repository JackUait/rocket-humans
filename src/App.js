import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import './App.css'
import Header from './components/header'
import { HTMLContent } from './components/HTMLContent'
import { Lights } from './components/Lights'
import state from './components/state'

export default function App() {
	const domContent = useRef(null)
	const scrollArea = useRef(null)
	const onScroll = (e) => {
		state.top.current = e.target.scrollTop
	}

	useEffect(() => {
		void onScroll({ target: scrollArea.current })
	}, [])

	return (
		<>
			<Header />
			<Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
				<Lights />
				<Suspense fallback={null}>
					<HTMLContent
						domContent={domContent}
						modelPath="/armchairYellow.gltf"
						position={250}
						title="Рокет.Хьюманс"
						bgColor="#f15946"
					/>
					<HTMLContent
						domContent={domContent}
						modelPath="/armchairGreen.gltf"
						position={0}
						title="Делаем стулья с 2013 года."
						bgColor="#3498db"
					/>
					<HTMLContent
						domContent={domContent}
						modelPath="/armchairGray.gltf"
						position={-250}
						title="Чёрт, а мы хороши!"
						bgColor="#2c3e50"
					/>
				</Suspense>
			</Canvas>
			<div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
				<div style={{ position: 'sticky', top: 0 }} ref={domContent}></div>
				<div style={{ height: `${state.sections * 100}vh` }}></div>
			</div>
		</>
	)
}
