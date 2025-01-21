/*
    Auto-generated by: https://github.com/pmndrs/gltfjsx
    Command: npx gltfjsx@6.5.0 react.glb -T
    Author: xenadus (https://sketchfab.com/xenadus)
    License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
    Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
*/

import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('models/react.glb');

  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.3} {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('models/react.glb');

export default ReactLogo;



// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// Author: xenadus (https://sketchfab.com/xenadus)
// License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
// Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
// Title: React logo
// */

// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/scene.gltf')
//   return (
//     <group {...props} dispose={null}>
//       <group scale={0.01}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes['React-Logo_Material002_0'].geometry}
//           material={materials['Material.002']}
//           position={[0, 7.935, 18.102]}
//           rotation={[0, 0, -Math.PI / 2]}
//           scale={[39.166, 39.166, 52.734]}
//         />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/scene.gltf')
