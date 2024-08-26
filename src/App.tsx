import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import NavBar from './components/navBar/NavBar.tsx'
import { Provider } from 'react-redux'
import store from './app/store.ts'
import PrivateRoute from './components/PrivateRoute.tsx'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route element={<PrivateRoute />} >
            <Route path='/home' element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>  
    </Provider>
  )
}

export default App
