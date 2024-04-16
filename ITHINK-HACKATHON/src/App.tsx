import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route index element={<Signin/>}/>
          <Route path="Signup" element={<Signup/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
