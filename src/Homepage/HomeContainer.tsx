import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkExperience from './WorkExperience';
import SkillsLanguages from './SkillsLanguages';
import ProjectsPage from './ProjectsPage';
import NavbarCss from './NavbarCss';

export default function HomeContainer() {
  return (
    <div className="col-span-9">
      <Router>
        <NavbarCss />
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
