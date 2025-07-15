import { Provider } from 'react-redux'
import Footer from './components/Footer'
import Header from './components/Header'
// import ProductList from './components/ProductList'
import { Outlet } from 'react-router-dom'
import appStore from './Utils/appStore'


export default function App() {
  return (
    <Provider store={appStore}>
 <div>
  
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </Provider>
   
  )
}
