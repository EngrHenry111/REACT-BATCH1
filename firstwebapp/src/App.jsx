
import { useEffect, useState } from "react";
import About from "./About";
import Button from "./Component/Button";
import styled from '@emotion/styled'
import { useAdd, useMultiply } from "./Hook";
import { useSelector ,useDispatch } from "react-redux"

export default function App () {
const dispatch = useDispatch()
  const count = useSelector((state) => state.count)

  const [localCount, setCount] = useState(0)
  const [name, setName] = useState('Gram')
  const [age, setAge] = useState(1)
  const [married, setMarried] = useState(false)
  const [game, setGame] = useState(true)

  const IncreaseCount =() =>{
    setCount(localCount + 1)
  }

  useEffect(() =>{
    console.log(`Button is clicked ${localCount} times`)
    setCount(localCount + 1)
  }, [age, name, married, game])

  const Div = styled.div`
  font-size: 32px;
  color: red;
  `

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  width: 50%;
  `

  const resultAddition = useAdd(4,5,10)
  console.log("The Result of the added numbers is",resultAddition)
  const result = useMultiply(2,2)
  console.log("The Result of the multiplied numbers is",result)

  return (
    <div>
      <Container>
        <Div>Hello World from {name}</Div>
        <div>My age is {age}</div>
        <div>Marriage Status {married ? 'Married':"Single"}</div>
        <div>Like play station {game ?'Yes':"no"}</div>
        <div>The Count is currently {localCount}</div>
        <div>The Global Count is currently {count}</div>
        <br />
        <button onClick={IncreaseCount}>Increase Count</button>
        <Button backgroundColor='Red' title='login'/>
      </Container>
      <br />
      <br />
      <br />
      <br />
        <button onClick={() => setName('Messiah')}>Set Name</button>
        <button onClick={() => setAge(20)}>Set Age</button>
        <button onClick={() => setMarried(true)}>Set marriage</button>
        <button onClick={() => setGame(false)}>Set Game Interest</button>
        <button onClick={() =>dispatch({type: 'ADD'})}>Increase Global Count</button>
        <button onClick={() =>dispatch({type: 'SUBTRACT'})}>Decrease Global Count</button>
      <About/>
    </div>
  )
}