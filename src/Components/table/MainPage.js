import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";


const MainPage = () => {
    return (
        <div>
            {/* <input type='button' value="Store Items" onclick=""/>Store Items</input>
            <input type='button' value="Stores" onclick=""/>Stores</input>
            <input type='button'  value="Stocks" onclick=""/>Stocks</input> */}
            <Link to={"/storeitem" }>
        Store  Items
      </Link><br/>
            <Link to={"/store" }>
        Store
      </Link><br/>
            <Link to={"/stock" }>
        Stock
      </Link>
        </div>
    )
}

export default MainPage
