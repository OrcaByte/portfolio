import React from 'react';
import Divider from './Divider';

export default function HomeContainer() {
  return (
    <div>
      <h2 className="text-center text-3xl font-medium">
        Nice to meet you !
      </h2>
      <p className="text-center my-4">
        I was born in 1976. I live in Bavaria and work in Munich as a Software
        Developer/Architect.
        <br />
        I’ve been a professional developer for more than 15 years. I’ve mostly
        worked professionally with Java, C, C++ and Python but also a little bit
        with Ruby, Perl and PHP.
        <br />
        I’ve published more than 20 articles for German programming magazines,
        mostly about Ruby and Python but also C++ and Java.
        <br />
        <br />
      </p>
      <Divider />
    </div>
  );
}
