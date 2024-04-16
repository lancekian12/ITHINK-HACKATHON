import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Signin from './components/Signin';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route index element={<Signin/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
