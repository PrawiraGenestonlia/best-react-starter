import { init } from '@rematch/core'
import { useSelector } from 'react-redux'
import * as models from './models'

const store = init({ models })
const { dispatch } = store
const useReduxSelector = () => useSelector(state => state)

export {
  store,
  dispatch,
  useReduxSelector
}