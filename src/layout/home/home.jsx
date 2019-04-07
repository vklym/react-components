import React, { Fragment } from 'react';
import { SOCIAL_CONFIG, DEPENDENCIES } from './constants';
import './home.css';


const Home = () => (
  <Fragment>
    <h1 className="title"><span>Extensible React Component Collection.</span></h1>
    <h3><span>Dependencies:</span></h3>
    <ul className="dependencies">
      {DEPENDENCIES.map(({ id, name, link }) => (
        <li className="dependencyItem" key={id}>
          <a className="dependencyLink" href={link} rel="noopener noreferrer" target="_blank">{name}</a>
        </li>
      ))}
    </ul>
    
  </Fragment>
);

export default Home;
