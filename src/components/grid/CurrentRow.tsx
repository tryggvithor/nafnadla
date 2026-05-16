import { MAX_WORD_LENGTH, WORD_SPLIT_INDEX } from '../../constants/settings'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'

type Props = {
  guess: string
  className: string
}

export const CurrentRow = ({ guess, className }: Props) => {
  const splitGuess = unicodeSplit(guess)
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH - splitGuess.length))
  const classes = `flex justify-center mb-1 ${className}`

  return (
    <div className={classes}>
      {splitGuess.map((letter, i) => (
        i === WORD_SPLIT_INDEX
          ? <div key={i} className="w-6" />
          : <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        i === WORD_SPLIT_INDEX - splitGuess.length
        ? <div key={i} className="w-6" />
        : <Cell key={i} />
      ))}
    </div>
  )
}
