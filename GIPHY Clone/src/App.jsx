import React from 'react'
import Category from './pages/category'
import Favorites from './pages/Favorites'
import Search from './pages/search'
import SingleGif from './pages/single-gif'
import{RouterProvider,createBrowserRouter} from "react-router-dom";
import AppLayout from './layout/AppLayout';
import Home from './pages/Home';

// routes
// /homepage
// /categories
// /searcgh
// /single gif
// /fav
const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    

    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/:category',
        element:<Category/>
      },
      {
        path:'/favorites',
        element:<Favorites/>
      },
      {
        path:'/search/:query',
        element:<Search/>
      },
      {
        path:'/:type/:slug',
        element:<SingleGif/>
      },
    ]
  }
])

export default function App() {
  

  return <RouterProvider router={router} />
}
