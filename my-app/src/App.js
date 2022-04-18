import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/Combos' element={<Combos/>}/>
            <Route path='/PCs' element={<PCs/>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
