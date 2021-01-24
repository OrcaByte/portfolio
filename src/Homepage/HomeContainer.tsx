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
          <Route exact path="/">
            <WorkExperience />
          </Route>

          <Route exact path="/skills">
            <SkillsLanguages />
          </Route>

          <Route exact to="/projects">
            <ProjectsPage />
          </Route>

          <Route to="/contact-me">
            <div className="home-card scrollbar">
              <ContactMe />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
