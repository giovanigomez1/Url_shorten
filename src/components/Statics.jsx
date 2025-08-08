import React from 'react'
import brand from '../assets/images/icon-brand-recognition.svg'
import detailed from '../assets/images/icon-detailed-records.svg'
import fully from '../assets/images/icon-fully-customizable.svg'




function Statics() {
  return (
    <div className='statics'>
      <div className="statics__title container">
        <h2>Advanced Statics</h2>
        <p>Track how your links are performing across the web <span>with our advanced statics dashboard.</span></p>
      </div>
      <div className="statics__graphics ">
        <div className="statics__graphics--ele izq">
          <div className="ele__icon"><img src={brand} alt="" /></div>  
          <div className="ele__text">
            <h3>Brand Recognition</h3>
            <p>Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content.</p>
          </div>
        </div>
        <div className="statics__graphics--ele">
          <div className="ele__icon"><img src={detailed} alt="" /></div>  
          <div className="ele__text">
            <h3>Detailed Records</h3>
            <p>Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions.</p>
          </div>
        </div>
        <div className="statics__graphics--ele der">
          <div className="ele__icon"><img src={fully} alt="" /></div>  
          <div className="ele__text">
            <h3>Fully Customizable</h3>
            <p>Improve brand awareness and content discoverability through customizable 
          links, supercharging audience engagement.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Statics
