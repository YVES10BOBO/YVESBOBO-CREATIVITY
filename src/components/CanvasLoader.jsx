import { Html , useProgress} from '@react-three/drei'
import React from 'react'

const CanvasLoader = () => {
    const {progress} = useProgress()
  return (
    <Html as='div'
     center
     style={{
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         flexDirection:'column'

     }}
    >
    <Span className="canvas-loader"/>
  </Html>
  )
}

export default CanvasLoader