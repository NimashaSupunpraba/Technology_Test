import React from 'react';
import StoreItem from './Components/table/StoreItem';
import Stock from './Components/table/Stock';
import Store from './Components/table/Store';
import MainPage from './Components/table/MainPage';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/storeitem" component={StoreItem}></Route>
        <Route exact path="/store" component={Store}></Route>
        <Route exact path="/stock" component={Stock}></Route>
        </Switch>
        </Router>
    
    </div>
  );
}

export default App;
