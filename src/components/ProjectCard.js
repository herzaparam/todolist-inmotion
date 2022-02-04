import React, { useState } from 'react';
import '../styles/ProjectCard.scss';
import img1 from '../assets/circle-scatter-haikei (1).svg';
import img2 from '../assets/polygon-scatter-haikei (1).svg';
import img3 from '../assets/circle-scatter-haikei.svg';
import img4 from '../assets/polygon-scatter-haikei.svg';
import img5 from '../assets/stacked-waves-haikei.svg';

const listImg = [img1, img2, img3, img4, img5];

function ProjectCard({ id, onClick, active, name, result, index }) {
  const _index = index
  const renderFirstchar = (_name) => {
    const splitName = _name.split(' ');
    const newName =
      splitName[0]?.charAt(0).toUpperCase() +
      splitName[1]?.charAt(0).toUpperCase();
    return newName;
  };

  const countProjectLeft = () => {
    console.log('hehe', _index);
    const numberOfDisplayedProject = 5;
    const projectLeft = result.length - numberOfDisplayedProject;
    return projectLeft;
  };
  if (id) {
    return (
      <div className="container-project-card">
        <div className={`card ${id === active && 'active'}`} onClick={onClick}>
          <div
            className="content"
            style={{
              backgroundImage: `url(${listImg[index]})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h4>{renderFirstchar(name)}</h4>
          </div>
        </div>
        <p>{name}</p>
      </div>
    );
  } else {
    return (
      <div className="container-project-card">
        <div className="card">
          <div className="content">
            <h4>{`${countProjectLeft()}+`}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
