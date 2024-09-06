import { useSelector, useDispatch } from "react-redux";
import Button from "./Component/Button";
import styled from '@emotion/styled'

export default function About(){
const dispatch = useDispatch()
    const count = useSelector((state) => state.count)

    const Span = styled.span`
        font-size: 30px;
    `

    const Container = styled.div`
        display: flex;
        gap: 10px;
        margin-top: 20px;
    `
    const Container2 = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
    `
    const Box = styled.div`
    background-color: red;
    font-size: 30px;
    padding: 5px;
    color: white;
    border-radius: 5px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    `
    const Box2 = styled.div`
    background-color: blue;
    font-size: 30px;
    padding: 5px;
    color: white;
    border-radius: 5px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    `

    return(
        <>
        <br />
        <br />
        <br />
        <Span >This is about component and the the global count is {count}</Span>
        <div id="Parent">
            <div id="Main Buiding">
                <div id="Lobby"></div>
                <div id="Reception"></div>
                <div id="Sitting Room"></div>
                <div id="Room1"></div>
                <div id="Room2"></div>
                <div id="Room3"></div>
            </div>
            <div id="car park"></div>
            <div id="swimming pool">
                <div id="Sitting Area"></div>
            </div>
            <div id="Gate House">
                <div id="Rest Room"></div>
            </div>
        </div>
        <button onClick={(() => dispatch({type: "RESET"}))}>Reset Global State</button><br /><br />
        <Button backgroundColor='blue' title='logout'/>
        <br />
        <Container>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
        </Container>
        <br />
        <Container2>
            <Box2>A</Box2>
            <Box2>B</Box2>
            <Box2>C</Box2>
        </Container2>
        </>
    )
}