import React from 'react'
import {useTransition, animated} from 'react-spring'
import {useSpring} from 'react-spring'
export default function Home() {
    const props = useSpring({ x: 100, from: { x: 0 } })
return (
<animated.svg strokeDashoffset={props.x}>
<path d="..." />
</animated.svg>)
//     const [toggle, set] = React.useState(false)
// const transitions = useTransition(toggle, null, {
// from: { position: 'absolute', opacity: 0 },
// enter: { opacity: 1 },
// leave: { opacity: 0 },
// })
// return transitions.map(({ item, key, props }) => 
// item
//   ? <animated.div style={props}>😄</animated.div>
//   : <animated.div style={props}>🤪</animated.div>
// )
//     const [items, set] = React.useState([{text:'S',key:0},{text:'B',key:1},{text:'A',key:2}])

//     const transitions = useTransition(items, item => item.key, {
// from: { transform: 'translate3d(0,-40px,0)' },
// enter: { transform: 'translate3d(0,0px,0)' },
// leave: { transform: 'translate3d(0,-40px,0)' },
// })
//     // return (
//     //     <div>
//     //         {/* <h1>************Root***********</h1> */}
//     //     </div>
//     // )
//     return transitions.map(({ item, props, key }) =>
// <animated.div key={key} style={props}>{item.text}</animated.div>
// )
// }
}
