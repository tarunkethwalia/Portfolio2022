import React, { useState } from 'react';
import './Projects.css';
import { ProjectsData } from '../../utilities/ScreenDocs';
import { FaArrowLeft, FaArrowRight, FaArrowDown } from 'react-icons/fa';

const Projects = () => {

  const [showJourney, setShowJourney] = useState(1);
  const [project, setproject] = useState(0);
  const [projectImg, setprojectImg] = useState(0);

  const changeNode = (index) => {
    setShowJourney(index);
    setproject(0);
  }

  const clickRight = () => {
    let showJourneyLength = ProjectsData.length;
    let projectLength = ProjectsData[showJourney].projects.length;
    if(project === projectLength - 1) {
      if(showJourney === showJourneyLength - 1) {
        setShowJourney(0);
      }
      else {
        setShowJourney(showJourney + 1);
      }
      setproject(0);
    }
    else {
      setproject(project + 1);
    }
  }

  const clickLeft = () => {
    let showJourneyLength = ProjectsData.length;
    let projectLength = ProjectsData[showJourney].projects.length;
    if(project === 0) {
      if(showJourney === 0) {
        setShowJourney(showJourneyLength - 1);
      }
      else {
        setShowJourney(showJourney - 1);
      }
      setproject(projectLength - 1);
    }
    else {
      setproject(project - 1);
    }
  }

  return (
    <div className='projects-holder'>
      <h1 className='projects'>PROJECTS</h1>
      <div className="container align-projects">
        <div className="headings">
          <h2 className='projects-heading'>My Linked List Journey</h2>
          <p>So Far...</p>
        </div>
        <div className="journey-points">
          <span></span>
          {
            ProjectsData.map((data, index) => {
              return (
                <div className='details-container' key={index}>
                  <div className="nodesData">
                    {showJourney === index && <FaArrowDown className='node-icons' />}
                    <p className={showJourney === index ? 'nodeBlockSelected' : 'nodeBlock'} onClick={() => changeNode(index)}>{data.title}</p>
                    <p className='node-heading'>{data.node}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="project-data">
          <FaArrowLeft className='project-icons' onClick={clickLeft} />
          {showJourney !== 0 ? <div className="project-window">
            <img src={ProjectsData[showJourney].projects[project].image[projectImg]} alt="Window" />
          </div> :
            <img src={ProjectsData[showJourney].projects[project].image[projectImg]} alt="Home" className='homeImg' />}
          <div className={showJourney !== 0 ? "project-info" : "project-info-zero"}>
            <h5>{ProjectsData[showJourney].projects[project].projectTitle}</h5>
            <p>{ProjectsData[showJourney].projects[project].projectDescription}</p>
          </div>
          <FaArrowRight className='project-icons' onClick={clickRight} />
        </div>
        <div className="display-icons">
          <FaArrowLeft className='project-icons' onClick={clickLeft} />
          <FaArrowRight className='project-icons' onClick={clickRight} />
        </div>
        {showJourney !== 0 && <div className="project-description">
          <p>{ProjectsData[showJourney].description}</p>
        </div>}
      </div>
    </div>
  )
}

export default Projects;