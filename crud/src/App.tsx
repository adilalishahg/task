import * as React from 'react';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import CodeForInerview from './components/CodeForInerview';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
 function App(){

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<CodeForInerview/>}/>
      <Route path="/all" element={<AllUser/>}/>
      <Route path="/add" element={<AddUser/> }/>

      
      
      </Routes>
    </BrowserRouter>
    
    );
    
  }
export default App;