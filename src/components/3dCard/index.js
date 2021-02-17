import React from 'react'
import { useSpring, animated } from 'react-spring'
import './index.css';

// const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

// function Card(props) {
//   const [propsa, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
//   console.log(props)
//   return (
//     <animated.div
//       className="card3d_container__card"
//       onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
//       onMouseLeave={() => set({ xys: [0, 0, 1] })}
//       style={{ transform: propsa.xys.interpolate(trans), backgroundImage: `url(${props.image})`}}
//     />
//   )
// }

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function Card(props) {
  const [propsa, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="card1" style={{ transform: propsa.xy.interpolate(trans1),  backgroundImage: `url(${props.image})` }} />
    </div>
  )
}

export default Card;
