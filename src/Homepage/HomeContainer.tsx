import React from 'react';
import Tabs from './Tabs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkExperience from './WorkExperience';
import Divider from './Divider';
import SkillsLanguages from './SkillsLanguages';
import ProjectsPage from './ProjectsPage';

export default function HomeContainer() {
  return (
    <div className="col-span-9">
      <Router>
        <Tabs />
        <Switch>
          <Route exact path="/">
            <WorkExperience />
          </Route>

          <Route path="/skills">
            <SkillsLanguages />
          </Route>

          <Route to="/projects">
            <ProjectsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
