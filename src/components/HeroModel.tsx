import { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import type { Group } from 'three'
import type { ReactNode } from 'react'

function Model() {
  const { scene } = useGLTF('/models/avatar.glb', false, true)
  useEffect(() => {
    scene.updateWorldMatrix(true, true)
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.sub(center)
  }, [scene])
  return <primitive object={scene} />
}

/**
 * Tilts the model gently toward the cursor and eases back when idle,
 * recreating the magnetic sway from the original static portrait.
 */
function PointerTilt({ children }: { children: ReactNode }) {
  const ref = useRef<Group>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -((event.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame((state, delta) => {
    const group = ref.current
    if (!group) return
    const t = state.clock.elapsedTime
    const idleX = Math.sin(t * 0.9) * 0.04
    const idleY = Math.sin(t * 0.7) * 0.05
    const targetX = -mouse.current.y * 0.12 + idleX
    const targetY = mouse.current.x * 0.18 + idleY
    group.rotation.x = THREE.MathUtils.damp(group.rotation.x, targetX, 4, delta)
    group.rotation.y = THREE.MathUtils.damp(group.rotation.y, targetY, 4, delta)
  })

  return <group ref={ref}>{children}</group>
}

export default function HeroModel() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 1.45], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={1.4} />
      <directionalLight position={[2, 3, 4]} intensity={1.6} />
      <directionalLight position={[-3, -1, -2]} intensity={0.4} />
      <hemisphereLight intensity={0.6} />
      <PointerTilt>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </PointerTilt>
    </Canvas>
  )
}
