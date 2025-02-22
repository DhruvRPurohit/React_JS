import { Provider } from 'react-redux'
import './App.css'
import Crud from './Components/Crud'
import Event_handleing from './Components/event_handleing'
import Login from './Components/Login'
import To_do_list from './Components/To_do_list'
import Fetch_api from './Hooks/Fetch_api'
import Incre_Decre from './Hooks/Incre_Decre'
import Redux_hooks from './Hooks/Redux_counter'
import store from './Redux/store'
import UseRef_hook from './Hooks/UseRef_hook'

function App() {

  return (
    <Provider store={store}>
      {/* <Event_handleing/> */}
      {/* <Login/> */}
      {/* <To_do_list/> */}
      {/* <Crud /> */}
      {/* <Incre_Decre /> */}
      {/* <Fetch_api /> */}
      {/* <Redux_hooks />       */}
      <UseRef_hook />
    </Provider>
  
  )
}

export default App
