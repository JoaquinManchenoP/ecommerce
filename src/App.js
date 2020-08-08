import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import './pages/homepage/homepage.styles.scss';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './components/shop/shop.component.jsx';





function App() {
  return (
    <div>
      <switch>
        <Route exact path = '/' component = {HomePage}/>
        <Route path = '/shop' component = {ShopPage}/>
     </switch>
   </div>
  );
}

export default App;
