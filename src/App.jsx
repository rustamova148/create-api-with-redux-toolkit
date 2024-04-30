import './App.css'
import Data from './Data'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
    <div className='App'>
      <Data />
    </div>
    </Provider>
  )
}

export default App