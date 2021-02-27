import React from 'react'
import { useSpring, animated } from 'react-spring'
import './index.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 25, (x - window.innerWidth / 2) / 25, 1.1]
const trans = (x, y, s) => `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 350, friction: 40 } }))
  return (
    <animated.div
      className="card3d_container__card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans)}}>
     <a href="/compare-skins">
        <span>Compare os preços</span>
      </a>
  </animated.div>
  )
}

export default Card;
