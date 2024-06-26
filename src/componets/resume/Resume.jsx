import React from 'react'
import Data from './Data'
import Card from './Card'
import './resume.css'
const Resume = () => {
  return (
    <section className='resume container section' id='resume'>
      <h2 className='section__title'>Experience</h2>
      <div className='resume__container grid'>
        <div className='timeline grid'> 
        Education
        {Data.map((val, id) => {
          if (val.category === "education") {
            return (
              <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
            )
          }
        })}
        </div>

        <div className='timeline grid'>
          Experince
        {Data.map((val, id) => {
          if (val.category === "experience") {
            return (
              <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
            )
          }
        })}
        </div>
      </div>
    </section>
  )
}

export default Resume