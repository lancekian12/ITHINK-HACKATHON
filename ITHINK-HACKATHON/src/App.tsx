import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Warning from './components/Warning';
import Error from './components/Error';
import Success from './components/Success';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route index element={<Signin/>}/>
          <Route path="Signup" element={<Signup/>}/>
          <Route path="Warning" element={<Warning/>}/>
          <Route path="Error" element={<Error/>}/>
          <Route path="Success" element={<Success/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
