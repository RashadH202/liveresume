import React from 'react'
import './about.css'
import Me from "../../assets/avatar-1.svg"
import Aboutbox from './Aboutbox'

const About = () => {
  return (
    <section className='about container section' id ='about'>
      <h2 className='section__title'>About Me</h2>
      <div className='about__container grid'>
        <img src={Me} alt='' className='about__img'/>
            <div className="about__data grid">
                <div className="about__info">
                  <p className="about__decription">Here's a copy of my Resume if you need it.</p>
                  <a href='' className='btn'>Download CV</a>

                </div>

                <div className='about__skills grid'>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className='skills__name'>Front-End Web Development</h3>
                      <span className='skills__number'>90%</span>
                    </div>

                    <div className='skills__bar'>
                        <span className='skills__precentage fdevelopment'>

                        </span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className='skills__name'>Back-End Web Development</h3>
                      <span className='skills__number'>80%</span>
                    </div>

                    <div className='skills__bar'>
                        <span className='skills__precentage bdevelopment'>

                        </span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className='skills__name'>Infrastructure Tools</h3>
                      <span className='skills__number'>50%</span>
                    </div>

                    <div className='skills__bar'>
                        <span className='skills__precentage infrastructure'>

                        </span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className='skills__name'>Amazon Web Services</h3>
                      <span className='skills__number'>50%</span>
                    </div>

                    <div className='skills__bar'>
                        <span className='skills__precentage aws'>

                        </span>
                    </div>
                  </div>
                </div>
            </div>
      </div>

    <Aboutbox />
    </section>
  )
}

export default About