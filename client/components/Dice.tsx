import { getRandomNumber } from '../../random-number'
import { useState } from 'react'

export default function Dice() {
  const [diceArray, setDiceArray] = useState([1, 1, 1, 1])

  function rollDice() {
    const newDiceArray = []
    for (let i = 0; i < 4; i++) {
      newDiceArray.push(getRandomNumber(1, 6))
    }
    setDiceArray(newDiceArray)
  }

  function handleClick() {
    rollDice()
  }

  console.log(diceArray)

  return (
    <div className="dice-div">
      <div>
        <button onClick={handleClick}>Roll Dice</button>
      </div>
      <div>
        <img
          src={'../../images/dice' + diceArray[0] + '.png'}
          alt={`${diceArray[0]}`}
          className="dice"
        ></img>
        <img
          src={'../../images/dice' + diceArray[1] + '.png'}
          alt={`${diceArray[1]}`}
          className="dice"
        ></img>
        <img
          src={'../../images/dice' + diceArray[2] + '.png'}
          alt={`${diceArray[2]}`}
          className="dice"
        ></img>
        <img
          src={'../../images/dice' + diceArray[3] + '.png'}
          alt={`${diceArray[3]}`}
          className="dice"
        ></img>
      </div>
      <div>
        <button>End Turn</button>
      </div>
    </div>
  )
}
