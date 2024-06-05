import { useState } from 'react'

export default function Stats() {
  const [health, setHealth] = useState(12)
  const [food, setFood] = useState(4)
  const [defense, setDefense] = useState(0)

  return (
    <div className="stats-div">
      <div className="health">Health: {health}</div>
      <div className="food">Food: {food}</div>
      <div className="defense">Defense: {defense}</div>
    </div>
  )
}
