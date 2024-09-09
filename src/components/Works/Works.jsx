import './Works.css'
import { projectsList } from './data'

const Works = ({numOfCards = projectsList.length}) => {
  return (
    <div>
      <div className='works-container'>
        <div className="works-grid">
      {
        projectsList.slice(0, numOfCards).map((project, i) => (
          <a href={project.link}>
            <div className='works-card' key={i} style={{backgroundImage: `url(${project.image})`}}>
                <div className='works-header'>
                <h5>{project.title}</h5>
                <h6>{project.tech}</h6>
                </div>
            </div>
          </a>
        ))
      }
      </div>
      </div>
    </div>
  )
}

export default Works
