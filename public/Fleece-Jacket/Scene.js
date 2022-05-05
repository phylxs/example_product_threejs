/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Juan Martinez Sanjurjo (https://sketchfab.com/JuanSanjurjo)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/advanced-game-characters-week-2-jacket-8f211f057bb24f5db17ca659553b716b
title: Advanced Game Characters - Week 2 Jacket
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Jacket_Lv2_Jacket} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
