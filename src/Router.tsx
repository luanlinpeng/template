
import { Redirect, Route, Router, Switch } from "wouter";
import Home from "./pages/Home";


export const Routes = () => {
  return (
    <Switch>
      <Route path="/">
          <Redirect to="/home"/>
        </Route>
        <Route path="/home" component={Home}> 
        </Route>
    </Switch>
  );
};


