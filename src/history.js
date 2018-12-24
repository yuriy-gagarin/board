import createHistory from 'history/createBrowserHistory'
import { delay } from './utils/delay'

const history = createHistory()
const unlisten = history.listen((location, action) => {
  console.log(location, action)
})

export default history
