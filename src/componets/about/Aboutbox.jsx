import React from 'react'

const Aboutbox = () => {
  return (
    <div className='about__boxes grid'>
        <div className='about__box'>
            <i className='about__icon icon-fire'></i>
            <div>
                <h3 className='about__title'>Projects Completed</h3>
                <span className='about__subtitle'>1</span>
            </div>
        </div>

        <div className='about__box'>
            <i className='about__icon icon-folder-alt'></i>
            <div>
                <h3 className='about__title'>WIP</h3>
                <span className='about__subtitle'>1</span>
            </div>
        </div>

        <div className='about__box'>
            <i className='about__icon icon-trophy'></i>
            <div>
                <h3 className='about__title'>Certifications </h3>
                <span className='about__subtitle'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Aboutbox