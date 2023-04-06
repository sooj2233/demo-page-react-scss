import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import Cards from './component/cards/Cards'
import Header from './component/header/Header'
import SideMenu from './component/sideMenu/SideMenu'

function App() {


  return (
 <div className='app'>
  <BrowserRouter>
    <SideMenu/>
    <div className="mainContent">
      <Header/>
      <Cards/>
    </div>
 </BrowserRouter>
 </div>
  )
}

export default App
