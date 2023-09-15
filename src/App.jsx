import logo from './logo.svg';
import './App.css';

import Nav from './Component/Nav/Nav';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Component/Layout/Layout';
import NotFound from './Component/NotFound/NotFound';
import StartFramework from './Component/StartFramework/StartFramework';


function App() {

let routers=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<StartFramework/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<NotFound/>}
   
    
  ]}

])
  return <>
   <RouterProvider router={routers}></RouterProvider>
  </>

}

export default App;
