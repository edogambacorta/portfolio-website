'use client'

import { Suspense, useState, useCallback, useRef } from 'react'
import dynamic from 'next/dynamic'
import type { Application, SPEObject } from '@splinetool/runtime'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
})

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [splineApp, setSplineApp] = useState<Application | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const robotRef = useRef<SPEObject | null>(null)

  const onLoad = useCallback((splineApp: Application) => {
    setSplineApp(splineApp)
    // Replace 'Robot' with the actual name of your robot object in the Spline scene
    const robot = splineApp.findObjectByName('Robot') as SPEObject | null
    if (robot) {
      robotRef.current = robot
    }
  }, [])

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (splineApp && robotRef.current && containerRef.current) {
      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height

      // Adjust these values to control the robot's movement range
      const moveX = (x - 0.5) * 2 // -1 to 1
      const moveY = (y - 0.5) * 2 // -1 to 1

      // Use the Spline API to move the robot
      robotRef.current.position.x = moveX
      robotRef.current.position.y = -moveY
    }
  }, [splineApp])

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <div
        ref={containerRef}
        className={className}
        onMouseMove={handleMouseMove}
        suppressHydrationWarning
      >
        <Spline
          scene={scene}
          onLoad={onLoad}
        />
      </div>
    </Suspense>
  )
}
