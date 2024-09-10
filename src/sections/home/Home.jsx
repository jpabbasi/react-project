import './Home.css'
import MyStacks from '../../components/MyStacks/MyStacks'
import Works from '../../components/Works/Works'
import Testimonials from '../../components/Testimonials/Testimonials'
import ContactCard from '../../components/ContactCard/ContactCard'


const Home = () => {
  return (
    <div className='home-sections'>
    <div className='home-header'>
      <h1>Hello, I'm Pedro.</h1>
      <h1>I'm a Tech Specialist.</h1>  
      <p>Building inovations in the tech industry for over 7 years.</p>
      <div className="home-headerbuttons">
        <a href='/contact' className='btn primary'>LET'S TALK</a>
        <a className='btn secondary'>ABOUT ME</a>
      </div>
    </div>
    <div>
      <h3>My Stack</h3>
        <MyStacks/>
    </div>
    <div>

    <div className='projects-flex'>
      <h3>Selected Projects</h3>
      <a className='btn secondary' href="/projects">All Projects</a>
    </div>
        <Works numOfCards={3}/>
    </div>
    <div>
      <h3>Professional Recommendations</h3>
      <Testimonials/>
    </div>
    <div>
      <ContactCard/>
    </div>
    </div>
  )
}

export default Home
