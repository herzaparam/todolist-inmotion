import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import ProjectCard from './components/ProjectCard';
import Input from './components/Input';
import CardList from './components/CardList';

function App() {
  const [listTask, setListTask] = useState([]);
  const [listProject, setListProject] = useState({});
  const [projectCardActive, setProjectCardActive] = useState(null);
  console.log('hehe', listProject);
  // console.log('hehe2', projectCardActive);

  const fetchProject = () => {
    fetch('http://demo3821799.mockable.io/get-project')
      .then((response) => response.json())
      .then((json) => {
        setListProject(json);
      });
  };
  const fetchTask = (_id) => {
    fetch('http://demo3821799.mockable.io/get-task')
      .then((response) => response.json())
      .then((json) => {
        setListTask(json.result[_id]);
      });
  };

  const handleClickProject = (_id) => {
    setProjectCardActive(_id);
    fetchTask(_id);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <main className="main">
      <section className="first">
        <div className="group-first-title">
          <h2>Hi Samantha</h2>
          <p>Welcome back to the workspace, we missed you!</p>
          <Input placeholder="Search Task or Project" />
        </div>

        <div className="group-project">
          <h3>
            Projects{' '}
            <span className="project-counter">{`(${
              listProject.total ?? 0
            })`}</span>
          </h3>
          <div className="grid-card">
            {listProject.results?.slice(0, 5)?.map((item) => {
              return (
                <ProjectCard
                  id={item.id}
                  onClick={() => handleClickProject(item.id)}
                  key={item.id}
                  active={projectCardActive}
                  name={item.name}
                />
              );
            })}
            {listProject.results && (
              <ProjectCard
                active={projectCardActive}
                result={listProject.results}
              />
            )}
          </div>
        </div>
      </section>

      {/* section 2 is on the right side */}
      <section className="second">
        <button className="add-btn">+</button>
        {projectCardActive ? (
          <>
            <div className="title-group">
              <h2>
                {projectCardActive &&
                  listProject.results[projectCardActive].name}
              </h2>
              <p>
                {projectCardActive &&
                  listProject.results[projectCardActive].description}
              </p>
            </div>
            <div className="list-group">
              <div className="list-group-title">
                <h4>Today</h4>
                <div>. . .</div>
              </div>
              <hr />
              <div className="card-group">
                {listTask.today_task?.map((item) => {
                  return (
                    <CardList
                      id={item.id}
                      title={item.title}
                      checked={item.checked}
                      status={item.status}
                      key={item.id}
                    />
                  );
                })}
              </div>
            </div>
            <div className="list-up-group">
              <div className="list-group-title">
                <h4>Upcoming</h4>
                <div>. . .</div>
              </div>
              <hr />
              <div className="card-group">
                {listTask.upcoming?.map((item) => {
                  return (
                    <CardList
                      id={item.id}
                      title={item.title}
                      checked={item.checked}
                      status={item.status}
                      key={item.id}
                    />
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div>
            <h1>There are no tasks</h1>
            <p>Please select any project</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default hot(App);
