import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const unlisten = history.listen((location, action) => {
  console.log(location, action)
})

export default history
