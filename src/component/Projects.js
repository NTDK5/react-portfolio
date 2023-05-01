import React, { Component } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./style/projects.css"

class Projects extends Component {
  render() {
    return (
      <section className='projects' id='project'>
        <div className='project_wrapper'>
          {/* <h1>Projects</h1> */}
  
          <div className='project_1'>
              <div className='project_text' >
                  <h1>Movie Website</h1>
                  <p >This project is portfolio website done with Next js using the TMDB(The Movie Database) api.The Movie Database (TMDB) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDB's strong international focus and breadth of data is largely unmatched. </p>
                     <a href='https://movie-8vdo.vercel.app/' ><button className='project_btn ' >Live Demo</button></a><a href='https://github.com/nati2345/movie'  className='sourcecode'>Source Code</a>
              </div>
              <div  className='movieweb img' ></div>
          </div>



          <div className='project_1'>
            <div className='gpt3-img img' ></div>
            <div className='project_text' >
              <h1 >GPT-3</h1>
              <p >This project is a react project.</p>
                      
              <a href='https://nati2345.github.io/react-form/'><button className='project_btn' >Live Demo</button></a><a href='' className='sourcecode'>Source Code</a>
            </div>
          </div>



          <div className='project_1'>
              <div className='project_text' >
                  <h1 >Portfolio Website</h1>
                  <p >This project is portfolio website done with react. </p>
                      <button className='project_btn' >Live Demo</button><a href='https://github.com/nati2345/react-portfolio'  className='sourcecode'>Source Code</a>
              </div>
              <div  className='portfolioimg img'></div>
          </div>




          <div className='project_1'>
              <div className='project_text' >
                  <h1 >Gym website</h1>
                  <p >This is gym website done with html and css. design and developed by me. check it out annd let me know!</p>
                 <a href=' https://nati2345.github.io/html-gym-website/' > <button className='project_btn' >Live Demo</button></a><a href='https://github.com/nati2345/html-gym-website' className='sourcecode' data-aos={"fade-right"}>Source Code</a>
              </div>
              <div className='gymimg img' ></div>
          </div>



          <div className='project_1'>
            <div className='formimg img' ></div>
            <div className='project_text' >
              <h1 >React form</h1>
              <p >This project is a react form. using material ui. Material UI is an open-source React component library that implements Google's Material Design.</p>
                      
              <a href='https://nati2345.github.io/react-form/'><button className='project_btn'>Live Demo</button></a><a href='' className='sourcecode'>Source Code</a>
            </div>
          </div>
        
        </div>
      </section>
    )
  }
}
export default Projects
