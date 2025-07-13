import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// import ProductList from './components/ProductList.jsx'
// import Productdetails from './components/Productdetails.jsx'
import Error from './components/NonFound.jsx'
import React,{lazy,Suspense} from 'react'

const ProductList = lazy(()=>import('./components/ProductList.jsx'))
const Productdetails= lazy(()=>import('./components/Productdetails.jsx'))
const Home = lazy(()=>import('./components/Home.jsx'))
const Checkout =lazy(()=>import ('./components/Checkout.jsx'))
const Cart = lazy(()=>import ('./components/Cart.jsx'))
let routers = createBrowserRouter([
{
  path:'/',
  element:<App/>,
  errorElement:<Error/>,
  children:[


    {
path:'',

element:(

<Suspense fallback={<p className='font-bold text-2xl m-auto text-center'>Loading....</p>}>
<Home/>

</Suspense>)
    },

     {
path:'products',

element:(

<Suspense fallback={<p className='font-bold text-2xl m-auto text-center'>Loading....</p>}>
<ProductList/>

</Suspense>)
     },
        {
path:'Cart',

element:(

<Suspense fallback={<p className='font-bold text-2xl m-auto text-center'>Loading....</p>}>
<Cart/>

</Suspense>)
     },

     {
      path:'products/:id',
      element:(

<Suspense fallback={<p className='font-bold text-2xl m-auto text-center'>Loading....</p>}>
<Productdetails/>

</Suspense>)

     },
      {
      path:'Checkout/:id',
      element:(

<Suspense fallback={<p className='font-bold text-2xl m-auto text-center'>Loading....</p>}>
<Checkout/>

</Suspense>)

     },
     {
      path:'Checkout',
      element:(

<Suspense fallback={<p className='font-bold text-2xl m-auto text-center'>Loading....</p>}>
<Checkout/>

</Suspense>)

     },

 {
  path: 'products/category/:category', // <-- Add this for category filter
  element: (
    <Suspense fallback={<p className='font-bold text-2xl m-auto text-center'>Loading....</p>}>
      <ProductList />
    </Suspense>
  ),
},


  ]
}

])

createRoot(document.getElementById('root')).render(
  
     <RouterProvider router={routers} />


  //  <Provider store={bookStore}>
  //   </Provider>

)
