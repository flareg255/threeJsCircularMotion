import React, { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'

import _ from 'lodash'

function BoxObj(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()

    // Set up state for the hovered and active state
    // const [hovered, setHover] = useState(false)
    // const [active, setActive] = useState(false)

    let theta = 0
    const radius = 3
    const rand = _.random(1) === 1 ? -1 : 1
    let rad;

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        theta += 1
        rad = theta * Math.PI / 180;
        mesh.current.position.x = radius * Math.cos(rad) * rand;
        mesh.current.position.y = radius * Math.sin(rad) * rand;
    })

    return (
    <mesh
        {...props}
        ref={mesh}
        // scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        // onClick={(e) => setActive(!active)}
        // onPointerOver={(e) => setHover(true)}
        // onPointerOut={(e) => setHover(false)}
    >
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={'orange'} />
    </mesh>
    )
}

export { BoxObj }