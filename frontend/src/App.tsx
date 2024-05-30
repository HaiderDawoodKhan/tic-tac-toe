import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Welcome } from './pages/Welcome';
import { Route, Routes,Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
function App() {

  const authenticated = useSelector((state:RootState) => state.auth.isAuthenticated)
  const renderProtectedRoute = (Component: React.ComponentType) => {
    return authenticated ? <Component/> : <Navigate to='/'/>
  }

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/play'>
          <Route index element={renderProtectedRoute(Welcome)}/>
          {/* <Route index element={<Menu/>}/> */}
        </Route>
      </Routes>
  );
}

export default App;
