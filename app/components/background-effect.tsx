'use client'

import React from 'react'

const BackgroundEffect = () => {
	const [coordinates, setCoordinates] = React.useState({ x: 0, y: 0 })

	React.useEffect(() => {
		// Attach the listener to the window
		window.addEventListener('mousemove', handleMouseMove)

		// Cleanup function to remove the listener when the component unmounts
		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	const handleMouseMove = (e) => {
		setCoordinates({
			x: e.clientX,
			y: e.clientY,
		})
	}

	return (
		<div
			className="pointer-events-none fixed inset-0 z-30 transition duration-300  top-0 bottom-0 h-full"
			style={{
				background: `radial-gradient(600px at ${coordinates.x}px ${coordinates.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
			}}></div>
	)
}

export default BackgroundEffect
