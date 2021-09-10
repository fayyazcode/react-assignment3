import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {About, Name,Skills,Education,PersonalSkills,Contacts} from './App';


ReactDOM.render(
  <React.StrictMode>
    <Name />
    <About />
    <Skills/>
    <Education/>
    <PersonalSkills/>
    <Contacts/>
  </React.StrictMode>,
  document.getElementById('root')
);



