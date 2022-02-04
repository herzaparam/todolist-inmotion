import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import ProjectCard from './components/ProjectCard';
import Input from './components/Input';
import CardList from './components/CardList';

function App() {
  const [listTask, setListTask] = useState({});
  const [listProject, setListProject] = useState({});
  const [projectCardActive, setProjectCardActive] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [taskInput, setTaskInput] = useState('');

  const openModal = () => setIsOpen(!modalIsOpen);

  const handleSave = () => {
    const upComingArr = listTask.upcoming;
    const newID = upComingArr.at(-1).id + 1;
    const newObj = {
      id: newID,
      checked: false,
      status: 'waiting',
      title: taskInput,
    };
    const newUpcomingArr = upComingArr.push(newObj);
    setListTask({
      ...listTask,
      upcoming: upComingArr,
    });
    openModal();
  };

  // console.log('hehe', listProject);
  // console.log('hehe2', projectCardActive);

  const fetchProject = () => {
    fetch('https://demo3821799.mockable.io/get-project')
      .then((response) => response.json())
      .then((json) => {
        setListProject(json);
      });
  };
  const fetchTask = (_id) => {
    fetch('https://demo3821799.mockable.io/get-task')
      .then((response) => response.json())
      .then((json) => {
        setListTask(json.result[_id]);
      });
  };

  const handleCheckBox = (_id, _act) => {
    const newList = listTask[_act];
    const newCheck = newList[_id].checked;
    const newId = _id + 1;
    setListTask({
      ...listTask,
      [_act]: listTask[_act]?.map((e) => {
        if (e.id === newId) {
          return {
            id: e.id,
            checked: !newCheck,
            status: e.status,
            title: e.title,
          };
        }
        return e;
      }),
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
          <Input
            placeholder="Search Task or Project"
            _handleSearch={setSearchTerm}
          />
        </div>

        <div className="group-project">
          <h3>
            Projects{' '}
            <span className="project-counter">{`(${
              listProject.total ?? 0
            })`}</span>
          </h3>
          <div className="grid-card">
            {listProject.results
              ?.filter((val) => {
                if (searchTerm === '') {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .slice(0, 5)
              .map((item, index) => {
                return (
                  <ProjectCard
                    id={item.id}
                    onClick={() => handleClickProject(item.id)}
                    key={item.id}
                    active={projectCardActive}
                    name={item.name}
                    index={index}
                  />
                );
              })}
            {listProject.results && searchTerm === '' && (
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
        <button className="add-btn" onClick={openModal}>
          +
        </button>
        {projectCardActive ? (
          <>
            <div className="title-group">
              <h2>
                {projectCardActive &&
                  listProject.results[projectCardActive - 1].name}
              </h2>
              <p>
                {projectCardActive &&
                  listProject.results[projectCardActive - 1].description}
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
                      onClick={handleCheckBox}
                      act="today_task"
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
                {listTask.upcoming?.map((e) => {
                  return (
                    <CardList
                      id={e.id}
                      title={e.title}
                      checked={e.checked}
                      status={e.status}
                      key={e.id}
                      onClick={handleCheckBox}
                      act="upcoming"
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
      <div id="myModal" className={`modal ${modalIsOpen && 'block'}`}>
        <div className="modal-content">
          <div className="modal-content-title">
            <h2>Add Tasks</h2>
            <span className="close" onClick={() => openModal(!modalIsOpen)}>
              &times;
            </span>
          </div>
          <div className="modal-form">
            <input
              type="text"
              placeholder="Type new task's here.."
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default hot(App);
