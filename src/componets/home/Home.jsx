import React from 'react'
import './home.css'
import HeaderSocials from './HeaderSocials'
import { ScrollDown } from './ScrollDown'
const Home = () => {
  return (
    <section className='home container' id='home'>
        <div className='intro'>
            <img src='https://i.imgur.com/NXfnhso.jpeg' alt='' className='home__img'/>
            <h1 className='home__name'>Rashad Hammonds</h1>
            <span className='home__education'>IT Proffesional</span>
            <HeaderSocials />
            <a href="#contact" className='btn'>Hire Me</a>
            <ScrollDown/>
        </div>

    </section>
  )
}


export default Home