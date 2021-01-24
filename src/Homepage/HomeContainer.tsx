import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkExperience from './WorkExperience';
import SkillsLanguages from './SkillsLanguages';
import ProjectsPage from './ProjectsPage';
import NavbarCss from './NavbarCss';
import ContactMe from './ContactMe';

export default function HomeContainer() {
  return (
    <div className="col-span-12 md:col-span-9">
      <Router>
        <NavbarCss />
        <Switch>
          <Route component={SkillsLanguages} exact path="/skills" />
          <Route component={ProjectsPage} exact={true} path="/projects" />
          <Route
            exact={true}
            component={() => (
              <div className="home-card scrollbar">
                <ContactMe />
              </div>
            )}
            path="/contacts"
          />
          <Route component={WorkExperience} path="**" />
        </Switch>
      </Router>
    </div>
  );
}
