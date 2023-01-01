/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.1 public/scene.gltf -o public
Author: Unity Fan youtube channel (https://sketchfab.com/unityfan777)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sci-fi-vehicle-012-public-domain-cc0-d69b22aa84304ecb8098138baa67c8dd
Title: Sci-Fi Vehicle 012 - public domain (CC0)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.blocker} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.blocker} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.body} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.body} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.glass} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.headlight} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.tailight} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
