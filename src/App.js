import React from "react";
import MainPage from "./containers/MainPage.js";
import RecipePage from "./containers/RecipePage.js";

import {  Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      
        <Link to="/main">Page Principale</Link>
        <Link to="/recipepage">Page Recette</Link>

        <Switch>
          <Route exact path="/">
            {/* container Authentification */}
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/main" component={MainPage} />
          <Route path="/recipepage/:cocktailName" component={RecipePage} />
        </Switch>
      
    </>
  );
}
