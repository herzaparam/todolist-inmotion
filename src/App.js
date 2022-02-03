import React from 'react';
import { hot } from 'react-hot-loader/root';
import ProjectCard from './components/ProjectCard';
import Input from './components/Input';

function App() {
  return (
    <main className="main">
      <section className="first">
        <div className="group-first-title">
          <h2>Hi Samantha</h2>
          <p>Welcome back to the workspace, we missed you!</p>
          <Input placeholder="Search Task or Project" />
        </div>

        <div className="group-project">
          <h3>Projects <span className='project-counter'>(13)</span></h3>
          <div className="grid-card">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>
      <section className="second">
        <div className="title-group">
          <h2>Cyber Punk</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            ipsa itaque minus veritatis, laboriosam aliquid.
          </p>
        </div>
        <div className="list-group">
          <div className="list-group-title">
            <h4>Today</h4>
            <p>icon</p>
          </div>
          <hr />
          <div className="card-group">
            <div className="card">
              <p>icon</p>
              <p>card's name</p>
              <div className="status">hehe</div>
            </div>
          </div>
        </div>
        <div className="list-up-group">
          <div className="list-group-title">
            <h4>Upcoming</h4>
            <p>icon</p>
          </div>
          <hr />
        </div>
      </section>
    </main>
  );
}

export default hot(App);
