import { ThemeProvider } from '@mui/material'
import React from 'react'
import Analays from './components/Analays'
import Customers from './components/Customers'
import Download from './components/Download'
import JoinNow from './components/JoinNow'
import Kindes from './components/Kindes'
import ListManage from './components/ListManage'
import NavBar from './components/NavBar'
import theme from './components/theme'

const App = () => {
  return (
   
    <>
     <ThemeProvider theme={theme} >

      <NavBar/>
      <JoinNow/>
      <ListManage/>
      <Kindes/>
      <Analays/>
     
      </ThemeProvider>
    </>
  )
}

export default App