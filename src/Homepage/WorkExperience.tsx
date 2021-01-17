import React from 'react';
import './stepper.scss';

export default function WorkExperience() {
  return (
    <div className="p-3 overflow-hidden overflow-y-auto stepper-container shadow-sm ml-3 mr-2 rounded-md mt-3 bg-white">
      <div className="timeline p-4">
        <h2 className="timeline__item timeline__item--year">1985</h2>

        <div className="timeline__item">
          <h3 className="timeline__title">Born</h3>
        </div>

        <h2 className="timeline__item timeline__item--year">2003</h2>

        <div className="timeline__item">
          <h3 className="timeline__title">Graduated High School</h3>
        </div>

        <h2 className="timeline__item timeline__item--year">2004</h2>

        <div className="timeline__item">
          <h3 className="timeline__title">
            Started at Fox Valley Technical College (FVTC) in an Electrical
            Engineering program
          </h3>
        </div>

        <h2 className="timeline__item timeline__item--year">2006</h2>

        <div className="timeline__item">
          <h3 className="timeline__title">
            Changed at FVTC to Web Design & Development program
          </h3>
        </div>

        <h2 className="timeline__item timeline__item--year">2007</h2>

        <div className="timeline__item">
          <h3 className="timeline__title">Web Design Internship</h3>
          <p className="timeline__blurb">started internship at company 1.</p>
        </div>

        <h2 className="timeline__item timeline__item--year">2008</h2>

        <div className="timeline__item">
          <h3 className="timeline__title">IT Internship</h3>
          <p className="timeline__blurb">Started internship at company 2</p>
        </div>

        <div className="timeline__item">
          <h3 className="timeline__title">Got Married</h3>
        </div>

        <div className="timeline__item">
          <h3 className="timeline__title">Application Engineer</h3>
          <p className="timeline__blurb">
            Started web design/dev job at company 2.
          </p>
        </div>

        <h2 className="timeline__item timeline__item--year">2012</h2>

        <div className="timeline__item">
          <h3 className="timeline__title">First Child</h3>
          <p className="timeline__blurb">
            Spouse and I welcomed our first daughter.
          </p>
        </div>

        <h2 className="timeline__item timeline__item--year">2015</h2>

        <div className="timeline__item">
          <h3 className="timeline__title">Second Child</h3>
          <p className="timeline__blurb">
            Spouse and I welcomed our second daughter.
          </p>
        </div>

        <h2 className="timeline__item timeline__item--year">2016</h2>

        <div className="timeline__item">
          <h3 className="timeline__title">Lead Application Engineer</h3>
          <p className="timeline__blurb">Promotion to mid-level role.</p>
        </div>

        <h2 className="timeline__item timeline__item--year">2018</h2>

        <div className="timeline__item">
          <h3 className="timeline__title">Aerial/Circus Arts</h3>
          <p className="timeline__blurb">
            Started taking classes to learn aerial silks, hoop, and hammock.
          </p>
        </div>

        <h2 className="timeline__item timeline__item--year">2019</h2>
      </div>
    </div>
  );
}
