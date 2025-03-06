import React from 'react'
import Fetchdata from './Component/Fetchdata'
import Crud from './Component/Crud'
import Loading from './Component/FetchApi'
import FetchApi from './Component/FetchApi'
import Crud_firebase from './Component/Crud_firebase'

const App = () => {
  return (
    <>
      {/* <Fetchdata />    */}
      {/* <Crud /> */}
      {/* <FetchApi /> */}
      <Crud_firebase  />
    </>
  )
}

export default App