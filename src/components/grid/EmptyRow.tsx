import { MAX_WORD_LENGTH, WORD_SPLIT_INDEX } from '../../constants/settings'
import { Cell } from './Cell'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        i === WORD_SPLIT_INDEX
        ? <div key={i} className="w-6" />
        : <Cell key={i} />
      ))}
    </div>
  )
}
