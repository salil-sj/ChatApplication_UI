import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";




const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path: "/home",
    element:<Home/>
  }
])

function App() {
  return (
    <div>
     <ToastContainer />
     <RouterProvider router={appRouter}/>
   
    </div>
  );
}

export default App;
