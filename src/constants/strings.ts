export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Frábært!', 'Jess!', 'Vel gert!']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Ekki nægilega margir stafir'
export const WORD_NOT_FOUND_MESSAGE = 'Nafn fannst ekki'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Senda'
export const DELETE_TEXT = '⌫'
export const STATISTICS_TITLE = 'Tölfræði'
export const GUESS_DISTRIBUTION_TEXT = 'Dreifing giska'
export const NEW_WORD_TEXT = 'Nýtt orð inn'
export const SHARE_TEXT = 'Deila'
export const TOTAL_TRIES_TEXT = 'Fjöldi tilrauna'
export const SUCCESS_RATE_TEXT = 'Árangur'
export const CURRENT_STREAK_TEXT = 'Núverandi sigurganga'
export const BEST_STREAK_TEXT = 'Besta sigurganga'
