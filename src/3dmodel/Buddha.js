import React, { useRef, useEffect } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'

export default function Model(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('http://localhost:3000/budhha.glb')
    const { actions, names } = useAnimations(animations, group)

    useEffect(() => {
        // Reset and fade in animation after an index has been changed

        console.log('>>><>kirdro', actions, names)
        for (var i = 0; i < names.length - 1; i++) {
            actions[names[i]].reset().fadeIn(0.5).play()
        }
        // actions[names[index]].reset().fadeIn(0.5).play()
        // // In the clean-up phase, fade it out
        // return () => actions[names[index]].fadeOut(0.5)
    }, [ actions])
    return (
        <group ref={group} {...props} dispose={null}>
            <directionalLight intensity={0.66} decay={2} position={[0.08, 19.59, 10.75]} rotation={[-0.99, 0, -0.01]} />
            <PerspectiveCamera
                makeDefault={false}
                far={1000}
                near={0.1}
                fov={38.18}
                position={[-0.14, 20.35, 58.08]}
                rotation={[-0.36, -0.02, -0.01]}
            />
            <mesh
                name="Lotos"
                geometry={nodes.Lotos.geometry}
                material={materials.Lotos}
                position={[0, -4.07, 17.95]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.17}
            />
            <mesh
                geometry={nodes.Budda.geometry}
                material={materials.Budda}
                position={[0, -0.79, 16.62]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.45}
            />
            <mesh
                geometry={nodes.BuddaSet.geometry}
                material={materials['Budda.001']}
                position={[0, -0.79, 16.62]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.45}
            />
            <mesh
                name="LotosSetka"
                geometry={nodes.LotosSetka.geometry}
                material={materials.LotosSet}
                position={[0, -4.07, 17.95]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.2}
            />
            <mesh
                geometry={nodes.BuddaShad.geometry}
                material={materials.BuddaTen}
                position={[0, -0.93, 16]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.45}
            />
            <mesh
                geometry={nodes.Circle1.geometry}
                material={materials.circle1}
                position={[0, 0.16, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={5.64}
            />
            <mesh
                geometry={nodes.Circle2.geometry}
                material={materials.circle2}
                position={[0, 0.45, 0.96]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={10}
            />
            <mesh
                geometry={nodes.Circle3.geometry}
                material={materials.circle3}
                position={[0, 0.76, 2.42]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={16.24}
            />
            <mesh
                name="Circle005"
                geometry={nodes.Circle005.geometry}
                material={materials.Material}
                position={[0, 0.76, 1.58]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={11.72}
            />
            <group name="Arrow" position={[0, 0.76, 3.04]} rotation={[-Math.PI / 2, -0.33, -Math.PI]} scale={0.66}>
                <mesh geometry={nodes.Circle005_1.geometry} material={materials.Strelka} />
                <mesh geometry={nodes.Circle005_2.geometry} material={materials['Material.001']} />
            </group>
            <mesh
                name="Kvadrati"
                geometry={nodes.Kvadrati.geometry}
                material={materials['Material.004']}
                position={[0, 0.76, 1.92]}
                rotation={[Math.PI / 2, -1.51, 0]}
                scale={[0.24, 0.24, 0.24]}
            />
            <mesh
                name="Kvadrati1"
                geometry={nodes.Kvadrati1.geometry}
                material={materials['Material.002']}
                position={[0, 0.76, 1.92]}
                rotation={[Math.PI / 2, 0.04, 0]}
                scale={[0.25, 0.25, 0.25]}
            />
            <mesh
                name="Tryyngol1"
                geometry={nodes.Tryyngol1.geometry}
                material={nodes.Tryyngol1.material}
                position={[0.23, 1.24, 3.02]}
                rotation={[-Math.PI / 2, -0.44, -Math.PI]}
                scale={[1.55, 1.55, 1.55]}
            />
            <mesh
                name="Tryyngol2"
                geometry={nodes.Tryyngol2.geometry}
                material={nodes.Tryyngol2.material}
                position={[0.23, 1.24, 3.02]}
                rotation={[Math.PI / 2, 0.45, 0]}
            />
        </group>
    )
}

useGLTF.preload('http://localhost:3000/buddha.gltf')