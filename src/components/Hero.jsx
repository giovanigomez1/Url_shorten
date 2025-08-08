import illustration from '../assets/images/illustration-working.svg'


function Hero() {
  return (
    <div className='hero'>
      <div className="hero__msj">
        <h1>More than just <span>shorter links</span></h1>
        <p>Builds your band's recognition and get detailed insights on how links are performing.</p>
        <button className='btn'>Get Started</button>
      </div>
      <div className="hero__img">
        <img src={illustration} alt=""/>
      </div>
    </div>
  )
}

export default Hero