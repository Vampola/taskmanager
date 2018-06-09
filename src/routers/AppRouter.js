import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/pages/HomePage";
import HelpPage from "../components/pages/HelpPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import CreateProjectPage from "../components/pages/CreateProjectPage";
import EditProjectPage from '../components/pages/EditProjectPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/help" component={HelpPage} />
          <Route path="/create" component={CreateProjectPage} />
          <Route path="/edit/:id" component={EditProjectPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
