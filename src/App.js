import React from 'react';
import { hot } from 'react-hot-loader/root';

function App() {
  return (
    <main className="main">
      <section className="first">
        <h2>Hi Samantha</h2>
        <p>Welcome back to the workspace, we missed you!</p>
        <input type="text" />
        <div className="group-project">
          <h3>Projects (13)</h3>
          <div className="grid-card">
            <div className="card">
              <h4>GH</h4>
            </div>
            <div className="card">
              <h4>GH</h4>
            </div>
            <div className="card">
              <h4>GH</h4>
            </div>
            <div className="card">
              <h4>GH</h4>
            </div>
            <div className="card">
              <h4>GH</h4>
            </div>
            <div className="card">
              <h4>GH</h4>
            </div>
            <div className="card">
              <h4>GH</h4>
            </div>
            <div className="card">
              <h4>GH</h4>
            </div>
            <div className="card">
              <h4>GH</h4>
            </div>
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
