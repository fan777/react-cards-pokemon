import { useState } from 'react'

const useFlip = () => {
  const [state, setState] = useState(true);
  const flipState = () => {
    setState(state => !state)
  }
  return [state, flipState]
}

export { useFlip };