import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Demo from './Demo.jsx'
// import FruitList from './FruitList.jsx'
// import Variables from './variables.jsx'
// import Array from './Array.jsx'
// import Conditional1 from './Conditional1.jsx'
// import Conditional2 from './Conditional2.jsx'
// import EventHandling1 from './EventHandling1.jsx'
// import StudentClass from './StudentClass.jsx'
// import StudentProps from './StudentProps.jsx'
// import UseEffect1 from './UseEffect1.jsx'
// import UseState1 from './UseState1.jsx'
// import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
// import Home from './Pages/Home.jsx'
// import About from './Pages/About.jsx'
// import Contact from './Pages/Contact.jsx' 
import MultiFormHook from './MultiFormHook.jsx'



// const router=createBrowserRouter([
//     {
//     path:"/",
//     element:<App/>,
//     children:[
//     {
//       path:"/Home",
//       element:<Home/>
//     },
//     {   
//       path:"/about",
//       element:<About/>
//     },
//     { 
//       path:"/contact",
//       element:<Contact/>
//     }
//   ]
// }
// ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultiFormHook/>
  </StrictMode>
);
