import React from 'react';
import Tabs from './Tabs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkExperience from './WorkExperience';
import Divider from './Divider';

export default function HomeContainer() {
  return (
    <div className="col-span-9">
      <Router>
        <Tabs />
        <Switch>
          <Route path="/">
            <WorkExperience />
          </Route>
        </Switch>
      </Router>
      <Divider />
    </div>
  );
}
