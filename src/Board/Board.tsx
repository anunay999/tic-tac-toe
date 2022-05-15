import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Square from '../Square';


const Board = () => {

    const [squares, setSquares ]= useState(Array(9).fill(null))
    const [xNextPlayer, setXisNext ] = useState(true)
    const [modalShow, setModalShow] = useState(true);
    const [winner,setWinner] = useState('Tie')
    const [count,setCount] = useState(0)


    const handleClick = (i: number) => {
        const grid = squares.slice()
    
        if (isWinner() || squares[i]) {
            return;
          }
        if(count==9){
            return
        }
        if (grid[i]==null){
            grid[i] = xNextPlayer ? 'X' : 'O';
            setSquares(grid);
            setXisNext(!xNextPlayer);
            setCount(count+1)
            if(isWinner()){
                return
            }
        }
        
        
    }

    const isWinner = () => {
        {
            const lines = [
              [0, 1, 2],
              [3, 4, 5],
              [6, 7, 8],
              [0, 3, 6],
              [1, 4, 7],
              [2, 5, 8],
              [0, 4, 8],
              [2, 4, 6],
            ];
            for (let i = 0; i < lines.length; i++) {
              const [a, b, c] = lines[i];
              if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a])
                setModalShow(false)
                return squares[a];
              }
            }
            return null;
          }
    }


    const renderSquare = (index: number) => {
        return (
            <Square onClick= { ()=> handleClick(index)} value = {squares[index]}/>
        )
    }

    type ModalProps = {
        onHide: Function;
        show: boolean;
    }

    const getWinner = (symbol:string) => {
        return symbol === 'X' ? 'Player 1' : 'Player2'
    }
    

    return (
        <Container className="justify-content-md-center">
            <Container className="game-board">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
            </Container>
            <Container  className="mb-2">
                <Row className="justify-content-md-center pad">
                    <h2 hidden={modalShow}> {getWinner(winner) + " Won!!!"} </h2>
                    <h2 hidden={count!=9}> It's a Tie </h2>
                </Row>
                <Row className="justify-content-md-center pad">
                <Col md="auto">
                    <Button onClick={ ()=> {
                            setModalShow(true);
                            setSquares(Array(9).fill(null))
                            setCount(0)
                        }}
                        variant="primary" size="lg">Reset</Button>
                </Col>
                </Row>
            </Container>
        </Container>
    );

}

export default Board;