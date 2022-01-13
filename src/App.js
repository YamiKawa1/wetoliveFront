import './App.css';
import Map from './components/Map'
import SideMenu from './components/SideMenu';
import NavBar from './components/NavBar';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductCard from './components/showingProducts/ProductCard';
import PaginationButton from './components/showingProducts/PaginationButton'
import FootPage from './components/footPage/FootPage';

function App() {
  return (
    <div className="App">
       <React.Fragment className="container"> 
        <NavBar/>
        <Router>
          <SideMenu></SideMenu>
            {/* <Switch>
              <Route path = '/'/>
            </Switch> */}
        </Router>
        <Map></Map>
        <ProductCard/>
      </React.Fragment>
      <PaginationButton/>
      <FootPage/>
    </div>
  );
}

export default App;
