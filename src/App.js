import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import Login from './pages/login';

import Dashboard1 from './pages/dashboard1';

import CreateRole from './pages/createRole';
import CreateUser from './pages/createUser';
import EditProfile from './pages/editProfile';

import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
     {/* <Login/> */}
     {/* <Dashboard1/> */}
     {/* <CreateRole/> */}
     {/* <CreateUser/> */}
     {/* <Sidebar/>
     <EditProfile/> */}


     <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path="/dashboard" element={<Dashboard1/>}/> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
