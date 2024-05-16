import React,{useState} from 'react'
import './certifications.css'
import Menu from './Menu'


const Certifications = () => {

  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems)
  }
  return (
    <section className='work container section' id="portfolio">
      <h2 className='section__title'>Certifications</h2>

      <div className='work__filters'>
        <span className='work__item' onClick={()=> setItems(Menu)}>Everything</span>
        <span className='work__item' onClick={()=> filterItem("AWS")}>AWS</span>
        <span className='work__item' onClick={()=> filterItem("Udemy")}>Udemy</span>
        <span className='work__item' onClick={()=> filterItem("Google")}>Google</span>
        <span className='work__item' onClick={()=> filterItem("Other")}>Other</span>
      </div>

      <div className='work__container grid'>
      {items.map((elem) => {
        const {id, image, title, category, link} = elem
        return (
          <div className='work__cardC' key={id}>
            <div className="work__thumbnail">
              <img src={image} alt='' className='work__img'/>
              <div className='work__mask'></div>
            </div>

            <span className="work__category">{category}</span>

            <h3 className='work__title'>{title}</h3>
            <a href={link} className="work__button">
              <i className='icon-link work__button-icon'></i>
            </a>
          </div>
        )
      })}

      </div>
    </section>
  )
}

export default Certifications