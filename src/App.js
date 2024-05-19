import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import ChatContent from "./components/ChatContent";
import Profile from "./components/Profile";
import { PiRadioFill } from "react-icons/pi";
import Testing from "./components/Testing";
import { Provider } from "react-redux";
import store from "./store/store";

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
    element:<Home/>,
    children:[
      {
        path:"/home",
        element:<ChatContent/>
      }
      ,
      {
        path:"/home/profile",
        element:<Profile/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
