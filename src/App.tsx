import { useState } from 'react'
import './App.css'

type Player = 'O' | 'X'
type Board = Array<Array<'O' | 'X' | null>>

function Cell({ letter, onClick }: { letter: Player | null, onClick: () => void }) {
  return (
    <button onClick={onClick} className={`cell ${letter ? `${letter}` : ''}`}>
      {letter || ' '}
    </button>
  )
}

function Board() {
  const [grid, updateGame] = useState<Board>(Array(3).fill(null).map(() => Array(3).fill(null)))
  const [player, setPlayer] = useState<'O' | 'X'>('X')


  function winner(game: Board, player: Player) {
    return false;
  }


  function handleClick(square: `${number}-${number}`) {
    if (winner(grid, player)) return
    const next = player === 'O' ? 'X' : 'O'
    updateGame((game) => {
      const [x, y] = square.split('-').map(n => +n)
      game[x][y] = player
      return game
    })
    setPlayer(next)
  }

  return grid.map((row, i) =>
    <div className='row'>
      {row.map((cell, j) => {
        return (
          <Cell
            key={`${i}-${j}`}
            letter={cell}
            onClick={() => handleClick(`${i}-${j}`)}
          />
        )
      })}
    </div>
  )
}

function App() {

  return (
    <>
      <div className='container'>
        <div className='board'>
          <Board />
        </div>
        <div className='aside'>
          Sth else
        </div>
      </div>
    </>
  )
}

export default App
